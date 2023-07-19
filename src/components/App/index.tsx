import HomePage from "../../pages/HomePage";
import { Route, Routes } from "react-router-dom";
import Navbar from "../Navbar";

function App() {
  return (
    <div className="w-full h-screen bg-zinc-950">
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
      </Routes>
    </div>
  );
}

export default App;
