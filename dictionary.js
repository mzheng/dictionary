config = {
	title: "Dictionary",
	indicator: {
		query: ";",
		lang: ">"
	},
	displayexample: true,
	lang: {
		defaultdata: {
			sl: "en",
			tl: "en",
			text: "English dictionary"
		},
		data: [{
			sl: "ar",
			tl: "en",
			text: "Arabic -> English"
		}, {
			sl: "bn",
			tl: "en",
			text: "Bengali -> English"
		}, {
			sl: "bg",
			tl: "en",
			text: "Bulgarian -> English"
		}, {
			sl: "zh-hans",
			tl: "zh-hans",
			text: "Chinese (Simplified) dictionary"
		}, {
			sl: "zh-hans",
			tl: "en",
			text: "Chinese (Simplified) -> English"
		}, {
			sl: "zh-hant",
			tl: "zh-hant",
			text: "Chinese (Traditional) dictionary"
		}, {
			sl: "zh-hant",
			tl: "en",
			text: "Chinese (Traditional) -> English"
		}, {
			sl: "hr",
			tl: "en",
			text: "Croatian -> English"
		}, {
			sl: "cs",
			tl: "cs",
			text: "Czech dictionary"
		}, {
			sl: "cs",
			tl: "en",
			text: "Czech -> English"
		}, {
			sl: "nl",
			tl: "nl",
			text: "Dutch dictionary"
		}, {
			sl: "en",
			tl: "ar",
			text: "English -> Arabic"
		}, {
			sl: "en",
			tl: "bn",
			text: "English -> Bengali"
		}, {
			sl: "en",
			tl: "bg",
			text: "English -> Bulgarian"
		}, {
			sl: "en",
			tl: "zh-hans",
			text: "English -> Chinese (Simplified)"
		}, {
			sl: "en",
			tl: "zh-hant",
			text: "English -> Chinese (Traditional)"
		}, {
			sl: "en",
			tl: "hr",
			text: "English -> Croatian"
		}, {
			sl: "en",
			tl: "cs",
			text: "English -> Czech"
		}, {
			sl: "en",
			tl: "en",
			text: "English dictionary"
		}, {
			sl: "en",
			tl: "fi",
			text: "English -> Finnish"
		}, {
			sl: "en",
			tl: "fr",
			text: "English -> French"
		}, {
			sl: "en",
			tl: "de",
			text: "English -> German"
		}, {
			sl: "en",
			tl: "el",
			text: "English -> Greek"
		}, {
			sl: "en",
			tl: "gu",
			text: "English -> Gujarati"
		}, {
			sl: "en",
			tl: "iw",
			text: "English -> Hebrew"
		}, {
			sl: "en",
			tl: "hi",
			text: "English -> Hindi"
		}, {
			sl: "en",
			tl: "it",
			text: "English -> Italian"
		}, {
			sl: "en",
			tl: "kn",
			text: "English -> Kannada"
		}, {
			sl: "en",
			tl: "ko",
			text: "English -> Korean"
		}, {
			sl: "en",
			tl: "ml",
			text: "English -> Malayalam"
		}, {
			sl: "en",
			tl: "mr",
			text: "English -> Marathi"
		}, {
			sl: "en",
			tl: "pt",
			text: "English -> Portuguese"
		}, {
			sl: "en",
			tl: "ru",
			text: "English -> Russian"
		}, {
			sl: "en",
			tl: "sr",
			text: "English -> Serbian"
		}, {
			sl: "en",
			tl: "es",
			text: "English -> Spanish"
		}, {
			sl: "en",
			tl: "ta",
			text: "English -> Tamil"
		}, {
			sl: "en",
			tl: "te",
			text: "English -> Telugu"
		}, {
			sl: "en",
			tl: "th",
			text: "English -> Thai"
		}, {
			sl: "fi",
			tl: "en",
			text: "Finnish -> English"
		}, {
			sl: "fr",
			tl: "en",
			text: "French -> English"
		}, {
			sl: "fr",
			tl: "fr",
			text: "French dictionary"
		}, {
			sl: "de",
			tl: "en",
			text: "German -> English"
		}, {
			sl: "de",
			tl: "de",
			text: "German dictionary"
		}, {
			sl: "el",
			tl: "en",
			text: "Greek -> English"
		}, {
			sl: "gu",
			tl: "en",
			text: "Gujarati -> English"
		}, {
			sl: "iw",
			tl: "en",
			text: "Hebrew -> English"
		}, {
			sl: "hi",
			tl: "en",
			text: "Hindi -> English"
		}, {
			sl: "it",
			tl: "en",
			text: "Italian -> English"
		}, {
			sl: "it",
			tl: "it",
			text: "Italian dictionary"
		}, {
			sl: "kn",
			tl: "en",
			text: "Kannada -> English"
		}, {
			sl: "ko",
			tl: "en",
			text: "Korean -> English"
		}, {
			sl: "ko",
			tl: "ko",
			text: "Korean dictionary"
		}, {
			sl: "ml",
			tl: "en",
			text: "Malayalam -> English"
		}, {
			sl: "mr",
			tl: "en",
			text: "Marathi -> English"
		}, {
			sl: "pt",
			tl: "en",
			text: "Portuguese -> English"
		}, {
			sl: "pt",
			tl: "pt",
			text: "Portuguese dictionary"
		}, {
			sl: "ru",
			tl: "en",
			text: "Russian -> English"
		}, {
			sl: "ru",
			tl: "ru",
			text: "Russian dictionary"
		}, {
			sl: "sr",
			tl: "en",
			text: "Serbian -> English"
		}, {
			sl: "sk",
			tl: "sk",
			text: "Slovak dictionary"
		}, {
			sl: "es",
			tl: "en",
			text: "Spanish -> English"
		}, {
			sl: "es",
			tl: "es",
			text: "Spanish dictionary"
		}, {
			sl: "ta",
			tl: "en",
			text: "Tamil -> English"
		}, {
			sl: "te",
			tl: "en",
			text: "Telugu -> English"
		}, {
			sl: "th",
			tl: "en",
			text: "Thai -> English"
		}],
		verify: function(pair) {
			if(pair[0]=="") {
				pair[0] = config.lang.defaultdata.sl;
			}
			if(pair[1]=="") {
				pair[1] = config.lang.defaultdata.tl;
			}
			for(var i in config.lang.data) {
				if(config.lang.data[i]["sl"]==pair[0].toLowerCase() && config.lang.data[i]["tl"]==pair[1].toLowerCase()) {
					return config.lang.data[i];
				}
			}
			return config.lang.defaultdata;
		},
		transform: {
			abbr: function(lang) {
				switch(lang) {
					case "zh-hans":
					case "zh-hant":
						return "zh";
					break;
					default:
						return lang;
					break;
				}
			},
			normal: function(lang) {
				switch(lang) {
					case "zh-hans":
						return "zh-CN";
					break;
					case "zh-hant":
						return "zh-TW";
					break;
					default:
						return lang;
					break;
				}
			}	
		}
	}
}

