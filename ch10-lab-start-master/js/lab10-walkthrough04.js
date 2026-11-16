$(function () {
    $(".panel").on("mouseenter", function () {
        $("#message").text("Mouse entered the panel");
    }).on("mouseleave", function () {
        $("#message").text("Mouse left the panel");
    }).on("click", function () {
        $("#message").text("Panel clicked");
    });
});

