const COLORS = {
  BLACK: "#000000",
  MUSTARD: "#E69F00",
  LIGHT_BLUE: "#56B4E9",
  GREEN: "#009E73",
  YELLOW: "#F0E442",
  BLUE: "#0072B2",
  ORANGE: "#D55E00",
  PINK: "#CC79A7",
};

const SECTORS = {
  TECHNOLOGY: "TECHNOLOGY",
  BANKING: "BANKING",
  INDUSTRIAL: "INDUSTRIAL",
  ENERGY: "ENERGY",
  CONSUMER_GOODS: "CONSUMER_GOODS",
  HEALTHCARE: "HEALTHCARE",
  COMMUNICATION_SERVICES: "COMMUNICATION_SERVICES",
};

const bubble_chart_dataset = {
  2018: [
    {
      type: "Technology",
      sector: SECTORS.TECHNOLOGY,
      yValue: 32.62,
      xValue: 5,
      radius: 40.692,
      color: COLORS.MUSTARD,
    },
    {
      type: "Finance",
      sector: SECTORS.BANKING,
      yValue: 15.57,
      xValue: 5,
      radius: 15.857,
      color: COLORS.LIGHT_BLUE,
    },
    {
      type: "Industrials",
      sector: SECTORS.INDUSTRIAL,
      yValue: 8.94,
      xValue: 3,
      radius: 12.202,
      color: COLORS.GREEN,
    },
    {
      type: "Energy",
      sector: SECTORS.ENERGY,
      yValue: 26.14,
      xValue: 2,
      radius: 24.796,
      color: COLORS.YELLOW,
    },
    {
      type: "Consumer Goods",
      sector: SECTORS.CONSUMER_GOODS,
      yValue: 10.29,
      xValue: 6,
      radius: 19.164,
      color: COLORS.BLUE,
    },
    {
      type: "Healthcare",
      sector: SECTORS.HEALTHCARE,
      yValue: 12.89,
      xValue: 5,
      radius: 21.896,
      color: COLORS.PINK,
    },
    {
      type: "Communication Services",
      sector: SECTORS.COMMUNICATION_SERVICES,
      yValue: 17.37,
      xValue: 2,
      radius: 19.838,
      color: COLORS.ORANGE,
    },
  ],
  2017: [
    {
      type: "Technology",
      sector: SECTORS.TECHNOLOGY,
      yValue: 28.97,
      xValue: 5,
      radius: 41.363,
      color: COLORS.MUSTARD,
    },
    {
      type: "Finance",
      sector: SECTORS.BANKING,
      yValue: 13.9,
      xValue: 5,
      radius: 17.132,
      color: COLORS.LIGHT_BLUE,
    },
    {
      type: "Industrials",
      sector: SECTORS.INDUSTRIAL,
      yValue: 7.44,
      xValue: 3,
      radius: 13.652,
      color: COLORS.GREEN,
    },
    {
      type: "Energy",
      sector: SECTORS.ENERGY,
      yValue: 14.1,
      xValue: 2,
      radius: 29.608,
      color: COLORS.YELLOW,
    },
    {
      type: "Consumer Goods",
      sector: SECTORS.CONSUMER_GOODS,
      yValue: 11.62,
      xValue: 6,
      radius: 19.687,
      color: COLORS.BLUE,
    },
    {
      type: "Healthcare",
      sector: SECTORS.HEALTHCARE,
      yValue: 11.75,
      xValue: 5,
      radius: 20.602,
      color: COLORS.PINK,
    },
    {
      type: "Communication Services",
      sector: SECTORS.COMMUNICATION_SERVICES,
      yValue: 17.46,
      xValue: 2,
      radius: 18.898,
      color: COLORS.ORANGE,
    },
  ],
  2016: [
    {
      type: "Technology",
      sector: SECTORS.TECHNOLOGY,
      yValue: 25.07,
      xValue: 5,
      radius: 31.47,
      color: COLORS.MUSTARD,
    },
    {
      type: "Finance",
      sector: SECTORS.BANKING,
      yValue: 13.14,
      xValue: 5,
      radius: 13.867,
      color: COLORS.LIGHT_BLUE,
    },
    {
      type: "Industrials",
      sector: SECTORS.INDUSTRIAL,
      yValue: 4.42,
      xValue: 3,
      radius: 8.591,
      color: COLORS.GREEN,
    },
    {
      type: "Energy",
      sector: SECTORS.ENERGY,
      yValue: 4.5,
      xValue: 2,
      radius: 29.824,
      color: COLORS.YELLOW,
    },
    {
      type: "Consumer Goods",
      sector: SECTORS.CONSUMER_GOODS,
      yValue: 11.67,
      xValue: 6,
      radius: 16.08,
      color: COLORS.BLUE,
    },
    {
      type: "Healthcare",
      sector: SECTORS.HEALTHCARE,
      yValue: 10.45,
      xValue: 5,
      radius: 18.289,
      color: COLORS.PINK,
    },
    {
      type: "Communication Services",
      sector: SECTORS.COMMUNICATION_SERVICES,
      yValue: 17.81,
      xValue: 2,
      radius: 19.174,
      color: COLORS.ORANGE,
    },
  ],
};

