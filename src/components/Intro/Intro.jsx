import Arrow from "../Arrow";
import "./Intro.scss";
import { Link } from "react-router-dom";

const Intro = () => {
  return (
    <section className="topSection">
      <div className="imgDesc">
        <h1>Project</h1>
        <h2>Lorum</h2>
      </div>
      <div>
        <div className="imgContent">
          <div className="imgText">
            <Link to="/gallery">
              <h2>view projects</h2>
              <Arrow />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
