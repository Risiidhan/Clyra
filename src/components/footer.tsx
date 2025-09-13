import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-dark)] text-white py-10 px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-sm">&copy; {new Date().getFullYear()} TechSolutions. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-[var(--color-accent)]"><Facebook /></a>
          <a href="#" className="hover:text-[var(--color-accent)]"><Instagram /></a>
          <a href="#" className="hover:text-[var(--color-accent)]"><Linkedin /></a>
          <a href="#" className="hover:text-[var(--color-accent)]"><Twitter /></a>
        </div>
      </div>
    </footer>
  );
}
