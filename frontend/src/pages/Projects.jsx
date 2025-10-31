import React from "react";
import projects from "../data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-[#0a192f] min-h-screen text-white py-20 flex flex-col items-center"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
        My <span className="text-purple-400">Projects</span>
      </h2>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-6 md:px-10 max-w-6xl">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-[#112240] border border-[#1d3557] rounded-xl overflow-hidden shadow-lg hover:shadow-purple-500/30 transition-all duration-300 hover:-translate-y-2"
          >
            {/* Project Image */}
            <div className="relative group">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover"
              />
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-4">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white text-sm font-medium rounded-md transition"
                >
                  Live Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 border border-purple-400 text-purple-400 hover:bg-purple-500 hover:text-white text-sm font-medium rounded-md transition"
                >
                  GitHub Repo
                </a>
              </div>
            </div>

            {/* Project Info */}
            <div className="p-5">
              <h3 className="text-xl font-semibold text-purple-400 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
