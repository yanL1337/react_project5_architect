import { Link } from "react-router-dom";
import Call from "../Call";
import Geo from "../Geo";
import Mail from "../Mail";
import "./Footer.scss";
import Facebook from "../Socials/Facebook";
import Twitter from "../Socials/Twitter";
import Linked from "../Socials/Linked";
import Pinterest from "../Socials/Pinterest";

const Footer = () => {
  return (
    <footer>
      <div className="imgDiv"></div>
      <div className="information">
        <h2>Information</h2>
        <Link to="/">Main</Link>
        <Link to="/">Gallery</Link>
        <Link to="/">Projects</Link>
        <Link to="/">Certifications</Link>
        <Link to="/">Contacts</Link>
      </div>
      <div className="contacts">
        <h2>Contacts</h2>
        <div>
          <Geo />
          <p>
            1234 Sample Street <br /> Austin Texas 78704
          </p>
        </div>
        <div>
          <Call />
          <p>512.333.2222</p>
        </div>
        <div>
          <Mail />
          <p>sampleemail@gmail.com</p>
        </div>
      </div>

      <div className="socialMedia">
        <h2>Social Media</h2>
        <div className="media">
          <Facebook />
          <Twitter />
          <Linked />
          <Pinterest />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
