import { motion } from "framer-motion";
import "../css/Show.css"
import { useNavigate, useParams } from "react-router";
import img_data from "./data";
import back from"../img/back.png"

const SHOW = () => {
    const {id} =useParams()
    const data = img_data[id]
    console.log(data)
    const navigate = useNavigate(); //변수 할당시켜서 사용
    const onClickImg = () => {
      navigate(-1); // 바로 이전 페이지로 이동, '/main' 등 직접 지정도 당연히 가능
    };
    return (
      <div className="show_content">
        <motion.div
          className="content_box"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="picture_div">
            <div className="picture">
              <img src={data.data} alt="" />
            </div>
          </div>
          <div className="explain_div">
            <div className="title">
              <h1>{data.title}</h1>
            </div>
            <div className="painter">
              <h3>{data.painter}</h3>
            </div>
            <div className="explain">
              <strong>{data.content}</strong>
            </div>
          </div>
        </motion.div>
        <div className="back">
          <img src={back} alt=""  onClick={onClickImg}/>
        </div>
      </div>
    );
}
export default SHOW