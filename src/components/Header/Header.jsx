import "../Header/Header.scss";
import { Link } from "react-router-dom";
import { AiOutlineGithub, AiFillLinkedin  } from "react-icons/ai";

export default function Header() {
  return (
    <header className="header">
      <ul>
        <li className="menu-right">
          <Link
            to="https://www.linkedin.com/in/yuri-andrade-9292533a/"
            className="icons"
          >
            <AiFillLinkedin  />
          </Link>
        </li>
        <li className="menu-right">
          <Link to="https://github.com/yandrade11" className="icons">
            <AiOutlineGithub />
          </Link>
        </li>
        <li className="menu-right">
          <Link to="/contato">Contate-me</Link>
        </li>
      </ul>
    </header>
  );
}
