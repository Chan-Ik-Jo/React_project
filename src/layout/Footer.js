import { useLocation } from "react-router-dom";
import "../css/Footer.css";
function Footer() {
  const locationNow = useLocation();
  const url = locationNow.pathname.substr(0, 9);
  if (url === "/Gallery/") return null;
  return (
    <div className="footer">
      <p className="footerp">| (우)07583 서울시 강서구 강서로 420 | (재)서울호서직업전문학교(학점은행제 평가인정 교육훈련기관) | 사업자번호 109-82-06777 | 김상범학장 |<br/>
      | 조찬익 : 010-1234-1234 | 정송훈 : 010-5678-5678 | 성현우 : 010-2345-2345 |<br/>
      |  ©Hoseo. 2학년 2학기 | 2023 FrontProgramming Report |</p>
    </div>
  );
}

export default Footer;
