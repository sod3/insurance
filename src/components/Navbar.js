const Navbar = ({ scrolled, navigate, scrollToFeatures }) => {
  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      padding: "14px 5%",
      display: "flex", alignItems: "center", justifyContent: "space-between",
      background: scrolled ? "rgba(10,10,24,0.92)" : "transparent",
      backdropFilter: scrolled ? "blur(16px)" : "none",
      borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
      transition: "all 0.3s",
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer" }} onClick={() => navigate("/")}>
        <div style={{
          width: 38, height: 38, borderRadius: 10,
          background: "linear-gradient(135deg, #FFA502, #FF4757)",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 20, boxShadow: "0 4px 14px #FF475744"
        }}>🎮</div>
        <span style={{ fontFamily: "'Fredoka One', cursive", fontSize: 22, background: "linear-gradient(90deg,#FFA502,#FF4757)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Color Clash</span>
      </div>
      <div style={{ display: "flex", gap: 32, alignItems: "center" }}>
        <span className="nav-link" onClick={() => navigate("/")}>Home</span>
        <span className="nav-link" onClick={scrollToFeatures}>Features</span>
        <span className="nav-link" onClick={() => navigate("/privacy")}>Privacy</span>
        <button className="btn-primary" style={{ padding: "10px 22px", fontSize: 14 }}
          onClick={() => window.open("https://play.google.com/store", "_blank")}>
          ▶ Play Now
        </button>
      </div>
    </nav>
  );
};

export default Navbar;