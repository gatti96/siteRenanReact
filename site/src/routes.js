import React from "react";
import { Route, Routes } from "react-router-dom";
import ContentIndex from "./component/contentIndex.js";
import Project from "./pages/project.js";

function Rotas() {
     
  <Routes>
    <Route path="/"><ContentIndex /></Route>
    <Route path="/project"><Project /></Route>
  </Routes>

} 


export default Rotas