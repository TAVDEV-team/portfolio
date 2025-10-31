export default function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center bg-[#0a192f] text-white px-5"
    >
      <div className="max-w-2xl">
        <h1 className="text-5xl font-extrabold mb-4">
          We Build Modern Web Applications
        </h1>

        <p className="text-lg text-gray-300 mb-8 leading-relaxed">
          TavDev is a passionate software development team specializing in{" "}
          <span className="text-primary font-semibold">
            Django, React, and Scalable Backends
          </span>
          . We deliver powerful fullstack solutions that solve real-world
          problems.
        </p>

        <div className="flex justify-center gap-4">
          <a
            href="#projects"
            className="btn btn-primary btn-wide text-white font-semibold"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="btn btn-outline btn-wide text-white border-white hover:border-primary hover:bg-primary hover:text-white transition-all"
          >
            Hire Us
          </a>
        </div>
      </div>
    </section>
  );
}
