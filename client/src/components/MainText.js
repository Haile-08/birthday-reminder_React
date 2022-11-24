import React from "react";

const MainText = ({ count }) => {
  return (
    <div className="mx-5 flex justify-center items-center my-3 text-2xl">
      {count} birthdays today
    </div>
  );
};

export default MainText;
