$(function () {
    var $button = $("#consume");
    var $list = $("#results ul");
    var $loading = $(".animLoading").hide();
    $button.on("click", function () {
        $button.prop("disabled", true);
        $loading.show();
        $.ajax({ url: "https://jsonplaceholder.typicode.com/posts", data: { _limit: 10 }, dataType: "json" })
            .done(function (posts) {
                $list.empty();
                $.each(posts, function (_, post) {
                    $("<li>").text(post.title).appendTo($list);
                });
            }).fail(function () {
                $list.empty().append($("<li>").text("Unable to load posts. Please try again."));
            }).always(function () {
                $loading.hide();
                $button.prop("disabled", false);
            });
    });
});
