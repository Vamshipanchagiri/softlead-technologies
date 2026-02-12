import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Upload, Users, TrendingUp, Lightbulb, Award } from "lucide-react";
import { useToast } from "../components/ui/use-toast";

const CareersPage = () => {
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
  });

  const [resume, setResume] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    if (e.target.files[0]) setResume(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Application Received",
        description:
          "We will review your profile and contact you if shortlisted.",
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        position: "",
      });

      setResume(null);
      setIsSubmitting(false);
    }, 1000);
  };

  const positions = [
    { title: "Senior Full Stack Developer", type: "Full-time", loc: "Hyderabad" },
    { title: "UI/UX Designer", type: "Full-time", loc: "Hyderabad" },
    { title: "DevOps Engineer", type: "Full-time", loc: "Hyderabad" },
    { title: "Project Manager", type: "Full-time", loc: "Hyderabad" },
  ];

  return (
    <>
      <Helmet>
        <title>Careers | Softlead Technologies</title>
        <meta
          name="description"
          content="Join the Softlead Technologies team. Explore career opportunities in Hyderabad."
        />
      </Helmet>

      <div className="pt-20 min-h-screen bg-offwhite">
        <div className="bg-navy text-white py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Join Our Team
          </h1>
          <p className="text-xl text-gray-300 font-light">
            Build the future with us
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {[ 
              { icon: Users, title: "Inclusive Culture", desc: "A diverse environment where every voice is valued." },
              { icon: TrendingUp, title: "Career Growth", desc: "Clear progression paths and growth opportunities." },
              { icon: Lightbulb, title: "Innovation Hub", desc: "Work on cutting-edge technologies." },
              { icon: Award, title: "Mentorship", desc: "Learn from experienced industry leaders." },
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 shadow-md border-t-2 border-gold text-center">
                <item.icon size={32} className="text-gold mx-auto mb-4" />
                <h3 className="text-lg font-bold text-navy mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-serif text-navy mb-8">
                Open Positions
              </h2>

              <div className="space-y-4">
                {positions.map((pos, i) => (
                  <div
                    key={i}
                    className="bg-white p-6 border border-gray-200 hover:border-gold transition-colors flex justify-between items-center group"
                  >
                    <div>
                      <h3 className="font-bold text-navy text-lg">
                        {pos.title}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {pos.type} • {pos.loc}
                      </p>
                    </div>

                    <button
                      onClick={() =>
                        setFormData({ ...formData, position: pos.title })
                      }
                      className="text-sm font-bold text-navy uppercase"
                    >
                      Apply
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-8 shadow-xl border-t-4 border-navy">
              <h2 className="text-2xl font-serif text-navy mb-6">
                Submit Your Resume
              </h2>

              <form onSubmit={handleSubmit} className="space-y-5">
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className="w-full px-4 py-3 bg-offwhite border border-gray-200"
                />

                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  className="w-full px-4 py-3 bg-offwhite border border-gray-200"
                />

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 bg-offwhite border border-gray-200"
                />

                <input
                  type="text"
                  name="position"
                  required
                  value={formData.position}
                  onChange={handleChange}
                  placeholder="Position Applied For"
                  className="w-full px-4 py-3 bg-offwhite border border-gray-200"
                />

                <div className="border-2 border-dashed border-gray-300 p-6 text-center bg-offwhite">
                  <input
                    type="file"
                    id="resume"
                    onChange={handleFileChange}
                    className="hidden"
                  />

                  <label htmlFor="resume" className="cursor-pointer">
                    <Upload size={24} className="mx-auto text-gray-400 mb-2" />
                    <span className="text-sm text-navy font-bold">
                      Upload Resume
                    </span>
                    {resume && (
                      <p className="text-xs text-gold mt-2 font-bold">
                        {resume.name}
                      </p>
                    )}
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-gold text-navy font-bold uppercase disabled:opacity-70"
                >
                  {isSubmitting ? "Submitting..." : "Submit Application"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CareersPage;
