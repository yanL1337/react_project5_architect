import Logo from "./Logo";
import Darkmode from "./Darkmode";
import Lightmode from "./Lightmode";
import { NavLink } from "react-router-dom";
import "./Header.scss";
import { useContext } from "react";
import { DarkTheme } from "../../context/Contexte";

const Header = () => {
  const { dark, setTheme } = useContext(DarkTheme);

  const darko = () => {
    setTheme((dark) => !dark);
  };

  return (
    <header>
      <Logo />
      <div className="navWrapper">
        <nav>
          <NavLink to="/">MAIN</NavLink>
          <NavLink to="/gallery">GALLERY</NavLink>
          <NavLink to="/main">PROJECTS</NavLink>
          <NavLink to="/projects">CERTIFICATIONS</NavLink>
          <NavLink to="certs">CONTACTS</NavLink>
        </nav>
        <div className="dMode" onClick={darko}>
          {dark ? <Lightmode /> : <Darkmode />}
        </div>
      </div>
    </header>
  );
};

export default Header;
