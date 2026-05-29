import { Printer } from "lucide-react";
import { Link } from "react-router-dom";
const Footer = () => {
  const scrollToSection = (id) => {
    const section = document.querySelector(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  const linkClass =
    "text-white/50 hover:text-white transition-all duration-300";

  return (
    <footer className="bg-[#0a1628] text-white">
      {/* CTA */}
      <div className="bg-[#ff6b1a] px-4 md:px-8 lg:px-12 py-12">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <p className="text-[11px] uppercase tracking-widest text-white/70 mb-2 font-bold">
              Still have a broken printer?
            </p>

            <h2 className="text-white font-black text-[24px] md:text-[42px] leading-tight">
              Don't leave with a broken printer.
              <br />
              Call us — fixed in 18 minutes.
            </h2>

            <p className="text-white/80 mt-2 text-sm">
              Available right now · All brands · No fix, no fee
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <a
              href="tel:+13308222231"
              className="bg-white text-[#ff6b1a] px-6 py-3 rounded-xl font-bold text-center"
            >
              📞 Call +1 (330)-822-2231
            </a>

            <button
              onClick={() => scrollToSection("#contact")}
              className="border-2 border-white/40 px-6 py-3 rounded-xl text-white text-center"
            >
              Schedule Callback
            </button>
          </div>
        </div>
      </div>

      {/* Footer Content */}
      <div className="px-4 md:px-8 lg:px-12 pt-16">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 pb-12 border-b border-white/10">
          {/* Logo */}
          <div>
            <button
              onClick={() => scrollToSection("#home")}
              className="flex items-center gap-2 mb-4"
            >
              <div className="w-10 h-10 bg-[#ff6b1a] rounded-lg flex items-center justify-center">
                <Printer size={18} />
              </div>

              <div className="font-extrabold text-lg">
                Printer
                <span className="text-[#ff6b1a]">Care</span>
                Helps
              </div>
            </button>

            <p className="text-white/50 text-sm mb-5">
              Independent third-party printer support for homes and businesses.
              Expert setup, repair, WiFi & driver help — all brands, all models.
            </p>

            <div className="bg-[#132240] px-4 py-2 rounded-lg flex items-center gap-2 w-fit mb-4">
              <span className="text-yellow-400 text-sm">★★★★★</span>

              <span className="text-xs text-white/60">
                <b className="text-white">4.9 / 5</b> based on customer feedback
              </span>
            </div>

            <div className="border border-orange-500/30 px-4 py-2 rounded-lg text-[#ff8c4a]">
              Contact Support:
              <br />
              +1 (330)-822-2231
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4 border-b-2 border-[#ff6b1a] inline-block">
              SERVICES
            </h4>

            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => scrollToSection("#services")}
                  className={linkClass}
                >
                  Printer Installation
                </button>
              </li>

              <li>
                <button
                  onClick={() => scrollToSection("#services")}
                  className={linkClass}
                >
                  Printer Repair
                </button>
              </li>

              <li>
                <button
                  onClick={() => scrollToSection("#services")}
                  className={linkClass}
                >
                  WiFi & Network Setup
                </button>
              </li>

              <li>
                <button
                  onClick={() => scrollToSection("#services")}
                  className={linkClass}
                >
                  Driver Troubleshooting
                </button>
              </li>

              <li>
                <button
                  onClick={() => scrollToSection("#services")}
                  className={linkClass}
                >
                  Cartridge Support
                </button>
              </li>

              <li>
                <button
                  onClick={() => scrollToSection("#services")}
                  className={linkClass}
                >
                  AMC Maintenance
                </button>
              </li>

              <li>
                <button
                  onClick={() => scrollToSection("#services")}
                  className="text-[#ff8c4a] hover:translate-x-1 transition-all duration-300"
                >
                  → All Services
                </button>
              </li>
            </ul>
          </div>

          {/* Brands */}
          <div>
            <h4 className="font-bold mb-4 border-b-2 border-[#ff6b1a] inline-block">
              BRANDS WE SUPPORT
            </h4>

            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => scrollToSection("#printers")}
                  className={linkClass}
                >
                  HP Printers
                </button>
              </li>

              <li>
                <button
                  onClick={() => scrollToSection("#printers")}
                  className={linkClass}
                >
                  Canon Printers
                </button>
              </li>

              <li>
                <button
                  onClick={() => scrollToSection("#printers")}
                  className={linkClass}
                >
                  Epson Printers
                </button>
              </li>

              <li>
                <button
                  onClick={() => scrollToSection("#printers")}
                  className={linkClass}
                >
                  Brother Printers
                </button>
              </li>

              <li>
                <button
                  onClick={() => scrollToSection("#printers")}
                  className={linkClass}
                >
                  Ricoh Printers
                </button>
              </li>

              <li>
                <button
                  onClick={() => scrollToSection("#printers")}
                  className={linkClass}
                >
                  Samsung / Lexmark
                </button>
              </li>

              <li>
                <button
                  onClick={() => scrollToSection("#printers")}
                  className="text-[#ff8c4a] hover:translate-x-1 transition-all duration-300"
                >
                  → All Brands
                </button>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4 border-b-2 border-[#ff6b1a] inline-block">
              QUICK LINKS
            </h4>

            <ul className="space-y-2 text-white/50 text-sm">
              <li>
                <Link to="/#home" className={linkClass}>
                  Home
                </Link>
              </li>

              <li>
                <button onClick={() => scrollToSection("#services")}>
                  Services
                </button>
              </li>

              <li>
                <button onClick={() => scrollToSection("#printers")}>
                  Printers
                </button>
              </li>

              <li>
                <button onClick={() => scrollToSection("#faq")}>FAQ</button>
              </li>

              <li>
                <button onClick={() => scrollToSection("#contact")}>
                  Contact
                </button>
              </li>

              <li>
                <Link to="/privacy-policy" className={linkClass}>
                  📄 Privacy Policy
                </Link>
              </li>

              <li>
                <Link to="/terms-and-conditions" className={linkClass}>
                  📄 Terms
                </Link>
              </li>

              <li>
                <Link to="/refund-policy" className={linkClass}>
                  💰 Refund
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Hours */}
          <div>
            <h4 className="font-bold mb-4 border-b-2 border-[#ff6b1a] inline-block">
              SUPPORT HOURS
            </h4>

            <ul className="text-sm text-white/50 space-y-2">
              {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
                <li
                  key={day}
                  className="flex justify-between border-b border-white/10 pb-1"
                >
                  <span>{day}</span>
                  <span className="text-green-400">24 hrs</span>
                </li>
              ))}
            </ul>

            <p className="text-[11px] text-white/30 mt-3 uppercase">
              Always available · No holidays
            </p>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="max-w-[1200px] mx-auto py-6 border-b border-white/10 text-white/50 text-sm">
          <span className="text-[#ff8c4a] text-xs font-bold">
            ⚠ Independent Service Disclaimer
          </span>

          <p className="mt-2">
            PrinterCareHelps is an independent third-party printer support
            provider. We are not affiliated with, endorsed by, or sponsored by
            HP, Canon, Epson, Brother, Ricoh, Lexmark, Samsung, Xerox, Kyocera,
            or any other printer manufacturer. All brand names, trademarks, and
            logos are the property of their respective owners and are referenced
            support solutions designed to assist customers who prefer guided
            expert assistance. Prices shown are starting prices and may vary
            based on the complexity of the issue. Results and fix times may
            vary.
          </p>
        </div>

        {/* Bottom */}
        <div className="max-w-[1200px] mx-auto py-5 flex flex-col md:flex-row justify-between items-center text-white/30 text-xs gap-4">
          <p>© 2026 PrinterCareHelps</p>

          <div className="flex gap-4">
            <span>Privacy</span>
            <span>Terms</span>
            <span>Refund</span>
          </div>

          <p>Not affiliated with any printer brand</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
