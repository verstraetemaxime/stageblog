import { Link } from "react-router-dom";
import pf from "../../assets/pf.jpg";
import "./style.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <Link to={"/"} className="header__title">
          <h1 className="header__title">Stageblog - Maxime @ FOLD</h1>
        </Link>
        <img src={pf} alt="Maxime Verstraete" className="header__img" />
      </div>
    </header>
  );
};

export default Header;
