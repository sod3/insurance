const FeatureCard = ({ icon, title, desc, color }) => (
  <div style={{
    background: "rgba(255,255,255,0.04)",
    border: `1px solid ${color}33`,
    borderRadius: 20,
    padding: "32px 28px",
    backdropFilter: "blur(12px)",
    transition: "transform 0.3s, box-shadow 0.3s",
    cursor: "default",
  }}
    onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-6px)"; e.currentTarget.style.boxShadow = `0 20px 40px ${color}33`; }}
    onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
  >
    <div style={{ fontSize: 42, marginBottom: 16 }}>{icon}</div>
    <div style={{ color, fontWeight: 700, fontSize: 18, marginBottom: 10, fontFamily: "'Fredoka One', cursive" }}>{title}</div>
    <div style={{ color: "rgba(255,255,255,0.65)", fontSize: 14, lineHeight: 1.7 }}>{desc}</div>
  </div>
);

export default FeatureCard;