import React from "react";

import { TimeContainer } from "../styles/index";

const Time = ({ time, fetchingData }) => {
  return (
    <TimeContainer>
      {!fetchingData ? <p> updated {time}</p> : null}
    </TimeContainer>
  );
};

export default Time;
