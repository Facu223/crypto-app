import List from "./components/List/List.jsx";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar.jsx";
import Home from "./components/Home/Home.jsx";
import OneCoin from "./components/OneCoin/OneCoin.jsx";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/crypto-list" element={<List />} />
        <Route path="/crypto-list/:id" element={<OneCoin />} />
      </Routes>

      <footer>
        <p>All rights reserved</p>
        <a href="https://mi-portafolio-facu.netlify.app/" target="_blank">
          By Facundo García
        </a>
      </footer>
    </div>
  );
}

export default App;
