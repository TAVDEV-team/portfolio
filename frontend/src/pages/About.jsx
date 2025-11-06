import React from "react";
import { Code2, User, Briefcase } from "lucide-react";

const About = () => {
  return (
    <section className="min-h-screen bg-[#0a192f] text-white flex flex-col justify-center items-center px-6 md:px-20 py-20">
      <h2 className="text-3xl md:text-4xl font-bold mb-10">
        About <span className="text-purple-400">TAVDEV</span>
      </h2>

      <div className="grid md:grid-cols-2 gap-10 max-w-6xl w-full">
        {/* Left Section */}
        <div>
        <h3 className="text-2xl font-semibold mb-4">
          Innovative Web Solutions & Automation Experts
        </h3>
        <p className="text-gray-300 mb-6 leading-relaxed">
          <span className="text-purple-400 font-medium">TAVDEV</span> is a modern software company specializing in
          building high-performance, scalable, and responsive web applications using technologies like
          <span className="text-purple-400"> React</span>, <span className="text-purple-400">Django</span>, and modern cloud tools.
        </p>
        <p className="text-gray-400 mb-8 leading-relaxed">
          Tavdev also provides <span className="text-purple-400 font-medium">web scraping and data automation</span> services,
          helping businesses collect, clean, and process large-scale data efficiently.  
          At TAVDEV, we’re committed to delivering elegant, production-ready solutions that drive real impact.
        </p>

        <div className="flex gap-4">
          <a href="#contact" className="btn btn-primary bg-purple-500 border-none hover:bg-purple-600">
            Get In Touch
          </a>
          {/* <a
            href="/TAVDEV_Profile.pdf"
            download
            className="btn btn-outline border-purple-400 text-purple-400 hover:bg-purple-500 hover:text-white"
          >
            Download Company Profile
          </a> */}
        </div>
      </div>


        {/* Right Section - Skill Cards */}
        <div className="space-y-6">
          <div className="card bg-[#112240] shadow-xl border border-[#1d3557]">
            <div className="card-body flex flex-row items-center gap-4">
              <Code2 className="text-purple-400 w-8 h-8" />
              <div>
                <h4 className="card-title">Web Development</h4>
                <p className="text-gray-400">
                  Creating responsive websites and web applications using modern frameworks.
                </p>
              </div>
            </div>
          </div>

          <div className="card bg-[#112240] shadow-xl border border-[#1d3557]">
          <div className="card-body flex flex-row items-center gap-4">
            <User className="text-purple-400 w-8 h-8" />
            <div>
              <h4 className="card-title">Web Scraping</h4>
              <p className="text-gray-400">
                Extracting and automating data collection from websites with precision and scalability.
              </p>
            </div>
          </div>
        </div>


          <div className="card bg-[#112240] shadow-xl border border-[#1d3557]">
            <div className="card-body flex flex-row items-center gap-4">
              <Briefcase className="text-purple-400 w-8 h-8" />
              <div>
                <h4 className="card-title">Project Management</h4>
                <p className="text-gray-400">
                  Leading projects from conception to completion with agile methodologies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
