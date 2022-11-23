import React from "react";
import ClearButton from "../../components/ClearButton";
import ItemBox from "../../components/ItemBox";
import MainText from "../../components/MainText";

const AppBar = () => {
  return (
    <>
      <div className="bg-white w-96 h-auto rounded shadow-xl">
        <MainText />
        <ItemBox />
        <ClearButton />
      </div>
    </>
  );
};

export default AppBar;
