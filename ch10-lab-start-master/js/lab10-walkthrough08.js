$(function () {
    $("#commandLine button").on("click", function () {
        $("#box").stop(true).animate({ left: "+=250px", opacity: 0.8 }, 700)
            .animate({ top: "+=150px", opacity: 0.35 }, 700)
            .animate({ left: "-=250px", top: "-=150px", opacity: 0.8 }, 700);
    });
});

