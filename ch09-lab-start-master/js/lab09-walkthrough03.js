// Remove the selected feature from the DOM when it is clicked.
document.addEventListener('DOMContentLoaded', function () {
    var item = document.getElementById('deleteThisOne');
    if (item) {
        item.style.cursor = 'pointer';
        item.addEventListener('click', function () {
            item.remove();
        });
    }
});
