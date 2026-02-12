import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { CheckCircle, Smartphone, Zap, Users } from 'lucide-react';

const MobileAppPage = () => {
  const technologies = [
    'React Native', 'Flutter', 'Swift', 'Kotlin', 'Xamarin',
    'Firebase', 'AWS Amplify', 'GraphQL', 'Redux', 'MobX'
  ];

  const industries = [
    'Retail & E-commerce', 'Healthcare', 'Finance', 'Food Delivery',
    'Transportation', 'Fitness & Wellness', 'Social Media', 'Gaming'
  ];

  const benefits = [
    'Native performance and user experience',
    'Cross-platform code sharing',
    'Offline functionality support',
    'Push notifications and real-time updates',
    'Seamless device integration (camera, GPS, etc.)',
    'App store optimization and deployment'
  ];

  return (
    <>
      <Helmet>
        <title>Mobile Application Development - Softlead Technologies</title>
        <meta
          name="description"
          content="Native and cross-platform mobile app development. Build engaging iOS and Android applications with exceptional user experiences."
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
              Mobile Application Development
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Native and cross-platform mobile apps that deliver exceptional user experiences
            </p>
          </motion.div>

          <div className="mb-20">
            <img
              src="https://images.unsplash.com/photo-1540448880868-fc8f11e2938b"
              alt="Mobile application development workspace with smartphones and tablets"
              className="w-full h-96 object-cover rounded-2xl shadow-xl"
            />
          </div>

          <section className="mb-20">
            <h2 className="text-3xl font-bold text-[#1a2a4a] mb-6">Service Overview</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Our mobile application development services create powerful, intuitive apps for iOS and Android platforms. We specialize in both native development for maximum performance and cross-platform solutions for cost-effective deployment across multiple devices.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              From consumer-facing apps to enterprise mobility solutions, we build applications that engage users, streamline operations, and drive business growth. Our apps are designed with performance, security, and scalability in mind.
            </p>
          </section>

          <section className="mb-20 bg-gray-50 p-10 rounded-2xl">
            <h2 className="text-3xl font-bold text-[#1a2a4a] mb-6">Our Approach</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-start space-x-4">
                <Smartphone className="text-[#2d5a8c] flex-shrink-0 mt-1" size={28} />
                <div>
                  <h3 className="text-xl font-semibold text-[#1a2a4a] mb-2">Platform Strategy</h3>
                  <p className="text-gray-700">
                    Evaluate business requirements to recommend the optimal approach—native, cross-platform, or hybrid—based on performance needs and budget.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Users className="text-[#2d5a8c] flex-shrink-0 mt-1" size={28} />
                <div>
                  <h3 className="text-xl font-semibold text-[#1a2a4a] mb-2">User-Centric Design</h3>
                  <p className="text-gray-700">
                    Follow platform-specific design guidelines (iOS Human Interface, Material Design) to create familiar, intuitive experiences.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Zap className="text-[#2d5a8c] flex-shrink-0 mt-1" size={28} />
                <div>
                  <h3 className="text-xl font-semibold text-[#1a2a4a] mb-2">Performance Optimization</h3>
                  <p className="text-gray-700">
                    Optimize for battery life, memory usage, and network efficiency to ensure smooth performance even on older devices.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="text-[#2d5a8c] flex-shrink-0 mt-1" size={28} />
                <div>
                  <h3 className="text-xl font-semibold text-[#1a2a4a] mb-2">App Store Success</h3>
                  <p className="text-gray-700">
                    Handle submission process, compliance requirements, and ongoing updates to maintain high ratings and visibility.
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
              Our mobile development team has delivered hundreds of successful apps across diverse industries, from startups to Fortune 500 companies. We understand the nuances of mobile platforms and user expectations.
            </p>
            <p className="text-lg leading-relaxed">
              We don't just code apps—we create mobile experiences that users love, driving engagement, retention, and business results.
            </p>
          </section>
        </div>
      </div>
    </>
  );
};

export default MobileAppPage;