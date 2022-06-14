import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import AboutPage from "./components/AboutPage/AboutPage";
import ContactPage from "./components/ContactPage/ContactPage";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";

function App() {
  return (
    <div>
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/signup-signin" element={<Login />} />
      </Routes>

      <Footer />
    </Router>
    </div>
  );
}

export default App;
