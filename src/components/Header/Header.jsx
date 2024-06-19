import "../Header/Header.scss";
import { Link } from "react-router-dom";
import { AiOutlineGithub, AiFillLinkedin } from "react-icons/ai";
import DayNightToggle from "../DayNightToggle/DayNightToggle";

export default function Header() {
  return (
    <header className="header">
      <ul className="header__toggle">
        <li>
          <DayNightToggle />
        </li>
      </ul>
      <ul className="header__contato">
        <li className="menu-right">
          <Link
            title="Linkedin"
            target="_blank"
            to="https://www.linkedin.com/in/yuri-andrade-9292533a/"
            className="icons"
          >
            <AiFillLinkedin />
          </Link>
        </li>
        <li className="menu-right">
          <Link
            title="GitHub"
            target="_blank"
            to="https://github.com/yandrade11"
            className="icons"
          >
            <AiOutlineGithub />
          </Link>
        </li>
        <li className="menu-right">
          <Link
            title="Via WhatsApp"
            target="_blank"
            to="https://wa.me/5521965269775?text=Olá,%20tudo%20bem?%20Peguei%20seu%20contato%20no%20Portfólio..."
          >
            Contate-me
          </Link>
        </li>
      </ul>
    </header>
  );
}
