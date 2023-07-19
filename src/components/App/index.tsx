import HomePage from "../../pages/HomePage";
import { Route, Routes } from "react-router-dom";
import Navbar from "../Navbar";

function App() {
  return (
    <div className="w-full h-screen bg-zinc-950 flex sm:flex-col-reverse">
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/about" element={<HomePage/>} />
        <Route path="/projects" element={<HomePage/>} />
        <Route path="/contact" element={<HomePage/>} />
      </Routes>
    </div>
  );
}

export default App;
