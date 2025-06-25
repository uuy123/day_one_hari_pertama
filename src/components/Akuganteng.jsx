import React, { useState } from "react";
import "./akuganteng.css";

function Akuganteng() {

    const [isActive, setIsActive] = useState(false);

    const toggleActive = () => {
        setIsActive(!isActive);
    };

  return (
    <div className="USPS">
      <div className={isActive ? 'active' : 'inactive'}>
        <p>Aku Gatneg</p>
        <p>Keyboard aku nyasasla nyala</p>
      </div>
        <button onClick={toggleActive}>Penced biar geser</button>
      <div className="KNJT">
        <p>Aku Gatneg</p>
      </div>
    </div>
  );
}

export default Akuganteng;
