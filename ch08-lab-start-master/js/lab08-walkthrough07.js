
// Arrays store ordered collections of values.
var destinations = ["Canada", "Italy", "Ghana", "Spain"];
var list = document.createElement("ul");
for (var i = 0; i < destinations.length; i++) {
    var item = document.createElement("li");
    item.textContent = destinations[i];
    list.appendChild(item);
}
document.body.appendChild(list);

