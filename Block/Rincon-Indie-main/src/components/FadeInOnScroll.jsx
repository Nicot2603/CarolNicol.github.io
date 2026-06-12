import React, { useState, useEffect, useRef } from 'react';

const FadeInOnScroll = ({ children, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`transform transition-all duration-1000 ${isVisible
          ? 'translate-y-0 opacity-100'
          : 'translate-y-20 opacity-0'
        }`}
    >
      {children}
    </div>
  );
};

export default FadeInOnScroll;