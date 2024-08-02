import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import {
  About,
  Article,
  ArticlesList,
  CreateAccount,
  Home,
  Login,
  NotFound,
} from "./pages";
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
            <Route path="/login" element={<Login />} />
            <Route path="/create-account" element={<CreateAccount />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
