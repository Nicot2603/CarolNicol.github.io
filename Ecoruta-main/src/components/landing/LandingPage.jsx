import LandingNav from "./LandingNav";
import LandingHero from "./LandingHero";
import LandingStats from "./LandingStats";
import LandingFeatures from "./LandingFeatures";
import LandingFooter from "./LandingFooter";

export default function LandingPage({ onLogin }) {
  return (
    <div style={{ minHeight: "100vh", background: "#f9f6f1", fontFamily: "'Outfit', sans-serif" }}>
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Outfit:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      <LandingNav onLogin={onLogin} />
      <LandingHero onLogin={onLogin} />
      <LandingStats />
      <LandingFeatures />
      <LandingFooter onLogin={onLogin} />
    </div>
  );
}