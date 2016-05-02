function multiples (data) {
    var color = d3.scale.ordinal()
    .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);
                
    var fullwidth = 400,
        fullheight = 250;

    var margin = {top: 20, right: 20, bottom: 40, left: 50},
        width = fullwidth - margin.left - margin.right,
        height = fullheight - margin.top - margin.bottom;
    /*
                 
    var x = d3.scale.linear()
        .range([0, width]);
        */
    var x = d3.scale.ordinal()
        .domain(["5", "4", "3", "2", "1", "Hostel", "Average"])
        .rangePoints([0, width]);

    var x1 = d3.scale.ordinal();
    
    var y = d3.scale.linear()
        .range([height, 0]);
    
    var xAxis = d3.svg.axis()
        .scale(x)
        .orient("bottom");

    var yAxis = d3.svg.axis()
        .scale(y)
        .orient("left")
        .ticks(4, "$");
    /*
    var countries = d3.nest()
      .key(function(d) { return d.Country; })
      .sortValues(function(a,b) {return a.City- b.City;})
      .entries(data);
    */
    data = data.filter(function (d) { return d.Country === 'United States' })
    
    console.log(data);

    
    x.domain([0, d3.max(data, function(d) { return d.Five })]);
    y.domain([0, d3.max(data, function(d) { return d.Five })]);
    
    var svg = d3.select("#vis").selectAll("svg")
        .data(data)
        .enter()
        .append("svg:svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
      .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    
      svg.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis);

      svg.append("g")
          // Hide y axis
          .attr("class", "y axis")
          .call(yAxis)
        .append("text")
        .attr("x", width/2.5)
        .attr("y", -20)
        .attr("dy", ".71em")
        .attr("text-anchor", "start")
        .attr("font-size", "1.1em")
        .text(function(d) { return d.City});
    
    svg.selectAll(".bar")
      .data(function(d) {return d.values;})
      .enter()
      .append("rect")
      .attr("class", "bar")
      .attr("x", function(d) { console.log(d.City); return x1(d.City); })
      .attr("width", x.rangeBand())
      .attr("y", function(d) { return y(d.City); })
      .attr("height", function(d) { console.log(height - y(d.value), d.value);return height - y(d.Five); })
      .attr("fill", function(d) {return color(d.City)})
    
    
    
    
    
}