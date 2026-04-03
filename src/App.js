import { useState, useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import PrivacyPage from "./pages/PrivacyPage";
import "./styles/global.css";

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const scrollToFeatures = () => {
    if (location.pathname === "/") {
      setTimeout(() => {
        document.getElementById("features")?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      navigate("/");
      setTimeout(() => {
        document.getElementById("features")?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  return (
    <>
      <Navbar scrolled={scrolled} navigate={navigate} scrollToFeatures={scrollToFeatures} />
      
      <Routes>
        <Route path="/" element={<HomePage navigate={navigate} />} />
        <Route path="/privacy" element={<PrivacyPage navigate={navigate} />} />
      </Routes>

      <footer style={{ background: "#07070F", borderTop: "1px solid rgba(255,255,255,0.06)", padding: "40px 5%", textAlign: "center" }}>
        <div style={{ fontFamily: "'Fredoka One', cursive", fontSize: 24, background: "linear-gradient(90deg,#FFA502,#FF4757,#A855F7)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", marginBottom: 12 }}>Color Clash</div>
        <div style={{ color: "rgba(255,255,255,0.4)", fontSize: 13, marginBottom: 20 }}>The ultimate color flooding puzzle game</div>
        <div style={{ display: "flex", justifyContent: "center", gap: 28, marginBottom: 24 }}>
          <span className="nav-link" style={{ fontSize: 13 }} onClick={() => navigate("/")}>Home</span>
          <span className="nav-link" style={{ fontSize: 13 }} onClick={scrollToFeatures}>Features</span>
          <span className="nav-link" style={{ fontSize: 13 }} onClick={() => navigate("/privacy")}>Privacy Policy</span>
        </div>
        <div style={{ color: "rgba(255,255,255,0.25)", fontSize: 12 }}>© 2026 Color Clash. All rights reserved.</div>
      </footer>
    </>
  );
}