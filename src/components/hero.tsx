export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://t4.ftcdn.net/jpg/13/54/81/71/360_F_1354817143_c9U6pORxKDcx2ozT5OONlnJFp6YGNcrP.jpg"
          alt="Modern Office"
          className="w-full h-full object-cover"
        />
        {/* White Gradient Fade at Bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 text-left">
        <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg">
          Make Your Business Modern & Professional
        </h1>
        <p className="text-lg text-gray-100 mb-8 max-w-xl drop-shadow-md">
          We provide tech solutions that are clean, minimal, and built for speed.
        </p>
        <button className="px-6 py-3 bg-[var(--color-primary)] text-white rounded-lg font-medium shadow hover:bg-orange-600 transition">
          Get Started
        </button>
      </div>
    </section>
  );
}
