import "./App.css";
import { Route, Routes } from "react-router-dom";
import Index from "./pages/Index";
import Backtotop from "./components/BackToTop";
function App() {
  return (
    <div>
      <Backtotop />
      <Routes>
        <Route path="/" exact element={<Index />} />
      </Routes>
    </div>
  );
}

export default App;
