import "./App.css";
import { Route, Routes } from "react-router-dom";
import Index from "./pages/Index";
import Backtotop from "./components/BackToTop";
import { useEffect, useState } from "react";
import logo from "./assets/images/pageLogo.svg";
function App() {
  const [preload, setpreload] = useState(false);
  useEffect(() => {
    setpreload(true);
    setTimeout(() => {
      setpreload(false);
    }, 4000);
  }, []);
  return (
    <div>
      {preload ? (
        <div>
          <div className="bg-white fixed top-0 bottom-0 overflow-hidden flex items-center flex-col justify-center w-full h-full">
            <img className=" animate-bounce" src={logo} alt="gif" />
            <div className=" pt-4 font-poppins text-[50px] text-[#B00000] font-semibold">
              Loading ...
            </div>
          </div>
        </div>
      ) : (
        <div>
          <Backtotop />
          <Routes>
            <Route path="/" exact element={<Index />} />
          </Routes>
        </div>
      )}
    </div>
  );
}

export default App;
