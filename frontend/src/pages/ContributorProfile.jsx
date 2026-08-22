import { Link, useParams } from "react-router-dom";
import contributors from "../data/contributors";

const ContributorProfile = () => {
  const { slug } = useParams();

  const contributor = contributors.find(
    (person) => person.slug === slug
  );

  if (!contributor) {
    return (
      <section className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold">
            Contributor Not Found
          </h1>

          <Link
            to="/projects"
            className="inline-block mt-6 underline"
          >
            Back to Projects
          </Link>
        </div>
      </section>
    );
  }

  return (
    <main className="min-h-screen">

      {/* Profile Hero */}
      <section className="max-w-6xl mx-auto px-6 py-20">

        <div className="grid md:grid-cols-[220px_1fr] gap-10 items-center">

          <img
            src={contributor.image}
            alt={contributor.name}
            className="w-48 h-48 object-cover rounded-full"
          />

          <div>

            <p className="text-sm uppercase tracking-widest mb-3">
              TAVDEV Contributor
            </p>

            <h1 className="text-5xl font-bold">
              {contributor.name}
            </h1>

            <p className="text-xl text-gray-500 mt-3">
              {contributor.role}
            </p>

            <p className="max-w-2xl text-gray-600 mt-6 leading-relaxed">
              {contributor.bio}
            </p>

          </div>

        </div>

      </section>

      {/* Skills */}
      <section className="bg-gray-50">

        <div className="max-w-6xl mx-auto px-6 py-20">

          <h2 className="text-3xl font-bold mb-8">
            Technical Expertise
          </h2>

          <div className="flex flex-wrap gap-3">

            {contributor.skills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 rounded-full border bg-white"
              >
                {skill}
              </span>
            ))}

          </div>

        </div>

      </section>

      {/* Contributions */}
      <section className="max-w-6xl mx-auto px-6 py-20">

        <h2 className="text-3xl font-bold mb-10">
          Contributions
        </h2>

        <div className="space-y-8">

          {contributor.contributions.map((contribution) => (
            <article
              key={contribution.project}
              className="border-b pb-8"
            >

              <h3 className="text-2xl font-semibold">
                {contribution.project}
              </h3>

              <p className="text-gray-500 mt-2">
                {contribution.role}
              </p>

              <p className="text-gray-600 mt-4 max-w-3xl leading-relaxed">
                {contribution.description}
              </p>

              <ul className="mt-4 list-disc list-inside text-gray-600">
                {contribution.responsibilities.map((item) => (
                  <li key={item}>
                    {item}
                  </li>
                ))}
              </ul>

            </article>
          ))}

        </div>

      </section>

      {/* Projects */}
      <section className="bg-gray-50">

        <div className="max-w-6xl mx-auto px-6 py-20">

          <h2 className="text-3xl font-bold mb-8">
            Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            {contributor.projects.map((project) => (
              <Link
                key={project.id}
                to={`/projects/${project.id}`}
                className="p-6 bg-white rounded-xl border hover:shadow-md transition"
              >
                <h3 className="text-xl font-semibold">
                  {project.title}
                </h3>

                <p className="text-gray-500 mt-2">
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