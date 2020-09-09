// from data.js
var tableData = data;


//Make sure to get a ref to the tablebody/tbody
var tbody = d3.select("tbody");
console.log(tbody);

//Make a function to loop through the data 
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

// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("form");

// Create event handlers for clicking the button or pressing the enter key
button.on("click", runEnter);
form.on("submit",runEnter);

// Create the function to run for both events
function runEnter() {
    console.log(d3.event.target)
  // Prevent the page from refreshing
    d3.event.preventDefault();

    tbody.html("");

  // Select the input element and get the raw HTML node
    var inputDateTime = d3.select("#datetime");
    var inputCity = d3.select("#city")
    var inputState = d3.select("#state")
    var inputCountry = d3.select("#country")
    var inputShape = d3.select("#shape")

  // Get the value property of the input element
    var ValueDateTime = inputDateTime.property("value");
    var ValueCity = inputCity.property("value");
    var ValueState = inputState.property("value");
    var ValueCountry = inputCountry.property("value");
    var ValueShape = inputShape.property("value");


  // Print the value to the console
    //console.log(inputValueDateTime);

    ///var filteredData = tableData.filter(tableData => tableData.datetime === inputValueDateTime.toLowerCase());
    var filteredData = [...tableData];
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


    //var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);

    console.log(filteredData);

  // Set the span tag in the h1 element to the text
  // that was entered in the form
    //d3.select("h1>span").text(inputValue);


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
    else{
      alert("No Result My Alien Friend.")
    }

    };