const pie_chart_dataset = {
  2018: {
    [SECTORS.TECHNOLOGY]: [
      {
        type: "AAPL",
        name: "Apple",
        yValue: 746.07,
        earnings: 73.17,
        color: COLORS.BLUE,
      },
      {
        type: "CSCO",
        name: "Cisco",
        yValue: 194.81,
        earnings: 14.91,
        color: COLORS.GREEN,
      },
      {
        type: "IBM",
        name: "IBM",
        yValue: 101.44,
        earnings: 11.34,
        color: COLORS.MUSTARD,
      },
      {
        type: "INTC",
        name: "Intel",
        yValue: 211.93,
        earnings: 23.78,
        color: COLORS.ORANGE,
      },
      {
        type: "MSFT",
        name: "Microsoft",
        yValue: 780.36,
        earnings: 39.92,
        color: COLORS.PINK,
      },
    ],
    [SECTORS.BANKING]: [
      {
        type: "AXP",
        name: "American Express",
        yValue: 80.73,
        earnings: 8.12,
        color: COLORS.BLUE,
      },
      {
        type: "GS",
        name: "Goldman Sachs",
        yValue: 61.43,
        earnings: 12.48,
        color: COLORS.GREEN,
      },
      {
        type: "JPM",
        name: "J.P. Morgan Chase & Co",
        yValue: 319.78,
        earnings: 40.76,
        color: COLORS.MUSTARD,
      },
      {
        type: "TRV",
        name: "Travelers Companies",
        yValue: 31.56,
        earnings: 3.31,
        color: COLORS.ORANGE,
      },
      {
        type: "V",
        name: "Visa",
        yValue: 299.35,
        earnings: 13.19,
        color: COLORS.PINK,
      },
    ],
    [SECTORS.CONSUMER_GOODS]: [
      {
        type: "HD",
        name: "Home Depot",
        yValue: 194.07,
        earnings: 15.43,
        color: COLORS.BLUE,
      },
      {
        type: "KO",
        name: "Coca-Cola",
        yValue: 202.08,
        earnings: 8.86,
        color: COLORS.GREEN,
      },
      {
        type: "MCD",
        name: "McDonald's",
        yValue: 136.21,
        earnings: 7.81,
        color: COLORS.MUSTARD,
      },
      {
        type: "NKE",
        name: "Nike",
        yValue: 116.91,
        earnings: 4.72,
        color: COLORS.ORANGE,
      },
      {
        type: "PG",
        name: "Procter & Gamble ",
        yValue: 229.94,
        earnings: 13.93,
        color: COLORS.YELLOW,
      },
      {
        type: "WMT",
        name: "Walmart",
        yValue: 270.62,
        earnings: 10.97,
        color: COLORS.PINK,
      },
    ],
    [SECTORS.ENERGY]: [
      {
        type: "CVX",
        name: "Chevron Corp",
        yValue: 207.0,
        earnings: 21.32,
        color: COLORS.BLUE,
      },
      {
        type: "XOM",
        name: "Exxon Mobil",
        yValue: 288.92,
        earnings: 30.95,
        color: COLORS.GREEN,
      },
    ],
    [SECTORS.INDUSTRIAL]: [
      {
        type: "BA",
        name: "Boeing",
        yValue: 183.06,
        earnings: 11.6,
        color: COLORS.MUSTARD,
      },
      {
        type: "CAT",
        name: "Caterpillar",
        yValue: 73.13,
        earnings: 8.22,
        color: COLORS.YELLOW,
      },
      {
        type: "MMM",
        name: "3M",
        yValue: 109.86,
        earnings: 7.0,
        color: COLORS.PINK,
      },
    ],
    [SECTORS.HEALTHCARE]: [
      {
        type: "JNJ",
        name: "Johnson & Johnson",
        yValue: 343.57,
        earnings: 19.0,
        color: COLORS.PINK,
      },
      {
        type: "MRK",
        name: "Merck & Co",
        yValue: 198.09,
        earnings: 9.47,
        color: COLORS.MUSTARD,
      },
      {
        type: "PFE",
        name: "Pfizer",
        yValue: 249.54,
        earnings: 13.2,
        color: COLORS.GREEN,
      },
      {
        type: "UNH",
        name: "UnitedHealth Group",
        yValue: 239.15,
        earnings: 15.94,
        color: COLORS.YELLOW,
      },
      {
        type: "WBA",
        name: "Walgreens Boots Alliance",
        yValue: 64.46,
        earnings: 6.83,
        color: COLORS.BLUE,
      },
    ],
    [SECTORS.COMMUNICATION_SERVICES]: [
      {
        type: "DIS",
        name: "Walt Disney",
        yValue: 164.47,
        earnings: 15.11,
        color: COLORS.YELLOW,
      },
      {
        type: "VZ",
        name: "Verizon",
        yValue: 232.3,
        earnings: 19.62,
        color: COLORS.GREEN,
      },
    ],
  },
  2017: {
    [SECTORS.TECHNOLOGY]: [
      {
        type: "AAPL",
        name: "Apple",
        yValue: 860.88,
        earnings: 69.47,
        color: COLORS.BLUE,
      },
      {
        type: "CSCO",
        name: "Cisco",
        yValue: 189.34,
        earnings: 13.19,
        color: COLORS.GREEN,
      },
      {
        type: "IBM",
        name: "IBM",
        yValue: 142.03,
        earnings: 11.4,
        color: COLORS.MUSTARD,
      },
      {
        type: "INTC",
        name: "Intel",
        yValue: 216.02,
        earnings: 20.99,
        color: COLORS.ORANGE,
      },
      {
        type: "MSFT",
        name: "Microsoft",
        yValue: 659.9,
        earnings: 29.79,
        color: COLORS.PINK,
      },
    ],
    [SECTORS.BANKING]: [
      {
        type: "AXP",
        name: "American Express",
        yValue: 86.2,
        earnings: 7.44,
        color: COLORS.BLUE,
      },
      {
        type: "GS",
        name: "Goldman Sachs",
        yValue: 96.09,
        earnings: 11.13,
        color: COLORS.GREEN,
      },
      {
        type: "JPM",
        name: "J.P. Morgan Chase & Co",
        yValue: 371.05,
        earnings: 35.9,
        color: COLORS.MUSTARD,
      },
      {
        type: "TRV",
        name: "Travelers Companies",
        yValue: 37.12,
        earnings: 3.09,
        color: COLORS.ORANGE,
      },
      {
        type: "V",
        name: "Visa",
        yValue: 266.14,
        earnings: 11.95,
        color: COLORS.PINK,
      },
    ],
    [SECTORS.CONSUMER_GOODS]: [
      {
        type: "HD",
        name: "Home Depot",
        yValue: 221.32,
        earnings: 14.48,
        color: COLORS.BLUE,
      },
      {
        type: "KO",
        name: "Coca-Cola",
        yValue: 195.47,
        earnings: 7.58,
        color: COLORS.GREEN,
      },
      {
        type: "MCD",
        name: "McDonald's",
        yValue: 137.21,
        earnings: 8.57,
        color: COLORS.MUSTARD,
      },
      {
        type: "NKE",
        name: "Nike",
        yValue: 101.58,
        earnings: 4.42,
        color: COLORS.ORANGE,
      },
      {
        type: "PG",
        name: "Procter & Gamble ",
        yValue: 233.09,
        earnings: 14.49,
        color: COLORS.YELLOW,
      },
      {
        type: "WMT",
        name: "Walmart",
        yValue: 292.53,
        earnings: 20.18,
        color: COLORS.PINK,
      },
    ],
    [SECTORS.ENERGY]: [
      {
        type: "CVX",
        name: "Chevron Corp",
        yValue: 237.78,
        earnings: 9.52,
        color: COLORS.BLUE,
      },
      {
        type: "XOM",
        name: "Exxon Mobil",
        yValue: 354.39,
        earnings: 18.67,
        color: COLORS.GREEN,
      },
    ],
    [SECTORS.INDUSTRIAL]: [
      {
        type: "BA",
        name: "Boeing",
        yValue: 175.64,
        earnings: 10.16,
        color: COLORS.MUSTARD,
      },
      {
        type: "CAT",
        name: "Caterpillar",
        yValue: 93.74,
        earnings: 4.61,
        color: COLORS.YELLOW,
      },
      {
        type: "MMM",
        name: "3M",
        yValue: 140.18,
        earnings: 7.54,
        color: COLORS.PINK,
      },
    ],
    [SECTORS.HEALTHCARE]: [
      {
        type: "JNJ",
        name: "Johnson & Johnson",
        yValue: 375.36,
        earnings: 18.6,
        color: COLORS.PINK,
      },
      {
        type: "MRK",
        name: "Merck & Co",
        yValue: 153.3,
        earnings: 7.27,
        color: COLORS.MUSTARD,
      },
      {
        type: "PFE",
        name: "Pfizer",
        yValue: 215.89,
        earnings: 13.57,
        color: COLORS.GREEN,
      },
      {
        type: "UNH",
        name: "UnitedHealth Group",
        yValue: 213.64,
        earnings: 14.02,
        color: COLORS.YELLOW,
      },
      {
        type: "WBA",
        name: "Walgreens Boots Alliance",
        yValue: 71.92,
        earnings: 5.28,
        color: COLORS.BLUE,
      },
    ],
    [SECTORS.COMMUNICATION_SERVICES]: [
      {
        type: "DIS",
        name: "Walt Disney",
        yValue: 162.04,
        earnings: 14.34,
        color: COLORS.YELLOW,
      },
      {
        type: "VZ",
        name: "Verizon",
        yValue: 215.92,
        earnings: 20.59,
        color: COLORS.GREEN,
      },
    ],
  },
  2016: {
    [SECTORS.TECHNOLOGY]: [
      {
        type: "AAPL",
        name: "Apple",
        yValue: 608.96,
        earnings: 62.68,
        color: COLORS.BLUE,
      },
      {
        type: "CSCO",
        name: "Cisco",
        yValue: 151.69,
        earnings: 13.45,
        color: COLORS.GREEN,
      },
      {
        type: "IBM",
        name: "IBM",
        yValue: 157.83,
        earnings: 12.33,
        color: COLORS.MUSTARD,
      },
      {
        type: "INTC",
        name: "Intel",
        yValue: 171.88,
        earnings: 13.66,
        color: COLORS.ORANGE,
      },
      {
        type: "MSFT",
        name: "Microsoft",
        yValue: 483.16,
        earnings: 23.23,
        color: COLORS.PINK,
      },
    ],
    [SECTORS.BANKING]: [
      {
        type: "AXP",
        name: "American Express",
        yValue: 67.8,
        earnings: 8.09,
        color: COLORS.BLUE,
      },
      {
        type: "GS",
        name: "Goldman Sachs",
        yValue: 95.21,
        earnings: 10.3,
        color: COLORS.GREEN,
      },
      {
        type: "JPM",
        name: "J.P. Morgan Chase & Co",
        yValue: 308.76,
        earnings: 34.53,
        color: COLORS.MUSTARD,
      },
      {
        type: "TRV",
        name: "Travelers Companies",
        yValue: 34.77,
        earnings: 4.41,
        color: COLORS.ORANGE,
      },
      {
        type: "V",
        name: "Visa",
        yValue: 186.81,
        earnings: 8.35,
        color: COLORS.PINK,
      },
    ],
    [SECTORS.CONSUMER_GOODS]: [
      {
        type: "HD",
        name: "Home Depot",
        yValue: 163.33,
        earnings: 13.08,
        color: COLORS.BLUE,
      },
      {
        type: "KO",
        name: "Coca-Cola",
        yValue: 178.81,
        earnings: 8.86,
        color: COLORS.GREEN,
      },
      {
        type: "MCD",
        name: "McDonald's",
        yValue: 101.08,
        earnings: 6.86,
        color: COLORS.MUSTARD,
      },
      {
        type: "NKE",
        name: "Nike",
        yValue: 84.17,
        earnings: 4.48,
        color: COLORS.ORANGE,
      },
      {
        type: "PG",
        name: "Procter & Gamble ",
        yValue: 224.99,
        earnings: 13.45,
        color: COLORS.YELLOW,
      },
      {
        type: "WMT",
        name: "Walmart",
        yValue: 212.41,
        earnings: 23.28,
        color: COLORS.PINK,
      },
    ],
    [SECTORS.ENERGY]: [
      {
        type: "CVX",
        name: "Chevron Corp",
        yValue: 222.19,
        earnings: 1.96,
        color: COLORS.BLUE,
      },
      {
        type: "XOM",
        name: "Exxon Mobil",
        yValue: 374.28,
        earnings: 7.96,
        color: COLORS.GREEN,
      },
    ],
    [SECTORS.INDUSTRIAL]: [
      {
        type: "BA",
        name: "Boeing",
        yValue: 96.08,
        earnings: 5.56,
        color: COLORS.MUSTARD,
      },
      {
        type: "CAT",
        name: "Caterpillar",
        yValue: 54.25,
        earnings: 0.64,
        color: COLORS.YELLOW,
      },
      {
        type: "MMM",
        name: "3M",
        yValue: 107.4,
        earnings: 7.05,
        color: COLORS.PINK,
      },
    ],
    [SECTORS.HEALTHCARE]: [
      {
        type: "JNJ",
        name: "Johnson & Johnson",
        yValue: 313.43,
        earnings: 19.74,
        color: COLORS.PINK,
      },
      {
        type: "MRK",
        name: "Merck & Co",
        yValue: 162.31,
        earnings: 5.35,
        color: COLORS.MUSTARD,
      },
      {
        type: "PFE",
        name: "Pfizer",
        yValue: 197.1,
        earnings: 9.53,
        color: COLORS.GREEN,
      },
      {
        type: "UNH",
        name: "UnitedHealth Group",
        yValue: 152.32,
        earnings: 11.86,
        color: COLORS.YELLOW,
      },
      {
        type: "WBA",
        name: "Walgreens Boots Alliance",
        yValue: 89.3,
        earnings: 5.77,
        color: COLORS.BLUE,
      },
    ],
    [SECTORS.COMMUNICATION_SERVICES]: [
      {
        type: "DIS",
        name: "Walt Disney",
        yValue: 165.86,
        earnings: 14.64,
        color: COLORS.YELLOW,
      },
      {
        type: "VZ",
        name: "Verizon",
        yValue: 217.61,
        earnings: 20.98,
        color: COLORS.GREEN,
      },
    ],
  },
};

