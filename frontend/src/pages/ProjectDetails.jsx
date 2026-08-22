import { Link, useParams } from "react-router-dom";
import projects from "../data/projects";
import contributors from "../data/contributors";

const ProjectDetails = () => {
  const { slug } = useParams();

  const project = projects.find(
    (project) => project.slug === slug
  );

  if (!project) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-[#0a192f] text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold">
            Project Not Found
          </h1>

          <Link
            to="/"
            className="inline-block mt-6 text-purple-400 hover:text-purple-300 underline"
          >
            Back to Home
          </Link>
        </div>
      </section>
    );
  }

  const projectContributors = project.contributors
    ?.map((slug) =>
      contributors.find(
        (contributor) => contributor.slug === slug
      )
    )
    .filter(Boolean);

  return (
    <main className="min-h-screen bg-[#0a192f] text-white">

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Project Information */}
          <div>
            <p className="text-purple-400 text-sm uppercase tracking-widest mb-4">
              TAVDEV Project
            </p>

            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {project.title}
            </h1>

            <p className="text-lg text-gray-300 leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-4 mt-8">

              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-lg bg-purple-500 hover:bg-purple-600 text-white transition"
                >
                  Visit Project
                </a>
              )}

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-lg border border-purple-400 text-purple-400 hover:bg-purple-500 hover:text-white transition"
                >
                  GitHub
                </a>
              )}

            </div>
          </div>

          {/* Project Image */}
          <div>
            <img
              src={project.image}
              alt={project.title}
              className="w-full rounded-2xl shadow-lg"
            />
          </div>

        </div>
      </section>

      {/* Overview */}
      {project.overview && (
        <section className="bg-[#112240]">
          <div className="max-w-6xl mx-auto px-6 py-20">

            <h2 className="text-3xl font-bold mb-6">
              Overview
            </h2>

            <p className="max-w-3xl text-gray-300 leading-relaxed">
              {project.overview}
            </p>

          </div>
        </section>
      )}

      {/* Problem */}
      {project.problem && (
        <section>
          <div className="max-w-6xl mx-auto px-6 py-20">

            <h2 className="text-3xl font-bold mb-6">
              The Challenge
            </h2>

            <p className="max-w-3xl text-gray-300 leading-relaxed">
              {project.problem}
            </p>

          </div>
        </section>
      )}

      {/* Solution */}
      {project.solution && (
        <section className="bg-[#112240]">
          <div className="max-w-6xl mx-auto px-6 py-20">

            <h2 className="text-3xl font-bold mb-6">
              The Solution
            </h2>

            <p className="max-w-3xl text-gray-300 leading-relaxed">
              {project.solution}
            </p>

          </div>
        </section>
      )}

      {/* Engineering Highlights */}
      {project.engineeringHighlights?.length > 0 && (
        <section>
          <div className="max-w-6xl mx-auto px-6 py-20">

            <p className="text-purple-400 text-sm uppercase tracking-widest mb-3">
              Engineering
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mb-10">
              Engineering Highlights
            </h2>

            <div className="grid md:grid-cols-2 gap-6">

              {project.engineeringHighlights.map((highlight) => (
                <div
                  key={highlight.title}
                  className="bg-[#112240] border border-[#1d3557] rounded-xl p-6"
                >
                  <h3 className="text-xl font-semibold text-purple-400 mb-3">
                    {highlight.title}
                  </h3>

                  <p className="text-gray-300 leading-relaxed">
                    {highlight.description}
                  </p>
                </div>
              ))}

            </div>

          </div>
        </section>
      )}

      {/* Tech Stack */}
      {project.stack?.length > 0 && (
        <section className="bg-[#112240]">
          <div className="max-w-6xl mx-auto px-6 py-20">

            <p className="text-purple-400 text-sm uppercase tracking-widest mb-3">
              Technology
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Tech Stack
            </h2>

            <div className="flex flex-wrap gap-3">

              {project.stack.map((technology) => (
                <span
                  key={technology}
                  className="px-4 py-2 rounded-full border border-[#1d3557] bg-[#0a192f] text-gray-200"
                >
                  {technology}
                </span>
              ))}

            </div>

          </div>
        </section>
      )}

      {/* Contributors */}
      {projectContributors?.length > 0 && (
        <section>
          <div className="max-w-6xl mx-auto px-6 py-20">

            <div className="mb-10">

              <p className="text-purple-400 text-sm uppercase tracking-widest mb-3">
                The Team
              </p>

              <h2 className="text-3xl md:text-4xl font-bold">
                Contributors
              </h2>

              <p className="text-gray-400 mt-4 max-w-2xl">
                The people who contributed to designing,
                building, and delivering this project.
              </p>

            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

              {projectContributors.map((contributor) => (
                <Link
                  key={contributor.slug}
                  to={`/contributors/${contributor.slug}`}
                  className="group bg-[#112240] border border-[#1d3557] rounded-xl p-6 hover:border-purple-400 hover:-translate-y-1 transition-all duration-300"
                >

                  <div className="flex items-center gap-4">

                    {/* Avatar */}
                    <img
                      src={contributor.image}
                      alt={contributor.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-[#1d3557] group-hover:border-purple-400 transition"
                    />

                    {/* Contributor Info */}
                    <div>
                      <h3 className="text-lg font-semibold text-white group-hover:text-purple-400 transition">
                        {contributor.name}
                      </h3>

                      <p className="text-sm text-gray-400 mt-1">
                        {contributor.role}
                      </p>
                    </div>

                  </div>

                  <div className="mt-5 text-sm text-purple-400">
                    View profile →
                  </div>

                </Link>
              ))}

            </div>

          </div>
        </section>
      )}

    </main>
  );
};

export default ProjectDetails;