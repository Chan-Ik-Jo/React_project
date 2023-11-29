import { motion } from "framer-motion";
import "../css/Content.css";
import fifth from "../img/fifth.jpg";


function HOME() {
  return (
    <motion.div
      className="body"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="container">
        {/* <div className="imgSection">
          <img className="bannerImage" src={fifth} alt="" />
        </div>
        <div className="imgText">
          <span className="headLine">Fifth</span>
          <br />
          <span className="subLine">The flower who has made</span>
          <br />
          <span className="artistName">Artist : unknown</span>
        </div> */}
        <div className="p">
          <svg
            class="stroke-animation"
            // viewBox="0 0 1000 1000"
            style={{ backgroundColor: "white" }}
          >
            <path
              className="per"
              stroke="black"
              stroke-width="7"
              fill="transparent"
              d="M 800 0 V 0 795"
            />
            <path
              className="horizon"
              stroke="black"
              stroke-width="7"
              fill="transparent"
              d="M 5 600 H 5 1050"
            />
          </svg>
        </div>
        <div className="c">
          <div className="box_1">
          </div>
          <div className="box_2">
          </div>
          <div className="box_3">
          </div>
          <div className="box_4">
          </div>

        </div>
      </div>
    </motion.div>
  );
}

export default HOME;
