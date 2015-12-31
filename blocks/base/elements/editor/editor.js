SV.controller('editor', function(el) {

    $(el).find(".tool-bar, .buttons-bar").hide();

    var id = $(el).attr("id");

    var self = this;

    var article = $(el).find(".edit-area")[0];
    var container = article.parentNode;

    var medium = new Medium({
        element: article,
        mode: Medium.richMode,
        attributes: null,
        tags: null,
        pasteAsText: false
    });

    article.highlight = function () {
        if (document.activeElement !== article) {
            medium.select();
        }
    };

    $(el).focusin(function(e) {
        $(el).find("placeholder").hide();
    });

    $(el).focusout(function(e) {
        if ($(article).text().trim() == "")
            $(el).find("placeholder").show();
    });

    $(el).click(function(e) {
        var val = $.selection('html');
        if (val && val!="" && document.activeElement == article) {
            $(el).find(".tool-bar").show();
        } else {
            $(el).find(".tool-bar").hide();
        }
    });

    $(el).find(".edit-area").change(function() {
        SV.emmit(id, {action: "changed"});
    });

    this.getText = function() {
        var p = $(el).find(".edit-area").html();
        return p.replace(/<\/div>/g, "\n").replace(/<div>/g, "").replace(/<br>/g, "\n");
    };

    container.querySelector('.strongButt').onmousedown = function() {
        article.highlight();
        medium.invokeElement('strong', {});
        return false;
    };

    container.querySelector('.codeButt').onmousedown = function() {
        article.highlight();
        medium.invokeElement('code', {});
        return false;
    };

    container.querySelector('.citeButt').onmousedown = function() {
        article.highlight();
        medium.invokeElement('cite', {});
        return false;
    };

    container.querySelector('.imgButt').onmousedown = function() {
        article.highlight();
        var val = window.getSelection();
        medium.invokeElement('img',{
            src:val, alt:"alt"
        });
        return false;
    };

    container.querySelector('.linkButt').onmousedown = function() {
        article.highlight();
        var val = window.getSelection();
        medium.invokeElement('a',{
            href:val
        });
        return false;
    };

});