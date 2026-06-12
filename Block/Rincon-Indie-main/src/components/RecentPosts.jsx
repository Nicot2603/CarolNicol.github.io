import React from 'react';
import { User, Calendar, MessageCircle } from 'lucide-react';
import FadeInOnScroll from './FadeInOnScroll';
import { recentPosts } from '../data/gameData.js';

const RecentPosts = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Últimas Publicaciones</h2>
            <p className="text-gray-400 text-lg">Mantente al día con las últimas noticias gaming</p>
          </div>
        </FadeInOnScroll>

        <div className="space-y-8">
          {recentPosts.map((post, index) => (
            <FadeInOnScroll key={post.id} delay={index * 200}>
              <div className="bg-gray-800 rounded-2xl p-6 hover:transform hover:scale-[1.02] transition-all duration-300 hover:shadow-2xl">
                <div className="flex flex-col md:flex-row gap-6">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full md:w-64 h-48 md:h-32 object-cover rounded-xl"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="bg-purple-600 px-2 py-1 rounded text-xs font-semibold">
                        {post.category}
                      </span>
                      <span className="bg-gray-700 px-2 py-1 rounded text-xs">
                        {post.game}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 hover:text-purple-400 cursor-pointer transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-400 mb-4 leading-relaxed">{post.excerpt}</p>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        {post.author}
                      </span>
                      <span className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {post.date}
                      </span>
                      <span className="flex items-center hover:text-purple-400 cursor-pointer transition-colors">
                        <MessageCircle className="h-4 w-4 mr-1" />
                        Comentar
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </FadeInOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentPosts;