function render1 (data) {
                
    data.sort(function(a,b) {return b.Five-a.Five;});
    data = data.slice(0,10);

    var fullWidth = document.getElementById('doubleChart1').offsetWidth;
    var fullHeight = 420;
    var margin = {top: 10, right: 10, bottom: 70, left: 50};
    var width = fullWidth - margin.left - margin.right;
    var height = fullHeight - margin.top - margin.bottom;

    var color = d3.scale.category20c();

    var x = d3.scale.ordinal()
    .rangeRoundBands([0, width], .1);

    var y = d3.scale.linear()
        .range([height, 0]);

    var xAxis = d3.svg.axis()
        .scale(x)
        .orient("bottom")
        .innerTickSize([0]);
    

    var yAxis = d3.svg.axis()
        .scale(y)
        .orient("left")
        .ticks(8, "$");
    
    var tip = d3.tip()
                    .attr('class', 'd3-tip')
                    .offset([20, 0])
                    .html(function(d) {
                        return "<strong>" 
                            + d.City 
                            + "</strong><hr></br>5 Star: $" 
                            + d.Five
                            + "</br>4 Star: $"
                            + d.Four
                        + "</br>3 Star: $"
                            + d.Three
                        + "</br>2 Star: $"
                            + d.Two
                        + "</br>1 Star: $"
                            + d.One
                        + "<hr></br>Average: $"
                            + d.Average
                        
                        ;
                        
                        /*return 
                        "<span>"return d.City+ ", " +d.Country+"</span></br>"+
                        d.City+ ", " +d.Country+ "</br>Average: $" +d.Average;  
                        */
                    })

    var svg = d3.select("#doubleChart1").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
      .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

      x.domain(data.map(function(d) { return d.City; }));
      y.domain([0, d3.max(data, function(d) {return +d.Five; })]);

      

      svg.append("g")
          .attr("class", "y axis")
          .call(yAxis);

      svg.selectAll(".bar")
          .data(data)
        .enter().append("rect")
          .attr("class", "bar")
          .attr("x", function(d) { return x(d.City); })
          .attr("width", x.rangeBand())
          .attr("y", function(d) { return y(d.Five); })
          .attr("height", function(d) { return height - y(d.Five); })
            .on('mouseover', tip.show)
            .on('mouseout', tip.hide);
    
    svg.append("g")
          .attr("class", "x axis")
          .attr("transform", "translate(0," + height + ")")
          .call(xAxis)
      .selectAll("text")
        .attr("y", 0)
        .attr("x", 5)
        .attr("dy", ".35em")
        .attr("transform", "rotate(-90)")
        .style("text-anchor", "start");
    
    svg.call(tip);
}

function render2 (data) {
                
   
    
}