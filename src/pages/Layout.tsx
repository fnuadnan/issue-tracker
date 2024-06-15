import { Container } from "@radix-ui/themes";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <div className="p-5">
        <Container>
          <Outlet />
        </Container>
      </div>
    </>
  );
}

export default App;
