import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";

// Resolves charts dependancy
charts(FusionCharts);

const dataSource = {

    "chart": {
        "decimals": "0",
        "theme": "fusion",
        'showLabels':'0 ' ,'showValues':'0 ','showLegend':'0',
        'width': "1000", // Width of the chart
        'height': "1005",
    },
    "data": [
        {
            "label": "Food",
            "value": "28504"
        },
        {
            "label": "Apparels",
            "value": "14633"
        },
        {
            "label": "Electronics",
            "value": "10507"
        },
        {
            "label": "Household",
            "value": "4910"
        }
    ]
}

function Donut() {
    return (
      <ReactFusioncharts
        type="doughnut2d"
        width="100%"
        height="405"
        dataFormat="JSON"
        dataSource={dataSource}
      />
    );
  }
export default Donut;
