// from data.js
var tableData = data;

// import data 
var table = d3.select("#ufo-table");
var tableBody = table.select("tbody");

function createDefault() {
    tableData.forEach(row => {
        var newRow = tableBody.append("tr")
        for (key in row) {
            var cell = newRow.append("td");
            cell.text(row[key])
        }
    });
}; 
createDefault();

// select buttons and input field
var searchField = d3.select("#searchForm");
var searchButton = d3.select("#filter-btn");
var resetButton = d3.select("#reset-btn");

// create event handlers 
searchButton.on("click", runEnter); 
searchField.on("submit", runEnter);
resetButton.on("click", resetAll); 

// functions 
function runEnter() {
    // Prevent the page from refreshing
    d3.event.preventDefault();
    
    // filter  
    var inputElementDate = d3.select("#datetime");
    var searchForDate = inputElementDate.property("value");

    var inputElementCity = d3.select("#city");
    var searchForCity = inputElementCity.property("value");

    var inputElementState = d3.select("#state");
    var searchForState = inputElementState.property("value");

    var inputElementCountry = d3.select("#country");
    var searchForCountry = inputElementCountry.property("value");

    var inputElementShape = d3.select("#shape");
    var searchForShape = inputElementShape.property("value");

    tableBody.remove();
    tableBody = table.append("tbody");

    var filteredData = tableData.filter(d => 
                d.datetime.trim() === searchForDate.trim() ||
                d.city.toLowerCase().trim() === searchForCity.toLowerCase().trim() ||
                d.state.toLowerCase().trim() === searchForState.toLowerCase().trim() ||
                d.country.toLowerCase().trim() === searchForCountry.toLowerCase().trim() ||
                d.shape.toLowerCase().trim() === searchForShape.toLowerCase().trim()
            ); 

    filteredData.forEach(row => {
        var newRow = tableBody.append("tr")
        for (key in row) {
            var cell = newRow.append("td");
            cell.text(row[key])
        }
    });
}; 

function resetAll() {
    // Prevent the page from refreshing
    d3.event.preventDefault();

    tableBody.remove();
    tableBody = table.append("tbody");
    createDefault();
}; 
