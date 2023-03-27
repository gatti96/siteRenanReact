import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContentIndex from "./component/contentIndex.js";
import Footer from "./component/footer.js";
import Menu from "./component/menu.js";
import Project from "./pages/project.js";

class Rotas extends React.Component {
  return(){
    <Routes>
        <Route path="/"><ContentIndex /></Route>
        <Route path="/project"><Project /></Route>
    </Routes>
  }     
  

} 

export default Rotas