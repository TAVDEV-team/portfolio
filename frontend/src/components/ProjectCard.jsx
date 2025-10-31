export default function ProjectCard({ title, subtitle, desc, image, github, live }) {
  return (
    <div className="card w-80 bg-base-200 shadow-xl border border-violet-300 hover:scale-105 transition-transform duration-300">
      <div className="card-body">
        <div className="card-title text-violet-400">{title}</div>
        <p className="text-sm text-gray-500 mb-2">{subtitle}</p>

        {image && (
          <figure className="mb-3">
            <img src={image} alt={title} className="rounded-lg" />
          </figure>
        )}

        <p className="text-gray-300">{desc}</p>

        <div className="card-actions justify-end mt-4">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sm btn-secondary"
            >
              Secondary
            </a>
          )}
          {live && (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sm btn-primary"
            >
              Primary
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
