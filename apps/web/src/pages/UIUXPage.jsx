import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { CheckCircle, Palette, Eye, Users } from 'lucide-react';

const UIUXPage = () => {
  const technologies = [
    'Figma', 'Adobe XD', 'Sketch', 'InVision', 'Principle', 'Framer',
    'Tailwind CSS', 'Material-UI', 'Ant Design', 'Styled Components'
  ];

  const industries = [
    'SaaS Platforms', 'E-commerce', 'Mobile Apps', 'Enterprise Software',
    'Healthcare', 'FinTech', 'Education', 'Media & Entertainment'
  ];

  const benefits = [
    'Increased user engagement and satisfaction',
    'Reduced development costs through early validation',
    'Improved conversion rates and retention',
    'Consistent brand experience across platforms',
    'Accessibility compliance (WCAG)',
    'Data-driven design decisions'
  ];

  return (
    <>
      <Helmet>
        <title>UI/UX Engineering - Softlead Technologies</title>
        <meta
          name="description"
          content="User-centered design and intuitive interfaces. Create engaging digital experiences that delight users and drive business results."
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
              UI/UX Engineering
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              User-centered design and intuitive interfaces that enhance engagement and satisfaction
            </p>
          </motion.div>

          <div className="mb-20">
            <img
              src="https://images.unsplash.com/photo-1540448880868-fc8f11e2938b"
              alt="UI/UX design workspace with wireframes and prototypes"
              className="w-full h-96 object-cover rounded-2xl shadow-xl"
            />
          </div>

          <section className="mb-20">
            <h2 className="text-3xl font-bold text-[#1a2a4a] mb-6">Service Overview</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Our UI/UX engineering services combine user research, interaction design, and visual design to create digital experiences that are both beautiful and functional. We follow a human-centered design process that puts users at the heart of every decision.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              From initial wireframes to high-fidelity prototypes and design systems, we create interfaces that are intuitive, accessible, and aligned with your brand identity. Our designs don't just look good—they solve real user problems and drive measurable business outcomes.
            </p>
          </section>

          <section className="mb-20 bg-gray-50 p-10 rounded-2xl">
            <h2 className="text-3xl font-bold text-[#1a2a4a] mb-6">Our Approach</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-start space-x-4">
                <Users className="text-[#2d5a8c] flex-shrink-0 mt-1" size={28} />
                <div>
                  <h3 className="text-xl font-semibold text-[#1a2a4a] mb-2">User Research</h3>
                  <p className="text-gray-700">
                    Conduct interviews, surveys, and usability testing to understand user needs, behaviors, and pain points.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Palette className="text-[#2d5a8c] flex-shrink-0 mt-1" size={28} />
                <div>
                  <h3 className="text-xl font-semibold text-[#1a2a4a] mb-2">Design Systems</h3>
                  <p className="text-gray-700">
                    Create comprehensive design systems with reusable components, style guides, and documentation for consistency.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Eye className="text-[#2d5a8c] flex-shrink-0 mt-1" size={28} />
                <div>
                  <h3 className="text-xl font-semibold text-[#1a2a4a] mb-2">Prototyping & Testing</h3>
                  <p className="text-gray-700">
                    Build interactive prototypes and conduct iterative testing to validate designs before development begins.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="text-[#2d5a8c] flex-shrink-0 mt-1" size={28} />
                <div>
                  <h3 className="text-xl font-semibold text-[#1a2a4a] mb-2">Implementation Support</h3>
                  <p className="text-gray-700">
                    Work closely with developers to ensure pixel-perfect implementation and maintain design integrity.
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
              Our design team combines creative excellence with technical expertise, ensuring that every design is not only visually stunning but also technically feasible and performant.
            </p>
            <p className="text-lg leading-relaxed">
              We believe great design is invisible—it just works. Our user-centered approach creates experiences that feel natural, intuitive, and delightful.
            </p>
          </section>
        </div>
      </div>
    </>
  );
};

export default UIUXPage;