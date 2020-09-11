// from data.js
var tableData = data;
//Make sure to get a ref to the tablebody/tbody
var tbody = d3.select("tbody");
//check out the tbody in console log
console.log(tbody);
// Select the button
var button = d3.select("#filter-btn");
// Select the form
var form = d3.select("form");


//Make a function to loop through the data 
data.forEach(function(ufoStuff){
    console.log(ufoStuff);
    //append to the body as a table row
    var row = tbody.append("tr");

    Object.entries(ufoStuff).forEach(function([key, value]){
        console.log(key, value)
    var cell = row.append("td");
        cell.text(value).style("color","white");
    })
});


// Create event handlers for clicking the button or pressing the enter key. I tried 'submit' but it was causing issues so I changed to 'change'
button.on("click", runEnter);
form.on("change",runEnter);

// I need to create a function to run for both events
function runEnter() {
    console.log(d3.event.target)
  // Prevent the page from refreshing
    d3.event.preventDefault();

    tbody.html("");

  // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

  // Get the value property of the input element
    var inputValue = inputElement.property("value");

  // Print the value to the console
  // console.log(inputValue);
  // Create a variable for the filteredData and bring in the input value
    var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);
  // console.log the filteredData var
    console.log(filteredData);

//Make another function to loop through the filtereddata. This is a lot like the movie activity. 
    filteredData.forEach(function(filteredUfo){
        console.log(filteredUfo);
    //append to the body as a table row
        var row = tbody.append("tr");
          Object.entries(filteredUfo).forEach(function([key, value]){
            console.log(key, value)
        var cell = row.append("td");
            cell.text(value).style("color","white");
    })
})
};