// Toggle the image and text with the button, keeping its label in sync.
document.addEventListener('DOMContentLoaded', function () {
    var button = document.getElementById('testButton');
    var image = document.getElementById('mainImage');
    var content = document.getElementById('content');
    if (!button) return;
    button.addEventListener('click', function () {
        var shouldHide = button.textContent.trim() === 'Hide';
        [image, content].forEach(function (element) {
            if (element) element.classList.toggle('hidden', shouldHide);
        });
        button.textContent = shouldHide ? 'Show' : 'Hide';
    });
});

