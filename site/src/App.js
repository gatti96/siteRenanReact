import Menu from "./component/menu.js";
import ContentIndex from "./component/contentIndex.js";
import Footer from "./component/footer.js";
import Project from "./pages/project.js"
import "./component/scss/index.scss";
import "./component/scss/common.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
      <div>
        <Menu />
      
        <Footer />
      </div>
      
      
    </>
    
  );
}

export default App;
