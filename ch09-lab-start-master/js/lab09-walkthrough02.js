// React to clicks on the story buttons and demonstrate changing DOM content.
document.addEventListener('DOMContentLoaded', function () {
    var message = document.getElementById('msgArea');
    document.querySelectorAll('#stories button').forEach(function (button, index) {
        button.addEventListener('click', function () {
            if (message) message.value = 'Details for story ' + (index + 1) + ' selected.';
            button.textContent = 'Selected';
        });
    });
});
