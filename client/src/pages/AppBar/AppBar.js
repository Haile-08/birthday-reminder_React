import React, { useState } from "react";
import ItemBox from "../../components/ItemBox";
import MainText from "../../components/MainText";

const AppBar = () => {
  const persons = [
    {
      name: "Bertie Yates",
      age: 26,
      image:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg",
    },
    {
      name: "Hester Hogan",
      age: 32,
      image:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-3_rxtqvi.jpg",
    },
    {
      name: "Larry Little",
      age: 36,
      image:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    },
    {
      name: "Sean Walsh",
      age: 34,
      image:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    },
    {
      name: "Lola Gardner",
      age: 29,
      image:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    },
  ];
  const [person, setPerson] = useState(persons);
  function handlOnclick() {
    setPerson([]);
  }
  return (
    <>
      <div className="bg-white w-96 h-auto rounded shadow-xl">
        <MainText count={person.length} />
        {person.map(({ name, age, image }) => (
          <ItemBox name={name} age={age} image={image} />
        ))}

        <button
          onClick={handlOnclick}
          className="bg-red-400 mx-5 flex justify-center items-center my-3 px-32 py-3 rounded"
        >
          Clear All
        </button>
      </div>
    </>
  );
};

export default AppBar;
