import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Heart, Lightbulb, Target, Users, Globe, HeartHandshake as Handshake } from 'lucide-react';

const WhatMakesUsUniquePage = () => {
  const uniqueFactors = [
    {
      icon: Heart,
      title: 'Client-First Business Model',
      description: 'We measure our success by your success. Every decision, every recommendation, every line of code is driven by what\'s best for your business—not what\'s easiest for us. We take the time to understand your industry, your challenges, and your goals, ensuring our solutions deliver real business value. Our flexible engagement models adapt to your needs, whether you require a dedicated team, project-based delivery, or strategic consulting.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation-Driven Engineering',
      description: 'We don\'t just follow trends—we stay ahead of them. Our engineering culture encourages experimentation, continuous learning, and adoption of emerging technologies. We invest in R&D, participate in open-source communities, and maintain innovation labs where we explore cutting-edge solutions. This forward-thinking approach means you benefit from the latest advancements in AI, cloud computing, automation, and software architecture.'
    },
    {
      icon: Target,
      title: 'Custom Strategy Development',
      description: 'There are no cookie-cutter solutions at Softlead Technologies. We begin every engagement with deep discovery—understanding your unique business context, competitive landscape, and strategic objectives. Our solutions are custom-designed to address your specific challenges and opportunities. We don\'t force-fit technologies; we architect solutions that align perfectly with your requirements, budget, and timeline.'
    },
    {
      icon: Users,
      title: 'Hyderabad-Based Strong Tech Talent',
      description: 'Based in Hyderabad, India\'s premier technology hub, we have access to exceptional engineering talent from top universities and technology companies. Our team includes specialists across diverse domains—from cloud architecture to machine learning, from mobile development to cybersecurity. This depth of expertise, combined with competitive pricing, delivers exceptional value without compromising quality.'
    },
    {
      icon: Globe,
      title: 'Hybrid Global Delivery Capability',
      description: 'We combine the best of both worlds: the cost-effectiveness and technical depth of our Hyderabad development center with the flexibility to work across time zones and cultures. Our teams are experienced in collaborating with global clients, maintaining communication standards, and delivering seamlessly across distributed environments. We adapt our working hours, communication channels, and processes to match your preferences.'
    },
    {
      icon: Handshake,
      title: 'Long-Term Strategic Partnerships',
      description: 'We\'re not interested in one-off projects—we build lasting relationships. Many of our clients have worked with us for years, expanding engagements as their businesses grow. We become an extension of your team, understanding your systems, your culture, and your vision. This continuity means faster delivery, better alignment, and solutions that evolve with your business. We\'re invested in your long-term success.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>What Makes Us Unique - Softlead Technologies</title>
        <meta
          name="description"
          content="Discover what sets Softlead Technologies apart. Client-first approach, innovation-driven engineering, and strategic partnerships."
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
              What Makes Us Unique
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our distinctive approach to technology partnerships and solution delivery
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {uniqueFactors.map((factor, index) => (
              <motion.div
                key={factor.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 p-8 rounded-2xl hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-[#1a2a4a] to-[#2d5a8c] rounded-xl flex items-center justify-center mb-6">
                  <factor.icon size={28} className="text-white" />
                </div>
                <h2 className="text-2xl font-bold text-[#1a2a4a] mb-4">
                  {factor.title}
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  {factor.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-[#1a2a4a] to-[#2d5a8c] text-white p-12 rounded-2xl"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
              Experience the Softlead Difference
            </h2>
            <p className="text-xl leading-relaxed text-center max-w-4xl mx-auto mb-6">
              We don\'t just deliver technology—we deliver transformation. Our unique combination of technical excellence, business acumen, and client-first values creates partnerships that drive lasting success.
            </p>
            <p className="text-lg leading-relaxed text-center max-w-4xl mx-auto">
              When you choose Softlead Technologies, you\'re choosing a partner who is genuinely invested in your success, brings innovative thinking to every challenge, and has the expertise to turn vision into reality.
            </p>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default WhatMakesUsUniquePage;