import { Outlet, RouterProvider } from "react-router-dom";
import "./App.css";
import Routes from "./Router";

function App() {
  return (
    <>
      <RouterProvider router={Routes} />
    </>
  );
}

export default App;
