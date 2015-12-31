SV.controller('split', function(el) {
    var drag = false;
    var xPos = -1;
    var w = -1;

    var width = $(el).innerWidth();
    w = width/2;
    $(el).find(".split-g").css("left",w);
//    $(el).find(".leftPanel").width(w -2.5);
//    $(el).find(".rightPanel").width(width - w -2.5);
//    var h = Math.max($(el).find(".leftPanel-content").outerHeight(), $(el).find(".rightPanel-content").outerHeight())
//    $(el).find(".leftPanel, .rightPanel").height(h);
//    $(el).height(h);

    var lastW = -1;

    $( window ).resize(function() {
        width = $(el).innerWidth();
        reWidth();
    });

    $(el).find(".split-g").dblclick(function(e) {
        if (lastW == -1) {
            lastW = w;
            $(el).find(".leftPanel").width(0);
        } else {
            $(el).find(".leftPanel").width(lastW);
            lastW = -1;
        }
        reWidth();
    });

    $(el).find(".split-g").mousedown(function(event) {
        drag = true;
        xPos = event.pageX;
        w = $(el).find(".leftPanel").innerWidth();
    });
    $(window).mouseup(function() {
        drag = false;
    });
//    $(el).mouseleave(function() {
//        drag = false;
//    });

    $(window).mousemove(function( event ) {
        if (drag != true) return;
        var d = event.pageX - xPos;
        $(el).find(".leftPanel").width(w+d);
        xPos = event.pageX;
        reWidth();
    });

    var reWidth = function() {
        w = $(el).find(".leftPanel").outerWidth();
        var width = $(el).innerWidth();
        $(el).find(".rightPanel").width(width - w);
        $(el).find(".split-g").css("left", w);
        var h = Math.max($(el).find(".leftPanel").innerHeight(), $(el).find(".rightPanel").innerHeight());
        $(el).find(".split-g").height(h);
//        $(el).height(h);
    }

});