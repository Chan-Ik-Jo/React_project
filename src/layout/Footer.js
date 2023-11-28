import { useLocation } from "react-router-dom";
import "../css/Footer.css";
function Footer() {
  const locationNow = useLocation();
  const url = locationNow.pathname.substr(0, 9);
  if (url === "/Gallery/") return null;
  return (
    <div className="footer">
<<<<<<< HEAD
      <hr />
      <h2>This is Footer</h2>

=======
      <p className="footerp">| (우)07583 서울시 강서구 강서로 420 | (재)서울호서직업전문학교(학점은행제 평가인정 교육훈련기관) | 사업자번호 109-82-06777 | 김상범학장 |<br/>
      | 조찬익 : 010-3681-0914 | 정송훈 : 010-7223-2241 | 성현우 : 010-8387-6573 |<br/>
      |  ©Hoseo. 2학년 2학기 | 2023 FrontProgramming Report |</p>
>>>>>>> e69eb07631527d8805c9f8937e1fdc662ba25164
    </div>
  );
}

export default Footer;
