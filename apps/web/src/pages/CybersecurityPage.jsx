import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { CheckCircle, Shield, Lock, AlertTriangle } from 'lucide-react';

const CybersecurityPage = () => {
  const technologies = [
    'SIEM', 'Firewall Management', 'Penetration Testing', 'Vulnerability Scanning',
    'Identity & Access Management', 'Encryption', 'DDoS Protection', 'Security Audits'
  ];

  const industries = [
    'Financial Services', 'Healthcare', 'Government', 'E-commerce',
    'Technology', 'Manufacturing', 'Education', 'Legal Services'
  ];

  const benefits = [
    'Protection against cyber threats and attacks',
    'Compliance with industry regulations (GDPR, HIPAA, PCI-DSS)',
    'Reduced risk of data breaches',
    'Enhanced customer trust and reputation',
    '24/7 security monitoring and incident response',
    'Regular security assessments and updates'
  ];

  return (
    <>
      <Helmet>
        <title>Cybersecurity Solutions - Softlead Technologies</title>
        <meta
          name="description"
          content="Comprehensive security solutions to protect your digital assets. Threat detection, compliance, and incident response."
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
              Cybersecurity Solutions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive security solutions to protect your digital assets and ensure compliance
            </p>
          </motion.div>

          <div className="mb-20">
            <img
              src="https://images.unsplash.com/photo-1614064548237-096f735f344f"
              alt="Cybersecurity operations center with network monitoring displays"
              className="w-full h-96 object-cover rounded-2xl shadow-xl"
            />
          </div>

          <section className="mb-20">
            <h2 className="text-3xl font-bold text-[#1a2a4a] mb-6">Service Overview</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Our cybersecurity services provide comprehensive protection against evolving cyber threats. We implement multi-layered security strategies that safeguard your infrastructure, applications, and data while ensuring compliance with industry regulations and standards.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              From vulnerability assessments and penetration testing to 24/7 security monitoring and incident response, we provide the expertise and tools needed to defend against sophisticated attacks and maintain business continuity.
            </p>
          </section>

          <section className="mb-20 bg-gray-50 p-10 rounded-2xl">
            <h2 className="text-3xl font-bold text-[#1a2a4a] mb-6">Our Approach</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-start space-x-4">
                <Shield className="text-[#2d5a8c] flex-shrink-0 mt-1" size={28} />
                <div>
                  <h3 className="text-xl font-semibold text-[#1a2a4a] mb-2">Threat Detection</h3>
                  <p className="text-gray-700">
                    Advanced monitoring systems that identify and respond to security threats in real-time before they cause damage.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Lock className="text-[#2d5a8c] flex-shrink-0 mt-1" size={28} />
                <div>
                  <h3 className="text-xl font-semibold text-[#1a2a4a] mb-2">Access Control</h3>
                  <p className="text-gray-700">
                    Implement robust identity and access management systems with multi-factor authentication and role-based permissions.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <AlertTriangle className="text-[#2d5a8c] flex-shrink-0 mt-1" size={28} />
                <div>
                  <h3 className="text-xl font-semibold text-[#1a2a4a] mb-2">Vulnerability Management</h3>
                  <p className="text-gray-700">
                    Regular security assessments, penetration testing, and patch management to address vulnerabilities proactively.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="text-[#2d5a8c] flex-shrink-0 mt-1" size={28} />
                <div>
                  <h3 className="text-xl font-semibold text-[#1a2a4a] mb-2">Compliance & Auditing</h3>
                  <p className="text-gray-700">
                    Ensure adherence to regulatory requirements (GDPR, HIPAA, PCI-DSS) with comprehensive documentation and audits.
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
              Our cybersecurity team includes certified ethical hackers, security architects, and compliance specialists who stay ahead of emerging threats and evolving regulations.
            </p>
            <p className="text-lg leading-relaxed">
              We don't just implement security tools—we build comprehensive security programs that protect your organization, maintain customer trust, and ensure regulatory compliance.
            </p>
          </section>
        </div>
      </div>
    </>
  );
};

export default CybersecurityPage;