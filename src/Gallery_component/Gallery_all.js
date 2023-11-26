import { Link } from "react-router-dom";
import "../css/Gallery.css";
import React, { useState } from "react";
import "swiper/css";
import "swiper/css/effect-cube";
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
