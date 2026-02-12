import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Award, Zap, MessageSquare, Clock, Headphones, Shield } from 'lucide-react';

const WhyChooseUsPage = () => {
  const reasons = [
    {
      icon: Award,
      title: 'Technical Excellence',
      description: 'Our team comprises senior engineers, architects, and certified professionals with deep expertise across modern technology stacks. We follow industry best practices, maintain rigorous code quality standards, and continuously invest in learning and innovation. Every solution we deliver is built on a foundation of technical excellence, scalability, and maintainability.'
    },
    {
      icon: Zap,
      title: 'Agile Methodology',
      description: 'We embrace agile development principles with iterative sprints, continuous integration, and regular stakeholder feedback. This approach ensures transparency, flexibility, and rapid delivery of working software. Our teams adapt quickly to changing requirements while maintaining focus on delivering value in every iteration. You see progress every week, not just at the end of a long project cycle.'
    },
    {
      icon: MessageSquare,
      title: 'Transparent Communication',
      description: 'Clear, honest communication is at the heart of our client relationships. We provide regular status updates, detailed documentation, and open channels for questions and feedback. No surprises, no hidden costs—just straightforward collaboration. Our project managers ensure you always know what\'s happening, what\'s next, and how we\'re tracking against goals and timelines.'
    },
    {
      icon: Clock,
      title: 'On-Time Delivery',
      description: 'We understand that time-to-market is critical for business success. Our proven project management methodologies, realistic planning, and disciplined execution ensure we meet deadlines consistently. We build buffer time for unforeseen challenges, maintain clear milestones, and proactively communicate any risks. Our track record speaks for itself—over 95% of our projects deliver on or ahead of schedule.'
    },
    {
      icon: Headphones,
      title: 'Dedicated Support Model',
      description: 'Our commitment doesn\'t end at deployment. We provide comprehensive post-launch support with dedicated teams available to address issues, implement enhancements, and ensure smooth operations. Whether it\'s bug fixes, performance optimization, or feature additions, we\'re here for the long term. Our support SLAs guarantee rapid response times and resolution of critical issues.'
    },
    {
      icon: Shield,
      title: 'Scalable & Secure Architecture',
      description: 'Every solution we build is designed with scalability and security as core principles. We architect systems that grow with your business, handle increasing loads gracefully, and maintain performance under pressure. Security is embedded at every layer—from secure coding practices to encryption, authentication, and compliance with industry standards. Your data and your users are protected.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Why Choose Us - Softlead Technologies</title>
        <meta
          name="description"
          content="Discover why leading organizations choose Softlead Technologies. Technical excellence, agile methodology, transparent communication, and dedicated support."
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
              Why Choose Softlead Technologies
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Partnering with us means choosing excellence, reliability, and innovation
            </p>
          </motion.div>

          <div className="mb-20">
            <img
              src="https://images.unsplash.com/photo-1552581234-26160f608093"
              alt="Professional team collaborating on technology solutions"
              className="w-full h-96 object-cover rounded-2xl shadow-xl"
            />
          </div>

          <div className="space-y-16">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 p-10 rounded-2xl"
              >
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#1a2a4a] to-[#2d5a8c] rounded-xl flex items-center justify-center">
                      <reason.icon size={32} className="text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-3xl font-bold text-[#1a2a4a] mb-4">
                      {reason.title}
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-20 bg-gradient-to-br from-[#1a2a4a] to-[#2d5a8c] text-white p-12 rounded-2xl text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Join hundreds of satisfied clients who have chosen Softlead Technologies as their trusted technology partner. Let's build something extraordinary together.
            </p>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default WhyChooseUsPage;