import { motion } from "framer-motion";
import "../css/Content.css";
import fifth from "../img/fifth.jpg";
import {motion} from "framer-motion";

function HOME() {
  return (
    <motion.div className="body" 
                initial={{opacity:0}}
                animate={{opacity:1}}
                exit={{opacity:0}}>
      <div className="container">
        <div className="imgSection">
          <img className="bannerImage" src={fifth} alt="" />
        </div>
        <div className="imgText">
          <span className="headLine">Fifth</span>
          <br />
          <span className="subLine">The flower who has made</span>
          <br />
          <span className="artistName">Artist : unknown</span>
        </div>
      </div>
    </motion.div>
  );
}

export default HOME;