// default values
let selectedSector = SECTORS.TECHNOLOGY;
let selectedYear = 2018;
let showPieHoverEffect = false;

// show the donut legends for the donut chart
function showDonutChartLegends() {
  document.getElementById("pie-legend").innerHTML = (function () {
    let innerHtml = `<div style="font-weight: bold; padding-bottom: 10px; font-size: 18px;">Companies</div>`;
    pie_chart_dataset[selectedYear][selectedSector].map(({ color, name }) => {
      innerHtml += `<div style="display: flex; align-items: center; padding-bottom: 10px" >
      <div style="background: ${color}; height: 20px; width: 20px; margin-right: 7px; border: 1px solid"}></div>
      <div>${name}</div>
      </div>`;
    });
    return innerHtml;
  })();
}

// toggle between the bubble chart and the donnut chart
function toggleCharts() {
  const bubbleChartInstance =
    document.getElementsByClassName("bubble-chart")[0];
  const donutChartInstance = document.getElementsByClassName("donut-chart")[0];
  if (donutChartInstance.style.display === "none") {
    donutChartInstance.style.display = "block";
    bubbleChartInstance.style.display = "none";
    setTimeout(() => {
      showPieHoverEffect = true;
    }, 1500);
  } else {
    donutChartInstance.style.display = "none";
    bubbleChartInstance.style.display = "block";
    showPieHoverEffect = false;
  }
  showPieChart(selectedSector);
  showDonutChartLegends();
}

