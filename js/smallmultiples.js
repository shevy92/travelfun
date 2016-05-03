function multiples (data) {
    var color = d3.scale.ordinal()
    .range(["#aec7e8", "#1f77b4", "#c5b0d5", "#9467bd", "#a1d99b", "#31a354"]);
    
    //var color = d3.scale.category20()
                
    var fullwidth = 370,
        fullheight = 300;

    var margin = {top: 20, right: 20, bottom: 70, left: 50},
        width = fullwidth - margin.left - margin.right,
        height = fullheight - margin.top - margin.bottom;
    /*
                 
    var x = d3.scale.linear()
        .range([0, width]);
        */
    var x = d3.scale.ordinal()
        .rangeBands([0, width], .1);
    
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
    data = data.filter(function (d) { return d.Country === 'United States' });
    
    data.forEach(function(d) {
        var stars = [];
        stars.push({
            class: "Hostel",
            cost: +d.Hostel
        });
        stars.push({
            class: "One-Star",
            cost: +d.One
        });
        stars.push({
            class: "Two-Star",
            cost: +d.Two
        });
        stars.push({
            class: "Three-Star",
            cost: +d.Three
        });
        stars.push({
            class: "Four-Star",
            cost: +d.Four
        });
        stars.push({
            class: "Five-Star",
            cost: +d.Five
        });
        d.starcosts = stars;
    });
    
    var cities = d3.nest()
        .key(function(d) { return d.City;})
        .entries(data);
    
    console.log(data);
    
    
    x.domain(["Hostel", "One-Star", "Two-Star", "Three-Star", "Four-Star", "Five-Star"]);
    y.domain([0, d3.max(data, function(d) { return +d.Five; })]);
    
    var svg = d3.select("#vis").selectAll("svg")
        .data(cities)
        .enter()
        .append("svg:svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
      .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
        .each(makeBar);
    

    function makeBar(data) {
        
        console.log("city data", data.values[0].starcosts);
        
    var localsvg = d3.select(this);
    
      localsvg.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis)
        .append("text")
          .attr("x", fullwidth/2)
          .attr("y", 45)
          .style("text-anchor", "end")
          .text(data.values[0].City);


      localsvg.append("g")
          // Hide y axis
          .attr("class", "y axis")
          .call(yAxis)
        .append("text")
        .attr("x", width/2.5)
        .attr("y", -20)
        .attr("dy", ".71em")
        .attr("text-anchor", "start")
        .attr("font-size", "1.1em")
        .text(function(d) { return d.cost});
    
    localsvg.selectAll("rect.bar")
      .data(function(d) {return d.values[0].starcosts;})
      .enter()
      .append("rect")
      .attr("class", "bar")
      .style("fill", function(d) { return color(d.class); })
      .attr("x", function(d) { 
            //console.log(d.class); 
            return x(d.class); 
        }) 
      .attr("width", x.rangeBand())
      .attr("y", function(d) { 
            return y(d.cost); 
        })
      .attr("height", function(d) { 
        console.log(height - y(d.cost), d.cost);
        return height - y(d.cost);
        });
    
    
    } // end makeBar
    
}