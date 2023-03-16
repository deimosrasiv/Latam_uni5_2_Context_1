import { Routes, Route } from "react-router-dom";
import Nabvar from './Components/Nabvar'
import Footer from "./Components/footer";


import Favoritos from "./page/Favoritos";
import Home from "./page/home";
import NoFount from "./page/NoFount";

import './App.css'




export default function App() {
  return (
    <div>
      <div className="container pb-5">
        <Nabvar/>
      </div>
      

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Favoritos" element={<Favoritos />} />
          <Route path="*" element={<NoFount />} />
        </Routes>
      </main>

      
      <div className="container py-3">
        <Footer footer=" © 2020-2021 Santiago, Chile Ð€IMØ§¯®Ã§Iv Todos los derechos reservados." />
      </div>
    </div>
  );
}



