export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 w-full z-20 px-6 lg:px-12 py-6 flex justify-between items-center bg-transparent">
      <div className="text-2xl font-bold text-white">CLYRA</div>
      <ul className="hidden md:flex space-x-8 text-white font-medium">
        <li><a href="#about" className="hover:text-[var(--color-primary)]">About</a></li>
        <li><a href="#services" className="hover:text-[var(--color-primary)]">Services</a></li>
        <li><a href="#contact" className="hover:text-[var(--color-primary)]">Contact</a></li>
      </ul>
    </nav>
  );
}
