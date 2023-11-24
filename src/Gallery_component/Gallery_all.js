import { Link } from "react-router-dom";
import "../css/Gallery.css";
import all_sort from "../img/all_sort.png";
import next from "../img/next.png";
import prev from "../img/prev.png";
import first from "../img/first.jpg";
import second from "../img/second.jpg";
import third from "../img/third.jpg";
import fourth from "../img/fourth.jpg";
import fifth from "../img/fifth.jpg";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cube";
import { EffectCube, Navigation } from "swiper/modules";
import { motion } from "framer-motion";

const All = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
        <div>
        </div>
        <div>
        </div>
        <div>
        </div>
        <div>
        </div>
        <div>
        </div>
    </motion.div>
  );
};

export default All;
