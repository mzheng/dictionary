config = {
	title: "Dictionary",
	indicator: ";",
	displayexample: true,
	lang: {
		def: {
			code: "en",
			text: "English"
		},
		data: [{
			code: "zh-hans",
			text: "Chinese (Simplified)"
		}, {
			code: "zh-hant",
			text: "Chinese (Traditional)"
		}, {
			code: "cs",
			text: "Czech"
		}, {
			code: "nl",
			text: "Dutch"
		}, {
			code: "en",
			text: "English"
		}, {
			code: "fr",
			text: "French"
		}, {
			code: "de",
			text: "German"
		}, {
			code: "it",
			text: "Italian"
		}, {
			code: "ko",
			text: "Korean"
		}, {
			code: "pt",
			text: "Portuguese"
		}, {
			code: "ru",
			text: "Russian"
		}, {
			code: "es",
			text: "Spanish"
		}],
		verify: function(code) {
			for(var i in config.lang.data) {
				if(config.lang.data[i].code==code) {
					return config.lang.data[i];
				}
			}
			return config.lang.def;
		}
	}
}

dictionary = {
	init: function() {
		search.match();
		var query = hash.query.get(), lang = hash.lang.get();
		if(query=="") {
			$("#dictionary").hide();
			window.document.title = config.title;
			$("header, footer").fadeIn("slow");
		} else {
			$("header, footer").hide();
			$("#dictionary").empty();
			dictionary.loading.start();
			window.document.title = query + " « " + lang.text;
			$.ajax({
				url: "http://www.google.com/dictionary/json",
				dataType: "jsonp",
				data: {
					q: query,
					sl: lang.code,
					tl: lang.code,
					restrict: "pr,de"
				},
				success: function(data) {
					$("#dictionary").html(jsontohtml(data, ""));
					$(".webDefinitions a").each(function() {
						var nextlink = $(this).parent().next(".meaning").children("a");
						if($(this).text()==nextlink.text()) {
							$(this).hide();
						}
					});
					if(!config.displayexample) {
						$(".example").hide();
					}
					dictionary.loading.stop();
					$("#dictionary").show();
				}
			});
		}
	},
	loading: {
		start: function(){
			$("#loading").show();
			if(typeof spinnerLoop!=="undefined") {
				clearInterval(spinnerLoop);
			}
			spinnerLoop = setInterval(dictionary.loading.next, 50);
		},
		next: function(){
			if((typeof spinnerPosition==="undefined")||(spinnerPosition==462)) {
				spinnerPosition = 0;
			} else {
				spinnerPosition += 42;
			}
			$("span.spinner").css("background-position", "0 -"+spinnerPosition+"px");
		},
		stop: function(){
			$("#loading").hide();
			clearInterval(spinnerLoop);
		}
	}
}

jsontohtml = function(json, type) {
	var out, tag, i, j;
	switch(type) {
		case "":
			out = "";
			tag = false;
		break;
		case "labels":
			out = "<span class=\"" + type + ((typeof json.title==="undefined")?"":"\" title=\"" + json.title) + "\">" + json.text;
			tag = "span";
		break;
		default:
			switch(json.type) {
				case "text":
				case "phonetic":
					out = "<div class=\"" + type + "\"><span class=\"" + json.type + "\">" + json.text + "</span>";
					tag = "div";
				break;
				case "url":
					out = json.text;
					tag = false;
				break;
				case "sound":
					out = "<span class=\"sound\" onclick=\"sound.play('" + json.text + "');\"></span>";
					tag = false;
				break;
				default:
					out = "<div class=\"" + type + " " + json.type + "\">";
					tag = "div";
				break;
			}
		break;
	}
	for(i in json) {
		if($.isArray(json[i])) {
			for(j in json[i]) {
				out += jsontohtml(json[i][j], i);
			}
		}
	}
	if(tag) {
		out += "</" + tag + ">";
	}
	return out;
}

hash = {
	get: function() {
		return decodeURI(window.location.hash).substr(1).split(config.indicator, 2);
	},
	query: {
		get: function() {
			return hash.get()[0];
		}
	},
	lang: {
		get: function() {
			return config.lang.verify(hash.get()[1]);
		}
	}
}

search = {
	submit: function(query) {
		window.location.href = "#" + query + config.indicator + search.lang.get();
	},
	lang: {
		get: function() {
			return $("#lang").val();
		},
		set: function(lang) {
			var swp = document.getElementById("lang");
			for(i=0;i<swp.options.length;i++) {
				if(swp.options[i].value==lang.code) {
					swp.options[i].selected = true;
					return false;
				}
			}
		}
	},
	match: function() {
		var scode = search.lang.get(), hlang = hash.lang.get();
		if(scode!=hlang.code) {
			search.lang.set(hlang);
		}
		if($("#query").val()!=hash.query.get()) {
			$("#query").val(hash.query.get());
		}
	},
	init_select: function() {
		search.options = [];
		for(var i in config.lang.data) {
			search.options[i] = document.createElement("option");
			search.options[i].value = config.lang.data[i].code;
			search.options[i].text = config.lang.data[i].text;
			document.getElementById("lang").add(search.options[i], null);
		}
	}
}

sound = {
	play: function(url) {
		if(config.nativeaudio) {
			sound.html(url);
		} else {
			sound.flash(url);
		}
	},
	test: function() {
		var test = document.createElement("audio"), player = document.createElement("div");
		config.nativeaudio = (test != null && test.canPlayType && test.canPlayType("audio/mpeg")!="");
		if(!config.nativeaudio) {
			player.id = "sound";
			document.body.appendChild(player);
		}
	},
	html: function(url) {
		var audio = document.createElement("audio");
		audio.src = url;
		audio.play();
	},
	flash: function(url) {	
		var parent = document.getElementById("sound"), flash = document.createElement("embed");
		flash.id = "flash";
		flash.src = "//ssl.gstatic.com/dictionary/static/sounds/0/SoundApp.swf";
		flash.type = "application/x-shockwave-flash";
		flash.width = "1"; flash.height = "1";
		flash.setAttribute("flashvars", "sound_name=" + encodeURI(url));
		flash.setAttribute("wmode", "transparent");
		if(document.getElementById("flash")==null) {
			parent.appendChild(flash);
		} else {
			parent.replaceChild(flash, document.getElementById("flash"));
		}
		if(window.opera) {
			// I Hate Opera!
			$("#flash").hide().show();
		}
	}
}

toggleexample = function() {
	config.displayexample = (config.displayexample)?false:true;
	$(".example").toggle("fast");
}

$(document).ready(function() {
	window.onhashchange = dictionary.init;
	search.init_select();
	sound.test();
	if(window.location.hash) {
		dictionary.init();
	} else {
		search.lang.set(config.lang.def);
	}
	$("#query").autocomplete({
		source: function( request, response ) {
			$.ajax({
				url: "http://" + search.lang.get().substr(0, 2) + ".wiktionary.org/w/api.php",
				dataType: "jsonp",
				data: {
					search: request.term,
					action: "opensearch"
				},
				success: function(data) {
					response($.map(data[1], function(item) {
						return item;
					}));
				}
			});
		},
		select: function( event, ui ) {
			search.submit(ui.item.label);
		}
	});
});
