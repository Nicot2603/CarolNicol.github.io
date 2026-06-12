import { useState } from "react";
import LandingPage from "./components/landing/LandingPage";
import LoginView from "./components/auth/LoginView";
import Navbar from "./components/nadvar";
import HomeView from "./components/home/HomeView";
import AdminView from "./components/admin/AdminView";
import RepartidorView from "./components/repartidor/RepartidorView";
import ClienteView from "./components/cliente/ClienteView";

export default function App() {
  const [vista, setVista] = useState("landing");
  const [user, setUser]   = useState(null);
  const [tab, setTab]     = useState("home");

  if (vista === "landing") return <LandingPage onLogin={() => setVista("login")} />;

  if (vista === "login") return (
    <LoginView
      onLogin={(u) => { setUser(u); setVista("app"); setTab("home"); }}
      onVolver={() => setVista("landing")}
    />
  );

  return (
    <div style={{ minHeight: "100vh", background: "#f9f6f1", fontFamily: "'Outfit', sans-serif" }}>
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Outfit:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      <Navbar tab={tab} setTab={setTab} user={user} onLogout={() => { setUser(null); setVista("landing"); }} />
      <main>
        {tab === "home"       && <HomeView user={user} setTab={setTab} />}
        {tab === "admin"      && <AdminView />}
        {tab === "repartidor" && <RepartidorView />}
        {tab === "cliente"    && <ClienteView />}
      </main>
    </div>
  );
}