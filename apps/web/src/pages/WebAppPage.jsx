import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { CheckCircle, Globe, Layers, Smartphone } from 'lucide-react';

const WebAppPage = () => {
  const technologies = [
    'React', 'Angular', 'Vue.js', 'Next.js', 'Node.js', 'Express',
    'Django', 'Ruby on Rails', 'GraphQL', 'REST APIs', 'WebSockets', 'PWA'
  ];

  const industries = [
    'SaaS Platforms', 'E-commerce', 'FinTech', 'HealthTech',
    'EdTech', 'Enterprise Portals', 'Social Networks', 'Media & Entertainment'
  ];

  const benefits = [
    'Responsive design for all devices',
    'High performance and fast load times',
    'SEO-optimized architecture',
    'Progressive Web App capabilities',
    'Real-time data synchronization',
    'Secure authentication and authorization'
  ];

  return (
    <>
      <Helmet>
        <title>Web Application Development - Softlead Technologies</title>
        <meta
          name="description"
          content="Build modern, scalable web applications with cutting-edge frameworks. Responsive, fast, and user-friendly solutions."
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
              Web Application Development
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Modern, scalable web applications built with cutting-edge frameworks and best practices
            </p>
          </motion.div>

          <section className="mb-20">
            <h2 className="text-3xl font-bold text-[#1a2a4a] mb-6">Service Overview</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Our web application development services deliver high-performance, scalable solutions that work seamlessly across all browsers and devices. We leverage modern JavaScript frameworks, cloud-native architectures, and industry best practices to build applications that are fast, secure, and maintainable.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Whether you need a customer-facing SaaS platform, an internal enterprise portal, or a complex e-commerce solution, our team has the expertise to bring your vision to life. We focus on creating intuitive user experiences backed by robust, scalable backend systems.
            </p>
          </section>

          <section className="mb-20 bg-gray-50 p-10 rounded-2xl">
            <h2 className="text-3xl font-bold text-[#1a2a4a] mb-6">Our Approach</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-start space-x-4">
                <Globe className="text-[#2d5a8c] flex-shrink-0 mt-1" size={28} />
                <div>
                  <h3 className="text-xl font-semibold text-[#1a2a4a] mb-2">Modern Architecture</h3>
                  <p className="text-gray-700">
                    Component-based architecture with separation of concerns, microservices, and API-first design for maximum flexibility and scalability.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Smartphone className="text-[#2d5a8c] flex-shrink-0 mt-1" size={28} />
                <div>
                  <h3 className="text-xl font-semibold text-[#1a2a4a] mb-2">Responsive Design</h3>
                  <p className="text-gray-700">
                    Mobile-first approach ensuring perfect rendering on smartphones, tablets, and desktops with consistent user experience.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Layers className="text-[#2d5a8c] flex-shrink-0 mt-1" size={28} />
                <div>
                  <h3 className="text-xl font-semibold text-[#1a2a4a] mb-2">Performance Optimization</h3>
                  <p className="text-gray-700">
                    Code splitting, lazy loading, caching strategies, and CDN integration to ensure lightning-fast page loads and smooth interactions.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="text-[#2d5a8c] flex-shrink-0 mt-1" size={28} />
                <div>
                  <h3 className="text-xl font-semibold text-[#1a2a4a] mb-2">Continuous Deployment</h3>
                  <p className="text-gray-700">
                    Automated CI/CD pipelines for rapid, reliable deployments with zero downtime and instant rollback capabilities.
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
              Our web development team stays at the forefront of technology trends, continuously adopting new frameworks and methodologies that deliver better performance, security, and user experiences.
            </p>
            <p className="text-lg leading-relaxed">
              We don't just build websites—we create powerful web applications that serve as the digital foundation for your business operations, customer engagement, and revenue generation.
            </p>
          </section>
        </div>
      </div>
    </>
  );
};

export default WebAppPage;