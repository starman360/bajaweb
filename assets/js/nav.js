function thumbResize() {
    var thumb = $("ul.thumbnail li");
    var width = thumb.width();
    // console.log(width);
    width /= 1.6;
    thumb.css('height', width);
}

function resultsBehavior(year, animateDistance, detail) {
    if ($(document).width() <= 768) {
        $("#results").on("click", "#" + year, function() {
            console.log("run " + "#" + year);
            $("#" + year).animate({
                bottom: '' + animateDistance
            }, 1000, function() {
                $("#results").load("assets/php/results_20" + year + ".php", function() {
                    initialize();
                });
            });
        });
        $("#results").on("click", ".MENU", function() {
            $("#results").load("assets/php/results_menu.php", function() {
                initialize();
                return false;
            });
        });
    } else {
        $("#results").on("click", "#" + year, function() {
            var target = $("#results ul li#d" + detail);
            $(this).children("span:first-of-type").toggle();
            $(this).siblings().children("span:first-of-type").hide();
            $("#results ul li.detail:not([data-year='" + year + "'])").slideUp();
            target.slideToggle(function() {
                target.load("assets/php/results_20" + year + ".php", function() {
                    initialize();
                });
            });
            target.attr('data-year', year);
        });
    }
}

function resultsDef() {
    $("#results").load("assets/php/results_menu.php", function() {
        initialize();
    });

    resultsBehavior(15, '50px', 1);
    resultsBehavior(14, '115px', 1);
    resultsBehavior(13, '180px', 2);
    resultsBehavior(12, '245px', 2);
    resultsBehavior(11, '310px', 3);
    resultsBehavior(10, '375px', 3);
    resultsBehavior('09', '440px', 4);
    resultsBehavior('08', '505px', 4);
    //For the results menu
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

function asyncLoop(iterations, func, callback) {
    var index = 0;
    var done = false;
    var loop = {
        next: function() {
            if (done) {
                return;
            }

            if (index < iterations) {
                index++;
                func(loop);

            } else {
                done = true;
                callback();
            }
        },

        iteration: function() {
            return index - 1;
        },

        break: function() {
            done = true;
            callback();
        }
    };
    loop.next();
    return loop;
}

function nextslide(n) {
    return function() {
        $("#slideshow img.image:nth-of-type(" + (n - 1) + ")").show();
        console.log("here");
        $("#slideshow img.image:nth-of-type(" + n + ")").animate({
            opacity: 0
        }, 1000, function() {
            $("#slideshow img.image:not(:nth-of-type(" + (n - 1) + "))").hide();
            console.log("here");
        });

    }
}

function slideshow() {
    var n = numOfImages;
    console.log(numOfImages);
    $("#slideshow img.image:not(:nth-of-type(" + n + "))").hide();
    for (var i = n; i > 0; i--) {
   		console.log(i);
        (function(i) {
        	setTimeout(nextslide(i), 3000);
        })(i);
    }
}

function heightcenter() {
    var target = $(".heightcenter");
    target.each(function() {
        var height = $(this).height();
        var pheight = $(this).parent().height();
        $(this).css("position", "relative");
        $(this).css("top", ((pheight - height) / 2));
    });
}

function widthcenter() {
    var target = $(".widthcenter");
    target.each(function() {
        var width = $(this).width();
        var pwidth = $(this).parent().width();
        $(this).css("position", "relative");
        $(this).css("left", ((pwidth - width) / 2));
    });
}

function center() {
    heightcenter();
    widthcenter();
}

// To be run every time something is loaded
function initialize() {
    thumbResize();
    media();

    $(".layer span").addClass("heightcenter");
    $("ul.buton li span").addClass("heightcenter");
    $("ul.buton li a").addClass("heightcenter");

    widthcenter();
    heightcenter();
}

$(document).ready(function() {
    thumbResize();
    resultsDef();
    media();
    sponsors();
    slideshow();

    $(".layer span").addClass("heightcenter");
    $("ul.buton li span").addClass("heightcenter");
    $("ul.buton li a").addClass("heightcenter");

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

    $('a[href*=#]:not([href=#])').click(function(e) {
        e.preventDefault();
        if (location.pathname.replace(/^\//, '') != this.pathname.replace(/^\//, '')) {
            var target = $(this.hash);
            console.log(target);
            window.location = this.pathname;
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
    });

    var height = $("#slideshow img").height();
    $("#slideshow").css("height", height + 8);
    // Created class heightcenter
    widthcenter();
    heightcenter();
});
