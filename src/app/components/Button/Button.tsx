"use client";

import { useState } from "react";
// import React from "react";

const Button = () => {
  const [color, setColor] = useState<string>("red");
  const handleClick = () => {
    setColor(color === "red" ? "blue" : "red");
  };
  return (
    <>
      <button className={color} onClick={handleClick}>
        Кнопка
      </button>
    </>
  );
};

export default Button;
