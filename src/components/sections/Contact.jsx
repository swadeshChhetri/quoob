import React from "react";
import { motion } from "framer-motion";
import { MessageCircle, Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactForm() {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      description: "hello@qyoob.com",
      subtext: "We'll reply within 24 hours",
    },
    {
      icon: Phone,
      title: "Call Us",
      description: "+1 (555) 123-4567",
      subtext: "Mon to Fri, 9am to 6pm",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      description: "San Francisco, CA",
      subtext: "Come say hello at our office",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="contact" className="bg-black text-white">
      <div className="">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Let's Build Something{" "}
            <span className="ml-2 text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-lime-600">
              Amazing
            </span>
          </h2>

          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Ready to transform your ideas into reality? Reach out and let's
            create something extraordinary together.
          </p>
        </motion.div>

        {/* Contact Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {/* Contact Information */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-1 space-y-6"
          >
            {contactInfo.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className="group p-6 rounded-2xl border border-gray-800 bg-gradient-to-br from-gray-900/50 to-black hover:border-lime-400/30 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-lime-400/10 flex items-center justify-center group-hover:bg-lime-400/20 transition-colors">
                      <IconComponent className="w-6 h-6 text-lime-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">
                        {item.title}
                      </h3>
                      <p className="text-lime-400 font-medium">
                        {item.description}
                      </p>
                      <p className="text-gray-400 text-sm mt-1">
                        {item.subtext}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}

            {/* Stats Card */}
            <motion.div
              variants={itemVariants}
              className="p-6 rounded-2xl border border-lime-400/20 bg-gradient-to-br from-lime-400/5 to-transparent"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-lime-400 mb-2">
                  24/7
                </div>
                <p className="text-gray-300 text-sm">Response Time</p>
                <p className="text-gray-400 text-xs mt-1">
                  Average reply under 6 hours
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <div className="relative rounded-3xl border border-gray-800 bg-gradient-to-br from-gray-900 to-black p-8 lg:p-12 shadow-2xl">
              {/* Background Glow Effect */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-lime-500/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-green-500/10 rounded-full blur-xl"></div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="relative z-10"
              >
                <h3 className="text-3xl font-bold mb-2">Send us a message</h3>
                <p className="text-gray-400 mb-8">
                  Fill out the form below and we'll get back to you ASAP
                </p>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Enter your full name"
                        className="w-full px-4 py-3 rounded-xl border border-gray-700 bg-gray-800/50 text-white placeholder-gray-500 focus:outline-none focus:border-lime-400 focus:ring-2 focus:ring-lime-400/20 transition-all duration-300"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="Enter your email"
                        className="w-full px-4 py-3 rounded-xl border border-gray-700 bg-gray-800/50 text-white placeholder-gray-500 focus:outline-none focus:border-lime-400 focus:ring-2 focus:ring-lime-400/20 transition-all duration-300"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="What's this about?"
                      className="w-full px-4 py-3 rounded-xl border border-gray-700 bg-gray-800/50 text-white placeholder-gray-500 focus:outline-none focus:border-lime-400 focus:ring-2 focus:ring-lime-400/20 transition-all duration-300"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                      Message *
                    </label>
                    <textarea
                      rows="5"
                      required
                      placeholder="Tell us about your project or inquiry..."
                      className="w-full px-4 py-3 rounded-xl border border-gray-700 bg-gray-800/50 text-white placeholder-gray-500 focus:outline-none focus:border-lime-400 focus:ring-2 focus:ring-lime-400/20 transition-all duration-300 resize-none"
                    ></textarea>
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r bg-lime-400 hover:bg-lime-500 text-black font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-lime-500/25 flex items-center justify-center gap-3 group"
                  >
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    SEND MESSAGE
                  </motion.button>

                  <p className="text-center text-gray-500 text-sm">
                    We'll get back to you within 24 hours. Your information is
                    secure with us.
                  </p>
                </form>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
