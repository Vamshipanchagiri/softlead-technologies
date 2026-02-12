import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { CheckCircle, Cloud, Server, Lock } from 'lucide-react';

const CloudSolutionsPage = () => {
  const technologies = [
    'AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'Terraform',
    'Jenkins', 'GitLab CI/CD', 'Ansible', 'Prometheus', 'Grafana', 'ELK Stack'
  ];

  const industries = [
    'SaaS Companies', 'Financial Services', 'Healthcare', 'E-commerce',
    'Media & Entertainment', 'Manufacturing', 'Telecommunications', 'Government'
  ];

  const benefits = [
    'Reduced infrastructure costs',
    'Improved scalability and elasticity',
    'Enhanced disaster recovery capabilities',
    'Automated deployment and monitoring',
    'Increased security and compliance',
    '24/7 availability and performance'
  ];

  return (
    <>
      <Helmet>
        <title>Cloud Solutions & DevOps - Softlead Technologies</title>
        <meta
          name="description"
          content="Cloud migration, infrastructure optimization, and DevOps automation. AWS, Azure, and Google Cloud expertise."
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
              Cloud Solutions & DevOps
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cloud migration, infrastructure optimization, and DevOps automation for modern enterprises
            </p>
          </motion.div>

          <div className="mb-20">
            <img
              src="https://images.unsplash.com/photo-1667984390553-7f439e6ae401"
              alt="Cloud computing infrastructure with servers and network visualization"
              className="w-full h-96 object-cover rounded-2xl shadow-xl"
            />
          </div>

          <section className="mb-20">
            <h2 className="text-3xl font-bold text-[#1a2a4a] mb-6">Service Overview</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Our cloud solutions and DevOps services help organizations modernize their infrastructure, accelerate deployment cycles, and reduce operational overhead. We provide end-to-end cloud migration, architecture design, and ongoing optimization services across AWS, Azure, and Google Cloud platforms.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              By implementing DevOps best practices and automation, we enable continuous integration, continuous deployment, and infrastructure as code—empowering your teams to deliver faster, more reliably, and with greater confidence.
            </p>
          </section>

          <section className="mb-20 bg-gray-50 p-10 rounded-2xl">
            <h2 className="text-3xl font-bold text-[#1a2a4a] mb-6">Our Approach</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-start space-x-4">
                <Cloud className="text-[#2d5a8c] flex-shrink-0 mt-1" size={28} />
                <div>
                  <h3 className="text-xl font-semibold text-[#1a2a4a] mb-2">Cloud Migration Strategy</h3>
                  <p className="text-gray-700">
                    Assess current infrastructure, design cloud-native architecture, and execute phased migration with minimal disruption to operations.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Server className="text-[#2d5a8c] flex-shrink-0 mt-1" size={28} />
                <div>
                  <h3 className="text-xl font-semibold text-[#1a2a4a] mb-2">Infrastructure as Code</h3>
                  <p className="text-gray-700">
                    Automate infrastructure provisioning using Terraform, CloudFormation, or ARM templates for consistent, repeatable deployments.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Lock className="text-[#2d5a8c] flex-shrink-0 mt-1" size={28} />
                <div>
                  <h3 className="text-xl font-semibold text-[#1a2a4a] mb-2">Security & Compliance</h3>
                  <p className="text-gray-700">
                    Implement security best practices, encryption, access controls, and compliance frameworks (HIPAA, PCI-DSS, SOC 2).
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="text-[#2d5a8c] flex-shrink-0 mt-1" size={28} />
                <div>
                  <h3 className="text-xl font-semibold text-[#1a2a4a] mb-2">Continuous Optimization</h3>
                  <p className="text-gray-700">
                    Monitor performance, analyze costs, and continuously optimize resources to maximize ROI and efficiency.
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
              Our cloud and DevOps engineers hold certifications from AWS, Azure, and Google Cloud, bringing deep platform expertise and real-world experience from hundreds of successful migrations and implementations.
            </p>
            <p className="text-lg leading-relaxed">
              We don't just move workloads to the cloud—we transform how your organization builds, deploys, and operates software, creating a foundation for continuous innovation and competitive advantage.
            </p>
          </section>
        </div>
      </div>
    </>
  );
};

export default CloudSolutionsPage;