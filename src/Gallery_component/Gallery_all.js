import { Link } from "react-router-dom";
import "../css/all_img.css";
import React from "react";
import "swiper/css";
import "swiper/css/effect-cube";
import { motion } from "framer-motion";
import first from "../img/first_resize.jpg"
import second from "../img/second_resize.jpg"
import third from "../img/third_resize.jpg"
import fourth from "../img/fourth_resize.jpg"
import fifth from "../img/fifth_resize.jpg"
const All = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="img_component"
    >
      <div className="frame_component">
          <div className="img_Frame">
            <Link to="/Gallery/show/0">
              <img src={first} alt="" className="test" />
            </Link>
          </div>
          <div className="img_Frame">
            <Link to="/Gallery/show/1">
              <img src={second} alt="" className="test" />
            </Link>
          </div>
          <div className="img_Frame">
            <Link to="/Gallery/show/2">
              <img src={third} alt="" className="test" />
            </Link>
          </div>
          <div className="img_Frame">
            <Link to="/Gallery/show/3">
              <img src={fourth} alt="" className="test" />
            </Link>
          </div>
          <div className="img_Frame">
            <Link to="/Gallery/show/4">
              <img src={fifth} alt="" className="test" />
            </Link>
          </div>
      </div>
    </motion.div>
  );
};

export default All;
