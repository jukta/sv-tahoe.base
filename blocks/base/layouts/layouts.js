SV.controller('grid-layout', function(el) {

    var c = $(el).children();
    var cols = $(el).attr("cols");
    if (cols == "undefined") cols = 1;
    c.detach();

    if (c.length > 0) {
        for (var i=0; i < c.length / cols; i++) {
            $(el).append("<div class='row'/>");
        }

        var rows = $(el).find("div.row");
        for (i = 0; i < c.length; i++) {
            $(rows[Math.floor(i/cols)]).append(c[i]);
        }
    }
});