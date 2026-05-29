import { ScrollReveal } from "@/components/ScrollReveal";
import hp from "@/assets/hp.png";
import hp1 from "@/assets/hp1.png";

import canon from "@/assets/canon.png";
import canon1 from "@/assets/canon1.png";

import epson from "@/assets/epsone.png";

import brother from "@/assets/brother.png";
import brother1 from "@/assets/brother1.png";

import img1 from "@/assets/1.jpg";
import img2 from "@/assets/2.jpg";
import img3 from "@/assets/3.jpg";
import img4 from "@/assets/4.jpg";
import img5 from "@/assets/5.jpg";
import img6 from "@/assets/6.jpg";
import img7 from "@/assets/7.jpg";
import img8 from "@/assets/mfc.png";
import img9 from "@/assets/8.png";
const printerBrands = [
  {
    brand: "HP",
    color: "bg-blue-600",
    models: [
      {
        name: "HP LaserJet",
        type: "Mono Laser",
        image: hp,
        tags: ["Setup", "Error", "WiFi"],
      },
      {
        name: "HP OfficeJet",
        type: "Inkjet",
        image: hp1,
        tags: ["Setup", "Ink", "WiFi"],
      },
      {
        name: "HP DeskJet 2700",
        type: "Inkjet",
        image: img1,
        tags: ["Setup", "WiFi"],
      },
      {
        name: "HP Envy 6000",
        type: "All-in-One",
        image: img2,
        tags: ["Ink", "Setup"],
      },
    ],
  },

  {
    brand: "Canon",
    color: "bg-red-500",
    models: [
      {
        name: "Canon PIXMA",
        type: "Ink Tank",
        image: canon,
        tags: ["Ink", "Setup", "WiFi"],
      },
      {
        name: "Canon ImageCLASS",
        type: "Laser",
        image: canon1,
        tags: ["Setup", "Network"],
      },
      {
        name: "Canon G3000",
        type: "Ink",
        image: img3,
        tags: ["Ink", "WiFi"],
      },
      {
        name: "Canon MF244dw",
        type: "Laser",
        image: img4,
        tags: ["Network", "Setup"],
      },
    ],
  },

  {
    brand: "Epson",
    color: "bg-indigo-600",
    models: [
      {
        name: "Epson EcoTank",
        type: "Ink Tank",
        image: epson,
        tags: ["Ink", "Error", "WiFi"],
      },
      {
        name: "Epson L3150",
        type: "Ink Tank",
        image: img5,
        tags: ["Ink", "WiFi"],
      },
      {
        name: "Epson L805",
        type: "Photo Printer",
        image: img6,
        tags: ["Photo", "Ink"],
      },
      {
        name: "Epson WF-2830",
        type: "All-in-One",
        image: img7,
        tags: ["Setup", "WiFi"],
      },
    ],
  },

  {
    brand: "Brother / Ricoh",
    color: "bg-slate-800",
    models: [
      {
        name: "Brother HL",
        type: "Mono Laser",
        image: brother,
        tags: ["Setup", "Error"],
      },
      {
        name: "Ricoh SP",
        type: "Color Laser",
        image: img8,
        tags: ["Office", "Toner"],
      },
      {
        name: "Brother MFC",
        type: "Laser",
        image: brother1,
        tags: ["Network", "Fax"],
      },
      {
        name: "Brother DCP",
        type: "All-in-One",
        image: img9,
        tags: ["Setup", "Ink"],
      },
    ],
  },
];

const getTagColor = (tag) => {
  switch (tag.toLowerCase()) {
    case "wifi":
      return "bg-green-100 text-green-700";

    case "error":
      return "bg-red-100 text-red-600";

    case "setup":
      return "bg-blue-100 text-blue-600";

    case "network":
      return "bg-slate-100 text-slate-600";

    case "ink":
      return "bg-gray-100 text-gray-600";

    default:
      return "bg-gray-100 text-gray-600";
  }
};

const PrinterShowcase = () => {
  return (
    <section id="printers" className="py-24 bg-[#f4f6f9]">
      <div className="max-w-7xl mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-[#ff6b1a] uppercase text-sm font-bold tracking-widest">
              Our Range
            </span>

            <h2 className="text-5xl font-bold mt-2 text-[#101828]">
              Printer Models <span className="text-[#ff6b1a]">We Support</span>
            </h2>

            <p className="text-gray-500 mt-4 max-w-3xl mx-auto">
              HP, Canon, Epson, Brother & more.
            </p>

            <p className="text-gray-500 mt-3 max-w-4xl mx-auto">
              We are an independent third-party support provider and are not
              affiliated with any printer brands like HP, Canon, Epson, or
              Brother.
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-14">
          {printerBrands.map((brand) => (
            <div key={brand.brand}>
              <div className="flex items-center gap-4 mb-5">
                <span
                  className={`${brand.color} text-white text-xs px-3 py-1 rounded-md font-medium`}
                >
                  {brand.brand}
                </span>

                <span className="text-gray-500 text-sm">
                  {brand.models.length} models supported
                </span>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {brand.models.map((printer) => (
                  <div
                    key={printer.name}
                    className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300"
                  >
                    <div className="h-52 bg-[#f7f7f7] flex items-center justify-center">
                      <img
                        src={printer.image}
                        alt={printer.name}
                        className="max-h-28 object-contain"
                      />
                    </div>

                    <div className="p-5 text-center">
                      <h3 className="font-semibold text-lg text-[#101828]">
                        {printer.name}
                      </h3>

                      <p className="text-sm text-gray-500 mt-1">
                        {printer.type}
                      </p>

                      <div className="flex justify-center flex-wrap gap-2 mt-4">
                        {printer.tags.map((tag) => (
                          <span
                            key={tag}
                            className={`text-xs px-2 py-1 rounded ${getTagColor(
                              tag,
                            )}`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 bg-white rounded-2xl border border-gray-200 p-8 flex flex-col md:flex-row justify-between items-center">
          <div>
            <h3 className="text-xl font-bold text-[#101828]">
              We also support other brands
            </h3>

            <p className="text-gray-500 mt-1">Samsung, Xerox, Lexmark & more</p>
          </div>

          <a
            href="tel:+13308222231"
            className="mt-5 md:mt-0 bg-[#081a35] hover:bg-[#0d2347] text-white px-8 py-4 rounded-xl font-semibold transition"
          >
            📞 Call for Any Brand
          </a>
        </div>
      </div>
    </section>
  );
};

export default PrinterShowcase;
