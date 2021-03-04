import React, { useState, useEffect } from "react";
import CountUp from "react-countup";
import axios from "axios";

import Chart from "./components/Chart";
import Time from "./components/Time";
import Title from "./components/Title";

import { Container, Card } from "./styles/index";

const App = () => {
  const [btcPrice, setBtcPrice] = useState(0);
  const [time, setTime] = useState("");
  const [fetchingData, setFetchingData] = useState(true);

  useEffect(() => {
    const fetchBtc = async () => {
      try {
        const response = await axios.get(
          "https://api.coindesk.com/v1/bpi/currentprice.json"
        );

        setTime(response.data.time.updated);
        setBtcPrice(response.data.bpi.USD.rate_float);
        setFetchingData(false);
      } catch (error) {
        console.log(error);
      }
    };

    if (btcPrice > 0) {
      document.title = `btc is $${btcPrice}`;
    }
    const interval = setInterval(fetchBtc, 3000);

    return () => clearInterval(interval);
  }, [btcPrice]);

  return (
    <Container>
      <Title />
      <Card>
        {!fetchingData ? (
          <CountUp
            end={btcPrice}
            duration={1.5}
            decimals={4}
            decimal="."
            prefix="USD "
            separator=","
          />
        ) : (
          <p>loading...</p>
        )}
      </Card>
      <Time time={time} fetchingData={fetchingData} />
      <Chart />
    </Container>
  );
};

export default App;
