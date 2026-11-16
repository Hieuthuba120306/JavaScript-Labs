// Validate the form and list all errors in the page's errors panel.
document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('sampleForm');
    var panel = document.getElementById('errors');
    if (!form || !panel) return;
    var name = form.elements.name;
    var phone = form.elements.phone;
    var email = form.elements.email;
    var pass = form.elements.pass;
    email.type = 'email';
    phone.type = 'tel';
    phone.pattern = '[0-9+() .-]{7,20}';
    pass.minLength = 8;

    form.addEventListener('submit', function (event) {
        var errors = [];
        if (!name.value.trim()) errors.push('Please enter your name.');
        if (!phone.value.trim()) errors.push('Please enter your phone number.');
        else if (!phone.checkValidity()) errors.push('Please enter a valid phone number.');
        if (!email.value.trim()) errors.push('Please enter your email address.');
        else if (!email.checkValidity()) errors.push('Please enter a valid email address.');
        if (!pass.value) errors.push('Please enter a password.');
        else if (pass.value.length < 8) errors.push('Password must be at least 8 characters.');

        panel.replaceChildren();
        if (errors.length) {
            event.preventDefault();
            panel.className = 'visible';
            var heading = document.createElement('h2');
            heading.textContent = 'Please correct these errors';
            panel.appendChild(heading);
            var list = document.createElement('ul');
            errors.forEach(function (error) {
                var item = document.createElement('li');
                item.textContent = error;
                list.appendChild(item);
            });
            panel.appendChild(list);
        } else {
            panel.className = 'hidden';
        }
    });
});

