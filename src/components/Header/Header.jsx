import "../Header/Header.scss";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <ul>
        <li className="menu-right">
          <Link to="/contato">Contate-me</Link>
        </li>
      </ul>
    </header>
  );
}
