import { useLocation } from "react-router-dom";
import "./Footer.css"
function Footer() {
  const locationNow = useLocation();
  const url=locationNow.pathname.substr(0,9);
  if(url === "/Gallery/") return null;
    return (
    <footer>
        <hr />
        <h2>This is Footer</h2>
    </footer>
    );
}

export default Footer;