const margin = { top: 20, right: 50, bottom: 40, left: 80 },
  width = 1200 - margin.left - margin.right,
  height = 620 - margin.top - margin.bottom;

// svg element for the bubble chart
const svg = d3
  .select("#viz")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
  .style("background-color", "#e3ecf6");

// function to render the bubble chart
function renderBubbleChart() {
  svg.selectAll(".bubble-group").remove();

  const xMax = 6;
  const yMax = 30;

  // Set background color
  svg
    .append("rect")
    .attr("width", width)
    .attr("height", height)
    .style("fill", "#e3ecf6");

  // Add X axis
  const x = d3
    .scaleLinear()
    .domain([0, xMax + 1])
    .range([0, width]);

  const xAxis = svg
    .append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(
      d3
        .axisBottom(x)
        .ticks(xMax + 1)
        .tickFormat(d3.format("d"))
        .tickSize(-height)
        .tickSizeOuter(0)
    );

  // Set the color of the X-axis line
  xAxis.select(".domain").style("stroke", "white");

  // Set grid lines color for X-axis
  xAxis.selectAll(".tick line").style("stroke", "white");

  // Add X axis label
  svg
    .append("text")
    .attr("x", width / 2)
    .attr("y", height + margin.bottom / 2 + 10)
    .attr("text-anchor", "middle")
    .text("Number of Companies");

  // Add Y axis
  const y = d3
    .scaleLinear()
    .domain([0, yMax + 10])
    .range([height, 0]);

  const yAxis = svg
    .append("g")
    .call(d3.axisLeft(y).ticks(8).tickSize(-width).tickSizeOuter(0));

  // Set the color of the Y-axis line to black using CSS
  yAxis.select(".domain").style("stroke", "white");

  // Set grid lines color
  yAxis.selectAll(".tick line").style("stroke", "white");

  // Add Y axis label
  svg
    .append("text")
    .attr("transform", "rotate(-90)")
    .attr("x", -height / 2)
    .attr("y", -margin.left + 45)
    .attr("text-anchor", "middle")
    .text("Average Earnings");

  // Add bubbles
  const bubbles = svg
    .append("g")
    .selectAll(".bubble-group")
    .data(bubble_chart_dataset[selectedYear])
    .enter()
    .append("g")
    .attr("class", "bubble-group")
    .attr("transform", (d) => `translate(${x(d.xValue)}, ${y(d.yValue)})`);

  // Define the tooltip HTML structure
  const tooltip = d3
    .select(".bubble-chart")
    .append("div")
    .attr("class", "tooltip")
    .style("opacity", 0);

  // Function to show the tooltip
  function showTooltip(event, d) {
    tooltip.transition().duration(200).style("opacity", 0.9);

    tooltip
      .html(
        `
      <div>
        <strong>Sector: ${d.type}</strong>
        <br />
        <strong>Avg. Market Cap: $${(d.radius * 10).toFixed(2)} B</strong>
        <br/>
        <strong>Avg. Earnings: $${d.yValue} B</strong>
        <br/>
        <strong>No. of Companies: ${d.xValue}</strong>
      </div>
    `
      )
      .style("left", event.pageX + "px")
      .style("top", event.pageY - 28 + "px");
  }

  // Function to hide the tooltip
  function hideTooltip() {
    tooltip.transition().duration(500).style("opacity", 0);
  }

  // Function to update tooltip position
  function updateTooltipPosition(event) {
    tooltip
      .style("left", event.pageX + 10 + "px")
      .style("top", event.pageY - 10 + "px");
  }

  // Append outer circles
  bubbles
    .append("circle")
    .attr("cx", 0)
    .attr("cy", 0)
    .attr("r", (d) => d.radius * 2)
    .style("fill", (d) => d.color)
    .style("opacity", 0.9)
    .attr("stroke", "rgba(0,0,0,1)")
    .on("click", function (event, d) {
      selectedSector = d.sector;
      toggleCharts();
    })
    .on("mouseover", function (event, d) {
      showTooltip(event, d);
      d3.select(this).attr("stroke", "black");
      d3.select(this)
        .transition()
        .duration(300)
        .attr("r", (d) => d.radius * 2 * 1.2);
    })
    .on("mousemove", function (event) {
      updateTooltipPosition(event);
    })
    .on("mouseout", function () {
      hideTooltip();
      d3.select(this)
        .transition()
        .duration(300)
        .attr("r", (d) => d.radius * 2);
    });

  // Append inner dots
  bubbles
    .append("circle")
    .attr("class", "small-dot")
    .attr("cx", 0)
    .attr("cy", 0)
    .attr("r", 3)
    .style("fill", (d) => d.color)
    .style("opacity", "0.7");
}

