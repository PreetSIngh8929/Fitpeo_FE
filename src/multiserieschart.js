// STEP 1 - Include Dependencies

// Include react
import React from "react";

// Include the react-fusioncharts component
import ReactFC from "react-fusioncharts";

// Include the fusioncharts library
import FusionCharts from "fusioncharts";

// Include the chart type
import Column2D from "fusioncharts/fusioncharts.charts";

// Include the theme as fusion
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

// Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

// STEP 2- Define the categories representing the labels on the X-axis
const categories = [
  {
    category: [
      {
        label: "Jan",
      },
      {
        label: "Feb",
      },
      {
        label: "Mar",
      },
      {
        label: "Apr",
      },
      {
        label: "May",
      },
      {
        label: "Jun",
      },
      {
        label: "Jul",
      },
      {
        label: "Aug",
      },
      {
        label: "Sep",
      },
      {
        label: "Oct",
      },
      {
        label: "Nov",
      },
      {
        label: "Dec",
      },
    ],
  },
];
// STEP 3- Construct the dataset comprising multiple series
const dataset = [
  {
    // seriesname: "Accounts Receivable",
    data: [
      {
        value: "500",
      },
      {
        value: "600",
      },
      {
        value: "510",
      },
      {
        value: "400",
      },
      {
        value: "600",
      },
      {
        value: "500",
      },
      {
          value: "800",
        },
        {
          value: "900",
        },
        {
          value: "600",
        },
        {
          value: "650",
        },
        {
          value: "500",
        },
        {
          value: "400",
        },
    ],
  },

];

// STEP 4 - Creating the JSON object to store the chart configurations
const chartConfigs = {
  type: "mscolumn2d", // The chart type
  width: "100%", // Width of the chart
  height: "405", // Height of the chart
  dataFormat: "json", // Data type
  dataSource: {
    //Chart Configurations
    chart: {
      theme: "fusion",
      caption: "Overview",
      subCaption: "Monthly Eaarning",
      // xAxisname: "Quarter",
      // yAxisName: "Revenues (In USD)",
      numberSuffix: "M",
      plotFillAlpha: "80",
      divLineIsDashed: "1",
      divLineDashLen: "1",
      divLineGapLen: "1",
    },
    categories: categories,
    dataset: dataset,
  },
};
// STEP 5 - Creating the DOM element to pass the react-fusioncharts component
function MultiSeries() {
  return <ReactFC {...chartConfigs} />;
}

export default MultiSeries;
