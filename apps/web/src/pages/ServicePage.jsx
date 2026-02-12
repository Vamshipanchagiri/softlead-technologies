import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle, Layers, Code, Cpu, Globe } from 'lucide-react';

const servicesData = {
  'custom-software': {
    title: 'Custom Software Development',
    subtitle: 'Bespoke solutions for complex business challenges',
    overview: 'Our custom software development service is designed for enterprises that require solutions tailored to their specific operational needs. We move beyond off-the-shelf limitations to build robust, scalable, and secure software that aligns perfectly with your business processes.',
    approach: 'We adopt a consultative approach, beginning with deep discovery workshops to understand your workflows. Our agile development methodology ensures transparency and adaptability, delivering incremental value at every stage.',
    tech: ['Java', 'Python', '.NET Core', 'Node.js', 'React', 'Angular', 'PostgreSQL', 'MongoDB'],
    industries: ['Healthcare', 'Finance', 'Logistics', 'Manufacturing'],
    benefits: ['Full ownership of IP', 'Seamless integration', 'Scalability on demand', 'Enhanced security'],
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c'
  },
  'web-app': {
    title: 'Web Application Development',
    subtitle: 'Modern, responsive, and powerful web platforms',
    overview: 'We engineer high-performance web applications that deliver desktop-class experiences in the browser. From progressive web apps (PWAs) to complex single-page applications (SPAs), our solutions are built for speed, SEO, and user engagement.',
    approach: 'Mobile-first design philosophy combined with cloud-native architecture. We focus on performance optimization and accessibility compliance from day one.',
    tech: ['React', 'Next.js', 'Vue.js', 'TypeScript', 'Tailwind CSS', 'GraphQL', 'AWS', 'Vercel'],
    industries: ['E-commerce', 'SaaS', 'Education', 'Media'],
    benefits: ['Cross-platform compatibility', 'Instant updates', 'Lower maintenance costs', 'Global reach'],
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166'
  },
  'mobile-app': {
    title: 'Mobile Application Development',
    subtitle: 'Engaging experiences for iOS and Android',
    overview: 'In a mobile-first world, your business needs to be where your customers are. We develop native and cross-platform mobile applications that offer intuitive interfaces, smooth performance, and offline capabilities.',
    approach: 'User-centric design followed by rigorous testing on real devices. We handle the entire lifecycle from concept to App Store submission and maintenance.',
    tech: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'SQLite'],
    industries: ['Retail', 'Health & Fitness', 'Travel', 'Social Networking'],
    benefits: ['Enhanced user engagement', 'Push notifications', 'Device hardware access', 'Brand visibility'],
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c'
  },
  'cloud-solutions': {
    title: 'Cloud Solutions & DevOps',
    subtitle: 'Scalable infrastructure for the modern enterprise',
    overview: 'Accelerate your digital transformation with our cloud and DevOps services. We help you migrate to the cloud, optimize existing infrastructure, and implement CI/CD pipelines for faster, more reliable software delivery.',
    approach: 'Infrastructure as Code (IaC) and automation first. We design self-healing, auto-scaling architectures that minimize downtime and operational costs.',
    tech: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins'],
    industries: ['FinTech', 'Enterprise SaaS', 'Big Data', 'Gaming'],
    benefits: ['Reduced operational costs', 'High availability', 'Faster time-to-market', 'Disaster recovery'],
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa'
  },
  'ui-ux': {
    title: 'UI/UX Engineering',
    subtitle: 'Designing intuitive and delightful digital experiences',
    overview: 'Great technology needs great design. Our UI/UX engineering team bridges the gap between aesthetics and functionality, creating interfaces that are not only beautiful but also intuitive and accessible.',
    approach: 'Research-driven design. We conduct user interviews, create wireframes and prototypes, and perform usability testing before writing a single line of code.',
    tech: ['Figma', 'Adobe XD', 'Sketch', 'Principle', 'Storybook', 'CSS Modules'],
    industries: ['Consumer Apps', 'Enterprise Dashboards', 'E-commerce', 'Healthcare'],
    benefits: ['Higher conversion rates', 'Lower user churn', 'Reduced support costs', 'Brand loyalty'],
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5'
  },
  'digital-marketing': {
    title: 'Digital Marketing Solutions',
    subtitle: 'Data-driven strategies for measurable growth',
    overview: 'Amplify your brand presence and drive qualified leads with our comprehensive digital marketing services. We combine creativity with analytics to deliver campaigns that generate real ROI.',
    approach: 'Omnichannel strategy focusing on the entire customer journey. We use data analytics to continuously optimize campaigns for better performance.',
    tech: ['Google Analytics', 'SEMrush', 'HubSpot', 'Facebook Ads', 'Google Ads', 'Mailchimp'],
    industries: ['Retail', 'Real Estate', 'Professional Services', 'Hospitality'],
    benefits: ['Targeted reach', 'Measurable ROI', 'Brand awareness', 'Customer retention'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f'
  },
  'consulting': {
    title: 'Enterprise IT Consulting',
    subtitle: 'Strategic guidance for technology decisions',
    overview: 'Navigate the complex technology landscape with confidence. Our consultants provide strategic advice on digital transformation, technology stack selection, and IT roadmap planning.',
    approach: 'Business-first mindset. We align technology strategies with your organizational goals to ensure every investment delivers value.',
    tech: ['Enterprise Architecture', 'IT Strategy', 'Digital Transformation', 'Legacy Modernization'],
    industries: ['Banking', 'Insurance', 'Government', 'Energy'],
    benefits: ['Risk mitigation', 'Cost optimization', 'Future-proof strategy', 'Operational efficiency'],
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978'
  },
  'ai-analytics': {
    title: 'AI & Data Analytics',
    subtitle: 'Unlocking the power of your data',
    overview: 'Transform raw data into actionable insights. We build intelligent systems using machine learning and advanced analytics to help you make smarter, faster business decisions.',
    approach: 'From data engineering to model deployment. We ensure your data is clean, secure, and accessible before applying advanced algorithms.',
    tech: ['Python', 'TensorFlow', 'PyTorch', 'Tableau', 'PowerBI', 'Snowflake'],
    industries: ['Retail', 'Finance', 'Healthcare', 'Manufacturing'],
    benefits: ['Predictive insights', 'Process automation', 'Personalization', 'Fraud detection'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71'
  },
  'cybersecurity': {
    title: 'Cybersecurity Solutions',
    subtitle: 'Protecting your digital assets',
    overview: 'In an era of increasing threats, security cannot be an afterthought. We provide comprehensive cybersecurity services including vulnerability assessments, penetration testing, and security architecture design.',
    approach: 'Zero-trust security model. We implement defense-in-depth strategies to protect your infrastructure, applications, and data.',
    tech: ['Penetration Testing', 'SIEM', 'Identity Management', 'Encryption', 'Compliance (GDPR/HIPAA)'],
    industries: ['Banking', 'Healthcare', 'Government', 'Legal'],
    benefits: ['Data protection', 'Regulatory compliance', 'Brand reputation', 'Business continuity'],
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3'
  }
};

const ServicePage = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const service = servicesData[serviceId];

  useEffect(() => {
    if (!service) {
      navigate('/');
    }
  }, [service, navigate]);

  if (!service) return null;

  return (
    <>
      <Helmet>
        <title>{service.title} | Softlead Technologies</title>
        <meta name="description" content={service.overview} />
      </Helmet>

      <div className="pt-20 min-h-screen bg-offwhite">
        {/* Hero */}
        <div className="bg-navy text-white py-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <Link to="/" className="inline-flex items-center text-gold hover:text-white transition-colors mb-8 text-sm font-bold uppercase tracking-wider">
              <ArrowLeft size={16} className="mr-2" /> Back to Services
            </Link>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-serif font-bold mb-4"
            >
              {service.title}
            </motion.h1>
            <p className="text-xl text-gray-300 max-w-2xl font-light">{service.subtitle}</p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              <section>
                <h2 className="text-3xl font-serif text-navy mb-6">Service Overview</h2>
                <p className="text-gray-600 text-lg leading-relaxed">{service.overview}</p>
              </section>

              <section>
                <h2 className="text-3xl font-serif text-navy mb-6">Our Approach</h2>
                <div className="bg-white p-8 border-l-4 border-gold shadow-sm">
                  <p className="text-gray-600 leading-relaxed">{service.approach}</p>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-serif text-navy mb-6">Key Benefits</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {service.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3 bg-white p-4 rounded-sm shadow-sm">
                      <CheckCircle size={20} className="text-gold" />
                      <span className="text-charcoal font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <div className="bg-white p-8 shadow-lg border-t-4 border-navy">
                <h3 className="text-xl font-serif text-navy mb-6 flex items-center">
                  <Code size={20} className="mr-2 text-gold" /> Core Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {service.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-offwhite text-navy text-sm font-medium rounded-full border border-gray-200">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-white p-8 shadow-lg border-t-4 border-navy">
                <h3 className="text-xl font-serif text-navy mb-6 flex items-center">
                  <Globe size={20} className="mr-2 text-gold" /> Industries Served
                </h3>
                <ul className="space-y-2">
                  {service.industries.map((ind, i) => (
                    <li key={i} className="flex items-center text-gray-600">
                      <div className="w-1.5 h-1.5 bg-gold rounded-full mr-3"></div>
                      {ind}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-navy p-8 text-white text-center">
                <h3 className="text-xl font-serif mb-4">Ready to start?</h3>
                <p className="text-gray-400 mb-6 text-sm">Let's build something extraordinary together.</p>
                <Link to="/contact" className="inline-block w-full py-3 bg-gold text-navy font-bold hover:bg-white transition-colors rounded-sm">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicePage;