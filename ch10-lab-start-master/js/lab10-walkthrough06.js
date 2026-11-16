$(function () {
    var $photo = $("main figure");
    $("#btnFadeIn").on("click", function () { $photo.stop(true, true).fadeIn(); });
    $("#btnFadeOut").on("click", function () { $photo.stop(true, true).fadeOut(); });
    $("#btnFade").on("click", function () { $photo.stop(true, true).fadeToggle(); });
    $("#btnSlideUp").on("click", function () { $photo.stop(true, true).slideUp(); });
    $("#btnSlideDown").on("click", function () { $photo.stop(true, true).slideDown(); });
    $("#btnSlide").on("click", function () { $photo.stop(true, true).slideToggle(); });
});

