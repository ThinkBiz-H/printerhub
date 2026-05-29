import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Why is my printer not printing?",
    answer:
      "There can be several reasons like connectivity issues, outdated drivers, paper jams, low ink/toner, or the printer being offline. Our experts quickly identify and fix the issue.",
  },
  {
    question: "How to fix printer offline issue?",
    answer:
      "Check your connection, restart devices, and set the printer as default. If it still shows offline, our technicians can fix it remotely in minutes.",
  },
  {
    question: "How long does it take to fix?",
    answer:
      "Most issues are resolved within 15–20 minutes. Complex problems may take a bit longer, but we ensure fast and reliable support.",
  },
  {
    question: "Do you support all brands?",
    answer:
      "Yes, we support all major brands including HP, Canon, Epson, Brother, Ricoh, and more.",
  },
  {
    question: "Is this official support or third-party?",
    answer:
      "We are an independent third-party support provider, offering expert help for all printer brands at affordable pricing.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-[#01091d] py-24 text-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-center text-5xl font-bold mb-4">
          Frequently Asked Questions
        </h2>

        <p className="text-center text-gray-400 mb-14">
          Get quick answers to common printer issues. Still need help? Call our
          experts now.
        </p>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-[#1c2a45] rounded-xl overflow-hidden bg-transparent"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between px-6 py-5 text-left"
              >
                <span className="font-semibold text-xl">{faq.question}</span>

                <ChevronDown
                  size={20}
                  className={`transition-transform duration-300 ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`transition-all duration-300 overflow-hidden ${
                  activeIndex === index
                    ? "max-h-40 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-5 text-gray-400 leading-7 border-t border-[#1c2a45]">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <h3 className="text-4xl font-bold mb-6">
            Still facing issues? Talk to an expert now.
          </h3>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+13308222231"
              className="bg-[#ff6b1a] hover:bg-[#ff7f33] px-8 py-4 rounded-xl font-semibold transition"
            >
              Call Now
            </a>

            <a
              href="#contact"
              className="border border-[#374151] px-8 py-4 rounded-xl font-semibold hover:border-white transition"
            >
              Start Quick Fix
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
