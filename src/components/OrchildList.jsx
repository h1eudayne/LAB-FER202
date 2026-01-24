import React from "react";
import { ListOfOrchids } from "../ListOfOrchids";
import OrchildCard from "./OrchildCard";

const OrchildList = ({ handleOnClick }) => {
  return (
    <>
      {ListOfOrchids.map((orchid) => {
        return <OrchildCard orchid={orchid} handleOnClick={handleOnClick} />;
      })}
    </>
  );
};

export default OrchildList;