dictionary = {
	init: function(){
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
					sl: lang.sl,
					tl: lang.tl,
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
		return decodeURI(window.location.hash);
	},
	change: {
		callback: function() {
			search.match();
			dictionary.init();
		}
	},
	query: {
		get: function() {
			return hash.get().substr(1).split(config.indicator.query, 1)[0];
		}
	},
	lang: {
		get: function() {
			var pair = hash.get().split(config.indicator.query, 2);
			return config.lang.verify((pair[1])?pair[1].split(config.indicator.lang, 2):new Array("", ""));
		}
	}
}

search = {
	submit: function(query) {
		window.location.href = "#" + query + config.indicator.query + $("#lang").val();
	},
	lang: {
		get: function() {
			var pair = $("#lang").val().split(config.indicator.lang);
			return new Object({
				sl: pair[0],
				tl: pair[1]
			});
		},
		set: function(pair) {
			var swp = document.getElementById("lang"), spair = pair.sl + config.indicator.lang + pair.tl;
			for(i=0;i<swp.options.length;i++) {
				if(swp.options[i].value==spair) {
					swp.options[i].selected = true;
					return false;
				}
			}
		}
	},
	match: function() {
		var spair = search.lang.get(), hpair = hash.lang.get();
		if(spair.sl!=hpair.sl||spair.tl!=hpair.tl) {
			search.lang.set(hpair);
		}
		if($("#query").val()!=hash.query.get()) {
			$("#query").val(hash.query.get());
		}
	},
	swapper: function() {
		var pair = search.lang.get();
		search.lang.set(
			new Object({
				sl: pair.tl,
				tl: pair.sl
			})
		);
	},
	translate: function(query) {
		var lang = search.lang.get();
		window.open("http://translate.google.com/#" + config.lang.transform.normal(lang.sl) + "|" + config.lang.transform.normal(lang.tl) + "|" + query);
		return false;
	},
	google: function(query) {
		window.open("http://www.google.com/#q=" + query + "&tbs=dfn:1&defl=" + search.lang.get().sl);
		return false;
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
	window.onhashchange = hash.change.callback;
	search.options = new Array();
	for(var i in config.lang.data) {
		search.options[i] = document.createElement("option");
		search.options[i].value = config.lang.data[i].sl + config.indicator.lang + config.lang.data[i].tl;
		search.options[i].text = config.lang.data[i].text;
		document.getElementById("lang").add(search.options[i], null);
	}
	sound.test();
	if(window.location.hash) {
		search.match();
		dictionary.init();
	} else {
		search.lang.set(config.lang.defaultdata);
	}
	$("#query").autocomplete({
		source: function( request, response ) {
			$.ajax({
				url: "http://" + config.lang.transform.abbr(search.lang.get().sl) + ".wiktionary.org/w/api.php",
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
