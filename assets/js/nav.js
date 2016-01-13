function thumbResize() {
    var thumb = $("ul.thumbnail li");
    var width = thumb.width();
    // console.log(width);
    width /= 1.6;
    thumb.css('height', width);
}

function resultsDef() {
    $("#results").load("assets/php/results_menu.php");
    //For the results menu
    if ($(document).width() <= 768) {
        $("#results").on("click", "#2015", function() {
            $("#15").animate({
                bottom: '50px'
            }, 1000, function() {
                $("#results").load("assets/php/results_2015.php");
            });
        });

        $("#results").on("click", "#2014", function() {
            $("#14").animate({
                bottom: '115px'
            }, 1000, function() {
                $("#results").load("assets/php/results_2014.php");
            });
        });

        $("#results").on("click", "#2013", function() {
            $("#13").animate({
                bottom: '180px'
            }, 1000, function() {
                $("#results").load("assets/php/results_2013.php");
            });
        });

        $("#results").on("click", "#2012", function() {
            $("#12").animate({
                bottom: '245px'
            }, 1000, function() {
                $("#results").load("assets/php/results_2012.php");
            });
        });

        $("#results").on("click", ".MENU", function() {
            $("#15").animate({
                top: '50px'
            }, 1000, function() {
                $("#results").load("assets/php/results_menu.php");
            });
            $("#14").animate({
                top: '115px'
            }, 1000, function() {
                $("#results").load("assets/php/results_menu.php");
            });
            $("#13").animate({
                top: '180px'
            }, 1000, function() {
                $("#results").load("assets/php/results_menu.php");
            });
            $("#12").animate({
                top: '245px'
            }, 1000, function() {
                $("#results").load("assets/php/results_menu.php");
            });
        });
    } else {
    	$("#results").on("click", "#2015", function() {
    		var target = $("#results ul li#d1");
    		$("#results ul li.detail").slideUp();
            target.slideToggle().load("assets/php/results_2015.php");
        });
        $("#results").on("click", "#2014", function() {
    		var target = $("#results ul li#d1");
    		$("#results ul li.detail").slideUp();
            target.slideToggle().load("assets/php/results_2014.php");
        });
        $("#results").on("click", "#2013", function() {
    		var target = $("#results ul li#d2");
    		$("#results ul li.detail").slideUp();
            target.slideToggle().load("assets/php/results_2013.php");
        });
        $("#results").on("click", "#2012", function() {
    		var target = $("#results ul li#d2");
    		$("#results ul li.detail").slideUp();
            target.slideToggle().load("assets/php/results_2012.php");
        });
        
    }
}

function media() {
    var spacing = $("#spons").height();
    $("#media").css("margin-bottom", spacing);
}

function sponsors() {
    var width = $("#sponsorpage").width();
    $("#sponsorpage").css("height", width);
    $("#sponsortoggle").click(function() {
        $("#sponsorpage").slideToggle();
    });
}

function heightcenter() {
    var target = $(".heightcenter");
    var width = target.width();
    var height = target.height();
    var pwidth = target.parent().width();
    var pheight = target.parent().height();
    target.css("position", "relative");
    target.css("top", ((pheight - height) / 2));
    target.css("left", ((pwidth - width) / 2));
}

$(document).ready(function() {
    thumbResize();
    resultsDef();
    media();
    sponsors();

    $(".layer span").addClass("heightcenter");

    //Auto Hides the menu
    $("#wrapper a").on("click", function(event) {
        $(".navbar-collapse").collapse('hide');
    });

    // Scrolling animation
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                if ($(document).width() <= 768) {
                    $('html,body').animate({
                        scrollTop: target.offset().top - 50
                    }, 500);
                } else {
                    $('html,body').animate({
                        scrollTop: target.offset().top - 75
                    }, 500);
                }
                return false;
            }
        }
    });



    // Created class heightcenter
    heightcenter();
});
