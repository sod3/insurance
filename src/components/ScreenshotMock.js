const ScreenshotMock = () => {
  const grid = [
    ["#3EAEFF","#2ED573","#FFA502","#2ED573","#3EAEFF","#FF4757","#FF4757","#FFA502"],
    ["#3EAEFF","#A855F7","#2ED573","#FF4757","#FF4757","#FFA502","#A855F7","#A855F7"],
    ["#FFA502","#FF4757","#FF4757","#FFA502","#2ED573","#FF4757","#3EAEFF","#2ED573"],
    ["#FF4757","#FF4757","#2ED573","#2ED573","#FFA502","#FFA502","#3EAEFF","#FF4757"],
    ["#3EAEFF","#2ED573","#FF4757","#3EAEFF","#A855F7","#2ED573","#FF4757","#FFA502"],
    ["#2ED573","#FFA502","#A855F7","#FF4757","#3EAEFF","#FF4757","#2ED573","#A855F7"],
    ["#A855F7","#3EAEFF","#FF4757","#2ED573","#FFA502","#A855F7","#FF4757","#3EAEFF"],
    ["#FFA502","#2ED573","#3EAEFF","#FFA502","#FF4757","#2ED573","#A855F7","#FF4757"],
  ];

  return (
    <div style={{
      width: 280,
      background: "#0D0D1A",
      borderRadius: 36,
      border: "2px solid rgba(255,255,255,0.1)",
      overflow: "hidden",
      boxShadow: "0 40px 80px #000a, 0 0 40px #3EAEFF22",
      position: "relative",
    }}>
      <div style={{ background: "#111127", padding: "8px 16px 12px", textAlign: "center", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ color: "#fff", fontSize: 18, fontWeight: 800, fontFamily: "'Fredoka One', cursive", letterSpacing: 0.5 }}>Color Clash</div>
      </div>
      <div style={{ background: "#111127", padding: "8px 10px", display: "flex", gap: 6, justifyContent: "center" }}>
        {[["MOVES LEFT","22"],["PROGRESS","1%"],["COINS","100"]].map(([l,v]) => (
          <div key={l} style={{ flex: 1, background: "rgba(255,255,255,0.05)", borderRadius: 10, padding: "6px 4px", textAlign: "center" }}>
            <div style={{ color: "rgba(255,255,255,0.45)", fontSize: 8, letterSpacing: 0.5 }}>{l}</div>
            <div style={{ color: "#fff", fontSize: 14, fontWeight: 700 }}>{v}</div>
          </div>
        ))}
      </div>
      <div style={{ padding: "8px", background: "#111127" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(8,1fr)", gap: 2, borderRadius: 10, overflow: "hidden" }}>
          {grid.flat().map((c, i) => (
            <div key={i} style={{ aspectRatio: "1", background: c }} />
          ))}
        </div>
      </div>
      <div style={{ background: "#111127", padding: "10px 8px 16px", display: "flex", justifyContent: "center", gap: 8 }}>
        {["#FF4757","#3EAEFF","#2ED573","#FFA502","#A855F7","#FF6B81"].map((c, i) => (
          <div key={i} style={{
            width: 32, height: 32, borderRadius: "50%", background: c,
            border: i === 1 ? "3px solid white" : "none",
            boxShadow: `0 0 10px ${c}88`
          }} />
        ))}
      </div>
    </div>
  );
};

export default ScreenshotMock;