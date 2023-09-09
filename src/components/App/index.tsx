import HomePage from "../../pages/HomePage";
import { Route, Routes } from "react-router-dom";
import Navbar from "../Navbar";
import { useState } from "react";
import AboutPage from "../../pages/AboutPage";

function App() {
  const [fullNavbar, setFullNavbar] = useState(false);
  const style = `
    relative
    w-screen
    h-[calc(100vh_-_64px)]
    max-h-[calc(100vh_-_64px)]
    overflow-hidden
    sm:h-screen
    sm:max-h-screen
    transition-width
    ${fullNavbar ?  "sm:w-fullNavbar" : "sm:w-notFullNavbar"}
  `

  return (
    <div className="w-full h-screen bg-zinc-950 flex flex-col-reverse sm:flex-row">
      <Navbar fullNavbar={(state) => setFullNavbar(state)} />
      <div className={style}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<HomePage />} />
          <Route path="/contact" element={<HomePage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
