import React from "react";
import Exp from "./Exapmle";
import MyImage from "./Image";
import myjpg from "../images/jpgexm.jpg";
import mypng from "../images/mypng.png";

export default function App() {
  return (
    <main className='main'>
      <div className='app'>
        <h1>Webpack5+React18</h1>
        <h2>June 6, 2022</h2>
        <p>Created by Igor Rak</p>
      </div>
      <Exp text='Sass' className='sass' />
      <div className='images'>
        <MyImage source={myjpg} />
        <MyImage source={mypng} />
      </div>
    </main>
  );
}
