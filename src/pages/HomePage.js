import { useRef } from "react";
import FloatingBlock from "../components/FloatingBlock";
import ScreenshotMock from "../components/ScreenshotMock";
import FeatureCard from "../components/FeatureCard";
import { COLORS } from "../constants/colors";

const HomePage = ({ navigate }) => {
  const featuresRef = useRef(null);

  const scrollToFeatures = () => {
    featuresRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main>
      {/* HERO SECTION */}
      <section style={{ minHeight: "100vh", display: "flex", alignItems: "center", position: "relative", overflow: "hidden", padding: "100px 5% 60px" }}>
        {/* BG blobs */}
        {[
          { color: "#FF475730", left: "-10%", top: "10%", size: 500 },
          { color: "#FFA50225", right: "-5%", top: "30%", size: 400 },
          { color: "#A855F720", left: "40%", bottom: "5%", size: 350 },
          { color: "#2ED57318", left: "20%", top: "50%", size: 300 },
        ].map((b, i) => (
          <div key={i} style={{
            position: "absolute", width: b.size, height: b.size, borderRadius: "50%",
            background: b.color, filter: "blur(80px)",
            left: b.left, right: b.right, top: b.top, bottom: b.bottom,
            animation: `blobFloat ${7 + i}s ease-in-out infinite`,
            animationDelay: `${i * 1.5}s`,
            pointerEvents: "none",
          }} />
        ))}

        <FloatingBlock color="#FF4757" style={{ left: "5%", top: "20%" }} delay={0} />
        <FloatingBlock color="#3EAEFF" style={{ left: "8%", top: "70%" }} delay={1} />
        <FloatingBlock color="#2ED573" style={{ right: "8%", top: "15%" }} delay={2} />
        <FloatingBlock color="#FFA502" style={{ right: "12%", bottom: "25%" }} delay={0.5} />
        <FloatingBlock color="#A855F7" style={{ left: "18%", bottom: "15%" }} delay={1.5} />

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%", maxWidth: 1200, margin: "0 auto", gap: 60, flexWrap: "wrap" }}>
          <div style={{ flex: 1, minWidth: 300, animation: "fadeUp 0.8s ease both" }}>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "rgba(255,165,2,0.12)", border: "1px solid rgba(255,165,2,0.3)",
              borderRadius: 50, padding: "6px 18px", marginBottom: 24, fontSize: 13, fontWeight: 700, color: "#FFA502"
            }}>
              🎮 Now on Google Play Store
            </div>
            <h1 style={{
              fontFamily: "'Fredoka One', cursive",
              fontSize: "clamp(48px, 7vw, 80px)",
              lineHeight: 1.05,
              marginBottom: 24,
            }}>
              <span style={{ background: "linear-gradient(135deg, #fff 30%, rgba(255,255,255,0.7))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Flood the</span>
              <br />
              <span style={{
                background: "linear-gradient(135deg, #FFA502, #FF4757, #A855F7)",
                backgroundSize: "200% 200%",
                animation: "gradientFlow 3s ease infinite",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"
              }}>Color Board!</span>
            </h1>
            <p style={{ fontSize: 18, color: "rgba(255,255,255,0.65)", lineHeight: 1.7, marginBottom: 36, maxWidth: 480 }}>
              A brain-teasing puzzle game where you flood the entire board with one color in limited moves. Simple to learn, impossible to put down!
            </p>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <button className="btn-primary" style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 16 }}
                onClick={() => window.open("https://play.google.com/store", "_blank")}>
                <span style={{ fontSize: 22 }}>▶</span> Download on Play Store
              </button>
              <button className="btn-secondary" onClick={scrollToFeatures}>
                Learn More ↓
              </button>
            </div>
            {/* <div style={{ display: "flex", gap: 32, marginTop: 48, flexWrap: "wrap" }}>
              {[["🌟","4.8+","Rating"],["📥","10K+","Downloads"],["🧩","100+","Levels"]].map(([icon,val,label]) => (
                <div key={label}>
                  <div style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", marginBottom: 2 }}>{icon} {label}</div>
                  <div style={{ fontFamily: "'Fredoka One', cursive", fontSize: 28, color: "#FFA502" }}>{val}</div>
                </div>
              ))}
            </div> */}
          </div>

          <div style={{ display: "flex", justifyContent: "center", flex: "0 0 auto", animation: "fadeUp 0.8s ease 0.2s both" }}>
            <div style={{ position: "relative" }}>
              <div style={{
                position: "absolute", inset: -30, background: "radial-gradient(ellipse, #FFA50222, transparent 70%)",
                borderRadius: "50%", animation: "blobFloat 5s ease-in-out infinite"
              }} />
              <ScreenshotMock />
            </div>
          </div>
        </div>
      </section>

      {/* HOW TO PLAY */}
      <section style={{ padding: "80px 5%", position: "relative" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", textAlign: "center" }}>
          <div style={{ fontFamily: "'Fredoka One', cursive", fontSize: "clamp(32px, 5vw, 52px)", marginBottom: 16 }}>
            How to <span style={{ color: "#FFA502" }}>Play</span>
          </div>
          <p style={{ color: "rgba(255,255,255,0.5)", marginBottom: 60, fontSize: 16 }}>Three simple steps to endless fun</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 24 }}>
            {[
              { n: "01", color: "#FF4757", title: "Pick a Color", desc: "Choose from 6 vibrant colors at the bottom of your screen to start flooding the board from the top-left corner.", icon: "🎨" },
              { n: "02", color: "#FFA502", title: "Flood & Expand", desc: "Your color flood expands across matching adjacent tiles, capturing more of the board with each move you make.", icon: "🌊" },
              { n: "03", color: "#2ED573", title: "Win the Board", desc: "Flood the entire board before your moves run out. Use strategy to chain colors efficiently and claim victory!", icon: "🏆" },
            ].map(({ n, color, title, desc, icon }) => (
              <div key={n} style={{
                background: "rgba(255,255,255,0.03)",
                border: `1px solid ${color}22`,
                borderRadius: 24, padding: "36px 28px",
                position: "relative", overflow: "hidden",
                transition: "transform 0.3s",
              }}
                onMouseEnter={e => e.currentTarget.style.transform = "translateY(-6px)"}
                onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
              >
                <div style={{
                  position: "absolute", top: -20, right: -20, fontSize: 100,
                  color, opacity: 0.06, fontFamily: "'Fredoka One', cursive", lineHeight: 1
                }}>{n}</div>
                <div style={{ fontSize: 48, marginBottom: 16 }}>{icon}</div>
                <div style={{ color, fontFamily: "'Fredoka One', cursive", fontSize: 11, letterSpacing: 2, marginBottom: 8 }}>STEP {n}</div>
                <div style={{ fontFamily: "'Fredoka One', cursive", fontSize: 22, marginBottom: 12 }}>{title}</div>
                <div style={{ color: "rgba(255,255,255,0.55)", fontSize: 14, lineHeight: 1.75 }}>{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section ref={featuresRef} id="features" style={{ padding: "80px 5%", background: "rgba(255,255,255,0.015)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <div style={{ fontFamily: "'Fredoka One', cursive", fontSize: "clamp(32px, 5vw, 52px)", marginBottom: 16 }}>
              Why <span style={{ color: "#3EAEFF" }}>Color Clash?</span>
            </div>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 16 }}>Everything you need for the perfect puzzle experience</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
            {[
              { icon: "🧠", title: "Brain Training", desc: "Sharpen your strategic thinking and planning skills with hundreds of handcrafted puzzles of increasing difficulty.", color: "#A855F7" },
              { icon: "⚡", title: "Quick Sessions", desc: "Perfect for short breaks or long sessions. Each puzzle takes just minutes but you'll keep coming back for more.", color: "#FFA502" },
              { icon: "📈", title: "Progressive Difficulty", desc: "Start easy and gradually face harder boards with more colors and fewer moves. Always the right challenge.", color: "#2ED573" },
              { icon: "🎨", title: "Vivid Colors", desc: "Stunning neon color palette with glowing effects that make every move satisfying and visually delightful.", color: "#FF4757" },
              { icon: "🏅", title: "Earn Rewards", desc: "Collect coins, unlock achievements, and compete for the highest score with the fewest moves possible.", color: "#3EAEFF" },
              { icon: "📵", title: "Play Offline", desc: "No internet? No problem. Color Clash works completely offline so you can play anywhere, anytime.", color: "#FF6B81" },
            ].map(f => <FeatureCard key={f.title} {...f} />)}
          </div>
        </div>
      </section>

      {/* COLOR PALETTE SHOWCASE */}
      <section style={{ padding: "80px 5%", textAlign: "center" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div style={{ fontFamily: "'Fredoka One', cursive", fontSize: "clamp(28px,4vw,46px)", marginBottom: 16 }}>
            6 Vibrant <span style={{ color: "#FFA502" }}>Colors</span>
          </div>
          <p style={{ color: "rgba(255,255,255,0.5)", marginBottom: 50, fontSize: 15 }}>Each one glowing, satisfying, and strategic</p>
          <div style={{ display: "flex", justifyContent: "center", gap: 16, flexWrap: "wrap", marginBottom: 50 }}>
            {Object.entries(COLORS).map(([name, hex]) => (
              <div key={name} style={{ textAlign: "center" }}>
                <div style={{
                  width: 70, height: 70, borderRadius: 18,
                  background: hex, boxShadow: `0 0 24px ${hex}88, 0 8px 24px ${hex}44`,
                  marginBottom: 8, transition: "transform 0.2s",
                  cursor: "default",
                }}
                  onMouseEnter={e => e.currentTarget.style.transform = "scale(1.15) translateY(-4px)"}
                  onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
                />
                <div style={{ fontSize: 12, color: "rgba(255,255,255,0.5)", textTransform: "capitalize" }}>{name}</div>
              </div>
            ))}
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(12,1fr)", gap: 3, borderRadius: 16, overflow: "hidden", height: 12 }}>
            {Array.from({ length: 36 }, (_, i) => (
              <div key={i} style={{ background: Object.values(COLORS)[i % 6] }} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "80px 5%", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(135deg, #FF475712, #FFA50212, #A855F712, #3EAEFF12)",
          backgroundSize: "400% 400%", animation: "gradientFlow 8s ease infinite"
        }} />
        <div style={{ position: "relative", maxWidth: 640, margin: "0 auto" }}>
          <div style={{ fontFamily: "'Fredoka One', cursive", fontSize: "clamp(32px,5vw,56px)", marginBottom: 20, lineHeight: 1.1 }}>
            Ready to <span style={{ color: "#FFA502" }}>Flood</span> the Board?
          </div>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 17, marginBottom: 40, lineHeight: 1.7 }}>
            Download Color Clash for free today and join thousands of players solving colorful puzzles!
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <button className="btn-primary" style={{ fontSize: 18, padding: "18px 44px", display: "flex", alignItems: "center", gap: 12 }}
              onClick={() => window.open("https://play.google.com/store", "_blank")}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M3.18 23.76a2 2 0 01-1.18-1.8V2.04A2 2 0 013.18.28l11.7 11.74zm15.3-8.64L4.92 22.44l8.6-8.62zm2.46-4.1a2 2 0 010 1.96l-2.7 1.54-3-3 3-3zM4.92 1.56L18.48 8.98l-2.96 2.96z"/></svg>
              Get it on Google Play
            </button>
          </div>
          <div style={{ marginTop: 30, color: "rgba(255,255,255,0.3)", fontSize: 13 }}>Free to download · No ads · Works offline</div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;