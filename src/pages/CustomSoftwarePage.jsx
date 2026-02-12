import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { CheckCircle, Code, Zap, Shield } from 'lucide-react';

const CustomSoftwarePage = () => {
  const technologies = [
    'Java', 'Python', '.NET', 'Node.js', 'React', 'Angular', 'Vue.js',
    'PostgreSQL', 'MongoDB', 'Redis', 'Docker', 'Kubernetes', 'AWS', 'Azure'
  ];

  const industries = [
    'Healthcare', 'Finance & Banking', 'E-commerce', 'Manufacturing',
    'Logistics', 'Education', 'Real Estate', 'Retail'
  ];

  const benefits = [
    'Tailored to your exact business requirements',
    'Scalable architecture for future growth',
    'Full ownership and control of source code',
    'Seamless integration with existing systems',
    'Ongoing support and maintenance',
    'Cost-effective long-term solution'
  ];

  return (
    <>
      <Helmet>
        <title>Custom Software Development - Softlead Technologies</title>
        <meta
          name="description"
          content="Enterprise-grade custom software development services. Build scalable, secure applications tailored to your business needs."
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
              Custom Software Development
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Enterprise-grade solutions built from the ground up to match your unique business processes
            </p>
          </motion.div>

          <section className="mb-20">
            <h2 className="text-3xl font-bold text-[#1a2a4a] mb-6">Service Overview</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Our custom software development services deliver bespoke applications designed specifically for your organization's workflows, challenges, and objectives. We combine deep technical expertise with business domain knowledge to create solutions that drive efficiency, reduce costs, and provide competitive advantages.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              From initial concept through deployment and beyond, our team works closely with stakeholders to ensure every feature aligns with strategic goals. We build software that scales with your business, adapts to changing requirements, and integrates seamlessly with your existing technology ecosystem.
            </p>
          </section>

          <section className="mb-20 bg-gray-50 p-10 rounded-2xl">
            <h2 className="text-3xl font-bold text-[#1a2a4a] mb-6">Our Approach</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-start space-x-4">
                <Code className="text-[#2d5a8c] flex-shrink-0 mt-1" size={28} />
                <div>
                  <h3 className="text-xl font-semibold text-[#1a2a4a] mb-2">Discovery & Planning</h3>
                  <p className="text-gray-700">
                    Comprehensive requirements gathering, stakeholder interviews, and technical feasibility analysis to define project scope and architecture.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Zap className="text-[#2d5a8c] flex-shrink-0 mt-1" size={28} />
                <div>
                  <h3 className="text-xl font-semibold text-[#1a2a4a] mb-2">Agile Development</h3>
                  <p className="text-gray-700">
                    Iterative development cycles with regular demos, feedback loops, and continuous integration to ensure alignment and quality.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Shield className="text-[#2d5a8c] flex-shrink-0 mt-1" size={28} />
                <div>
                  <h3 className="text-xl font-semibold text-[#1a2a4a] mb-2">Quality Assurance</h3>
                  <p className="text-gray-700">
                    Rigorous testing protocols including unit tests, integration tests, performance testing, and security audits.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="text-[#2d5a8c] flex-shrink-0 mt-1" size={28} />
                <div>
                  <h3 className="text-xl font-semibold text-[#1a2a4a] mb-2">Deployment & Support</h3>
                  <p className="text-gray-700">
                    Smooth production rollout with comprehensive documentation, training, and ongoing maintenance support.
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
              With over a decade of experience delivering custom software solutions across diverse industries, we bring proven methodologies, technical excellence, and a client-first approach to every project.
            </p>
            <p className="text-lg leading-relaxed">
              Our team doesn't just write code—we become strategic partners invested in your success. We take the time to understand your business, anticipate challenges, and deliver solutions that provide lasting value and competitive differentiation.
            </p>
          </section>
        </div>
      </div>
    </>
  );
};

export default CustomSoftwarePage;