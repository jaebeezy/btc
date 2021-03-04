import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

import Chart from "./components/Chart";
import Time from "./components/Time";
import Title from "./components/Title";
import Price from "./components/Price";

import { Container, Card } from "./styles/index";

const App = () => {
  const [btcPrice, setBtcPrice] = useState({});
  const [time, setTime] = useState("");
  const [fetchingData, setFetchingData] = useState(true);

  const prevPrice = useRef({});

  useEffect(() => {
    const fetchBtc = async () => {
      try {
        const response = await axios.get(
          "https://api.coindesk.com/v1/bpi/currentprice.json"
        );

        setTime(response.data.time.updated);
        setBtcPrice({
          usd: response.data.bpi.USD.rate_float,
          gbp: response.data.bpi.GBP.rate_float,
          eur: response.data.bpi.EUR.rate_float,
        });
        setFetchingData(false);
        prevPrice.current = {
          usd: btcPrice.usd,
          eur: btcPrice.eur,
          gbp: btcPrice.gbp,
        };
      } catch (error) {
        console.log(error);
      }
    };

    if (btcPrice.usd > 0) {
      document.title = `btc is $${btcPrice.usd}`;
    }

    const interval = setInterval(fetchBtc, 3000);

    return () => clearInterval(interval);
  }, [btcPrice]);

  return (
    <Container>
      <Title />
      <Card>
        {!fetchingData ? (
          <Price
            usd={btcPrice.usd}
            gbp={btcPrice.gbp}
            eur={btcPrice.eur}
            prev={prevPrice.current}
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
