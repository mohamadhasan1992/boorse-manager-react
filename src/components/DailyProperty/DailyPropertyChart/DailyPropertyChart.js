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



const DailyPropertyChart = ({data}) => {
    

    // STEP 3 - Creating the JSON object to store the chart configurations
    const chartConfigs = {
      type: "column2d", // The chart type
      width: "500", // Width of the chart
      height: "400", // Height of the chart
      dataFormat: "json", // Data type
      dataSource: {
        // Chart Configuration
        chart: {
            baseFont:"lalezar",
          paletteColors: "#2f3640",
          //Set the chart caption
          caption: "عملکرد ماهانه",
          //Set the chart subcaption
          // subCaption: "In MMbbl = One Million barrels",
          //Set the x-axis name
          xAxisName: "تاریخ",
          //Set the y-axis name
          yAxisName: "دارایی روزانه",
          numberSuffix: "K",
          //Set the theme for your chart
          maxColWidth: "1px",
          theme: "fusion",
        },
        // Chart Data
        data
      },
    };
    return <ReactFC {...chartConfigs} />;

}


export default DailyPropertyChart;

