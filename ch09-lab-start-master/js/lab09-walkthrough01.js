// Update the page title and write the user's message into the message area.
document.addEventListener('DOMContentLoaded', function () {
    var title = document.getElementById('pageTitle');
    var message = document.getElementById('msgArea');
    if (title) title.textContent = 'DOM Example';

    var buttons = document.querySelectorAll('#stories button');
    buttons.forEach(function (button, index) {
        button.addEventListener('click', function () {
            if (message) message.value = 'You selected story ' + (index + 1) + '.';
        });
    });
});
