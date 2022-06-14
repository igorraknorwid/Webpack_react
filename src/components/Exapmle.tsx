import React from "react";

interface IExp {
  text: string;
  className: string;
  backgroundColor?: string;
}

export default function Exp({
  text,
  className,
  backgroundColor = "rgb(236, 153, 27)",
}: IExp) {
  const cn = className;
  return (
    <div className='example' style={{ backgroundColor: backgroundColor }}>
      <h3 className={cn}>{text}</h3>
    </div>
  );
}
