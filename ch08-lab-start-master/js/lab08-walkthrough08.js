function makeGreeting(name) {
    return "Hello, " + name + "! Have a wonderful trip.";
}

function showGreeting(name) {
    var message = document.createElement("p");
    message.textContent = makeGreeting(name);
    document.body.appendChild(message);
}

