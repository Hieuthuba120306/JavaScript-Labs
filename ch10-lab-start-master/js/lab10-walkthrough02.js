$(function () {
    // Basic jQuery selectors: element, id, class and descendants.
    $("p").addClass("selected");
    $("#pageTitle").text("jQuery DOM Example");
    $("#msgArea").val("Selected paragraphs with $('p').addClass('selected').");
    $("#stories button").on("click", function () {
        var story = $(this).closest(".col-md-4");
        $("#msgArea").val(story.find("p").first().text().trim());
    });
});

