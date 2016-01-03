SV.controller('textarea', function(el) {

    $(el).focusin(function(e) {
        $(el).find("placeholder").hide();
    });

    $(el).focusout(function(e) {
        if ($(el).find("div").text().trim() == "")
            $(el).find("placeholder").show();
    });

});
