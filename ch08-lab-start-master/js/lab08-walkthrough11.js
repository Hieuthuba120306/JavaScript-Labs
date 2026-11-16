// define constructor function for Country objects
function Country(name, iso, capital, population) {
    this.name = name;
    this.iso = iso;
    this.capital = capital;
    this.population = population;
}

// create an array of country objects
var countries = [
    new Country("Bahamas", "BS", "Nassau", 301790),
    new Country("Canada", "CA", "Ottawa", 33679000),
    new Country("Germany", "DE", "Berlin", 81802257),
];

// you can also push each new country object onto the end of the array
countries.push(new Country("Spain", "ES", "Madrid", 46505963));
countries.push(new Country("United Kingdom", "GB", "London", 62348447));

var heading = document.createElement("h1");
heading.textContent = "Countries";
document.body.appendChild(heading);

var table = document.createElement("table");
var header = table.insertRow();
["Flag", "Country", "Capital", "Population"].forEach(function (label) {
    var cell = document.createElement("th");
    cell.textContent = label;
    header.appendChild(cell);
});

countries.forEach(function (country) {
    var row = table.insertRow();
    var flagCell = row.insertCell();
    var flag = document.createElement("img");
    flag.src = "flags/" + country.iso + ".png";
    flag.alt = country.name + " flag";
    flag.width = 36;
    flagCell.appendChild(flag);
    row.insertCell().textContent = country.name;
    row.insertCell().textContent = country.capital;
    row.insertCell().textContent = country.population.toLocaleString();
});
document.body.appendChild(table);
