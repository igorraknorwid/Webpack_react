import React from "react";
import jpg from "../images/jpgexm.jpg";

interface IMyImage {
  source: string;
}

export default function MyImage({ source }: IMyImage) {
  return (
    <div className='image'>
      <img src={source} alt=' ' />
    </div>
  );
}
