// Json file ophalen
var arrLang = (function () {
    var json = null;
    $.ajax({
        'async': false,
        'global': false,
        'url': "json/Multilingual.json",
        'dataType': "json",
        'success': function (translations) {
         json = translations;
        }
    });
    return json;
})();

// Standaard Taal is de browsertaal of Engels.
$(document).ready(function () {
	var yetVisited = localStorage["visited"];

    // Zorgt er voor dat de taal niet veranderd bij het navigeren op de website.
    if (!yetVisited) {
        var browserLang = navigator.language;
        var displayLang = browserLang.split("-")[0];
		var lang = displayLang;

		// Wanneer de browser niet Nederlands is wordt de website Engels.
		if (lang == "nl") {
			localStorage.setItem("lang", lang);
			$(".lang").each(function (index, element) {
				$(this).text(arrLang[lang][$(this).attr("key")]);
			});
			localStorage["visited"] = "yes";
		}

		else
		{
			localStorage.setItem("lang", "en");
			$(".lang").each(function (index, element) {
				$(this).text(arrLang[lang][$(this).attr("key")]);
			});
			localStorage["visited"] = "yes";
		}
    }
    else {
        var lang = localStorage.getItem("lang");
        $(".lang").each(function (index, element) { 
            $(this).text(arrLang[lang][$(this).attr("key")]);
        });
    }
});

// get/set Taal
$(".translate").click(function () {
    localStorage.setItem("lang", $(this).attr("id"));
    var lang = localStorage.getItem("lang");

    $(".lang").each(function (index, element) {
        $(this).text(arrLang[lang][$(this).attr("key")]);
    });
});


