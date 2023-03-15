import Menu from "./component/menu.js";
import ContentIndex from "./component/contentIndex.js";
import Footer from "./component/footer.js";
import "./component/scss/index.scss";
import "./component/scss/common.scss";

function App() {
  return (
    <>
      <div>
        <Menu />
      
        <ContentIndex />
      
        <Footer />
      </div>
    </>
  );
}

export default App;
