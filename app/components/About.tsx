"use client"

import React from 'react';
import { Briefcase, Users, Lightbulb, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card, CardContent } from './ui/card';

interface AboutCard {
  title: string;
  description: string;
  icon: React.ElementType;
}

const aboutData: AboutCard[] = [
  {
    title: "25 Anos de Experiência",
    description: "L&G Directa Consultoria: há 25 anos oferecendo soluções corporativas personalizadas que impulsionam a inovação em produtos, sistemas e processos, garantindo a continuidade e o sucesso dos negócios de nossos clientes.",
    icon: Briefcase
  },
  {
    title: "Inovação e Agilidade",
    description: "Com um atendimento ágil e diferenciado, ajudamos a transformar desafios em diferenciais competitivos, elevando os resultados e a performance empresarial.",
    icon: Lightbulb
  },
  {
    title: "Equipe Especializada",
    description: "Nossa equipe, formada por executivos e especialistas certificados, traz uma vasta experiência em gestão empresarial e estudos técnicos, prontos para apoiar sua empresa a alcançar novos patamares de sucesso.",
    icon: Users
  },
  {
    title: "Soluções Personalizadas",
    description: "Oferecemos soluções corporativas sob medida, focadas em impulsionar a inovação e garantir o sucesso contínuo dos negócios de nossos clientes.",
    icon: CheckCircle
  }
];

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="about" className="bg-gradient-to-br from-background-warm via-background-warm to-background-warm-dark py-20 px-6 md:px-12">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
            Sobre a L&G Directa
          </h2>
          <p className="text-brand-medium max-w-3xl mx-auto">
            Somos uma consultoria especializada em transformação digital e gestão empresarial, 
            comprometida em entregar resultados excepcionais para nossos clientes.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {aboutData.map((card, index) => (
            <motion.div key={index} variants={cardVariants}>
              <Card className="bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-sm hover:shadow-lg transition-all duration-300 h-full">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <card.icon className="w-6 h-6 mr-2 text-brand-dark" />
                    <h3 className="text-xl font-semibold text-brand-dark">{card.title}</h3>
                  </div>
                  <p className="text-brand-medium">{card.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
