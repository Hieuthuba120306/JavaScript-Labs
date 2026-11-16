$(function () {
    $("form[name='sampleForm']").on("submit", function (event) {
        var errors = [];
        var username = $("#username").val().trim();
        var email = $("#email").val().trim();
        var password = $("#pass1").val();
        var repeatedPassword = $("#pass2").val();

        if (!username) errors.push("User name is required.");
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.push("Enter a valid email address.");
        if (password.length < 6) errors.push("Password must contain at least 6 characters.");
        if (password !== repeatedPassword) errors.push("Passwords do not match.");

        var $errors = $("#errors").empty();
        if (errors.length) {
            event.preventDefault();
            $errors.removeClass("hidden").html("<ul><li>" + errors.join("</li><li>") + "</li></ul>");
        } else {
            $errors.addClass("hidden");
        }
    });
});

