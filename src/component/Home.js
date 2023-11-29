import { motion } from "framer-motion";
import "../css/Content.css";
import fifth from "../img/fifth.jpg";


function HOME() {
    const Text = ({ value }) => (
      <div className="text_home">
        {value.split("").map((char, i) => (
          <div className="letter" style={{ "--delay": `${i * 0.2}s` }}>
            <span className="source">{char}</span>
            <span className="shadow">{char}</span>
            <span className="overlay">{char}</span>
          </div>
        ))}
      </div>
    );
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
              <Text value="GraphiteArt" />
              <Text value="Museum" />
            </div>
          </div>
          <div className="box2_par">
            <div className="box_2">
              <div className="box_flip_inner">
                <div className="box_flip_front_1"></div>
                <div className="box_flip_front_1_text">
                  <h2>Value</h2>
                </div>
                <div className="box_flip_back_1">
                  <h2 className="text">
                    We will provide the best artistic value.
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="box3_par">
            <div className="box_3">
              <div className="box_flip_inner">
                <div className="box_flip_front_2"></div>
                <div className="box_flip_front_2_text">
                  <h2>Communication</h2>
                </div>
                <div className="box_flip_back_2">
                <h2>We will give you the feeling of communicating with art.</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="box4_par">
            <div className="box_4">
              <div className="box_flip_inner">
                <div className="box_flip_front_3"></div>
                <div className="box_flip_front_3_text">
                  <h2>Experience</h2>
                </div>
                <div className="box_flip_back_3">
                  <h2 className="text">
                    We will give you the best experience.
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default HOME;
