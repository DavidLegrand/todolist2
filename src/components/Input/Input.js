import React, { useState } from "react";

const Input = () => {
  const [data, setdata] = useState("");

  const handleChange = (event) => {
    setdata(event.target.value);
    console.log(event);
  };
  
  return (
    <>
      <p>
        <input type="text" value={data} onChange={handleChange} />
      </p>
      <p>{data}</p>
    </>
  );
};

export default Input;
