import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Code,
  Globe,
  Smartphone,
  Cloud,
  Palette,
  TrendingUp,
  Briefcase,
  Brain,
  Shield
} from 'lucide-react';

const ServicesPage = () => {
  const services = [
    {
      id: 'custom-software',
      title: 'Custom Software Development',
      description: 'Tailored software solutions designed to meet your unique business requirements and drive operational excellence.',
      icon: Code,
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 'web-app',
      title: 'Web Application Development',
      description: 'Scalable, responsive web applications built with modern frameworks and best practices.',
      icon: Globe,
      color: 'from-cyan-500 to-cyan-600'
    },
    {
      id: 'mobile-app',
      title: 'Mobile Application Development',
      description: 'Native and cross-platform mobile apps that deliver exceptional user experiences.',
      icon: Smartphone,
      color: 'from-purple-500 to-purple-600'
    },
    {
      id: 'cloud-solutions',
      title: 'Cloud Solutions & DevOps',
      description: 'Cloud migration, infrastructure optimization, and DevOps automation for modern enterprises.',
      icon: Cloud,
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      id: 'ui-ux',
      title: 'UI/UX Engineering',
      description: 'User-centered design and intuitive interfaces that enhance engagement and satisfaction.',
      icon: Palette,
      color: 'from-pink-500 to-pink-600'
    },
    {
      id: 'digital-marketing',
      title: 'Digital Marketing Solutions',
      description: 'Data-driven marketing strategies that amplify your brand and drive measurable growth.',
      icon: TrendingUp,
      color: 'from-orange-500 to-orange-600'
    },
    {
      id: 'consulting',
      title: 'Enterprise IT Consulting',
      description: 'Strategic technology consulting to align IT initiatives with business objectives.',
      icon: Briefcase,
      color: 'from-teal-500 to-teal-600'
    },
    {
      id: 'ai-analytics',
      title: 'AI & Data Analytics',
      description: 'Harness the power of artificial intelligence and data insights to make informed decisions.',
      icon: Brain,
      color: 'from-violet-500 to-violet-600'
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security solutions to protect your digital assets and ensure compliance.',
      icon: Shield,
      color: 'from-red-500 to-red-600'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Our Services - Softlead Technologies</title>
        <meta
          name="description"
          content="Comprehensive IT services including custom software development, cloud solutions, mobile apps, cybersecurity, and digital transformation consulting."
        />
      </Helmet>

      <div className="min-h-screen bg-white pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-[#1a2a4a] mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive technology solutions tailored to your business needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link to={`/services/${service.id}`}>
                  <div className="group bg-white border border-gray-200 rounded-xl p-8 hover:shadow-2xl transition-all duration-300 h-full">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-lg bg-gradient-to-br ${service.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon size={32} className="text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#1a2a4a] mb-4 group-hover:text-[#2d5a8c] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="mt-6 text-[#2d5a8c] font-semibold group-hover:translate-x-2 transition-transform duration-300 inline-flex items-center">
                      Learn More →
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesPage;