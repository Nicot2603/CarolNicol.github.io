import HeroSection from "./HeroSection";
import StatsSection from "./StatsSection";
import FeaturesSection from "./FeaturesSection";

const styles = `
  .home-wrap { max-width: 1200px; margin: 0 auto; padding: 0 40px 80px; }
  @media (max-width: 960px) { .home-wrap { padding: 0 24px 60px; } }
  @media (max-width: 560px) { .home-wrap { padding: 0 14px 48px; } }
`;

export default function HomeView({ user, setTab }) {
  return (
    <>
      <style>{styles}</style>
      <div className="home-wrap">
        <HeroSection user={user} setTab={setTab} />
        <StatsSection />
        <FeaturesSection setTab={setTab} />
      </div>
    </>
  );
}
