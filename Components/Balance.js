import styled from "styled-components";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
  datasets: [
    {
      fill: false,
      linesTensions: 0.1,
      backgroundColor: "#3773f5",
      borderColor: "#3773f5",
      borderCapstyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "#3773f5",
      pointBackgroundColor: "#3773f5",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "#3773f5",
      pointHoverBorderColor: "#3773f5",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 59, 80, 81, 56, 72, 45, 67, 55, 22],
    },
  ],
};

const options = {
  plugins: {
    legend: {
      display: false,
    },
  },
};

const BalanceChart = () => {
  return (
    <Wraaper>
      <Line data={data} options={options} width={400} height={150} />
    </Wraaper>
  );
};

export default BalanceChart;

const Wraaper = styled.div``;