renderBubbleChart();

// svg element for the donut chart
const svg2 = d3
  .select("#viz2")
  .append("svg")
  .attr("width", width - 250 + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr(
    "transform",
    "translate(" +
      (margin.left + width / 2) +
      "," +
      (margin.top + height / 2) +
      ")"
  );

const arcHover = d3
  .arc()
  .innerRadius(90)
  .outerRadius(Math.min(width, height) / 2 - 10);

// initialize tooltip for the donut chart
const tooltipOnDonutChart = d3
  .select(".donut-chart")
  .append("div")
  .attr("class", "tooltip1")
  .style("opacity", 0);

// function to render the tooltip for the donut chart
function showPieTooltip(event, d) {
  tooltipOnDonutChart.transition().duration(200).style("opacity", 0.9);

  tooltipOnDonutChart
    .html(
      `
        <div>
          <strong>Company: ${d.data.name}</strong>
          <br />
          <strong>Market Cap: $${d.data.yValue} B</strong>
          <br/>
          <strong>Earnings: $${d.data.earnings} B</strong>
        </div>
      `
    )
    .style("left", event.pageX + "px")
    .style("top", event.pageY - 28 + "px");
}

// Add pie chart (donut chart)
const pie = d3.pie().value((d) => d.yValue);
const arc = d3
  .arc()
  .innerRadius(90)
  .outerRadius(Math.min(width, height) / 2 - 30);
const arcs = svg2
  .selectAll(".arc")
  .data(pie(pie_chart_dataset[selectedYear][selectedSector]))
  .enter()
  .append("g")
  .attr("class", "arc");

arcs
  .append("path")
  .attr("d", arc)
  .attr("fill", (d) => d.data.color)
  .attr("stroke", "white")
  .style("stroke-width", "2px")
  .on("mouseover", function (event, d) {
    if (showPieHoverEffect) {
      d3.select(this).transition().duration(200).attr("d", arcHover(d));
    }

    showPieTooltip(event, d);
  })
  .on("mousemove", function (event, d) {
    tooltipOnDonutChart
      .style("left", event.pageX + "px")
      .style("top", event.pageY - 28 + "px");
  })
  .on("mouseout", function (event, d) {
    if (showPieHoverEffect) {
      d3.select(this).transition().duration(200).attr("d", arc(d));
    }
    tooltipOnDonutChart.transition().duration(500).style("opacity", 0);
  })
  .transition()
  .duration(1500)
  .attrTween("d", function (d) {
    var start = { startAngle: 0, endAngle: 0 };
    var interpolate = d3.interpolate(start, d);
    return function (t) {
      return arc(interpolate(t));
    };
  });

arcs
  .append("text")
  .attr("transform", (d) => `translate(${arc.centroid(d)})`)
  .attr("text-anchor", "middle")
  .text((d) => d.data.type)
  .style("fill", "black")
  .style("font-size", "12px");

// Function to update the pie chart
function showPieChart(sector) {
  // Remove the existing pie chart
  svg2.selectAll("*").remove();

  // Add the new pie chart
  const arcs = svg2
    .selectAll(".arc")
    .data(pie(pie_chart_dataset[selectedYear][sector]))
    .enter()
    .append("g")
    .attr("class", "arc");

  arcs
    .append("path")
    .attr("d", arc)
    .attr("fill", (d) => d.data.color)
    .attr("stroke", "white")
    .style("stroke-width", "2px")
    .on("mouseover", function (event, d) {
      if (showPieHoverEffect) {
        d3.select(this).transition().duration(200).attr("d", arcHover(d));
      }

      showPieTooltip(event, d);
    })
    .on("mousemove", function (event, d) {
      tooltipOnDonutChart
        .style("left", event.pageX + "px")
        .style("top", event.pageY - 28 + "px");
    })
    .on("mouseout", function (event, d) {
      if (showPieHoverEffect) {
        d3.select(this).transition().duration(200).attr("d", arc(d));
      }
      tooltipOnDonutChart.transition().duration(500).style("opacity", 0);
    })
    .transition()
    .duration(1500)
    .attrTween("d", function (d) {
      var start = { startAngle: 0, endAngle: 0 };
      var interpolate = d3.interpolate(start, d);
      return function (t) {
        return arc(interpolate(t));
      };
    });

  arcs
    .append("text")
    .attr("transform", (d) => `translate(${arc.centroid(d)})`)
    .attr("text-anchor", "middle")
    .text((d) => d.data.type)
    .style("fill", "black")
    .style("font-weight", "bold")
    .style("font-size", "15px");
}

// show bubble chart on click of the CTA "Go To Bubble Chart"
document.getElementById("showBubbleChart").addEventListener("click", () => {
  toggleCharts();
});

// add legend to the donut chart
document.getElementById("legend").innerHTML = (function () {
  let innerHtml = `<div style="font-weight: bold; padding-bottom: 10px; font-size: 18px;">Sectors</div>`;
  bubble_chart_dataset[selectedYear].map(({ color, type }) => {
    innerHtml += `<div style="display: flex; align-items: center; padding-bottom: 10px" >
    <div style="background: ${color}; height: 20px; width: 20px; margin-right: 7px; border: 1px solid"}></div>
    <div>${type}</div>
    </div>`;
  });
  return innerHtml;
})();

// method to render the year options
function reRenderSelectedYear() {
  document.getElementById("year").innerHTML = (function () {
    let innerHtml = `<div class="year-label">Year: </div>`;
    [2016, 2017, 2018].map((val) => {
      innerHtml += `<div class="${
        val === selectedYear ? "selected-year" : ""
      } year">${val}</div>`;
    });
    return innerHtml;
  })();
}

reRenderSelectedYear();

// method to set the selected year
function updateSelectedYear(ev) {
  const value = Number(ev.target.innerHTML);
  selectedYear = value;
  reRenderSelectedYear();
  renderBubbleChart();
}

// add click event on the year options
document.getElementById("year").addEventListener("click", function (e) {
  if (e.target && e.target.classList.contains("year")) {
    updateSelectedYear(e);
  }
});
