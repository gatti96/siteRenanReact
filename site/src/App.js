import Menu from "./component/menu.js";
import ContentIndex from "./component/contentIndex.js";
import Footer from "./component/footer.js";
import "./component/scss/index.scss";
import "./component/scss/common.scss";
import Rotas from "./routes.js";
import { BrowserRouter } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <div>
        <Menu />
        <Rotas />
        <Footer />
      </div>
    
    </BrowserRouter>
    
  );
}

export default App;
