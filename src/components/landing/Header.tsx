import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Printers", href: "#printers" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string,
  ) => {
    e.preventDefault();

    const element = document.querySelector(targetId);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setMobileOpen(false);
  };

  return (
    <>
      {/* TOP BAR */}
      <div className="fixed top-0 left-0 right-0 z-[999] bg-[#ff6b1a] text-white">
        <div className="max-w-[1200px] mx-auto px-6 py-2 flex items-center justify-center gap-4 text-center text-sm font-bold md:text-sm">
          <span>
            Need help with your printer? Our support team is available 24/7.
          </span>

          <a
            href="tel:+13308222231"
            className="hidden md:flex items-center gap-2 border border-white/40 px-4 py-1 rounded-full font-semibold hover:bg-white/10 transition"
          >
            <Phone size={14} />
            Call: +1 330-822-2231
          </a>
        </div>
      </div>

      {/* HEADER */}
      <header
        className={`fixed left-0 right-0 top-[40px] z-[998] transition-all duration-300 ${
          scrolled
            ? "bg-[#081a35]/95 backdrop-blur-md shadow-lg"
            : "bg-[#081a35]"
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="h-16 md:h-20 flex items-center justify-between">
            {/* LOGO */}
            <a
              href="#home"
              onClick={(e) => handleScroll(e, "#home")}
              className="flex items-center gap-2 md:gap-3 cursor-pointer"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 bg-[#ff6b1a] rounded-xl flex items-center justify-center text-white">
                🖨️
              </div>

              <div>
                <h2 className="text-white font-bold text-lg md:text-2xl leading-none">
                  Printer
                  <span className="text-[#ff6b1a]">Care</span>
                  Helps
                </h2>

                <p className="hidden md:block text-[10px] uppercase tracking-wider text-gray-400">
                  Independent Support - All Brands
                </p>
              </div>
            </a>

            {/* DESKTOP NAV */}
            <nav className="hidden md:flex items-center gap-10">
              {navLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleScroll(e, item.href)}
                  className="text-gray-300 hover:text-white transition cursor-pointer"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* MOBILE BUTTON */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden text-white"
            >
              {mobileOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden fixed left-0 right-0 z-[997] bg-[#10244a] transition-all duration-300 overflow-hidden ${
          mobileOpen ? "top-[104px] max-h-[500px]" : "top-[104px] max-h-0"
        }`}
      >
        <div className="px-4 py-2">
          {navLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleScroll(e, item.href)}
              className="block py-4 text-white border-b border-white/10"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>

      {/* SPACER */}
      <div className="h-[104px]" />
    </>
  );
};

export default Header;
