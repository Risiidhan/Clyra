import { Mail, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-8 bg-gradient-to-tr from-[var(--color-secondary)] to-[var(--color-accent)]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-6">Let’s Work Together</h2>
        <p className="text-lg text-gray-700 mb-10">
          Have a project in mind? Need reliable IT support? We’re just a message away.
        </p>

        <form className="bg-white p-8 rounded-2xl shadow-md grid gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 rounded-lg border border-gray-300"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-3 rounded-lg border border-gray-300"
          />
          <textarea
            placeholder="Your Message"
            rows={4}
            className="p-3 rounded-lg border border-gray-300"
          ></textarea>
          <button className="px-6 py-3 bg-[var(--color-dark)] text-white rounded-lg shadow hover:opacity-90 transition">
            Send Message
          </button>
        </form>

        <div className="flex flex-col items-center md:flex-row justify-center gap-4 md:gap-8 mt-10 text-gray-700">
          <div className="flex items-center gap-2">
            <Mail className="w-5 h-5" /> info@techsolutions.com
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-5 h-5" /> +971 555 123 456
          </div>
        </div>
      </div>
    </section>
  );
}
