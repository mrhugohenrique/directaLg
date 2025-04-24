"use client"

import React, { useState } from "react"
import {
  Building2,
  Cog,
  BarChart3,
  BookOpen,
  ChevronDown,
  ChevronUp,
} from "lucide-react"
import { Button } from "./ui/button"
import { Card, CardContent } from "./ui/card"
import { motion } from "framer-motion"

interface ServiceDetail {
  title: string;
  description: string;
  icon: React.ElementType;
  details: string[];
}

const serviceData: ServiceDetail[] = [
  {
    title: "Governança Corporativa",
    description:
      "Preparamos Organização e Pessoas para implantação dos princípios da Governança Corporativa.",
    icon: Building2,
    details: [
      "Implantação da Estrutura Para a Governança",
      "Estruturação da Controladoria e Relatórios Gerenciais",
      "Auditoria de Processos Financeiros",
      "Gestão de Riscos Empresariais",
      "Treinamento e Preparação dos Interessados",
    ],
  },
  {
    title: "Governança de TI",
    description:
      "Apoiamos todo o processo de implantação da Governança de TI, baseados nos Framework COBIT e ITIL.",
    icon: Cog,
    details: [
      "Desenvolvimento e implantação do Plano Estratégico e Diretor de TI",
      "Treinamento e Preparação Equipe",
      "Auditoria de Compliance com COBIT, ITIL e ISO 27.000",
      "Gestão de riscos em TI",
    ],
  },
  {
    title: "Planejamento Estratégico",
    description:
      "Apoiamos e orientamos a elaboração de Plano Estratégico através de um processo participativo.",
    icon: BarChart3,
    details: [
      "Análise Ambiental e Cenários",
      "Análise Interna e da Concorrência",
      "Estruturação e Elaboração do Plano Estratégico",
      "Gestão dos Riscos Empresariais",
      "Acompanhamento e Controle através do Balanced ScoreCard",
    ],
  },
  {
    title: "Inteligência de Negócios",
    description:
      "Consiste em um conjunto de soluções de software e serviços que disponibilizam dados fundamentais para o gerenciamento da organização.",
    icon: BarChart3,
    details: [
      "Revisão de Processos de Trabalho visando automação",
      "Gestão da Inovação",
      "Desenvolvimento de Painéis de Controle",
      "Implantação de Ferramentas de Business Intelligence",
      "Desenvolvimento de Aplicativos para dispositivos móveis",
    ],
  },
  {
    title: "Estudos Técnicos Específicos",
    description: "Confeccionamos de forma modular diversos trabalhos técnicos.",
    icon: BookOpen,
    details: [
      "Modelagem de Negócio",
      "Plano de Negócio",
      "Diagnóstico Empresarial",
      "Estudos de Viabilidade Econômico-Financeira",
      "Pesquisas de Mercado",
      "Desenvolvimento e implantação de Sistemas de Custeio",
      "Capacitação profissional",
      "Elaboração de projetos",
      "Captação de recursos – BNDES, BNB, DESENBAHIA, FAPESB, FINEP, CNPQ",
    ],
  },
]

interface ServiceCardProps {
  service: ServiceDetail;
  isExpanded: boolean;
  onToggle: () => void;
}

const ServiceCard = ({ service, isExpanded, onToggle }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card
        className={`flex h-full min-h-[400px] flex-col overflow-hidden rounded-xl bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-sm transition-all duration-300 hover:shadow-lg ${isExpanded ? "expanded" : ""}`}
      >
        <CardContent className="flex h-full flex-col p-6">
          <div className="mb-4 flex items-center">
            <service.icon className="mr-3 h-8 w-8 flex-shrink-0 text-brand-dark" />
            <h3 className="text-xl font-semibold text-brand-dark">
              {service.title}
            </h3>
          </div>
          <p className="mb-4 flex-grow text-brand-medium">{service.description}</p>
          <div className="mt-auto">
            <Button
              variant="outline"
              className="w-full rounded-lg bg-gradient-to-r from-brand-dark to-brand-medium text-white transition-all duration-300 hover:from-brand-medium hover:to-brand-light"
              onClick={onToggle}
            >
              {isExpanded ? "Fechar" : "Saiba Mais"}
              {isExpanded ? (
                <ChevronUp className="ml-2 h-4 w-4" />
              ) : (
                <ChevronDown className="ml-2 h-4 w-4" />
              )}
            </Button>
          </div>
          <motion.div
            className={`card-content mt-4 overflow-hidden`}
            initial={false}
            animate={{ height: isExpanded ? "auto" : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="list-disc pl-5 text-brand-medium">
              {service.details.map((detail, idx) => (
                <li key={idx} className="mb-2">
                  {detail}
                </li>
              ))}
            </ul>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

const Services = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  const handleToggle = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section
      id="services"
      className="rounded-t-3xl bg-gradient-to-br from-background-warm via-background-warm to-background-warm-dark px-6 py-20 md:px-12"
    >
      <div className="container mx-auto max-w-7xl">
        <motion.h2
          className="mb-12 text-center text-3xl font-bold text-brand-dark md:text-4xl"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Nossos Serviços
        </motion.h2>
        <motion.div 
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {serviceData.map((service, index) => (
            <ServiceCard
              key={index}
              service={service}
              isExpanded={expandedIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Services
