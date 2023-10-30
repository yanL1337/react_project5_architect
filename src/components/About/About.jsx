import { Link } from "react-router-dom";
import Arrow from "../Arrow";
import "./About.scss";

const About = () => {
  return (
    <section className="about">
      <div className="imgWrap">
        <div className="firstImg"></div>
        <div className="secondImg"></div>
      </div>
      <div className="thirdImg"></div>
      <article>
        <h2>About</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
        <div className="imgText">
          <Link to="/gallery">
            <h2>view projects</h2>
            <Arrow />
          </Link>
        </div>
      </article>
    </section>
  );
};

export default About;
