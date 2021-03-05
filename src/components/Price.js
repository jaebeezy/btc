import React from "react";
import CountUp from "react-countup";

const Price = ({ price, prev, isClicked, setIsClicked }) => {
  const usdClick = () => {
    setIsClicked({
      usd: true,
      gbp: false,
      eur: false,
    });
  };
  const gbpClick = () => {
    setIsClicked({
      usd: false,
      gbp: true,
      eur: false,
    });
  };
  const eurClick = () => {
    setIsClicked({
      usd: false,
      gbp: false,
      eur: true,
    });
  };

  return (
    <>
      <span
        onClick={() => usdClick()}
        className={`${isClicked.usd ? "clicked" : ""}`}
      >
        <CountUp
          start={prev.usd}
          end={price.usd}
          duration={1.5}
          decimals={4}
          decimal="."
          prefix="USD "
          separator=","
        />
      </span>

      <span
        onClick={() => gbpClick()}
        className={`${isClicked.gbp ? "clicked" : ""}`}
      >
        <CountUp
          start={prev.gbp}
          end={price.gbp}
          duration={1.5}
          decimals={4}
          decimal="."
          prefix="GBP "
          separator=","
        />
      </span>
      <span
        onClick={() => eurClick()}
        className={`${isClicked.eur ? "clicked" : ""}`}
      >
        <CountUp
          start={prev.eur}
          end={price.eur}
          duration={1.5}
          decimals={4}
          decimal="."
          prefix="EUR "
          separator=","
        />
      </span>
    </>
  );
};

export default Price;
