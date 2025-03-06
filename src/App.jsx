import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
// import Layout from "./components/Layout";

function App() {
  return (
    <BrowserRouter>
    {/* <Layout> ERRO DUPLICANDO HEADER E FOOTER */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
      </Routes>
    {/* </Layout> */}
    </BrowserRouter>
  )
}
export default App;