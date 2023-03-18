import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContentIndex from "./component/contentIndex.js";
import Project from "./pages/project.js";

function Rotas() {
  <BrowserRouter>
    
  <Routes>
    <Route path="/" element={ContentIndex}/>
    <Route path="/project" element={Project} />
  </Routes>

  </BrowserRouter>

} 


export default Rotas