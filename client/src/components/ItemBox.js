import React from "react";

const ItemBox = ({ name, age, image }) => {
  return (
    <div className="mx-5 h-auto flex justify-start items-center my-3">
      <div className="h-10 mx-5 ">
        <img src={image} alt="person" className="h-10 rounded-full " />
      </div>
      <div>
        <h4>{name}</h4>
        <p>{age} years</p>
      </div>
    </div>
  );
};

export default ItemBox;
