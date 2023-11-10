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
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cube";
import { EffectCube, Navigation } from "swiper/modules";

const GALLERY= ()=> {
  return (
    <div className="content">
      <div className="sort">
        <div className="img_view">
          <img src={all_sort} alt="" className="all" />
        </div>
      </div>
      <div className="preView">
        <div className="prev">
          <img src={prev} alt="" className="swiper-button-prev" />
        </div>
        <div className="next">
          <img src={next} alt="" className="swiper-button-next" />
        </div>
        <div className="slide">
          <Swiper
            effect={"cube"}
            grabCursor={true}
            loop={true}
            cubeEffect={{
              shadow: true,
              slideShadows: true,
              shadowOffset: 20,
              shadowScale: 0.94,
            }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            modules={[EffectCube, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <Link to="/Gallery/1">
                <img src={first} alt="" className="test" />
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to="/Gallery/2">
                <img src={second} alt="" className="test" />
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to="/Gallery/3">
                <img src={third} alt="" className="test" />
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to="/Gallery/4">
                <img src={fourth} alt="" className="test" />
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to="/Gallery/5">
                <img src={fifth} alt="" className="test" />
              </Link>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default GALLERY;
