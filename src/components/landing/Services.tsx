import {
  Wrench,
  Settings,
  Shield,
  Wifi,
  Package,
  AlertTriangle,
  Star,
  Clock,
  CheckCircle2,
  ArrowRight,
  Phone,
  Zap,
} from "lucide-react";
import { useState } from "react";

const services = [
  {
    icon: Settings,
    title: "Printer Installation",
    desc: "Expert setup for inkjet, laser, and multifunction printers — home or office, any brand.",
    features: [
      "New printer unboxing & full setup",
      "Driver & software installation",
      "Test print confirmation",
      "Works on PC, Mac & mobile",
    ],
    price: "$29",
    period: "one-time",
    popular: false,
    tag: "Easy Setup",
  },
  {
    icon: Wrench,
    title: "Printer Repair",
    desc: "Fast diagnostics and remote repair for paper jams, print quality issues, and hardware faults.",
    features: [
      "Paper jam & feed errors",
      "Blank or faded print output",
      "Error codes & offline issues",
      "Most issues resolved same session",
    ],
    price: "$29",
    period: "no fix, no fee",
    popular: true,
    tag: "Most Requested",
  },
  {
    icon: Shield,
    title: "AMC Maintenance",
    desc: "Annual maintenance contracts to keep your printers running at peak performance.",
    features: [
      "Priority support response",
      "Scheduled check-ups included",
      "Discounted repair rates",
      "Best for offices & businesses",
    ],
    price: "$99",
    period: "per year",
    popular: false,
    tag: "Business Choice",
  },
  {
    icon: Wifi,
    title: "Network & WiFi Setup",
    desc: "Wireless and wired network printer configuration for seamless multi-device printing.",
    features: [
      "WiFi printer connection & setup",
      "Multi-device sharing",
      "Router troubleshooting",
      "Cloud & AirPrint setup",
    ],
    price: "$39",
    period: "one-time",
    popular: false,
    tag: "Wireless Expert",
  },
  {
    icon: Package,
    title: "Cartridge Support",
    desc: "Genuine and compatible cartridge guidance, replacement advice, and refill support.",
    features: [
      "Right cartridge selection",
      "Ink issues fix",
      "Printhead cleaning",
      "OEM guidance",
    ],
    price: "$29",
    period: "per session",
    popular: false,
    tag: "Save Money",
  },
  {
    icon: AlertTriangle,
    title: "Troubleshooting",
    desc: "Remote troubleshooting for driver errors, connectivity drops, and print failures.",
    features: [
      "Printer offline fix",
      "Driver issues",
      "Windows/Mac support",
      "Queue stuck fix",
    ],
    price: "$29",
    period: "no fix, no fee",
    popular: false,
    tag: "Fast Fix",
  },
];

