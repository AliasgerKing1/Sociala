import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Setting from "./pages/Setting";
import Stories from "./pages/Stories";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="stories" element={<Stories />} />
      <Route path="setting" element={<Setting />} />
    </Routes>
  );
}

export default App;
