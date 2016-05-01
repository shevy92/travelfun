
//Five-------------------
function render1 (data) {
   $("#doubleChart1").empty();
    data.sort(function(a,b) {return +b.Five-+a.Five;});
    
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
                            + d.City +", " + d.Country
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
                        + "<hr></br>Hostel: $"
                            + d.Hostel
                        + "</br>AirBnB: $"
                            + d.Airbnb_Price
                        + "<hr></br>Average: $"
                            + d.Average
                        
                        ;
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
    
    var bars = svg.selectAll("rect").data(data);

      
          bars
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
   $("#doubleChart2").empty();
    data.sort(function(a,b) {return +a.Five-+b.Five;});
    
    data = data.slice(0,10);

    var fullWidth = document.getElementById('doubleChart2').offsetWidth;
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
                            + d.City +", " + d.Country
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
                        + "<hr></br>Hostel: $"
                            + d.Hostel
                        + "</br>AirBnB: $"
                            + d.Airbnb_Price
                        + "<hr></br>Average: $"
                            + d.Average
                        
                        ;
                    })

    var svg = d3.select("#doubleChart2").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
      .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

      x.domain(data.map(function(d) { return d.City; }));
      y.domain([0, d3.max(data, function(d) {return +d.Five; })]);

      

      svg.append("g")
          .attr("class", "y axis")
          .call(yAxis);
    
    var bars = svg.selectAll("rect").data(data);

      
          bars
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

//Four-------------------
function render1Four (data) {
    $("#doubleChart1").empty();
    
    data.sort(function(a,b) {return +b.Four-+a.Four;});
   
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
                            + d.City +", " + d.Country
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
                        + "<hr></br>Hostel: $"
                            + d.Hostel
                        + "</br>AirBnB: $"
                            + d.Airbnb_Price
                        + "<hr></br>Average: $"
                            + d.Average
                        
                        ;
                    })

    var svg = d3.select("#doubleChart1").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
      .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

      x.domain(data.map(function(d) { return d.City; }));
      y.domain([0, d3.max(data, function(d) {return +d.Four; })]);

      

      svg.append("g")
          .attr("class", "y axis")
          .call(yAxis);
    
    var bars = svg.selectAll("rect").data(data);

      
          bars
            .enter().append("rect")
              .attr("class", "bar")
              .attr("x", function(d) { return x(d.City); })
              .attr("width", x.rangeBand())
              .attr("y", function(d) { return y(d.Four); })
              .attr("height", function(d) { return height - y(d.Four); })
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
function render2Four (data) {
    $("#doubleChart2").empty();
    
    data.sort(function(a,b) {return +a.Four-+b.Four;});
   
    data = data.slice(0,10);

    var fullWidth = document.getElementById('doubleChart2').offsetWidth;
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
                            + d.City +", " + d.Country
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
                        + "<hr></br>Hostel: $"
                            + d.Hostel
                        + "</br>AirBnB: $"
                            + d.Airbnb_Price
                        + "<hr></br>Average: $"
                            + d.Average
                        
                        ;
                    })

    var svg = d3.select("#doubleChart2").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
      .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

      x.domain(data.map(function(d) { return d.City; }));
      y.domain([0, d3.max(data, function(d) {return +d.Four; })]);

      

      svg.append("g")
          .attr("class", "y axis")
          .call(yAxis);
    
    var bars = svg.selectAll("rect").data(data);

      
          bars
            .enter().append("rect")
              .attr("class", "bar")
              .attr("x", function(d) { return x(d.City); })
              .attr("width", x.rangeBand())
              .attr("y", function(d) { return y(d.Four); })
              .attr("height", function(d) { return height - y(d.Four); })
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

