import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Mail, MapPin, Clock } from "lucide-react";
import { useToast } from "../components/ui/use-toast";

const ContactPage = () => {
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission
    setTimeout(() => {
      toast({
        title: "Message Sent",
        description:
          "Thank you for contacting Softlead Technologies. We will respond shortly.",
      });

      setFormData({
        name: "",
        email: "",
        company: "",
        message: "",
      });

      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | Softlead Technologies</title>
        <meta
          name="description"
          content="Get in touch with Softlead Technologies in Hyderabad for enterprise IT solutions."
        />
      </Helmet>

      <div className="pt-20 min-h-screen bg-offwhite">
        <div className="bg-navy text-white py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-gray-300 font-light">
            Let's discuss your digital transformation
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white p-10 shadow-xl border-t-4 border-gold"
            >
              <h2 className="text-2xl font-serif text-navy mb-8">
                Send us a message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Full Name"
                  className="w-full px-4 py-3 bg-offwhite border border-gray-200 focus:border-gold focus:ring-1 focus:ring-gold outline-none"
                />

                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@company.com"
                  className="w-full px-4 py-3 bg-offwhite border border-gray-200 focus:border-gold focus:ring-1 focus:ring-gold outline-none"
                />

                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Company Name"
                  className="w-full px-4 py-3 bg-offwhite border border-gray-200 focus:border-gold focus:ring-1 focus:ring-gold outline-none"
                />

                <textarea
                  name="message"
                  required
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can we help you?"
                  className="w-full px-4 py-3 bg-offwhite border border-gray-200 focus:border-gold focus:ring-1 focus:ring-gold outline-none"
                />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-navy text-white font-bold uppercase disabled:opacity-70"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-10"
            >
              <div className="flex items-start space-x-4">
                <MapPin className="text-gold" />
                <div>
                  <h3 className="font-bold text-navy">Corporate Office</h3>
                  <p className="text-gray-600">
                    Banjara Hills, Hyderabad – 500034, Telangana, India
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Clock className="text-gold" />
                <div>
                  <h3 className="font-bold text-navy">Business Hours</h3>
                  <p className="text-gray-600">
                    Monday – Saturday<br />
                    9:30 AM – 6:30 PM IST
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Mail className="text-gold" />
                <div>
                  <h3 className="font-bold text-navy">Email</h3>
                  <p className="text-gold">
                    info@softleadtechnologies.in
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
