var trip = {
    destination: "Calgary",
    country: "Canada",
    days: 7,
    describe: function () {
        return this.destination + ", " + this.country + " — " + this.days + " days";
    }
};
var description = document.createElement("p");
description.textContent = trip.describe();
document.body.appendChild(description);
