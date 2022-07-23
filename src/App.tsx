import "antd/dist/antd.css";
import Home from "./pages/Home";
import {  HashRouter, Route, Routes } from "react-router-dom";
import TheMovie from "./pages/TheMovie";
import NotFinded from "./pages/NotFinded";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<TheMovie />} />
          <Route path="*" element={<NotFinded />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
