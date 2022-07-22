import { useState } from "react";
import Something from "./components/Something";
import "antd/dist/antd.css";
import MovieCard from "./components/MovieCard";
import AllMoviesContainer from "./components/AllMoviesContainer";
import { Layout } from "antd";
import HomeLayout from "./components/HomeLayout";
import Home from "./pages/Home";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import TheMovie from "./pages/TheMovie";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<TheMovie />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
