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
    
    var inputElement = d3.select("#datetime");
    var searchFor = inputElement.property("value");
    console.log(searchFor);

    tableBody.remove();
    tableBody = table.append("tbody");

    tableData.filter(d => d.datetime.trim() == searchFor.trim())
        .forEach(row => {
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
