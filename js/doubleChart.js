function makeDoubleCharts (data) {
                
                data.sort(function(a,b) {return b.City-a.City;});
    
                var fullWidth = screen.width*0.7;
                var fullHeight = screen.width*0.45;
                var margin = { top: 0, right: 70, bottom: 120, left: 70};

                var width = fullWidth - margin.left - margin.right;
                var height = fullHeight - margin.top - margin.bottom;
                
                var xScale = d3.scale.linear()
                    .range([0, width]);

                var yScale = d3.scale.linear()
                    .range([height, 0]);

                var xAxis = d3.svg.axis()
                    .scale(xScale)
                    .orient("bottom")
                
                    .ticks(10, "$");

                var yAxis = d3.svg.axis()
                    .scale(yScale)
                    .orient("left")
                    .ticks(10, "$");
                
                 var tip = d3.tip()
                    .attr('class', 'd3-tip')
                    .offset([0, 0])
                    .html(function(d) {
                        return d.City+ ", " +d.Country+ "</br>Average: $" +d.Average;
                    
                        
                        
                        
                  })
        
               
                                      
                xScale.domain(
                    [0, d3.max(data, function(d) { return +d.Five; })+10]);

                yScale.domain(
                    [0, d3.max(data, function(d) { return +d.One; })+10]);
    
                //x.domain(data.map(function(d) { return d.City; }));
                //y.domain([0, d3.max(data, function(d) { return +d.Average; })+10]);

                var doubleChart = d3.select("#doubleChart")
                        .append("svg")
                        .attr("width", fullWidth)
                        .attr("height", fullHeight)
                        .append("g")
                            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

                var circles = doubleChart.selectAll("circle")
                                .data(data)
                                .enter()
                                .append("circle");

                circles.attr("cx", function(d) {
                        return xScale(+d.Five);
                    })
                    .attr("cy", function(d) {
                        return yScale(+d.One);
                    })
                    .attr("r", function(d) {
                        return (+d.Average)/20;
                    })
                    .attr("fill", "#8D82BD")
                    .on('mouseover', tip.show)
                    .on('mouseout', tip.hide);

                doubleChart.append("g")
                    .attr("class", "x axis")
                    .attr("transform", "translate(0," + height + ")")
                    .call(xAxis)
                    .append("text")
                      .attr("x", fullWidth/2)
                      .attr("y", 40)
                      .style("text-anchor", "end")
                      .text("5-Star Prices");

                doubleChart.append("g")
                    .attr("class", "y axis")
                    .call(yAxis)
                    .append("text")
                      .attr("transform", "rotate(-90)")
                      .attr("x", -150)
                      .attr("y", -50)
                      .style("text-anchor", "end")
                      .text("1-Star Prices");

                doubleChart.call(tip);
}