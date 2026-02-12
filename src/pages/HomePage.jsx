import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Shield, Zap, Users, Globe, Clock, Award, BarChart, Code, Smartphone, Cloud, Layout, Megaphone, Briefcase, Brain, Lock } from 'lucide-react';

const HomePage = () => {
  const services = [
    { id: 'custom-software', title: 'Custom Software', icon: Code, desc: 'Tailored enterprise solutions.' },
    { id: 'web-app', title: 'Web Applications', icon: Layout, desc: 'Scalable, modern web platforms.' },
    { id: 'mobile-app', title: 'Mobile Apps', icon: Smartphone, desc: 'Native & cross-platform experiences.' },
    { id: 'cloud-solutions', title: 'Cloud & DevOps', icon: Cloud, desc: 'Infrastructure optimization.' },
    { id: 'ui-ux', title: 'UI/UX Engineering', icon: Users, desc: 'User-centric design systems.' },
    { id: 'digital-marketing', title: 'Digital Marketing', icon: Megaphone, desc: 'Data-driven growth strategies.' },
    { id: 'consulting', title: 'IT Consulting', icon: Briefcase, desc: 'Strategic technology advisory.' },
    { id: 'ai-analytics', title: 'AI & Analytics', icon: Brain, desc: 'Intelligent data insights.' },
    { id: 'cybersecurity', title: 'Cybersecurity', icon: Lock, desc: 'Comprehensive threat protection.' },
  ];

  const differentiators = [
    { title: 'Technical Excellence', icon: Award, desc: 'Elite engineering talent delivering robust code.' },
    { title: 'Agile Methodology', icon: Zap, desc: 'Iterative delivery with rapid feedback loops.' },
    { title: 'Transparent Communication', icon: Users, desc: 'Clear, honest, and frequent updates.' },
    { title: 'On-Time Delivery', icon: Clock, desc: 'Rigorous project management and timelines.' },
    { title: 'Dedicated Support', icon: Shield, desc: '24/7 maintenance and operational support.' },
    { title: 'Scalable Architecture', icon: BarChart, desc: 'Systems built to grow with your business.' },
  ];

  return (
    <>
      <Helmet>
        <title>Softlead Technologies | Enterprise IT Solutions</title>
        <meta name="description" content="Softlead Technologies delivers digital transformation through strategic innovation. Enterprise IT solutions for visionary organizations." />
      </Helmet>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1697638164340-6c5fc558bdf2" 
            alt="Luxury Technology Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-navy/90 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-navy/50" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h2 className="text-gold font-sans text-sm md:text-base tracking-[0.3em] uppercase mb-6">
              Excellence in Engineering
            </h2>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-8 leading-tight">
              Digital Transformation Through <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-yellow-200">
                Strategic Innovation
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
              Enterprise IT solutions for visionary organizations. We architect the future of your business with precision, elegance, and cutting-edge technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="#services" className="px-8 py-4 bg-gold text-navy font-bold tracking-wide hover:bg-white transition-colors duration-300 rounded-sm">
                Explore Our Services
              </a>
              <Link to="/contact" className="px-8 py-4 border border-white/30 text-white font-medium tracking-wide hover:bg-white/10 transition-colors duration-300 rounded-sm backdrop-blur-sm">
                Get In Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-navy font-serif text-4xl md:text-5xl mb-8 leading-tight">
                Pioneering the Future of <br />
                <span className="text-gold">Enterprise Technology</span>
              </h2>
              <p className="text-charcoal text-lg leading-relaxed mb-6">
                Softlead Technologies is more than a software development firm; we are strategic partners in your digital journey. With a relentless focus on quality and innovation, we empower organizations to navigate the complexities of the modern digital landscape.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Our mission is to deliver transformative technology solutions that drive measurable business value. We envision a world where technology seamlessly enhances human potential and business efficiency.
              </p>
              
              <div className="grid grid-cols-2 gap-8 mt-12">
                <div>
                  <div className="text-4xl font-serif text-navy font-bold mb-2">200+</div>
                  <div className="text-sm text-gray-500 uppercase tracking-wider">Projects Delivered</div>
                </div>
                <div>
                  <div className="text-4xl font-serif text-navy font-bold mb-2">15+</div>
                  <div className="text-sm text-gray-500 uppercase tracking-wider">Global Clients</div>
                </div>
                <div>
                  <div className="text-4xl font-serif text-navy font-bold mb-2">10+</div>
                  <div className="text-sm text-gray-500 uppercase tracking-wider">Years Expertise</div>
                </div>
                <div>
                  <div className="text-4xl font-serif text-navy font-bold mb-2">24/7</div>
                  <div className="text-sm text-gray-500 uppercase tracking-wider">Support</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 border-2 border-gold/20 rounded-sm transform translate-x-4 translate-y-4"></div>
              <img 
                src="https://images.unsplash.com/photo-1552581234-26160f608093" 
                alt="Corporate Team" 
                className="relative w-full h-auto rounded-sm shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section id="services" className="py-24 bg-offwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-gold font-bold tracking-widest uppercase text-sm">Our Expertise</span>
            <h2 className="text-4xl md:text-5xl font-serif text-navy mt-4 mb-6">Comprehensive IT Solutions</h2>
            <div className="w-24 h-1 bg-gold mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link to={`/services/${service.id}`} key={index} className="group">
                <div className="bg-white p-8 h-full border border-gray-100 hover:border-gold/30 hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-0 bg-gold group-hover:h-full transition-all duration-500"></div>
                  <service.icon size={40} className="text-navy mb-6 group-hover:text-gold transition-colors duration-300" />
                  <h3 className="text-xl font-serif font-bold text-navy mb-3 group-hover:translate-x-2 transition-transform duration-300">{service.title}</h3>
                  <p className="text-gray-600 mb-6 text-sm leading-relaxed">{service.desc}</p>
                  <div className="flex items-center text-gold text-sm font-bold tracking-wide uppercase group-hover:translate-x-2 transition-transform duration-300">
                    Learn More <ArrowRight size={16} className="ml-2" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-choose-us" className="py-24 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-gold font-bold tracking-widest uppercase text-sm">The Softlead Advantage</span>
            <h2 className="text-4xl md:text-5xl font-serif mt-4 mb-6">Why Choose Us</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">We don't just deliver software; we deliver certainty, quality, and innovation.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {differentiators.map((item, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center text-gold">
                  <item.icon size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold mb-2 text-white">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Us Unique */}
      <section id="unique" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div>
                <span className="text-gold font-bold tracking-widest uppercase text-sm">Differentiation</span>
                <h2 className="text-4xl md:text-5xl font-serif text-navy mt-4 mb-6">What Makes Us Unique</h2>
                <p className="text-gray-600 leading-relaxed">
                  In a crowded marketplace, Softlead Technologies stands apart through our unwavering commitment to client success and our unique operational model.
                </p>
              </div>
              
              <div className="space-y-6">
                {[
                  "Client-first business model focused on value",
                  "Innovation-driven engineering culture",
                  "Custom strategy development for every client",
                  "Access to top-tier Hyderabad tech talent",
                  "Hybrid global delivery capability",
                  "Long-term strategic partnerships"
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <CheckCircle size={20} className="text-gold flex-shrink-0" />
                    <span className="text-charcoal font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-offwhite p-10 border border-gray-200 relative">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gold/10 rounded-bl-full"></div>
              <h3 className="text-2xl font-serif text-navy mb-6">Why Partner With Us</h3>
              <p className="text-charcoal leading-relaxed">
                Softlead Technologies transforms how organizations approach technology. We combine strategic thinking with technical excellence to deliver solutions that drive real business impact. Our commitment to your success extends far beyond project delivery—we become a trusted extension of your team.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-charcoal text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif mb-6">Ready to Transform Your Business?</h2>
          <p className="text-gray-400 mb-10 text-lg">Let's discuss how our solutions can drive your growth.</p>
          <Link to="/contact" className="inline-block px-10 py-4 bg-gold text-navy font-bold tracking-wide hover:bg-white transition-colors duration-300 rounded-sm">
            Start a Conversation
          </Link>
        </div>
      </section>
    </>
  );
};

export default HomePage;