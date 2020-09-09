// from data.js
var tableData = data;

// YOUR CODE HERE!
//console.log(tableData)

var tbody = d3.select("tbody");
//Step 1: Loop Through `data` and console.log each weather report object
data.forEach(function(sightings) {
    console.log(sightings);
});

// Step 2:  Use d3 to append one table row `tr` for each weather report object
// Don't worry about adding cells or text yet, just try appending the `tr` elements.
data.forEach(function(sightings) {
    console.log(sightings);
    var row = tbody.append("tr");
});

//Step 3:  Use `Object.entries` to console.log each weather report value
data.forEach(function(sighting) {
    console.log(sighting);
    var row = tbody.append("tr");

    Object.entries(sightings).forEach(function([key, value]) {
        console.log(key, value);
        });
        });

// Step 4: Use d3 to append 1 cell per weather report value (weekday, date, high, low)
data.forEach(function(sightings) {
    console.log(sightings);
    var row = tbody.append("tr");

Object.entries(sightings).forEach(function([key, value]) {
    console.log(key, value);
//     // Append a cell to the row for each value
//     // in the weather report object
    var cell = row.append("td");
});
});
