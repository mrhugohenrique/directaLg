"use client"

import React from 'react';
import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" }
  ];

  const contactInfo = [
    { icon: Phone, text: "+55 71 99904-0095", href: "tel:+5571999040095" },
    { icon: Mail, text: "contato@lgdirecta.com.br", href: "mailto:contato@lgdirecta.com.br" },
    { icon: MapPin, text: "Salvador, Bahia - Brasil", href: "#" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
    <footer className="bg-gradient-to-r from-brand-dark to-brand-medium text-background-cream py-12">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-xl font-bold">L&G Directa</h3>
            <p className="text-background-cream/80">
              Consultoria especializada em governança corporativa, planejamento estratégico e inteligência de negócios.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-xl font-bold">Contato</h3>
            <div className="space-y-3">
              {contactInfo.map((item, index) => (
                <a 
                  key={index}
                  href={item.href}
                  className="flex items-center space-x-3 text-background-cream/80 hover:text-background-cream transition-colors"
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.text}</span>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-xl font-bold">Redes Sociais</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-background-cream/80 hover:text-background-cream transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={24} />
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          className="border-t border-background-cream/20 pt-8 text-center text-background-cream/60"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <p>&copy; {currentYear} Hugo Henrique. Todos os direitos reservados.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;