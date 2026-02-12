import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { CheckCircle, TrendingUp, Target, BarChart } from 'lucide-react';

const DigitalMarketingPage = () => {
  const technologies = [
    'Google Analytics', 'Google Ads', 'Facebook Ads', 'SEO Tools', 'HubSpot',
    'Mailchimp', 'Hootsuite', 'SEMrush', 'Ahrefs', 'Tableau'
  ];

  const industries = [
    'E-commerce', 'SaaS', 'Healthcare', 'Real Estate',
    'Education', 'Hospitality', 'Finance', 'Retail'
  ];

  const benefits = [
    'Increased brand visibility and awareness',
    'Higher quality lead generation',
    'Improved conversion rates and ROI',
    'Data-driven campaign optimization',
    'Multi-channel marketing integration',
    'Measurable business impact'
  ];

  return (
    <>
      <Helmet>
        <title>Digital Marketing Solutions - Softlead Technologies</title>
        <meta
          name="description"
          content="Data-driven digital marketing strategies. SEO, PPC, social media, and content marketing that drive measurable growth."
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
              Digital Marketing Solutions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Data-driven marketing strategies that amplify your brand and drive measurable growth
            </p>
          </motion.div>

          <section className="mb-20">
            <h2 className="text-3xl font-bold text-[#1a2a4a] mb-6">Service Overview</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Our digital marketing services combine strategic planning, creative execution, and data analytics to help businesses reach their target audiences, generate qualified leads, and drive revenue growth. We develop comprehensive marketing strategies that span SEO, PPC, social media, content marketing, and email campaigns.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Every campaign is built on deep audience insights and optimized through continuous testing and analysis. We don't just drive traffic—we attract the right visitors, convert them into customers, and build long-term brand loyalty.
            </p>
          </section>

          <section className="mb-20 bg-gray-50 p-10 rounded-2xl">
            <h2 className="text-3xl font-bold text-[#1a2a4a] mb-6">Our Approach</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-start space-x-4">
                <Target className="text-[#2d5a8c] flex-shrink-0 mt-1" size={28} />
                <div>
                  <h3 className="text-xl font-semibold text-[#1a2a4a] mb-2">Audience Research</h3>
                  <p className="text-gray-700">
                    Deep analysis of target demographics, behaviors, and preferences to create highly targeted campaigns.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <TrendingUp className="text-[#2d5a8c] flex-shrink-0 mt-1" size={28} />
                <div>
                  <h3 className="text-xl font-semibold text-[#1a2a4a] mb-2">Multi-Channel Strategy</h3>
                  <p className="text-gray-700">
                    Integrated campaigns across search, social, email, and display to maximize reach and engagement.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <BarChart className="text-[#2d5a8c] flex-shrink-0 mt-1" size={28} />
                <div>
                  <h3 className="text-xl font-semibold text-[#1a2a4a] mb-2">Performance Analytics</h3>
                  <p className="text-gray-700">
                    Real-time tracking, A/B testing, and detailed reporting to measure ROI and optimize campaigns.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="text-[#2d5a8c] flex-shrink-0 mt-1" size={28} />
                <div>
                  <h3 className="text-xl font-semibold text-[#1a2a4a] mb-2">Continuous Optimization</h3>
                  <p className="text-gray-700">
                    Ongoing refinement based on performance data to improve conversion rates and reduce acquisition costs.
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
              Our marketing team combines creative storytelling with analytical rigor, ensuring every campaign is both compelling and measurable. We stay ahead of platform changes and algorithm updates to maintain competitive advantage.
            </p>
            <p className="text-lg leading-relaxed">
              We don't just execute tactics—we build comprehensive marketing strategies that align with your business goals and deliver sustainable growth.
            </p>
          </section>
        </div>
      </div>
    </>
  );
};

export default DigitalMarketingPage;