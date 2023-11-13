import "../css/Content.css";
import {motion} from"framer-motion";

function INTRODUCE() {
  return (
    <motion.div
      className="body"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="container">Introduce 컴포넌트입니다.</div>
    </motion.div>
  );
}

export default INTRODUCE;
