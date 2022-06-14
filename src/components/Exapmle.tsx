import React from "react";

interface IExp {
  text: string;
  className: string;
}

export default function Exp({ text, className }: IExp) {
  const cn = className;
  return (
    <div className='example'>
      <h3 className={cn}>{text}</h3>
    </div>
  );
}
