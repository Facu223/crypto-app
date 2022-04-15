import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { FcCurrencyExchange, FcHome } from "react-icons/fc";

const NavBar = () => {
  const [navResponsive, setNavResponsive] = React.useState(false);

  return (
    <nav className="navBar">
      <Link to={"/"} onClick={() => setNavResponsive(false)}>
        <img src="/imgs/coin.png"></img>
      </Link>
      <ul className={`${navResponsive ? "lista lista-visible" : "lista"}`}>
        <li>
          <Link to={"/"} onClick={() => setNavResponsive(false)}>
            Home <FcHome />
          </Link>
        </li>
        <li>
          <Link to={"/crypto-list"} onClick={() => setNavResponsive(false)}>
            List <FcCurrencyExchange />
          </Link>
        </li>
      </ul>
      <div className="burger" onClick={() => setNavResponsive(!navResponsive)}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};

export default NavBar;
