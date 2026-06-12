import { useEffect, useRef } from "react";

// Hook personalizado para GSAP animations
export const useGSAP = (callback, dependencies = []) => {
  const ref = useRef();

  useEffect(() => {
    if (window.gsap && window.ScrollTrigger) {
      const context = window.gsap.context(() => {
        callback();
      }, ref);

      return () => context.revert();
    }
  }, [callback, ...dependencies]);

  return ref;
};

// Hook para cargar GSAP desde CDN
export const useGSAPLoader = () => {
  useEffect(() => {
    const loadGSAP = async () => {
      if (typeof window !== "undefined" && !window.gsap) {
        // Cargar GSAP core
        const gsapScript = document.createElement("script");
        gsapScript.src =
          "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js";
        gsapScript.async = true;
        document.head.appendChild(gsapScript);

        // Cargar ScrollTrigger
        const scrollTriggerScript = document.createElement("script");
        scrollTriggerScript.src =
          "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js";
        scrollTriggerScript.async = true;
        document.head.appendChild(scrollTriggerScript);

        // Esperar a que ambos se carguen
        await new Promise((resolve) => {
          scrollTriggerScript.onload = resolve;
        });

        // Registrar ScrollTrigger
        window.gsap.registerPlugin(window.ScrollTrigger);
      }
    };

    loadGSAP();
  }, []);
};
