import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Contact from "./components/database";
import Services from "./components/Services";
import Footer from "./components/Footer";
import Admin from "./components/Admin";
import Patient from "./components/Patient";
import "./styles/App.scss";
import "./styles/Header.scss";
import "./styles/Home.scss";
import "./styles/database.scss";
import "./styles/Footer.scss";
import "./styles/mediaquery.scss";

function Hello() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/database" element={<Contact />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Admin" element={<Admin />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default Hello;