const Services = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section
      className="relative bg-gradient-to-b from-gray-50 to-white py-24 px-4 md:px-10 overflow-hidden"
      id="services"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-orange-100 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-orange-50 to-transparent rounded-full blur-3xl opacity-20" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto">
        {/* HEADER - Premium Design */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-orange-100 text-orange-700 px-4 py-2 rounded-full mb-6">
            <Zap className="w-4 h-4" />
            <span className="text-sm font-semibold tracking-wide">
              EXPERT SOLUTIONS
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4">
            Expert Help for{" "}
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
              Every
            </span>{" "}
            Printer Problem
          </h2>

          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            From a simple paper jam to a full office network setup — we've got
            you covered with 24/7 expert support.
          </p>

          {/* Stats Strip */}
        </div>

        {/* SERVICES GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, idx) => {
            const Icon = service.icon;
            const isHovered = hoveredCard === idx;

            return (
              <div
                key={idx}
                className="group relative"
                onMouseEnter={() => setHoveredCard(idx)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Glow Effect */}
                <div
                  className={`absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500 ${service.popular ? "opacity-20" : ""}`}
                />

                {/* Card */}
                <div
                  className={`relative h-full rounded-2xl transition-all duration-300 ${
                    service.popular
                      ? "bg-gradient-to-br from-gray-900 to-gray-800 text-white shadow-2xl"
                      : "bg-white border border-gray-200 hover:shadow-xl"
                  }`}
                >
                  {/* Popular Badge */}
                  {service.popular && (
                    <div className="absolute -top-3 left-6 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg z-10">
                      🔥 MOST REQUESTED
                    </div>
                  )}

                  {/* Tag Badge */}
                  <div
                    className={`absolute top-4 right-4 text-xs font-semibold px-2 py-1 rounded ${
                      service.popular
                        ? "bg-orange-500/20 text-orange-300 border border-orange-500/30"
                        : "bg-orange-100 text-orange-700"
                    }`}
                  >
                    {service.tag}
                  </div>

                  <div className="p-6">
                    {/* Icon with animated background */}
                    <div
                      className={`relative w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 ${
                        service.popular
                          ? "bg-gradient-to-br from-orange-500 to-orange-600"
                          : "bg-gradient-to-br from-orange-100 to-orange-50 group-hover:scale-110"
                      }`}
                    >
                      <Icon
                        className={`w-7 h-7 ${service.popular ? "text-white" : "text-orange-500"}`}
                      />
                    </div>

                    {/* Title & Description */}
                    <h3
                      className={`text-xl font-bold mb-2 ${service.popular ? "text-white" : "text-gray-900"}`}
                    >
                      {service.title}
                    </h3>
                    <p
                      className={`text-sm mb-4 ${service.popular ? "text-gray-300" : "text-gray-600"}`}
                    >
                      {service.desc}
                    </p>

                    {/* Features List */}
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, fIdx) => (
                        <li
                          key={fIdx}
                          className="flex items-start gap-2 text-sm"
                        >
                          <CheckCircle2
                            className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                              service.popular
                                ? "text-green-400"
                                : "text-green-500"
                            }`}
                          />
                          <span
                            className={
                              service.popular
                                ? "text-gray-300"
                                : "text-gray-600"
                            }
                          >
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* Price & CTA */}
                    <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                      <div className="flex items-end justify-between mb-3">
                        <div>
                          <span
                            className={`text-2xl font-bold ${service.popular ? "text-orange-400" : "text-orange-500"}`}
                          >
                            {service.price}
                          </span>
                          <span
                            className={`text-xs ml-1 ${service.popular ? "text-gray-400" : "text-gray-500"}`}
                          >
                            / {service.period}
                          </span>
                        </div>
                        <div className="flex items-center gap-1 text-xs text-gray-400">
                          <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                          <span>4.9</span>
                        </div>
                      </div>

                      <a
                        href="tel:+13308222231"
                        className={`group/btn w-full py-2.5 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                          service.popular
                            ? "bg-orange-500 hover:bg-orange-600 text-white shadow-lg hover:shadow-xl"
                            : "border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
                        }`}
                      >
                        <Phone className="w-4 h-4" />
                        <span>Call Now</span>
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </div>

                  {/* Animated Bottom Border */}
                  <div
                    className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r from-orange-500 to-orange-600 transition-all duration-500 ${
                      isHovered ? "w-full" : "w-0"
                    }`}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA SECTION - Premium Design */}
        <div className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-2xl">
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,107,26,0.1),transparent_70%)]" />

          <div className="relative p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <div className="inline-flex items-center gap-2 bg-orange-500/20 text-orange-400 px-3 py-1 rounded-full text-sm font-semibold mb-4">
                <Zap className="w-4 h-4" />
                <span>FREE DIAGNOSIS</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Not sure which service you need?
              </h3>
              <p className="text-gray-300 text-base">
                Call us — we’ll diagnose your issue for free and recommend the
                right solution.
              </p>
              <div className="flex items-center gap-4 mt-4 text-sm text-gray-400">
                <div className="flex items-center gap-1">
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                  <span>No obligation</span>
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                  <span>5 min diagnosis</span>
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                  <span>Expert advice</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a
                href="tel:+13308222231"
                className="group bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-xl font-bold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5 animate-pulse" />
                <span>Get Assistance</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                className="border-2 border-orange-500/50 hover:border-orange-500 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:bg-orange-500/10 flex items-center justify-center gap-2"
              >
                Learn More
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 flex flex-wrap justify-center gap-8 text-center">
          {[
            {
              icon: Shield,
              text: "100% Secure Support",
              sub: "256-bit encryption",
            },
            {
              icon: Clock,
              text: "24/7 Availability",
              sub: "Always here to help",
            },
            {
              icon: Star,
              text: "Satisfaction Guaranteed",
              sub: "No fix, no fee",
            },
          ].map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div key={idx} className="flex items-center gap-3">
                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                  <IconComponent className="w-5 h-5 text-orange-500" />
                </div>
                <div className="text-left">
                  <p className="text-sm font-bold text-gray-900">{item.text}</p>
                  <p className="text-xs text-gray-500">{item.sub}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
