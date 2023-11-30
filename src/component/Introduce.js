import "../css/Introduce.scss";
import {motion} from"framer-motion";

function INTRODUCE() {
  return (
    <motion.div
      className="body"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      Graphite Art Museum
      <div className="container">
        <div className="introduce_box">
          <div className="intro_head">
            <div className="intro_name">
              <h2>Introduce</h2>
              <hr />
            </div>
            <div className="Intrduce_head">
              <div className="intro_title">환영합니다! Graphite Art Museum</div>
              <div>
                여기는 예술의 아름다움을 담은 온라인 그림전의 문으로 여러분을
                초대합니다.<br></br> Graphite Art Museum은 예술가들의 창의력과 다양성이
                만나 공존하는 특별한 공간입니다.
              </div>
            </div>
          </div>
          <div className="page-content">
            <div className="card">
              <div className="card_content">
                <div className="content_title">우리의 취지</div>
                <div className="content_text">
                  우리는 예술의 힘을 통해 감정을 전하고, 사고를 자극하며, 세상을
                  더 아름답게 만들고자 합니다. Graphite Art Museum은 예술의 다양한 양상을
                  담아내어관람객들에게 새로운 시각과 경험을 선사합니다.
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card_content">
                <div className="content_title">다양한 예술의 만남</div>
                <div className="content_text">
                  Graphite Art Museum은 회화, 조각, 사진, 디지털 아트 등 다양한 예술
                  형식이 만나고 공존하는 특별한 장소입니다. 우리는 다양한
                  예술가들의 작품을 통해 예술의 경지를 넘나들며, 새로운 예술적
                  경험을 제공합니다.
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card_content">
                <div className="content_title">온라인 감상과 소통</div>
                <div className="content_text">
                  Graphite Art Museum은 온라인 플랫폼을 통해 누구나 손쉽게 그림의
                  아름다움에 접근할 수 있습니다. 작품을 감상하고, 예술가와의
                  소통을 즐기며, 예술의 세계에 더 깊이 몰입하세요.
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card_content">
                <div className="content_title">예술적 여정의 시작</div>
                <div className="content_text">
                  Graphite Art Museum은 예술을 사랑하는 모든 이들에게 열린 문입니다.
                  여러분의 예술적 여정을 함께 나누고, 우리의 그림전에서 새로운
                  발견과 감동을 찾아보세요.
                </div>
              </div>
            </div>
          </div>
          <div className="final_text">
            지금 Graphite Art Museum을 통해 예술의 세계로 초대합니다. 함께해 주셔서
            감사합니다!
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default INTRODUCE;