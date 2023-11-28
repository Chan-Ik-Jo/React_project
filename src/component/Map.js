import "../css/Content.css";
import "../css/Map.css";
import {motion} from "framer-motion";
import train from "../img/train.png"
import bus from "../img/bus.png"

function MAP() {
  return (
    <motion.div
      className="body"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="container">
        <div className="map_container">
          <p className="title_road">오시는 길</p>
          <hr />
          <div className="map_div">
            <iframe
              title="school_address"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.6657947887084!2d126.8374401122891!3d37.562937024216374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c9c7199c883a9%3A0x42d19d1e7e163c32!2z7ISc7Jq47Zi47ISc7KeB7JeF7KCE66y47ZWZ6rWQ!5e0!3m2!1sko!2skr!4v1701080008261!5m2!1sko!2skr"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="address_string">
            <div className="train">
              <p className="train_name">지하철</p>
              <div className="subway">
                <img src={train} alt="" />
                <div className="box">5호선</div>
                <p className="subway_txt">발산역 3번출구에서 도보 약 10분</p>
              </div>
            </div>
            <div className="line"></div>
            <div className="bus">
              <p className="bus_name">버스</p>
              <div className="busstop">
                <img src={bus} alt="" />
                <div>
                  <div className="bus_box">
                    <div className="bus_box_1">간선</div>
                    <p className="subway_txt_1">652</p>
                  </div>
                  <div className="bus_box">
                    <div className="bus_box_2">지선</div>
                    <p className="subway_txt_2">6630, 6632, 6645, 6657</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
export default MAP;
