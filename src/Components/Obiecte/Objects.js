import { Fragment, useState } from "react";
import Summary from "./Summary";
import AvailableObjects from "./AvailableObjects";

const Objects = () => {
  return (
    <Fragment>
      <Summary />
      <AvailableObjects />
    </Fragment>
  );
};

export default Objects;
