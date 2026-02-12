import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { CheckCircle, Brain, BarChart, Zap } from 'lucide-react';

const AIAnalyticsPage = () => {
  const technologies = [
    'TensorFlow', 'PyTorch', 'Scikit-learn', 'Python', 'R', 'Tableau',
    'Power BI', 'Apache Spark', 'Hadoop', 'Snowflake', 'BigQuery', 'Databricks'
  ];

  const industries = [
    'Finance & Banking', 'Healthcare', 'Retail & E-commerce', 'Manufacturing',
    'Telecommunications', 'Insurance', 'Logistics', 'Marketing & Advertising'
  ];

  const benefits = [
    'Predictive insights for better decision-making',
    'Automated processes and reduced manual effort',
    'Improved customer personalization',
    'Fraud detection and risk mitigation',
    'Operational efficiency optimization',
    'Competitive intelligence and market insights'
  ];

  return (
    <>
      <Helmet>
        <title>AI & Data Analytics - Softlead Technologies</title>
        <meta
          name="description"
          content="Harness the power of artificial intelligence and data insights. Machine learning, predictive analytics, and business intelligence solutions."
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
              AI & Data Analytics
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Harness the power of artificial intelligence and data insights to make informed decisions
            </p>
          </motion.div>

          <section className="mb-20">
            <h2 className="text-3xl font-bold text-[#1a2a4a] mb-6">Service Overview</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Our AI and data analytics services help organizations unlock the value hidden in their data. We build machine learning models, predictive analytics systems, and business intelligence dashboards that transform raw data into actionable insights and automated decision-making capabilities.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              From data strategy and infrastructure to model development and deployment, we provide end-to-end solutions that enable data-driven cultures and competitive advantages through advanced analytics and artificial intelligence.
            </p>
          </section>

          <section className="mb-20 bg-gray-50 p-10 rounded-2xl">
            <h2 className="text-3xl font-bold text-[#1a2a4a] mb-6">Our Approach</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-start space-x-4">
                <Brain className="text-[#2d5a8c] flex-shrink-0 mt-1" size={28} />
                <div>
                  <h3 className="text-xl font-semibold text-[#1a2a4a] mb-2">Machine Learning Models</h3>
                  <p className="text-gray-700">
                    Develop custom ML models for classification, regression, clustering, and recommendation systems tailored to your business needs.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <BarChart className="text-[#2d5a8c] flex-shrink-0 mt-1" size={28} />
                <div>
                  <h3 className="text-xl font-semibold text-[#1a2a4a] mb-2">Business Intelligence</h3>
                  <p className="text-gray-700">
                    Create interactive dashboards and reports that provide real-time visibility into key metrics and performance indicators.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Zap className="text-[#2d5a8c] flex-shrink-0 mt-1" size={28} />
                <div>
                  <h3 className="text-xl font-semibold text-[#1a2a4a] mb-2">Data Engineering</h3>
                  <p className="text-gray-700">
                    Build robust data pipelines, warehouses, and lakes that collect, process, and store data at scale.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="text-[#2d5a8c] flex-shrink-0 mt-1" size={28} />
                <div>
                  <h3 className="text-xl font-semibold text-[#1a2a4a] mb-2">Model Deployment</h3>
                  <p className="text-gray-700">
                    Deploy models to production with monitoring, versioning, and continuous retraining for sustained accuracy.
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
              Our data science team includes PhDs and experienced practitioners who have built production AI systems for leading organizations. We combine academic rigor with practical engineering to deliver solutions that work in the real world.
            </p>
            <p className="text-lg leading-relaxed">
              We don't just build models—we create data-driven systems that continuously learn, adapt, and deliver measurable business value.
            </p>
          </section>
        </div>
      </div>
    </>
  );
};

export default AIAnalyticsPage;