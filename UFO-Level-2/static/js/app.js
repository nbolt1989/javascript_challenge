//---This will essentially be a copy of level 1 with some tweaks like a conditional and more input and value property variables.
//--------------------------
// from data.js
var tableData = data;
// Select the button
var button = d3.select("#filter-btn");
// Select the form
var form = d3.select("form");
//Make sure to get a ref to the tablebody/tbody
var tbody = d3.select("tbody");

//console.log(tbody);

//Make a function to loop through the data.js
data.forEach(function(ufoStuff){
    //console.log(ufoStuff);
    //append to the body as a table row
    var row = tbody.append("tr");

    Object.entries(ufoStuff).forEach(function([key, value]){
        //console.log(key, value)
    var cell = row.append("td");
        cell.text(value).style("color","white");
    })
});

// Create event handlers for clicking the button or pressing the enter key. I tried 'submit' but it was causing issues so I changed to 'change'
form.on("change",runEnter);
button.on("click", runEnter);

// Create the function to run for both events
function runEnter() {
    console.log(d3.event.target)
  // Prevent the page from refreshing
    d3.event.preventDefault();

    tbody.html("");

  // Select the input element and get the raw HTML; I will need more inputs here for the other search criteria
    var inputDateTime = d3.select("#datetime");
    var inputCity = d3.select("#city")
    var inputState = d3.select("#state")
    var inputCountry = d3.select("#country")
    var inputShape = d3.select("#shape")

  // Get the value property of the input element; I will need value properties here connected to the input elements.
    var ValueDateTime = inputDateTime.property("value");
    var ValueCity = inputCity.property("value");
    var ValueState = inputState.property("value");
    var ValueCountry = inputCountry.property("value");
    var ValueShape = inputShape.property("value");


  // Print the value to the console
    //console.log(inputValueDateTime);

  // Worked with a teammate on this code for line 58. 
    var filteredData = [...tableData];
    //  Create multiple if statements for the filteredData and value property variables.
    if (ValueDateTime){
      filteredData = filteredData.filter(obj => obj.datetime === ValueDateTime);
    };
    if (ValueCity){
      filteredData = filteredData.filter(obj => obj.city.toLowerCase() === ValueCity.toLowerCase());
    };
    if (ValueState){
      filteredData = filteredData.filter(obj => obj.state.toLowerCase() === ValueState.toLowerCase());
    };
    if (ValueCountry){
      filteredData = filteredData.filter(obj => obj.country.toLowerCase() === ValueCountry.toLowerCase());
    };
    if (ValueShape){
      filteredData = filteredData.filter(obj => obj.shape.toLowerCase() === ValueShape.toLowerCase());
    };
  //Console log the filteredData
    console.log(filteredData);

  //Make a function to loop through the data 
    if (filteredData.length >= 1) {
      tbody.html("");
      filteredData.forEach(function(filteredUfo){
        //console.log(filteredUfo);
      //append to the body as a table row
        var row = tbody.append("tr");
      
        Object.entries(filteredUfo).forEach(function([key, value]){
            //console.log(key, value)
          var cell = row.append("td");
          cell.text(value).style("color","white");
        });
      });
    }
    //Create an alert if the search values are not viable.
    else{
      alert("No Results My Fellow Alien.")
    }
    };
    
