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
        <div className="p">
          <svg className="stroke-animation">
            <path
              className="per"
              stroke="black"
              stroke-width="7"
              fill="transparent"
              d="M 800 0 V 0 792"
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
          <div className="box1_par">
            <div className="box_1"></div>
            <div className="box_1_text">
              <h2>GraphiteArt</h2>
              <h2>Museum</h2>
            </div>
          </div>
          <div className="box2_par">
            <div className="box_2">
              <div className="box_flip_inner">
                <div className="box_flip_front_1"></div>
                <div className="box_flip_back_1"></div>
              </div>
            </div>
          </div>
          <div className="box3_par">
            <div className="box_3">
              <div className="box_flip_inner">
                <div className="box_flip_front_2"></div>
                <div className="box_flip_back_2"></div>
              </div>
            </div>
          </div>
          <div className="box4_par">
            <div className="box_4">
              <div className="box_flip_inner">
                <div className="box_flip_front_3"></div>
                <div className="box_flip_back_3"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default HOME;
