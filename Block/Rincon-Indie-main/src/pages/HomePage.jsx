import React from 'react';
import Hero from '../components/Hero.jsx';
import FeaturedGames from '../components/FeaturedGames.jsx';
import Categories from '../components/Categories.jsx';
import RecentPosts from '../components/RecentPosts.jsx';
import Stats from '../components/Stats.jsx';
import Newsletter from '../components/Newsletter.jsx';
import { featuredGames } from '../data/gameData.js';

const HomePage = () => {
  return (
    <>
      <Hero />
      <FeaturedGames games={featuredGames} />
      <Categories />
      <RecentPosts />
      <Stats />
      <Newsletter />
    </>
  );
};

export default HomePage;
