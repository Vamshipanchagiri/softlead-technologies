import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { CheckCircle, Briefcase, Lightbulb, TrendingUp } from 'lucide-react';

const ConsultingPage = () => {
  const technologies = [
    'Enterprise Architecture', 'TOGAF', 'ITIL', 'Agile/Scrum', 'SAFe',
    'Business Intelligence', 'Data Governance', 'Change Management'
  ];

  const industries = [
    'Financial Services', 'Healthcare', 'Manufacturing', 'Retail',
    'Telecommunications', 'Energy & Utilities', 'Government', 'Education'
  ];

  const benefits = [
    'Strategic IT roadmap aligned with business goals',
    'Reduced technology costs and complexity',
    'Improved operational efficiency',
    'Risk mitigation and compliance',
    'Accelerated digital transformation',
    'Enhanced competitive positioning'
  ];

  return (
    <>
      <Helmet>
        <title>Enterprise IT Consulting - Softlead Technologies</title>
        <meta
          name="description"
          content="Strategic technology consulting to align IT initiatives with business objectives. Digital transformation, architecture, and optimization."
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
              Enterprise IT Consulting
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Strategic technology consulting to align IT initiatives with business objectives
            </p>
          </motion.div>

          <section className="mb-20">
            <h2 className="text-3xl font-bold text-[#1a2a4a] mb-6">Service Overview</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Our enterprise IT consulting services help organizations navigate complex technology decisions, optimize IT investments, and drive digital transformation initiatives. We bring strategic thinking, technical expertise, and industry best practices to every engagement.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              From IT strategy development to technology selection, architecture design, and implementation roadmaps, we provide the guidance and support needed to make informed decisions that deliver measurable business value.
            </p>
          </section>

          <section className="mb-20 bg-gray-50 p-10 rounded-2xl">
            <h2 className="text-3xl font-bold text-[#1a2a4a] mb-6">Our Approach</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-start space-x-4">
                <Briefcase className="text-[#2d5a8c] flex-shrink-0 mt-1" size={28} />
                <div>
                  <h3 className="text-xl font-semibold text-[#1a2a4a] mb-2">Business-IT Alignment</h3>
                  <p className="text-gray-700">
                    Ensure technology initiatives directly support strategic business objectives and deliver measurable ROI.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Lightbulb className="text-[#2d5a8c] flex-shrink-0 mt-1" size={28} />
                <div>
                  <h3 className="text-xl font-semibold text-[#1a2a4a] mb-2">Technology Assessment</h3>
                  <p className="text-gray-700">
                    Evaluate current systems, identify gaps, and recommend modern solutions that improve efficiency and reduce costs.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <TrendingUp className="text-[#2d5a8c] flex-shrink-0 mt-1" size={28} />
                <div>
                  <h3 className="text-xl font-semibold text-[#1a2a4a] mb-2">Digital Transformation</h3>
                  <p className="text-gray-700">
                    Guide organizations through modernization journeys, from legacy system migration to cloud adoption and automation.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="text-[#2d5a8c] flex-shrink-0 mt-1" size={28} />
                <div>
                  <h3 className="text-xl font-semibold text-[#1a2a4a] mb-2">Implementation Support</h3>
                  <p className="text-gray-700">
                    Provide hands-on support during execution, ensuring successful delivery and knowledge transfer to internal teams.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-20">
            <h2 className="text-3xl font-bold text-[#1a2a4a] mb-6">Core Technologies</h2>
            <div className="flex flex-wrap gap-3">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-[#1a2a4a] text-white rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>

          <section className="mb-20">
            <h2 className="text-3xl font-bold text-[#1a2a4a] mb-6">Industries Served</h2>
            <div className="grid md:grid-cols-4 gap-4">
              {industries.map((industry) => (
                <div
                  key={industry}
                  className="bg-gradient-to-br from-[#1a2a4a] to-[#2d5a8c] text-white p-6 rounded-lg text-center font-semibold"
                >
                  {industry}
                </div>
              ))}
            </div>
          </section>

          <section className="mb-20">
            <h2 className="text-3xl font-bold text-[#1a2a4a] mb-6">Key Benefits</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-start space-x-3">
                  <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={24} />
                  <p className="text-lg text-gray-700">{benefit}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-gradient-to-br from-[#1a2a4a] to-[#2d5a8c] text-white p-10 rounded-2xl">
            <h2 className="text-3xl font-bold mb-4">Why Choose Softlead Technologies</h2>
            <p className="text-lg leading-relaxed mb-4">
              Our consultants bring decades of combined experience across industries and technologies. We've helped organizations of all sizes—from startups to Fortune 500 companies—navigate complex technology challenges and achieve their strategic objectives.
            </p>
            <p className="text-lg leading-relaxed">
              We don't just provide recommendations—we partner with you to ensure successful implementation and lasting impact.
            </p>
          </section>
        </div>
      </div>
    </>
  );
};

export default ConsultingPage;