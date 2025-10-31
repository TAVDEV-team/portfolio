import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#0a192f] min-h-screen text-white py-20 flex flex-col items-center"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Get In <span className="text-purple-400">Touch</span>
      </h2>

      <div className="flex flex-col md:flex-row justify-between items-start gap-16 w-full max-w-6xl px-6 md:px-12">
        {/* Contact Info */}
        <div className="space-y-6 w-full md:w-1/3">
          <h3 className="text-xl font-semibold mb-4 text-purple-400">
            Contact Information
          </h3>

          <div className="flex items-center gap-4">
            <Mail className="text-purple-400 w-6 h-6" />
            <p className="text-gray-300">tavdev.team@gmail.com</p>
          </div>

          <div className="flex items-center gap-4">
            <MapPin className="text-purple-400 w-6 h-6" />
            <p className="text-gray-300">Bangladesh</p>
          </div>

          <div className="flex items-center gap-4">
            <Phone className="text-purple-400 w-6 h-6" />
            <p className="text-gray-300">+447438425239</p>
          </div>

          <p className="text-gray-400 mt-6">
            Feel free to reach out for collaborations, freelance projects, or
            mentorship discussions.
          </p>
        </div>

        {/* Contact Form */}
        <div className="bg-[#112240] w-full md:w-2/3 rounded-2xl shadow-lg border border-[#1d3557] p-8">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
