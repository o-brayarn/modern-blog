import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import { About, Article, ArticlesList, Home } from "./pages";
import { NavBar } from "./components";
function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div id="page-body">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/articles" element={<ArticlesList />} />
            <Route path="/articles/:articleId" element={<Article />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
