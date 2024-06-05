import "../Header/Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <li>
        <Link to="/contato">Contate-me</Link>
      </li>
    </header>
  );
}
