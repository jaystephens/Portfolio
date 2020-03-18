$( document ).ready(function() {
    //Set header to fixed postion when scrolled to, and adjust container below
    $(".arrowbtn-down").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#header").offset().top
        }, 2000);
    });

    //Set header to fixed postion when scrolled to, and adjust container below
    var waypoint = new Waypoint({
        element: document.getElementById('header'),
        handler: function() {
            $("#header").toggleClass("fixHeader");
            if ($("#header").hasClass("fixHeader")) {
                $(".about").addClass("fixAbout");
                // $(".landing").addClass("hideLanding");
            }
            else {
                $(".about").removeClass("fixAbout");
            }
        }
    });
});

