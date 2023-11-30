import "../css/Header.scss";
import logo from "../img/logo.png";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import home from "../img/home.png";
import Introduce from "../img/Introduce.png";
import Map from "../img/Map.png";
import School from "../img/School.png";

function Header() {
  const locationNow = useLocation();
  const url = locationNow.pathname.substr(0, 9);
  
  const Text = ({ value }) => (
    <div className="text">
      {value.split("").map((char, i) => (
        <div className="letter" style={{ "--delay": `${i * 0.2}s` }}>
          <span className="source">{char}</span>
          <span className="shadow">{char}</span>
          <span className="overlay">{char}</span>
        </div>
      ))}
    </div>
  );

  if (url === "/Gallery/")
    return (
      <div className="link">
        <div className="link_other">
          <ul className="Icon">
            <li>
              <Link to="/Home">
                <img src={home} className="Icon_img" alt="" />
              </Link>
            </li>

            <li>
              <Link to="/Introduce">
                <img src={Introduce} className="Icon_img" alt="" />
              </Link>
            </li>

            <li>
              <Link to="/Map">
                <img src={Map} className="Icon_img" alt="" />
              </Link>
            </li>

            <li>
              <Link to="https://www.shoseo.ac.kr/">
                <img src={School} className="Icon_img" alt="" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  return (
    <div>
      <div className="header_back"></div>
      <header className="App-header">
        <div className="header">
          <div className="par_logo">
            <Link to="/Home">
              <div className="img_logo">
              </div>
              <div className="text_logo">
                <Text value="GraphiteArtMuseum" />
              </div>
            </Link>
          </div>
          <div className="Menu">
            <nav>
              <ul>
                <Link to="/Home">
                  <li>HOME</li>
                </Link>
                <Link to="Gallery/main">
                  <li>GALLERY</li>
                </Link>
                <Link to="/Introduce">
                  <li>INTRODUCE</li>
                </Link>
                <Link to="/Map">
                  <li>MAP</li>
                </Link>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
