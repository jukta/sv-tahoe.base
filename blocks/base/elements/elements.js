SV.controller('textarea', function(el) {

    $(el).focusin(function(e) {
        $(el).find("placeholder").hide();
    });

    $(el).focusout(function(e) {
        if ($(el).find("div").text().trim() == "")
            $(el).find("placeholder").show();
    });

});

SV.controller('select', function(el) {
    var op = $(el).attr("sel");
    if (op) $(el).find("option[value='" + op + "']").attr("selected", "");
});
