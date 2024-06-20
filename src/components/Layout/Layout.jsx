import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

export default function Layout() {
  return (
    <div className="modo-noturno">
      <Header />
      <main className="homepage">
        <Outlet />
      </main>
      <footer></footer>
    </div>
  );
}
