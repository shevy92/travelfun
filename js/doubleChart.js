function makeDoubleCharts (data) {
                
                //data.sort(function(a,b) {return b.City-a.City;});
    
                var fullWidth = 850;
                var fullHeight = 500;
                var margin = { top: 0, right: 70, bottom: 120, left: 75};
    
                var color = d3.scale.category20c();

                /*
                var color = d3.scale.ordinal()
                              .domain(["Europe", "Asia", "Africa", "Middle East", "North America", "South America", "Australia", "Caribbean"])
                              .range("#3182bd", "#c6dbef" , "#e6550d", "#fdd0a2", "#31a354", "#c7e9c0","#9e9ac8", "#dadaeb");
                     */         

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
                 
                var dropDown = d3.select("#filter").append("select")
                    .attr("name", "country-list");
    
                var dropDown2 = d3.select("#filter2").append("select")
                    .attr("name", "country-list");
        
                var options = dropDown.selectAll("option")
                           .data(data)
                         .enter()
                           .append("option");

                options.text(function (d) { return d.City; })
                       .attr("value", function (d) { return d.City; });
    
                var options2 = dropDown2.selectAll("option")
                           .data(data)
                         .enter()
                           .append("option");

                options2.text(function (d) { return d.Region; })
                       .attr("value", function (d) { return d.Region; });
                                      
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
                        return (+d.Average)/15;
                    })
                    //.attr("fill", "#884dff")
                    .style("fill", function(d) { return color(d.Region); })
                    .on('mouseover', tip.show)
                    .on('mouseout', tip.hide);

                doubleChart.append("g")
                    .attr("class", "x axis")
                    .attr("transform", "translate(0," + height + ")")
                    .call(xAxis)
                    .append("text")
                      .attr("x", fullWidth/2)
                      .attr("y", 45)
                      .style("text-anchor", "end")
                      .text("5-Star Prices");

                doubleChart.append("g")
                    .attr("class", "y axis")
                    .call(yAxis)
                    .append("text")
                      .attr("transform", "rotate(-90)")
                      .attr("x", -150)
                      .attr("y", -60)
                      .style("text-anchor", "end")
                      .text("1-Star Prices");
    
                dropDown.on("change", function() {
                      var selected = this.value;
                      displayOthers = this.checked ? "inline" : "none";
                      display = this.checked ? "none" : "inline";


                     // doubleChart.selectAll(".circle")
                    circles
                          .filter(function(d) {return selected != d.City;})
                          //.attr("display", displayOthers);
                          //.attr("fill", "#884dff")
                           // .style("stroke", "#884dff")
                            .style("stroke-width", 0) 
                            .style("opacity", .2);

                      //doubleChart.selectAll(".circle")
                    circles
                          .filter(function(d) {return selected == d.City;})
                          //.attr("display", display);
                            //.attr("fill", "white");
                            .style("stroke", "white")
                            .style("stroke-width", function(d) {
                                    return (+d.Average)/80;
                                }) 
                            .attr("fill", "#884dff")
                            .style("opacity", 1);
                      });
    
                dropDown2.on("change", function() {
                      var selected = this.value;
                      displayOthers = this.checked ? "inline" : "none";
                      display = this.checked ? "none" : "inline";


                     // doubleChart.selectAll(".circle")
                    circles
                            .filter(function(d) {return selected != d.Region;})
                            .style("stroke-width", 0) 
                            .style("opacity", .2);

                      //doubleChart.selectAll(".circle")
                    circles
                          .filter(function(d) {return selected == d.Region;})
                          .style("opacity", 1);
                      });
    

                doubleChart.call(tip);
}