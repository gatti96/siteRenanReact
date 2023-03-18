import Menu from "./component/menu.js";
import ContentIndex from "./component/contentIndex.js";
import Footer from "./component/footer.js";
import "./component/scss/index.scss";
import "./component/scss/common.scss";
import Rotas from "./routes.js";


function App() {
  return (
    <>
      <div>
        <Rotas />
      </div>
    </>
  );
}

export default App;
