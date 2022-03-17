import React, { useState, useEffect } from 'react';

export default function Gradient() {
  const [color1, setColor1] = useState(''); // input color1
  const [color2, setColor2] = useState(''); // input color2
  const [color3, setColor3] = useState(''); // input color3
  const [range, setRange] = useState(''); // input range

  var resultCode;
  useEffect(() => {
    let preveiw = document.querySelector('.preveiw'); // recuperer le div preveiw
    preveiw.style.backgroundImage = `linear-gradient(${color3},${color2},${color1} )`;
    if (range)
      preveiw.style.backgroundImage = `linear-gradient(${range}deg,${color3},${color2},${color1} )`;
  });

  return (
    <div>
      <h1 ID="titre">CSS GRADIENT GENERATEUR</h1>
      <header>
        <div>
          <input value={color1} type="text" placeholder="color 1 " />
          <input
            type="color"
            value={color1}
            onChange={(e) => setColor1(e.target.value)}
          />
        </div>
        <div>
          <input value={color2} type="text" placeholder="color 2 " />
          <input
            type="color"
            value={color2}
            onChange={(e) => setColor2(e.target.value)}
          />
        </div>
        <div>
          <input value={color3} type="text" placeholder="color 3 " />
          <input
            type="color"
            value={color3}
            onChange={(e) => setColor3(e.target.value)}
          />
        </div>
        <div>
          <input
            value={range}
            onChange={(e) => setRange(e.target.value)}
            type="range"
            placeholder="color 4 "
            max="300"
          />
        </div>
      </header>
      <div className="preveiw"></div>
      <div className="test">
        <ul>
          <li>Range : {range} </li>
          <li>Color 1 : {color1} </li>
          <li>Color 2: {color2} </li>
          <li>Color 3: {color3} </li>
        </ul>
        <br />
        <h2 style={{ textAlign: 'center' }}>Result Code : {resultCode} </h2>
      </div>
    </div>
  );
}
