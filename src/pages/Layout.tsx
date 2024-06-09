import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <div className="p-5">
        <Outlet />
      </div>
    </>
  );
}

export default App;
