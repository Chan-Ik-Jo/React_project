import {Outlet} from "react-router-dom";
import "../css/Gallery.css";
import React from "react";
import { motion } from "framer-motion";


const GALLERY= ()=> {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Outlet />
    </motion.div>
  );
}

export default GALLERY;
