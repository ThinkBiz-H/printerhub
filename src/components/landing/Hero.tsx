import heroBanner from "@/assets/hero-banner.jpg";
import { useState, useEffect } from "react";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden px-4 md:px-10 py-20"
      id="home"
    >
      {/* Premium Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A1628] via-[#0F1A2F] to-[#0A1424]" />

      {/* Animated Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-1/4 -left-48 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-pulse"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
            transition: "transform 0.3s ease-out",
          }}
        />
        <div
          className="absolute bottom-1/4 -right-48 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"
          style={{
            transform: `translate(${-mousePosition.x * 0.02}px, ${-mousePosition.y * 0.02}px)`,
            transition: "transform 0.3s ease-out",
          }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      {/* Premium Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,107,26,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,107,26,0.03)_1px,transparent_1px)] bg-[size:80px_80px]" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-transparent to-transparent" />

      <div className="relative z-10 w-full max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
        {/* LEFT CONTENT */}
        <div className="max-w-[720px] animate-fade-in-up">
          {/* Premium Badge */}
          <div className="inline-flex items-center gap-3 border border-orange-500/30 bg-gradient-to-r from-orange-500/10 to-transparent backdrop-blur-sm px-5 py-2 rounded-full mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
            </span>
            <span className="text-orange-400 text-sm font-semibold tracking-wide">
              ⚡ INDEPENDENT THIRD-PARTY SUPPORT
            </span>
            <span className="text-orange-400/60 text-xs">• ALL BRANDS</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[1.1] mb-6">
            <span className="text-white">Printer Not</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
              Working?
            </span>
            <span className="text-white text-4xl md:text-5xl lg:text-6xl block mt-2">
              Get Expert Help —<span className="text-orange-500"> Fast</span>
            </span>
          </h1>

          {/* Description */}
          <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-[540px] leading-relaxed">
            Setup, repair & wireless support for HP, Canon, Epson, Brother & all
            brands. Available{" "}
            <span className="text-orange-400 font-semibold">24/7</span> — most
            issues fixed in{" "}
            <span className="text-orange-400 font-semibold">
              under 20 minutes
            </span>
            .
          </p>

          {/* Rating & Stats */}
          <div className="flex flex-wrap items-center gap-4 text-sm mb-6">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="text-white font-bold ml-1">4.9</span>
              <span className="text-gray-400">/5</span>
            </div>
            <div className="w-px h-4 bg-gray-600" />
            <span className="text-gray-300">⭐ 2,000+ printers fixed</span>
            <div className="w-px h-4 bg-gray-600" />
            <span className="text-gray-300">⚡ Avg. fix time: 18 min</span>
          </div>

          {/* Guarantee Badge */}
          <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/30 rounded-full px-4 py-2 mb-8">
            <svg
              className="w-4 h-4 text-green-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-green-400 text-sm font-semibold">
              Starting from $29 · No fix, no fee guaranteed
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-8">
            <a
              href="tel:+13308222231"
              className="group relative bg-gradient-to-r from-orange-500 to-orange-600 px-8 py-4 rounded-xl text-white font-bold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <div className="absolute inset-0 bg-white/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative flex items-center gap-2">
                <svg
                  className="w-5 h-5 animate-pulse"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                Get Support
              </span>
            </a>

            <a
              href="#services"
              className="group border-2 border-orange-500/50 hover:border-orange-500 px-8 py-4 rounded-xl text-white font-semibold transition-all duration-300 hover:bg-orange-500/10"
            >
              <span className="flex items-center gap-2">
                View Services
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            </a>
          </div>

          {/* Security & Features */}
          <div className="space-y-4">
            <p className="text-xs text-gray-500 flex items-center gap-1">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clipRule="evenodd"
                />
              </svg>
              Safe, secure, independent support — not affiliated with any brand
            </p>

            <div className="flex flex-wrap gap-3">
              {[
                {
                  icon: "⏰",
                  text: "Available 24/7",
                  color: "bg-blue-500/10 border-blue-500/20",
                },
                {
                  icon: "🖨️",
                  text: "All Printer Brands",
                  color: "bg-purple-500/10 border-purple-500/20",
                },
                {
                  icon: "⚡",
                  text: "Remote Support",
                  color: "bg-green-500/10 border-green-500/20",
                },
                {
                  icon: "🛡️",
                  text: "No Fix, No Fee",
                  color: "bg-orange-500/10 border-orange-500/20",
                },
              ].map((item, i) => (
                <span
                  key={i}
                  className={`${item.color} backdrop-blur-sm border px-3 py-1.5 rounded-lg text-sm text-gray-300 flex items-center gap-1`}
                >
                  <span>{item.icon}</span>
                  <span>{item.text}</span>
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT - PREMIUM PRICE CARD */}
        <div className="relative animate-slide-up">
          {/* Floating Background Effect */}
          <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/20 to-purple-500/20 rounded-3xl blur-xl animate-pulse" />

          <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-8 w-[320px] shadow-2xl">
            {/* Popular Badge */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg">
              🔥 LIMITED OFFER
            </div>

            <h3 className="text-center text-white/80 text-sm font-semibold mb-6 tracking-wider">
              CHOOSE YOUR PLAN
            </h3>

            {/* Price Cards */}
            <div className="space-y-4">
              {[
                {
                  name: "Quick Fix",
                  price: "$29",
                  desc: "15–20 min · Common errors",
                  popular: false,
                  color: "white",
                },
                {
                  name: "Full Setup",
                  price: "$59",
                  desc: "WiFi, drivers, multi-device",
                  popular: true,
                  color: "orange",
                },
                {
                  name: "Business",
                  price: "$99",
                  desc: "Full office setup & support",
                  popular: false,
                  color: "white",
                },
              ].map((plan, idx) => (
                <div
                  key={idx}
                  className={`relative p-4 rounded-xl transition-all duration-300 hover:scale-105 cursor-pointer ${
                    plan.popular
                      ? "bg-gradient-to-r from-orange-500/20 to-orange-600/20 border-2 border-orange-500 shadow-lg shadow-orange-500/20"
                      : "bg-white/5 border border-white/10 hover:bg-white/10"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-2 right-3 bg-orange-500 text-white text-xs font-bold px-2 py-0.5 rounded-full shadow-md">
                      POPULAR
                    </div>
                  )}
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-white font-semibold">
                      {plan.name}
                    </span>
                    <span
                      className={`text-2xl font-bold ${plan.popular ? "text-orange-400" : "text-white"}`}
                    >
                      {plan.price}
                    </span>
                  </div>
                  <p className="text-xs text-gray-400">{plan.desc}</p>
                  {plan.popular && (
                    <div className="mt-2 flex items-center gap-1">
                      <svg
                        className="w-3 h-3 text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-xs text-green-400">Best value</span>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* CTA */}
            {/* <a
              href="tel:+13308222231"
              className="block mt-6 bg-gradient-to-r from-orange-500 to-orange-600 text-center py-3 rounded-xl font-bold text-white hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <span className="flex items-center justify-center gap-2">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                Call Now — Get Help
              </span>
            </a> */}

            <p className="text-center text-xs text-gray-400 mt-3 flex items-center justify-center gap-1">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              +1 (800) 555-1234
            </p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        .animate-slide-up {
          animation: slide-up 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Hero;
