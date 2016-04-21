function makeDoubleCharts (data) {
                
                data.sort(function(a,b) {return b.Average-a.Average;});
                
                var fullwidth = 1200;
                var fullheight = 450;
                var margin = { top: 0, right: 70, bottom: 120, left: 70};

                var width = fullwidth - margin.left - margin.right;
                var height = fullheight - margin.top - margin.bottom;

                var x = d3.scale.ordinal()
                    .rangeRoundBands([0, width], .1);

                var y = d3.scale.linear()
                    .range([height, 0]);

                var xAxis = d3.svg.axis()
                    .scale(x)
                    .orient("bottom");

                var yAxis = d3.svg.axis()
                    .scale(y)
                    .orient("left")
                    .ticks(10, "$");
                
                var tip = d3.tip()
                    .attr('class', 'd3-tip')
                    .offset([0, 0])
                    .html(function(d) {
                        return d.City+", "+d.Country+"</br> $"+d.Average+" USD";
                  })
                
                var doubleChart = d3.select("#doubleChart").append("svg")
                        .attr("width", fullwidth)
						.attr("height", fullheight)
						.append("g")
						.attr("transform", "translate(" + margin.left + "," + margin.top + ")");
                
              x.domain(data.map(function(d) { return d.City; }));
              y.domain([0, d3.max(data, function(d) { return +d.Average; })+10]);

              doubleChart.append("g")
                  .attr("class", "y axis")
                  .call(yAxis)
                .append("text")
                  .attr("transform", "rotate(-90)")
                  .attr("x", -150)
                  .attr("y", -50)
                 // .attr("dy", ".71em")
                  .style("text-anchor", "end")
                  .text("Average Price (USD)");
                
                doubleChart.append("g")
                    .attr("class", "x axis xaxis")
                    .attr("transform", "translate(0," + height + ")")
                    .call(xAxis)
                    .selectAll("text")  
                    .style("text-anchor", "end")
                    .attr("dx", "-.8em")
                    .attr("dy", "-.6em")
                    .attr("transform", function(d) {
                        return "rotate(-90)" 
                    });
               

              doubleChart.selectAll(".bar")
                  .data(data)
                .enter().append("rect")
                  .attr("class", "bar")
                  .attr("x", function(d) { return x(d.City); })
                  .attr("width", x.rangeBand())
                  .attr("y", function(d) { return y(d.Average); })
                  .attr("height", function(d) { return height - y(d.Average); })
                  .on('mouseover', tip.show)
                  .on('mouseout', tip.hide);
                
                doubleChart.call(tip);
            }