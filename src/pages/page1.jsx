// import React, { useState } from 'react';
// import ecellLogo from '../assets/react.svg';
// import './Page1.css';

// function Page1() {
//   const [colors, setColors] = useState(Array(9).fill('blue'));

//   const handleClick = (index) => {
//     const newColors = [...colors];
//     newColors[index] = 'red';
//     if (index === 8) {
//       const resetColors = colors.map(() => 'blue');
//       setTimeout(() => setColors(resetColors), 500);
//     } else {
//       setColors(newColors);
//     }
//   };

//   return (
//     <div className="page1">
//       <div className="section html-element">HTML Element from Figma</div>
//       <div className="section logo"><img src={ecellLogo} alt="E-Cell Logo" /></div>
//       <div className="section grid">
//         {colors.map((color, index) => (
//           <div
//             key={index}
//             className="grid-item"
//             style={{ backgroundColor: color }}
//             onClick={() => handleClick(index)}
//           ></div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Page1;

import React from 'react';
import './page1.css'; // Import your CSS file

const ResponsiveContainer = () => {
    return (
        <div className="container">
            <div className="color-box">Color Box</div>
            <div className="photo-box ">
                <img src="../assets/theme.jpg" alt="A descriptive alt text" />
            </div>
            <div className="grid-container">
                <div className="grid-item">1</div>
                <div className="grid-item">2</div>
                <div className="grid-item">3</div>
                <div className="grid-item">4</div>
                <div className="grid-item">5</div>
                <div className="grid-item">6</div>
                <div className="grid-item">7</div>
                <div className="grid-item">8</div>
                <div className="grid-item">9</div>
            </div>
        </div>
    );
};

export default ResponsiveContainer;
