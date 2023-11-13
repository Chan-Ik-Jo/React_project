import "../css/Content.css";
import fifth from "../img/fifth.jpg";

function HOME() {
  return (
    <div className="body">
      <div className="container">
        <div className="imgSection">
          <img className="bannerImage" src={fifth} alt="" />
        </div>
        <div className="imgText">
          <span className="headLine">Fifth</span>
          <br />
          <span className="subLine">The flower who has made</span>
          <br />
          <span className="artistName">Artist : unknown</span>
        </div>
      </div>
    </div>
  );
}

export default HOME;
