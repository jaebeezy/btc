import React from "react";
import CountUp from "react-countup";

const Price = ({ usd, gbp, eur, prev }) => {
  return (
    <>
      <CountUp
        start={prev.usd}
        end={usd}
        duration={1.5}
        decimals={4}
        decimal="."
        prefix="USD "
        separator=","
      />
      <CountUp
        start={prev.gbp}
        end={gbp}
        duration={1.5}
        decimals={4}
        decimal="."
        prefix="GBP "
        separator=","
      />
      <CountUp
        start={prev.eur}
        end={eur}
        duration={1.5}
        decimals={4}
        decimal="."
        prefix="EUR "
        separator=","
      />
    </>
  );
};

export default Price;
