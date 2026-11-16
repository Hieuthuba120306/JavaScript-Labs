$(function () {
    $("#consume").on("click", function () {
        var $button = $(this).prop("disabled", true);
        $("#results").text("Loading…");
        $.ajax({ url: "https://jsonplaceholder.typicode.com/posts", data: { _limit: 10 }, dataType: "json" })
            .done(function (posts) {
                var $list = $("<ul>");
                $.each(posts, function (_, post) { $("<li>").text(post.title).appendTo($list); });
                $("#results").empty().append($list);
            }).fail(function () { $("#results").text("Could not load the posts. Check your connection and try again."); })
            .always(function () { $button.prop("disabled", false); });
    });
});
