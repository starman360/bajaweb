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
            // $("#" + year).animate({
            //     bottom: '' + animateDistance
            // }, 1000, function() {
            $("#results").load("assets/php/results/results_20" + year + ".php", function() {
                initialize();
            });
            // });
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
                target.load("assets/php/results/results_20" + year + ".php", function() {
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
    var spacingm = $("#spons").height();
    var spacing = $("#spons").height() + $("#media").height();
    if ($(document).width() >= 768) { spacing = $("#media").height(); }
    $("#media").css("margin-bottom", spacingm);
    $("#wrapper .page:nth-last-of-type(3)").css("margin-bottom", spacing);
}


function sponsors() {
    var width = $("#sponsorpage").width();
    $("#sponsorpage").css("height", width);
    $("#sponsortoggle").click(function() {
        $("#sponsorpage").slideToggle();
    });
    if ($(document).width() <= 768) {
        $("#platinum_sponsor").attr("src", "/assets/images/sponsors/m_platinum.png");
        $("#platinum_sponsor").attr("usemap", "#mplatmap");
        $("#gold_sponsor").attr("src", "/assets/images/sponsors/m_gold.png");
        $("#gold_sponsor").attr("usemap", "#mgoldmap");
        $("#silver_sponsor").attr("src", "/assets/images/sponsors/m_silver.png");
        $("#silver_sponsor").attr("usemap", "#msilvmap");
        $("#bronze_sponsor").attr("src", "/assets/images/sponsors/m_bronze.png");
        $("#bronze_sponsor").attr("usemap", "#mbronmap");
    } else {
        $("#platinum_sponsor").attr("src", "/assets/images/sponsors/platinum.jpg");
        $("#platinum_sponsor").attr("usemap", "#platmap");
        $("#gold_sponsor").attr("src", "/assets/images/sponsors/gold.jpg");
        $("#gold_sponsor").attr("usemap", "#goldmap");
        $("#silver_sponsor").attr("src", "/assets/images/sponsors/silver.jpg");
        $("#silver_sponsor").attr("usemap", "#silvmap");
        $("#bronze_sponsor").attr("src", "/assets/images/sponsors/bronze.jpg");
        $("#bronze_sponsor").attr("usemap", "#bronmap");
    }
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
            return index;
        },

        break: function() {
            done = true;
            index = 0;
            callback();
        }
    };
    loop.next();
    return loop;
}

function nextslide(n) {
    $("#slideshow img.image:nth-of-type(" + (n + 1) + ")").show();
    console.log(n);
    $("#slideshow img.image:nth-of-type(" + (n) + ")").animate({
        opacity: 0
    }, 500, function() {
        $("#slideshow img.image:nth-of-type(" + (n) + ")").hide();
        callback();
    });
}

function next(n, callback) {
    var m = n + 1;
    setTimeout(function() {
        $("#slideshow img.image:nth-of-type(" + (n) + ")").animate({
            opacity: 0
        }, 500, function() {
            $("#slideshow img.image:nth-of-type(" + (m) + ")").show();
            $("#slideshow img.image:nth-of-type(" + (n) + ")").hide();
            callback();
        });
        // $("#slideshow img.image:nth-of-type(" + (n) + ")").hide();
        // callback();
    }, 6000);
}

function slideshow() {
    var n = numOfImages;
    console.log(numOfImages);
    if (numOfImages != 0) {
        $("#slideshow img.image:not(:nth-of-type(1))").hide();
        $("#slideshow img.image:nth-of-type(1)").show();
        asyncLoop(numOfImages, function(loop) {
                next(loop.iteration(), function(result) {

                    // log the iteration
                    console.log(loop.iteration());

                    // Okay, for cycle could continue
                    loop.next();
                })
            },
            function() {

                $("#slideshow img.image").each(function() {
                    $(this).css('opacity', 1);
                });
                slideshow();
            }
        );
    }
    // asyncLoop(numOfImages, function(loop) {
    //  console.log("here");
    //  next(loop.iteration(), function(result) {
    //      console.log(loop.iteration());
    //      loop.next();
    //  })},
    //  function(){console.log('cycle ended')}
    // );


    // for (var i = n; i > 0; i--) {
    //  console.log(i);
    //     (function(i) {
    //      setTimeout(nextslide(i), 3000);
    //     })(i);
    // }
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
    $(".layer a").addClass("heightcenter");

    $("ul.buton li span").addClass("heightcenter");
    $("ul.buton li a").addClass("heightcenter");

    widthcenter();
    heightcenter();
}

function wrapper() {
    var height = $(document).height();
    var heightw = $("#wrapper").height();
    // console.log("set", height, heightw);

    // if ((height-heightw) > 145) { 
    //     $("#wrapper").css("height", height-150); 
    //     console.log("set", height, heightw);
    // }
}

$(window).load(function() { // load last
    var height = $("#slideshow img").height();
    if (height <= 10) {
        $("#slideshow").css("border", "none")
    }
    $("#slideshow").css("height", height + 8);
});

$(document).ready(function() {
    thumbResize();
    resultsDef();
    media();
    sponsors();
    slideshow();
    wrapper();

    $(".layer span").addClass("heightcenter");
    $(".layer a").addClass("heightcenter");

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

    if ($(document).width() >= 768) {
        // console.log($("#team").height());
        $("#team").css("height", ($("#team").height() - 172));
    }

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


    // Created class heightcenter
    widthcenter();
    heightcenter();
});
