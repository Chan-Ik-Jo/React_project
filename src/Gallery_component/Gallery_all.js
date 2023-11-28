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
        <div className="flip-box">
          <Link Link to="/Gallery/show/0">
            <div className="flip-box-inner">
              <div className="flip-box-front">
                <img src={first} alt="" className="test" />
              </div>
              <div className="flip-box-back">
                <div>
                  <h2>The Starry Night</h2>
                  <p>Vincent van Gogh</p>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="flip-box">
          <Link to="/Gallery/show/1">
            <div className="flip-box-inner">
              <div className="flip-box-front">
                <img src={second} alt="" className="test" />
              </div>
              <div className="flip-box-back">
                <div>
                  <h2>The Scream of Nature</h2>
                  <p>Edvard Munch</p>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="flip-box">
          <Link to="/Gallery/show/2">
            <div className="flip-box-inner">
              <div className="flip-box-front">
                <img src={third} alt="" className="test" />
              </div>
              <div className="flip-box-back">
                <div>
                  <h2>Happy Tears</h2>
                  <p>Roy Fox Lichtenstein</p>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="flip-box">
          <Link to="/Gallery/show/3">
            <div className="flip-box-inner">
              <div className="flip-box-front">
                <img src={fourth} alt="" className="test" />
              </div>
              <div className="flip-box-back">
                <div>
                  <h2>Color itself</h2>
                  <p>Hyangmi Lee</p>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="flip-box">
          <Link to="/Gallery/show/4">
            <div className="flip-box-inner">
              <div className="flip-box-front">
                <img src={fifth} alt="" className="test" />
              </div>
              <div className="flip-box-back">
                <div>
                  <h2>Monna Lisa</h2>
                  <p>Leonardo da Vinci</p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default All;
