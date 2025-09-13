import { Monitor, Search, Wrench, Network } from "lucide-react";

const services = [
  {
    title: "Web Development",
    desc: "Responsive, high-performing websites tailored for your business.",
    icon: <Monitor className="w-12 h-12 text-gradient" />,
  },
  {
    title: "SEO & Traffic",
    desc: "Boost visibility and drive organic growth with proven SEO strategies.",
    icon: <Search className="w-12 h-12 text-gradient" />,
  },
  {
    title: "PC Repair",
    desc: "Reliable troubleshooting and hardware/software fixes.",
    icon: <Wrench className="w-12 h-12 text-gradient" />,
  },
  {
    title: "All-in-One IT",
    desc: "From networks to security — your full-stack IT partner.",
    icon: <Network className="w-12 h-12 text-gradient" />,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 bg-[var(--color-light)]">
      <h3 className="text-5xl font-extrabold text-center mb-16 tracking-wide text-[var(--color-dark)]">
        Our Services
      </h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-7xl mx-auto">
        {services.map((s, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center text-center bg-white/80 backdrop-blur-md p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
          >
            <div className="mb-5">{s.icon}</div>
            <h4 className="text-xl font-semibold mb-3 text-[var(--color-dark)]">
              {s.title}
            </h4>
            <p className="text-gray-600">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
