import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navigation from './components/Navigation.jsx';
import Footer from './components/Footer.jsx';

import HomePage from './pages/HomePage.jsx';
import ReviewsPage from './pages/ReviewsPage.jsx';
import NewsPage from './pages/NewsPage.jsx';
import GuidesPage from './pages/GuidesPage.jsx';
import CommunityPage from './pages/CommunityPage.jsx';
import ContactPage from './pages/ContactPage.jsx';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 flex flex-col">
        <Navigation />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/reviews" element={<ReviewsPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/guides" element={<GuidesPage />} />
            <Route path="/community" element={<CommunityPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
