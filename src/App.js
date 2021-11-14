import "./App.css";
import Header from "./components/Header/Header";
import { Routes, Route } from "react-router-dom";
import About from "./components/about/About";
import Home from "./components/Home";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/about" element={<About />}></Route>
        <Route path="/" element={<Home />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
