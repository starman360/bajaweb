$(window).on("hashchange", function() {
    if (location.hash.length !== 0) {
        if ($(document).width() <= 768) {
            window.scrollTo(window.scrollX, window.scrollY - 50);
        } else {
            window.scrollTo(window.scrollX, window.scrollY - 75);
        }
        // console.log($(document).width());
    }
});

function thumbResize() {
    var thumb = $("ul.thumbnail li");
    var width = thumb.width();
    // console.log(width);
    width /= 1.6;
    thumb.css('height', width);
}

function resultsDef() {
    $("#results").load("assets/php/results_menu.php");
}

$(document).ready(function() {
    thumbResize();
    resultsDef();
	$(document.body).click("#2015", function() {
	    $("#results").load("assets/php/results_2015.php");
	    console.log("loaded successfully");
	});
	$("#2014").click(function() {
   		$("#results").load("assets/php/results_2014.php");
	    return false;
	});

	$("#2013").click(function() {
	    $("#results").load("assets/php/results_2013.php");
	    return false;
	});

	$("#2012").click(function() {
	    $("#results").load("assets/php/results_2012.php");
	    return false;
	});

	$("#MENU").click(function() {
	    $("#results").load("assets/php/results_menu.php");
	    return false;
	});
});