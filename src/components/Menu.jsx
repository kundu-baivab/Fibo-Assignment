import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import fireg from "../assets/fireg.png";
import fireo from "../assets/fireo.png";
import ffg from "../assets/ffg.png";
import ffo from "../assets/ffo.png";
import lcg from "../assets/lcg.png";
import lco from "../assets/lco.png";
import barg from "../assets/barg.png";
import baro from "../assets/baro.png";

const Menu = () => {
  const [selectedOption, setSelectedOption] = useState(1);

  const images = {
    1: { opt1: fireo, opt2: barg, opt3: ffg, opt4: lcg },
    2: { opt1: fireg, opt2: baro, opt3: ffg, opt4: lcg },
    3: { opt1: fireg, opt2: barg, opt3: ffo, opt4: lcg },
    4: { opt1: fireg, opt2: barg, opt3: ffg, opt4: lco },
  };

  useEffect(() => {
    console.log("Selected option:", selectedOption);
  }, [selectedOption]);

  const handleOptionClick = (option) => {
    const opt = option;
    setSelectedOption(opt);
  };

  return (
    <div
      className="fixed bottom-0 w-full text-white"
      style={{ backgroundColor: "#282828" }}
    >
      <div className="py-3">
        <ul className="flex justify-between mx-2">
          <li className="mx-4">
            <Link to="/" className="flex flex-col">
              <img
                onClick={() => handleOptionClick(1)}
                src={images[selectedOption].opt1}
                className="w-10 h-10"
                alt="Option 1"
              />
              <p style={{color:selectedOption==1?"orange":"white"}}>Page 1</p>
            </Link>
          </li>
          <li className="mx-4">
            <Link to="/page2" className="flex flex-col">
              <img
                onClick={() => handleOptionClick(2)}
                src={images[selectedOption].opt2}
                className="w-10 h-10"
                alt="Option 2"
              />
              <p style={{color:selectedOption==2?"orange":"white"}}>Page 2</p>
            </Link>
          </li>
          <li className="mx-4">
            <Link to="/page3" className="flex flex-col">
              <img
                onClick={() => handleOptionClick(3)}
                src={images[selectedOption].opt3}
                className="w-10 h-10"
                alt="Option 3"
              />
              <p style={{color:selectedOption==3?"orange":"white"}}>Page 3</p>
            </Link>
          </li>
          <li className="mx-4">
            <Link to="/page4" className="flex flex-col">
              <img
                onClick={() => handleOptionClick(4)}
                src={images[selectedOption].opt4}
                className="w-10 h-10"
                alt="Option 4"
              />
              <p style={{color:selectedOption==4?"orange":"white"}}>Page 4</p>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
