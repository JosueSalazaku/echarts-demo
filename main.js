import * as echarts from "echarts";

const myChart = echarts.init(document.getElementById("Chart1"));

// Specify the configuration items and data for the chart
const option = {
  title: {
    text: "ECharts Getting Started Example",
  },
  tooltip: {},
  legend: {
    data: ["sales"],
  },
  xAxis: {
    data: ["Shirts", "Cardigans", "Chiffons", "Pants", "Heels", "Socks"],
  },
  yAxis: {},
  series: [
    {
      name: "sales",
      type: "bar",
      data: [55, 20, 36, 10, 10, 20],
    },
  ],
};

// Display the chart using the configuration items and data just specified.
myChart.setOption(option);
