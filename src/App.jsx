import {
  // funções nativas do react-router
  createBrowserRouter,
  createRoutesFromElements,

  // componentes nativos do react-router
  RouterProvider,
  Route,
} from "react-router-dom";

import Layout from './components/Layout/Layout';
import Homepage from "./pages/Homepage/Homepage";
import "./App.css";

const browserRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Layout />}>
        <Route index element={<Homepage />} />
      </Route>
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={browserRouter} />
    </>
  );
}

export default App;
