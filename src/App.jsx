import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import Content from "./pages/content/Content";
import Detail from "./pages/detail/Detail";
import Error from "./pages/error/Error";
import Gallery from "./pages/gallery/Gallery";
import Login from "./pages/login/Login";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <div className="app__main">
          <Routes>
            <Route path="/" element={<Gallery />} />
            <Route path="/info/:id" element={<Detail />} />
            <Route path="/*" element={<Error />} />
            <Route path="/about" element={<Content />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
