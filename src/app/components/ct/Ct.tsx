"use client";

import { useState, useEffect } from "react";

const colors: string[] = ["tomato", "grey", "green"];
const max: number = colors.length - 1;
const min: number = 0;

const Ct = () => {
  const [color, setColor] = useState<string>("");

  useEffect(() => {
    const index: number = Math.floor(Math.random() * (max - min + 1)) + min;

    const newColor: string = colors[index];
    document.body.style.backgroundColor = newColor;
    setColor(newColor);
  }, []);
  return (
    <>
      <button>{color}</button>
    </>
  );
};

export default Ct;
