// Validate the registration fields and provide useful inline browser messages.
document.addEventListener('DOMContentLoaded', function () {
    var form = document.forms.sampleForm;
    if (!form) return;
    var name = form.elements.name;
    var phone = form.elements.phone;
    var email = form.elements.email;
    var pass = form.elements.pass;
    [name, phone, email, pass].forEach(function (field) { field.required = true; });
    email.type = 'email';
    phone.type = 'tel';
    phone.pattern = '[0-9+() .-]{7,20}';
    pass.minLength = 8;
    form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
            event.preventDefault();
            form.reportValidity();
        }
    });
});

