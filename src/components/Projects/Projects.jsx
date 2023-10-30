import { Link } from "react-router-dom";
import Arrow from "../Arrow";
import "./Projects.scss";

const Projects = () => {
  return (
    <section className="projects">
      <h2>Our Projects</h2>

      <div className="imgGallery1">
        <div className="imgTexte">
          <h2>
            Sample <br /> Project
          </h2>
          <Link to="/gallery">
            <h2>view more</h2>
            <Arrow />
          </Link>
        </div>
        <div className="imgNoText"></div>
      </div>
      <div className="imgGallery2">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="lilWrapper">
        <div className="imgText">
          <Link to="/gallery">
            <h2>all projects</h2>
            <Arrow />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
