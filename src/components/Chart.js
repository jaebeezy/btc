import React, { useEffect, useState } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";

import { ChartContainer } from "../styles/index";

const Chart = () => {
  const [btc30Data, setBtc30Data] = useState([]);

  useEffect(() => {
    const fetch30Btc = async () => {
      try {
        const response = await axios.get(
          "https://api.coindesk.com/v1/bpi/historical/close.json"
        );
        setBtc30Data(response.data.bpi);
      } catch (error) {
        console.log(error);
      }
    };
    fetch30Btc();
  }, []);

  const data = {
    labels: Object.keys(btc30Data),
    datasets: [
      {
        label: "bitcoin price in usd",
        lineTension: 0.2,
        fill: false,
        backgroundColor: "lightgray",
        borderColor: "lightgray",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "gray",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "gray",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: Object.values(btc30Data),
      },
    ],
  };

  return (
    <ChartContainer>
      <h1>monthly price of btc</h1>
      <Line data={data} />
    </ChartContainer>
  );
};

export default Chart;
