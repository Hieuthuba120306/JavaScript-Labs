// A JavaScript object groups related values into properties.
var destination = { name: "Banff National Park", country: "Canada", visited: true };
var output = document.createElement("p");
output.textContent = destination.name + ", " + destination.country +
    (destination.visited ? " (visited)" : " (not visited yet)");
document.body.appendChild(output);

