"use client"

import React, { useState } from 'react';
import { Phone, Mail, User, Send } from 'lucide-react';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import { Input } from './ui/input';
import { motion } from 'framer-motion';

interface ContactInfo {
  name: string;
  title: string;
  phone: string;
  email: string;
}

const contactData: ContactInfo[] = [
  {
    name: "Haroldo Peon",
    title: "Diretor",
    phone: "+55 71 99904-0095",
    email: "hpeon@lgdirecta.com.br"
  },
  {
    name: "Cristina Argiles",
    title: "Consultora",
    phone: "+55 71 99116-8267",
    email: "cristina@lgdirecta.com.br"
  }
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Aqui você pode implementar a lógica de envio do formulário
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
    <section id="contact" className="bg-gradient-to-br from-background-warm via-background-warm to-background-warm-dark py-20 px-6 md:px-12">
      <div className="container mx-auto max-w-6xl">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-12 text-center text-brand-dark"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Entre em Contato
        </motion.h2>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="space-y-8">
            <h3 className="text-2xl font-semibold text-brand-dark mb-6">Nossa Equipe</h3>
            {contactData.map((contact, index) => (
              <motion.div 
                key={index} 
                className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
                variants={itemVariants}
              >
                <h4 className="text-xl font-semibold text-brand-dark mb-2">{contact.name}</h4>
                <p className="text-brand-medium mb-4">{contact.title}</p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-brand-dark" />
                    <a href={`tel:${contact.phone}`} className="text-brand-medium hover:text-brand-dark transition-colors">
                      {contact.phone}
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-brand-dark" />
                    <a href={`mailto:${contact.email}`} className="text-brand-medium hover:text-brand-dark transition-colors">
                      {contact.email}
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={itemVariants}>
            <form onSubmit={handleSubmit} className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-sm">
              <h3 className="text-2xl font-semibold text-brand-dark mb-6">Envie uma Mensagem</h3>
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-brand-dark">
                    Nome
                  </label>
                  <div className="relative">
                    <User className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-brand-medium" />
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      className="pl-10 border-gray-300 text-brand-dark focus:ring-brand-dark focus:border-brand-dark"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-brand-dark">
                    E-mail
                  </label>
                  <div className="relative">
                    <Mail className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-brand-medium" />
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="pl-10 border-gray-300 text-brand-dark focus:ring-brand-dark focus:border-brand-dark"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-brand-dark">
                    Mensagem
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="border-gray-300 text-brand-dark focus:ring-brand-dark focus:border-brand-dark"
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-brand-dark to-brand-medium text-white hover:from-brand-medium hover:to-brand-light transition-all duration-300 flex items-center justify-center"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Enviar Mensagem
                </Button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;