//Three-------------------
function render1Three (data) {
    $("#doubleChart1").empty();
    
    data.sort(function(a,b) {return +b.Three-+a.Three;});
   
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
                            + d.City +", " + d.Country
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
                        + "<hr></br>Hostel: $"
                            + d.Hostel
                        + "</br>AirBnB: $"
                            + d.Airbnb_Price
                        + "<hr></br>Average: $"
                            + d.Average
                        
                        ;
                    })

    var svg = d3.select("#doubleChart1").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
      .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

      x.domain(data.map(function(d) { return d.City; }));
      y.domain([0, d3.max(data, function(d) {return +d.Three; })]);

      

      svg.append("g")
          .attr("class", "y axis")
          .call(yAxis);
    
    var bars = svg.selectAll("rect").data(data);

      
          bars
            .enter().append("rect")
              .attr("class", "bar")
              .attr("x", function(d) { return x(d.City); })
              .attr("width", x.rangeBand())
              .attr("y", function(d) { return y(d.Three); })
              .attr("height", function(d) { return height - y(d.Three); })
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
function render2Three (data) {
    $("#doubleChart2").empty();
    
    data.sort(function(a,b) {return +a.Three-+b.Three;});
   
    data = data.slice(0,10);

    var fullWidth = document.getElementById('doubleChart2').offsetWidth;
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
                            + d.City +", " + d.Country
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
                        + "<hr></br>Hostel: $"
                            + d.Hostel
                        + "</br>AirBnB: $"
                            + d.Airbnb_Price
                        + "<hr></br>Average: $"
                            + d.Average
                        
                        ;
                    })

    var svg = d3.select("#doubleChart2").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
      .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

      x.domain(data.map(function(d) { return d.City; }));
      y.domain([0, d3.max(data, function(d) {return +d.Three; })]);

      

      svg.append("g")
          .attr("class", "y axis")
          .call(yAxis);
    
    var bars = svg.selectAll("rect").data(data);

      
          bars
            .enter().append("rect")
              .attr("class", "bar")
              .attr("x", function(d) { return x(d.City); })
              .attr("width", x.rangeBand())
              .attr("y", function(d) { return y(d.Three); })
              .attr("height", function(d) { return height - y(d.Three); })
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

//Two-------------------
function render1Two (data) {
    $("#doubleChart1").empty();
    
    data.sort(function(a,b) {return +b.Two-+a.Two;});
   
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
                            + d.City +", " + d.Country
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
                        + "<hr></br>Hostel: $"
                            + d.Hostel
                        + "</br>AirBnB: $"
                            + d.Airbnb_Price
                        + "<hr></br>Average: $"
                            + d.Average
                        
                        ;
                    })

    var svg = d3.select("#doubleChart1").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
      .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

      x.domain(data.map(function(d) { return d.City; }));
      y.domain([0, d3.max(data, function(d) {return +d.Two; })]);

      

      svg.append("g")
          .attr("class", "y axis")
          .call(yAxis);
    
    var bars = svg.selectAll("rect").data(data);

      
          bars
            .enter().append("rect")
              .attr("class", "bar")
              .attr("x", function(d) { return x(d.City); })
              .attr("width", x.rangeBand())
              .attr("y", function(d) { return y(d.Two); })
              .attr("height", function(d) { return height - y(d.Two); })
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
function render2Two (data) {
    $("#doubleChart2").empty();
    
    data.sort(function(a,b) {return +a.Two-+b.Two;});
   
    data = data.slice(0,10);

    var fullWidth = document.getElementById('doubleChart2').offsetWidth;
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
                            + d.City +", " + d.Country
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
                        + "<hr></br>Hostel: $"
                            + d.Hostel
                        + "</br>AirBnB: $"
                            + d.Airbnb_Price
                        + "<hr></br>Average: $"
                            + d.Average
                        
                        ;
                    })

    var svg = d3.select("#doubleChart2").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
      .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

      x.domain(data.map(function(d) { return d.City; }));
      y.domain([0, d3.max(data, function(d) {return +d.Two; })]);

      

      svg.append("g")
          .attr("class", "y axis")
          .call(yAxis);
    
    var bars = svg.selectAll("rect").data(data);

      
          bars
            .enter().append("rect")
              .attr("class", "bar")
              .attr("x", function(d) { return x(d.City); })
              .attr("width", x.rangeBand())
              .attr("y", function(d) { return y(d.Two); })
              .attr("height", function(d) { return height - y(d.Two); })
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

