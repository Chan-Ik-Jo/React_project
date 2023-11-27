import "../css/Gallery.css";
import all_sort from "../img/all_sort.png";
import React, { useState } from "react";
import "swiper/css";
import "swiper/css/effect-cube";

import One from './Gallery_one';
import All from "./Gallery_all";

const Main= ()=> {
  const [isOpen, setIsOpen] = useState();
  const handleToggle = () => {
      setIsOpen(!isOpen);
  };
  return (
    <div className="content">
      <div className="sort">
        <div className="img_view">
          <img src={all_sort} alt="" className="all" onClick={handleToggle}></img>
        </div>
      </div>
      {!isOpen && <One />}
      {isOpen && <All /> }
    </div>
  );
}

export default Main;
