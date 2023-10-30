import "./Contact.scss";
import { Link } from "react-router-dom";
import Arrow from "../Arrow";

const Contact = () => {
  return (
    <section className="contact">
      <h2>Contact Us</h2>
      <article>
        <form action="#">
          <input type="text" placeholder="Name" />
          <input type="number" data-end="dadad" placeholder="Phone Number*" />
          <input type="email" placeholder="E-mail*" />
          <input type="text" placeholder="intereseted in" />
          <textarea placeholder="Message*" cols="30" rows="10"></textarea>
        </form>

        <div className="imgContact"></div>
      </article>
      <div className="imgText">
        <Link to="/gallery">
          <h2>send mail</h2>
          <Arrow />
        </Link>
      </div>
    </section>
  );
};

export default Contact;
