$(function () {
    var $preview = $("<div id='preview'><img alt=''><p></p></div>").appendTo("body");
    $("main figure img").on("mouseenter", function (event) {
        var $image = $(this);
        $preview.find("img").attr("src", $image.attr("src").replace("/small/", "/medium/"));
        $preview.find("p").text($image.attr("alt"));
        $preview.stop(true, true).fadeIn(150).css({ left: event.pageX + 15, top: event.pageY + 15 });
    }).on("mousemove", function (event) {
        $preview.css({ left: event.pageX + 15, top: event.pageY + 15 });
    }).on("mouseleave", function () { $preview.stop(true, true).fadeOut(150); });
});