//One-------------------
function render1One (data) {
    $("#doubleChart1").empty();
    
    data.sort(function(a,b) {return +b.One-+a.One;});
   
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
                            + d.City +", " + d.Country
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
                        + "<hr></br>Hostel: $"
                            + d.Hostel
                        + "</br>AirBnB: $"
                            + d.Airbnb_Price
                        + "<hr></br>Average: $"
                            + d.Average
                        
                        ;
                    })

    var svg = d3.select("#doubleChart1").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
      .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

      x.domain(data.map(function(d) { return d.City; }));
      y.domain([0, d3.max(data, function(d) {return +d.One; })]);

      

      svg.append("g")
          .attr("class", "y axis")
          .call(yAxis);
    
    var bars = svg.selectAll("rect").data(data);

      
          bars
            .enter().append("rect")
              .attr("class", "bar")
              .attr("x", function(d) { return x(d.City); })
              .attr("width", x.rangeBand())
              .attr("y", function(d) { return y(d.One); })
              .attr("height", function(d) { return height - y(d.One); })
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
function render2One (data) {
    $("#doubleChart2").empty();
    
    data.sort(function(a,b) {return +a.One-+b.One;});
   
    data = data.slice(0,10);

    var fullWidth = document.getElementById('doubleChart2').offsetWidth;
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
                            + d.City +", " + d.Country
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
                        + "<hr></br>Hostel: $"
                            + d.Hostel
                        + "</br>AirBnB: $"
                            + d.Airbnb_Price
                        + "<hr></br>Average: $"
                            + d.Average
                        
                        ;
                    })

    var svg = d3.select("#doubleChart2").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
      .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

      x.domain(data.map(function(d) { return d.City; }));
      y.domain([0, d3.max(data, function(d) {return +d.One; })]);

      

      svg.append("g")
          .attr("class", "y axis")
          .call(yAxis);
    
    var bars = svg.selectAll("rect").data(data);

      
          bars
            .enter().append("rect")
              .attr("class", "bar")
              .attr("x", function(d) { return x(d.City); })
              .attr("width", x.rangeBand())
              .attr("y", function(d) { return y(d.One); })
              .attr("height", function(d) { return height - y(d.One); })
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

//Hostel-------------------
function render1Hostel (data) {
    $("#doubleChart1").empty();
    
    data.sort(function(a,b) {return +b.Hostel-+a.Hostel;});
   
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
                            + d.City +", " + d.Country
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
                        + "<hr></br>Hostel: $"
                            + d.Hostel
                        + "</br>AirBnB: $"
                            + d.Airbnb_Price
                        + "<hr></br>Average: $"
                            + d.Average
                        
                        ;
                    })

    var svg = d3.select("#doubleChart1").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
      .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

      x.domain(data.map(function(d) { return d.City; }));
      y.domain([0, d3.max(data, function(d) {return +d.Hostel; })]);

      

      svg.append("g")
          .attr("class", "y axis")
          .call(yAxis);
    
    var bars = svg.selectAll("rect").data(data);

      
          bars
            .enter().append("rect")
              .attr("class", "bar")
              .attr("x", function(d) { return x(d.City); })
              .attr("width", x.rangeBand())
              .attr("y", function(d) { return y(d.Hostel); })
              .attr("height", function(d) { return height - y(d.Hostel); })
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
function render2Hostel (data) {
    $("#doubleChart2").empty();
    
    data.sort(function(a,b) {return +a.Hostel-+b.Hostel;});
   
    data = data.slice(0,10);

    var fullWidth = document.getElementById('doubleChart2').offsetWidth;
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
                            + d.City +", " + d.Country
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
                        + "<hr></br>Hostel: $"
                            + d.Hostel
                        + "</br>AirBnB: $"
                            + d.Airbnb_Price
                        + "<hr></br>Average: $"
                            + d.Average
                        
                        ;
                    })

    var svg = d3.select("#doubleChart2").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
      .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

      x.domain(data.map(function(d) { return d.City; }));
      y.domain([0, d3.max(data, function(d) {return +d.Hostel; })]);

      

      svg.append("g")
          .attr("class", "y axis")
          .call(yAxis);
    
    var bars = svg.selectAll("rect").data(data);

      
          bars
            .enter().append("rect")
              .attr("class", "bar")
              .attr("x", function(d) { return x(d.City); })
              .attr("width", x.rangeBand())
              .attr("y", function(d) { return y(d.Hostel); })
              .attr("height", function(d) { return height - y(d.Hostel); })
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

