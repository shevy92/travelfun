function makeTable (data2) {
  
    console.log(data2);
    
    var parsedCSV = d3.csv.parseRows(data2);

    var container = d3.select("#starTable")
        .append("table")

        .selectAll("tr")
            .data(parsedCSV).enter()
            .append("tr")

        .selectAll("td")
            .data(function(d) { return d; }).enter()
            .append("td")
            .text(function(d) { return d; });

}