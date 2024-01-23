import "./App.css";
import { Route, Routes } from "react-router-dom";
import Index from "./pages/Index";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" exact element={<Index />} />
      </Routes>
    </div>
  );
}

export default App;
