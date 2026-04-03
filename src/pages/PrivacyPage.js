import { useNavigate } from "react-router-dom";

const PrivacyPage = () => {
  const navigate = useNavigate();

  return (
    <main style={{ paddingTop: 90 }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "60px 5%" }}>
        <div style={{ marginBottom: 40 }}>
          <span style={{ color: "#FFA502", fontSize: 13, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase" }}>Legal</span>
          <h1 style={{ fontFamily: "'Fredoka One', cursive", fontSize: "clamp(36px,5vw,56px)", marginTop: 8, marginBottom: 16 }}>
            Privacy <span style={{ color: "#FFA502" }}>Policy</span>
          </h1>
          <div style={{ height: 2, background: "linear-gradient(90deg, #FFA502, #FF4757, transparent)", marginTop: 24 }} />
        </div>

        {/* Introduction */}
        <div style={{
          marginBottom: 36,
          background: "rgba(255,255,255,0.03)",
          border: "1px solid rgba(255,255,255,0.07)",
          borderRadius: 16,
          padding: "28px 28px",
        }}>
          <h2 style={{ fontFamily: "'Fredoka One', cursive", fontSize: 22, color: "#FFA502", marginBottom: 14 }}>Introduction</h2>
          <div style={{ color: "rgba(255,255,255,0.65)", fontSize: 15, lineHeight: 1.85, whiteSpace: "pre-line" }}>
            Welcome to Color Clash, a color flood puzzle game designed for players of all ages. This Privacy Policy explains how we handle information when you use our Android application available on the Google Play Store.

            We are committed to protecting your privacy and ensuring transparency about how your information is managed. By using Color Clash, you agree to the terms outlined in this Privacy Policy.
          </div>
        </div>

        {/* Information We Collect */}
        <div style={{
          marginBottom: 36,
          background: "rgba(255,255,255,0.03)",
          border: "1px solid rgba(255,255,255,0.07)",
          borderRadius: 16,
          padding: "28px 28px",
        }}>
          <h2 style={{ fontFamily: "'Fredoka One', cursive", fontSize: 22, color: "#FFA502", marginBottom: 14 }}>Information We Collect</h2>
          <div style={{ color: "rgba(255,255,255,0.65)", fontSize: 15, lineHeight: 1.85, whiteSpace: "pre-line" }}>
            Color Clash is designed to be a simple, offline puzzle game and does not collect personally identifiable information directly from users.

            However, the app may use third-party services (such as advertising and analytics providers) that may collect certain information automatically, including:

            • Device information (e.g., device model, operating system version)
            • General usage data (e.g., interactions with ads)
            • IP address (for approximate location and ad delivery)

            This data is collected only by third-party services and is subject to their respective privacy policies.
          </div>
        </div>

        {/* How We Use Information */}
        <div style={{
          marginBottom: 36,
          background: "rgba(255,255,255,0.03)",
          border: "1px solid rgba(255,255,255,0.07)",
          borderRadius: 16,
          padding: "28px 28px",
        }}>
          <h2 style={{ fontFamily: "'Fredoka One', cursive", fontSize: 22, color: "#FFA502", marginBottom: 14 }}>How We Use Information</h2>
          <div style={{ color: "rgba(255,255,255,0.65)", fontSize: 15, lineHeight: 1.85, whiteSpace: "pre-line" }}>
            Since Color Clash does not directly collect personal data, we do not use user information ourselves.

            Any data collected by third-party services may be used to:

            • Display relevant advertisements
            • Improve ad performance and user experience
            • Analyze app performance and stability
            • Detect and prevent fraud or misuse
          </div>
        </div>

        {/* Third-Party Services */}
        <div style={{
          marginBottom: 36,
          background: "rgba(255,255,255,0.03)",
          border: "1px solid rgba(255,255,255,0.07)",
          borderRadius: 16,
          padding: "28px 28px",
        }}>
          <h2 style={{ fontFamily: "'Fredoka One', cursive", fontSize: 22, color: "#FFA502", marginBottom: 14 }}>Third-Party Services</h2>
          <div style={{ color: "rgba(255,255,255,0.65)", fontSize: 15, lineHeight: 1.85, whiteSpace: "pre-line" }}>
            Color Clash may integrate the following third-party services:

            • Google AdMob (for displaying advertisements)
            • Google Play Services (for analytics, performance monitoring, and app functionality)

            These services may collect and process data under their own privacy policies. We encourage users to review them:

            Google Privacy Policy: https://policies.google.com/privacy

            We do not control how these third parties collect or use your data.
          </div>
        </div>

        {/* Data Retention */}
        <div style={{
          marginBottom: 36,
          background: "rgba(255,255,255,0.03)",
          border: "1px solid rgba(255,255,255,0.07)",
          borderRadius: 16,
          padding: "28px 28px",
        }}>
          <h2 style={{ fontFamily: "'Fredoka One', cursive", fontSize: 22, color: "#FFA502", marginBottom: 14 }}>Data Retention</h2>
          <div style={{ color: "rgba(255,255,255,0.65)", fontSize: 15, lineHeight: 1.85, whiteSpace: "pre-line" }}>
            Color Clash does not store or retain any personal user data on its own servers.

            Any data collected by third-party services is managed and retained according to their respective privacy policies.
          </div>
        </div>

        {/* Children's Privacy */}
        <div style={{
          marginBottom: 36,
          background: "rgba(255,255,255,0.03)",
          border: "1px solid rgba(255,255,255,0.07)",
          borderRadius: 16,
          padding: "28px 28px",
        }}>
          <h2 style={{ fontFamily: "'Fredoka One', cursive", fontSize: 22, color: "#FFA502", marginBottom: 14 }}>Children's Privacy</h2>
          <div style={{ color: "rgba(255,255,255,0.65)", fontSize: 15, lineHeight: 1.85, whiteSpace: "pre-line" }}>
            Color Clash is suitable for users of all ages, including children.

            We do not knowingly collect personal information from children under the age of 13. If you believe that a child has provided personal information through third-party services, please contact us so we can take appropriate action.

            We encourage parents and guardians to supervise children's app usage.
          </div>
        </div>

        {/* Security */}
        <div style={{
          marginBottom: 36,
          background: "rgba(255,255,255,0.03)",
          border: "1px solid rgba(255,255,255,0.07)",
          borderRadius: 16,
          padding: "28px 28px",
        }}>
          <h2 style={{ fontFamily: "'Fredoka One', cursive", fontSize: 22, color: "#FFA502", marginBottom: 14 }}>Security</h2>
          <div style={{ color: "rgba(255,255,255,0.65)", fontSize: 15, lineHeight: 1.85, whiteSpace: "pre-line" }}>
            We value your trust and strive to use commercially acceptable means to protect your information.

            While Color Clash itself does not collect or store personal data, we rely on trusted third-party services that implement industry-standard security measures to safeguard any data they process.
          </div>
        </div>

        {/* Changes to This Privacy Policy */}
        <div style={{
          marginBottom: 36,
          background: "rgba(255,255,255,0.03)",
          border: "1px solid rgba(255,255,255,0.07)",
          borderRadius: 16,
          padding: "28px 28px",
        }}>
          <h2 style={{ fontFamily: "'Fredoka One', cursive", fontSize: 22, color: "#FFA502", marginBottom: 14 }}>Changes to This Privacy Policy</h2>
          <div style={{ color: "rgba(255,255,255,0.65)", fontSize: 15, lineHeight: 1.85, whiteSpace: "pre-line" }}>
            We may update this Privacy Policy from time to time to reflect changes in our practices or for legal and regulatory reasons.

            Any updates will be posted within the app or on the app's listing page. Users are advised to review this policy periodically for any changes.
          </div>
        </div>

        {/* Contact Information */}
        <div style={{
          marginBottom: 36,
          background: "rgba(255,255,255,0.03)",
          border: "1px solid rgba(255,255,255,0.07)",
          borderRadius: 16,
          padding: "28px 28px",
        }}>
          <h2 style={{ fontFamily: "'Fredoka One', cursive", fontSize: 22, color: "#FFA502", marginBottom: 14 }}>Contact Information</h2>
          <div style={{ color: "rgba(255,255,255,0.65)", fontSize: 15, lineHeight: 1.85, whiteSpace: "pre-line" }}>
            If you have any questions or concerns about this Privacy Policy, please contact us:

            Email: connecter072@gmail.com
          </div>
        </div>

        <div style={{ textAlign: "center", marginTop: 48 }}>
          <button className="btn-primary" onClick={() => navigate("/")} style={{ fontSize: 15, padding: "14px 32px" }}>
            ← Back to Home
          </button>
        </div>
      </div>
    </main>
  );
};

export default PrivacyPage;