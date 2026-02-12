import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const services = [
    { name: 'Custom Software', id: 'custom-software' },
    { name: 'Web Applications', id: 'web-app' },
    { name: 'Mobile Apps', id: 'mobile-app' },
    { name: 'Cloud Solutions', id: 'cloud-solutions' },
    { name: 'UI/UX Design', id: 'ui-ux' },
    { name: 'Digital Marketing', id: 'digital-marketing' },
    { name: 'IT Consulting', id: 'consulting' },
    { name: 'AI & Analytics', id: 'ai-analytics' },
    { name: 'Cybersecurity', id: 'cybersecurity' }
  ];

  return (
    <footer className="bg-navy text-gray-400 pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-white font-serif font-bold text-2xl tracking-wide">
                SOFTLEAD <span className="text-gold">TECH</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-gray-400">
              Empowering visionary organizations with enterprise-grade technology solutions. We bridge the gap between strategy and execution.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-serif text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-sm hover:text-gold transition-colors">Home</Link></li>
              <li><Link to="/careers" className="text-sm hover:text-gold transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="text-sm hover:text-gold transition-colors">Contact Us</Link></li>
              <li><a href="#why-choose-us" className="text-sm hover:text-gold transition-colors">Why Choose Us</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-serif text-lg mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <Link to={`/services/${service.id}`} className="text-sm hover:text-gold transition-colors">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-serif text-lg mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-gold mt-1 flex-shrink-0" />
                <span className="text-sm leading-relaxed">
                  5th Floor, SBR Cyber Square,<br />
                  Road No. 12, Banjara Hills,<br />
                  Hyderabad – 500034
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-gold flex-shrink-0" />
                <a href="mailto:info@softleadtechnologies.in" className="text-sm hover:text-gold transition-colors">
                  info@softleadtechnologies.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-gray-500">
            © 2020 Softlead Technologies. All Rights Reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-xs text-gray-500 hover:text-gold transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs text-gray-500 hover:text-gold transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;