import { Link, useParams } from "react-router-dom";
import contributors from "../data/contributors";

const ContributorProfile = () => {
  const { slug } = useParams();

  const contributor = contributors.find((person) => person.slug === slug);

  if (!contributor) {
    return (
      <section className="min-h-screen bg-gray-950 flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl font-semibold text-white">
            Contributor Not Found
          </h1>
          <p className="mt-3 text-gray-400">
            The profile you're looking for doesn't exist or may have moved.
          </p>
          <Link
            to="/projects"
            className="inline-block mt-8 text-blue-400 underline underline-offset-4 hover:text-blue-300"
          >
            Back to Projects
          </Link>
        </div>
      </section>
    );
  }

  return (
    <main className="min-h-screen bg-gray-950">
      {/* Profile Hero */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-8 md:gap-12 items-center text-center md:text-left">
          <img
            src={contributor.image}
            alt={contributor.name}
            className="w-32 h-32 sm:w-40 sm:h-40 md:w-44 md:h-44 object-cover rounded-full mx-auto md:mx-0 ring-2 ring-blue-500/20"
            loading="lazy"
          />

          <div>
            <p className="text-xs sm:text-sm uppercase tracking-widest text-blue-400 mb-3">
              TAVDEV Contributor
            </p>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white">
              {contributor.name}
            </h1>

            <p className="text-lg sm:text-xl text-gray-400 mt-2">
              {contributor.role}
            </p>

            <p className="max-w-2xl mx-auto md:mx-0 text-gray-400 mt-5 leading-relaxed">
              {contributor.bio}
            </p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="border-t border-white/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
          <h2 className="text-xl sm:text-2xl font-semibold text-white mb-6">
            Technical Expertise
          </h2>

          <div className="flex flex-wrap gap-2">
            {contributor.skills.map((skill) => (
              <span
                key={skill}
                className="px-3.5 py-1.5 rounded-full border border-blue-400/20 bg-blue-500/10 text-sm text-blue-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Contributions */}
      <section className="border-t border-white/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
          <h2 className="text-xl sm:text-2xl font-semibold text-white mb-10">
            Contributions
          </h2>

          <div className="space-y-10">
            {contributor.contributions.map((contribution) => (
              <article
                key={contribution.project}
                className="pb-10 border-b border-white/10 last:border-b-0 last:pb-0"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                  <h3 className="text-lg sm:text-xl font-medium text-white">
                    {contribution.project}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {contribution.role}
                  </p>
                </div>

                <p className="text-gray-400 mt-3 max-w-2xl leading-relaxed">
                  {contribution.description}
                </p>

                <ul className="mt-4 space-y-1.5 text-gray-400 list-disc list-inside marker:text-blue-400/60">
                  {contribution.responsibilities.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="border-t border-white/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
          <h2 className="text-xl sm:text-2xl font-semibold text-white mb-6">
            Projects
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {contributor.projects.map((project) => (
              <Link
                key={project.id}
                to={`/projects/${project.id}`}
                className="p-5 sm:p-6 rounded-lg border border-white/10 hover:border-blue-400/40 hover:bg-white/[0.02] transition-colors"
              >
                <h3 className="text-base sm:text-lg font-medium text-white">
                  {project.title}
                </h3>
                <p className="text-gray-500 mt-1 text-sm">
                  {project.role}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContributorProfile;