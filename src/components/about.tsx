export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-[var(--color-light)]">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Text Section */}
        <div>
          <h2 className="text-5xl font-extrabold mb-6 text-[var(--color-dark)] tracking-tight">
            Who We Are
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            TechSolutions is a team of passionate engineers and creatives
            delivering{" "}
            <span className="font-semibold text-[var(--color-accent)]">
              end-to-end IT solutions
            </span>
            . Whether you’re a startup or an enterprise, we help you build,
            grow, and maintain your digital presence.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            With expertise in design, SEO, and hardware support, we pride
            ourselves on being your{" "}
            <span className="font-semibold text-[var(--color-accent)]">
              single trusted tech partner
            </span>
            .
          </p>
        </div>

        <div className="flex justify-center">
          <div className="relative w-full max-w-2xl">
            <img
              src="https://st.depositphotos.com/1020482/4297/i/450/depositphotos_42979305-Team-of-engineers-repairing-circuit-board.jpg"
              alt="Our Team"
              className="w-full h-auto rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
