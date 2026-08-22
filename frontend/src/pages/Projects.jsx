import React from "react";
import { Link } from "react-router-dom";
import projects from "../data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-[#0a192f] min-h-screen text-white py-20"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-purple-400 text-sm font-medium uppercase tracking-[0.2em] mb-3">
            What We've Built
          </p>

          <h2 className="text-3xl md:text-4xl font-bold">
            TAVDEV's{" "}
            <span className="text-purple-400">Projects</span>
          </h2>

          <p className="max-w-2xl mx-auto mt-5 text-gray-400 leading-relaxed">
            A selection of products and digital solutions we've designed
            and developed for businesses, organisations, and our own
            engineering initiatives.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group bg-[#112240] border border-[#1d3557] rounded-xl overflow-hidden shadow-lg hover:shadow-purple-500/20 transition-all duration-300 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-[#0a192f]/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">

                  <Link
                    to={`/projects/${project.slug}`}
                    className="px-5 py-2.5 bg-purple-500 hover:bg-purple-600 rounded-md text-sm font-medium transition"
                  >
                    View Case Study
                  </Link>


                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 border border-purple-400 text-purple-300 hover:bg-purple-500 hover:text-white rounded-md text-sm font-medium transition"
                    >
                      Live Demo
                    </a>
                  )}

                </div>
              </div>

              {/* Content */}
              <div className="p-6">

                <h3 className="text-xl font-semibold text-purple-400 mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-300 text-sm leading-relaxed line-clamp-4">
                  {project.description}
                </p>

                {/* Details Link */}
                <Link
  to={`/projects/${project.slug}`}
                  className="inline-flex items-center gap-2 mt-5 text-sm font-medium text-purple-400 hover:text-purple-300 transition"
                >
                  Explore project
                  <span className="transition-transform duration-200 group-hover:translate-x-1">
                    →
                  </span>
                </Link>

              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}