//Airbnb-------------------
function render1Airbnb (data) {
    $("#doubleChart1").empty();
    
    data.sort(function(a,b) {return +b.Airbnb_Price-+a.Airbnb_Price;});
   
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
                            + d.City +", " + d.Country
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
                        + "<hr></br>Hostel: $"
                            + d.Hostel
                        + "</br>AirBnB: $"
                            + d.Airbnb_Price
                        + "<hr></br>Average: $"
                            + d.Average
                        
                        ;
                    })

    var svg = d3.select("#doubleChart1").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
      .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

      x.domain(data.map(function(d) { return d.City; }));
      y.domain([0, d3.max(data, function(d) {return +d.Airbnb_Price; })]);

      

      svg.append("g")
          .attr("class", "y axis")
          .call(yAxis);
    
    var bars = svg.selectAll("rect").data(data);

      
          bars
            .enter().append("rect")
              .attr("class", "bar")
              .attr("x", function(d) { return x(d.City); })
              .attr("width", x.rangeBand())
              .attr("y", function(d) { return y(d.Airbnb_Price); })
              .attr("height", function(d) { return height - y(d.Airbnb_Price); })
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
function render2Airbnb(data) {
    $("#doubleChart2").empty();
    
    data.sort(function(a,b) {return +b.Airbnb_Price-+a.Airbnb_Price;});
   
    data = data.slice(30,40);

    var fullWidth = document.getElementById('doubleChart2').offsetWidth;
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
                            + d.City +", " + d.Country
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
                        + "<hr></br>Hostel: $"
                            + d.Hostel
                        + "</br>AirBnB: $"
                            + d.Airbnb_Price
                        + "<hr></br>Average: $"
                            + d.Average
                        
                        ;
                    })

    var svg = d3.select("#doubleChart2").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
      .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

      x.domain(data.map(function(d) { return d.City; }));
      y.domain([0, d3.max(data, function(d) {return +d.Airbnb_Price; })]);

      

      svg.append("g")
          .attr("class", "y axis")
          .call(yAxis);
    
    var bars = svg.selectAll("rect").data(data);

      
          bars
            .enter().append("rect")
              .attr("class", "bar")
              .attr("x", function(d) { return x(d.City); })
              .attr("width", x.rangeBand())
              .attr("y", function(d) { return y(+d.Airbnb_Price); })
              .attr("height", function(d) { return height - y(+d.Airbnb_Price); })
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

//Average-------------------
function render1Average (data) {
    $("#doubleChart1").empty();
    
    data.sort(function(a,b) {return +b.Average-+a.Average;});
   
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
                            + d.City +", " + d.Country
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
                        + "<hr></br>Hostel: $"
                            + d.Hostel
                        + "</br>AirBnB: $"
                            + d.Airbnb_Price
                        + "<hr></br>Average: $"
                            + d.Average
                        
                        ;
                    })

    var svg = d3.select("#doubleChart1").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
      .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

      x.domain(data.map(function(d) { return d.City; }));
      y.domain([0, d3.max(data, function(d) {return +d.Average; })]);

      

      svg.append("g")
          .attr("class", "y axis")
          .call(yAxis);
    
    var bars = svg.selectAll("rect").data(data);

      
          bars
            .enter().append("rect")
              .attr("class", "bar")
              .attr("x", function(d) { return x(d.City); })
              .attr("width", x.rangeBand())
              .attr("y", function(d) { return y(d.Average); })
              .attr("height", function(d) { return height - y(d.Average); })
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
function render2Average (data) {
    $("#doubleChart2").empty();
    
    data.sort(function(a,b) {return +a.Average-+b.Average;});
   
    data = data.slice(0,10);

    var fullWidth = document.getElementById('doubleChart2').offsetWidth;
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
                            + d.City +", " + d.Country
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
                        + "<hr></br>Hostel: $"
                            + d.Hostel
                        + "</br>AirBnB: $"
                            + d.Airbnb_Price
                        + "<hr></br>Average: $"
                            + d.Average
                        
                        ;
                    })

    var svg = d3.select("#doubleChart2").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
      .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

      x.domain(data.map(function(d) { return d.City; }));
      y.domain([0, d3.max(data, function(d) {return +d.Average; })]);

      

      svg.append("g")
          .attr("class", "y axis")
          .call(yAxis);
    
    var bars = svg.selectAll("rect").data(data);

      
          bars
            .enter().append("rect")
              .attr("class", "bar")
              .attr("x", function(d) { return x(d.City); })
              .attr("width", x.rangeBand())
              .attr("y", function(d) { return y(d.Average); })
              .attr("height", function(d) { return height - y(d.Average); })
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
