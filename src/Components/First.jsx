import brand from "../assets/images/brand_logo.png";
import "./First.css";
import './Second'
import Second from "./Second";
const First = () => {
  return (
    <>
      <nav className="nv">
        <div className="brand">
          <img src={brand} alt="Brand logo" srcset="" />
        </div>
        <ul className="myul">
          <li className="my-list">
            <a href="https://www.google.com">MENU</a>
          </li>
          <li className="my-list">
            <a href="#">LOCATION</a>
          </li>
          <li className="my-list">
            <a href="#">ABOUT</a>
          </li>
          <li className="my-list">
            <a href="#">CONTACT</a>
          </li>
        </ul>
        <button type="button" className="login">
          Login
        </button>
      </nav>
      <Second/>
    </>
  );
};

export default First;
