/* eslint-disable @next/next/no-img-element */
"use client"

import React, { useCallback } from 'react';
import { ChartLine, ChevronDown } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { Button } from './ui/button';
import { motion } from 'framer-motion';

const images = [
  {
    src: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    alt: "Consultoria em Negócios",
    title: "Consultoria em Negócios",
    subtitle: "Impulsionando o sucesso do seu negócio com estratégias eficientes"
  },
  {
    src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    alt: "Governança Corporativa",
    title: "Governança Corporativa",
    subtitle: "Estruturas robustas para o crescimento sustentável"
  },
  {
    src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    alt: "Planejamento Estratégico",
    title: "Planejamento Estratégico",
    subtitle: "Transformando visão em resultados tangíveis"
  }
];

const Hero = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 5000 })]);

  const scrollToAbout = useCallback(() => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="relative h-[70vh] overflow-hidden">
      <div className="embla h-full" ref={emblaRef}>
        <div className="embla__container h-full">
          {images.map((slide, index) => (
            <div key={index} className="embla__slide relative w-full h-full">
              <img 
                src={slide.src}
                alt={slide.alt}
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
              
              <motion.div 
                className="absolute inset-0 flex items-center justify-center"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <div className="container mx-auto px-6 md:px-12 text-center">
                  <motion.h1 
                    className="text-4xl md:text-5xl font-bold text-white mb-6"
                    variants={itemVariants}
                  >
                    {slide.title}
                  </motion.h1>
                  <motion.p 
                    className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto"
                    variants={itemVariants}
                  >
                    {slide.subtitle}
                  </motion.p>
                  <motion.div variants={itemVariants}>
                    <Button 
                      className="bg-gradient-to-r from-brand-dark to-brand-medium hover:from-brand-medium hover:to-brand-light text-white flex items-center mx-auto transition-all duration-300"
                      onClick={scrollToAbout}
                    >
                      <ChartLine className="mr-2 h-5 w-5" />
                      Saiba Mais
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <Button
          variant="ghost"
          className="text-white hover:text-background-warm"
          onClick={scrollToAbout}
        >
          <ChevronDown className="h-6 w-6 animate-bounce" />
        </Button>
      </motion.div>
    </section>
  );
};

export default Hero;