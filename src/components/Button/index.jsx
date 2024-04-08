import React from "react";

const Button = ({ setCounter }) => {
  const handleOnClickButton = () => {
    setCounter((prevState) => prevState + 1);
  };

  return (
    <>
      <button onClick={handleOnClickButton}>Click</button>
      <button onClick={handleOnClickButton}>ClickOn</button>
    </>
  );
};

export default Button;
