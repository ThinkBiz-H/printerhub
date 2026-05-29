import { useEffect, useState } from "react";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
const RefundPolicy = () => {
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";

    const handleScroll = () => {
      const sectionElements = document.querySelectorAll("[data-section-id]");
      let current = 0;

      sectionElements.forEach((section, idx) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 150) {
          current = idx;
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.documentElement.style.scrollBehavior = "";
    };
  }, []);

  const scrollToSection = (index: number) => {
    const element = document.getElementById(`section-${index}`);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="min-h-screen bg-[#F8FAFC]">
        {/* Navigation */}
        <Header />

        {/* Hero Section */}
        <div className="bg-gradient-to-br from-[#0A1628] to-[#0F2744] px-6 md:px-12 py-14 md:py-16 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_30%,rgba(34,197,94,0.08)_0%,transparent_50%)]"></div>
          </div>
          <div className="max-w-[860px] mx-auto relative z-10">
            <div className="inline-flex items-center gap-2 bg-green-500/15 border border-green-500/30 text-[#4ADE80] text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wide mb-4">
              💰 Legal Document
            </div>
            <h1 className="font-['Barlow_Condensed',sans-serif] text-4xl md:text-5xl font-black text-white leading-tight mb-3">
              Refund <span className="text-[#FF6B1A]">Policy</span>
            </h1>
            <div className="flex flex-wrap gap-5">
              <div className="text-[13px] text-white/45 flex items-center gap-1.5">
                <strong className="text-white/70 font-medium">
                  Effective:
                </strong>{" "}
                January 1, 2026
              </div>
              <div className="text-[13px] text-white/45 flex items-center gap-1.5">
                <strong className="text-white/70 font-medium">
                  Last Updated:
                </strong>{" "}
                March 1, 2026
              </div>
              <div className="text-[13px] text-white/45 flex items-center gap-1.5">
                <strong className="text-white/70 font-medium">
                  Guarantee:
                </strong>{" "}
                No Fix, No Fee
              </div>
            </div>
          </div>
        </div>

        {/* Guarantee Cards */}
        <div className="bg-white border-b border-[#E2E8F0] py-7 px-6 md:px-12">
          <div className="max-w-[1060px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-[#F0FDF4] border border-[#BBF7D0] rounded-xl p-5 flex gap-3.5 items-start">
              <div className="text-2xl flex-shrink-0">🛡️</div>
              <div>
                <div className="font-['Barlow_Condensed',sans-serif] text-lg font-extrabold text-[#0F172A] mb-1">
                  No Fix, No Fee
                </div>
                <div className="text-[13px] text-[#334155] leading-relaxed">
                  If we can't resolve your issue, you pay nothing. Zero risk.
                </div>
              </div>
            </div>
            <div className="bg-[#F0FDF4] border border-[#BBF7D0] rounded-xl p-5 flex gap-3.5 items-start">
              <div className="text-2xl flex-shrink-0">⚡</div>
              <div>
                <div className="font-['Barlow_Condensed',sans-serif] text-lg font-extrabold text-[#0F172A] mb-1">
                  Fast Refunds
                </div>
                <div className="text-[13px] text-[#334155] leading-relaxed">
                  Approved refunds processed within 5–7 business days.
                </div>
              </div>
            </div>
            <div className="bg-[#F0FDF4] border border-[#BBF7D0] rounded-xl p-5 flex gap-3.5 items-start">
              <div className="text-2xl flex-shrink-0">📞</div>
              <div>
                <div className="font-['Barlow_Condensed',sans-serif] text-lg font-extrabold text-[#0F172A] mb-1">
                  Easy Process
                </div>
                <div className="text-[13px] text-[#334155] leading-relaxed">
                  Just call or email us — no long forms, no hassle.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Layout */}
        <div className="max-w-[1060px] mx-auto grid md:grid-cols-[240px_1fr] gap-8 px-6 md:px-12 py-10 md:py-20">
          {/* Sidebar TOC */}
          <aside className="relative">
            <div className="bg-white border border-[#E2E8F0] rounded-2xl p-5 sticky top-20">
              <div className="text-[11px] font-bold tracking-wide uppercase text-[#64748B] mb-3 pb-2.5 border-b border-[#E2E8F0]">
                Contents
              </div>
              <ul className="list-none space-y-0.5">
                {[
                  "No Fix, No Fee Guarantee",
                  "Refund Eligibility",
                  "Non-Refundable Cases",
                  "AMC Contract Refunds",
                  "How to Request a Refund",
                  "Refund Timeline",
                  "Cancellation Policy",
                  "Disputes",
                  "Contact Us",
                ].map((item, i) => (
                  <li key={i}>
                    <button
                      onClick={() => scrollToSection(i)}
                      className={`w-full text-left text-xs text-[#64748B] no-underline px-2 py-1.5 rounded-md transition-all duration-200 ${
                        activeSection === i
                          ? "bg-[#FFF7ED] text-[#FF6B1A] font-medium"
                          : "hover:bg-[#FFF7ED] hover:text-[#FF6B1A]"
                      }`}
                    >
                      {i + 1}. {item}
                    </button>
                  </li>
                ))}
              </ul>
              <div className="h-px bg-[#E2E8F0] my-2"></div>
              <a
                href="/privacy-policy"
                className="block bg-[#0A1628] text-white text-center py-2.5 rounded-lg text-xs font-semibold mb-1.5 hover:bg-[#132240] transition no-underline"
              >
                Privacy Policy →
              </a>
              <a
                href="/terms-and-conditions"
                className="block bg-[#0A1628] text-white text-center py-2.5 rounded-lg text-xs font-semibold mb-3 hover:bg-[#132240] transition no-underline"
              >
                Terms & Conditions →
              </a>
              <div className="bg-[#F0FDF4] border border-[#BBF7D0] rounded-lg p-3 text-center">
                <p className="text-xs text-[#15803D] mb-1.5 font-medium">
                  Need a refund? Contact us directly:
                </p>
                <a
                  href="tel:+13308222231"
                  className="text-[13px] text-[#16A34A] font-bold no-underline hover:underline"
                >
                  📞 +1 (330) 822-2231
                </a>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="bg-white border border-[#E2E8F0] rounded-2xl p-6 md:p-10">
            {/* Section 1 - No Fix, No Fee */}
            <Section id={0} title="Our No Fix, No Fee Guarantee">
              <div className="bg-[#F0FDF4] border border-[#BBF7D0] border-l-3 border-l-[#16A34A] rounded-r-lg p-3.5 my-3">
                <strong className="text-[#16A34A] font-semibold">
                  Our Promise:
                </strong>{" "}
                If our technician is unable to resolve your printer issue during
                a remote support session, you will not be charged. This is our
                core guarantee and we stand by it completely.
              </div>
              <p className="text-[14px] text-[#334155] leading-relaxed mb-3">
                PrinterCareHelps operates on a results-based model for eligible
                remote support services. You only pay when your printer issue is
                fully resolved to your satisfaction. This guarantee reflects our
                confidence in our technicians and our commitment to delivering
                real value.
              </p>
              <p className="text-[14px] text-[#334155] leading-relaxed">
                The "No Fix, No Fee" guarantee applies automatically — you do
                not need to request it. If a session ends without resolution, no
                charge will be applied to your payment method.
              </p>
            </Section>

            {/* Section 2 - Refund Eligibility */}
            <Section id={1} title="Refund Eligibility">
              <p className="text-[14px] text-[#334155] leading-relaxed mb-3">
                The following situations qualify for a full refund:
              </p>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse my-4 text-[13px] rounded-lg overflow-hidden border border-[#E2E8F0]">
                  <thead>
                    <tr className="bg-[#0A1628]">
                      <th className="p-2.5 text-left text-xs font-semibold text-white">
                        Situation
                      </th>
                      <th className="p-2.5 text-left text-xs font-semibold text-white">
                        Refund Status
                      </th>
                      <th className="p-2.5 text-left text-xs font-semibold text-white">
                        Timeframe
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        situation: "Issue not resolved during remote session",
                        status: "Full Refund (No Charge)",
                        timeframe: "Immediate — no charge applied",
                        statusClass: "text-green-600",
                      },
                      {
                        situation: "Issue recurs within 7 days of resolution",
                        status: "Free Re-service or Refund",
                        timeframe: "Contact us within 7 days",
                        statusClass: "text-green-600",
                      },
                      {
                        situation: "Duplicate charge / billing error",
                        status: "Full Refund",
                        timeframe: "Within 30 days of charge",
                        statusClass: "text-green-600",
                      },
                      {
                        situation:
                          "Service cancelled before technician assigned",
                        status: "Full Refund",
                        timeframe: "Contact us within 24 hours",
                        statusClass: "text-green-600",
                      },
                      {
                        situation:
                          "AMC contract cancelled within 14 days of purchase",
                        status: "Full Refund",
                        timeframe: "14-day cooling-off period",
                        statusClass: "text-green-600",
                      },
                      {
                        situation:
                          "Session started but cancelled mid-way by customer",
                        status: "Partial Refund",
                        timeframe: "Case-by-case basis",
                        statusClass: "text-[#FF6B1A]",
                      },
                      {
                        situation: "Service completed and issue resolved",
                        status: "Not Eligible",
                        timeframe: "N/A",
                        statusClass: "text-red-600",
                      },
                    ].map((item, i) => (
                      <tr
                        key={i}
                        className={i % 2 === 0 ? "bg-white" : "bg-[#F8FAFC]"}
                      >
                        <td className="p-2.5 border-b border-[#E2E8F0] text-[#334155]">
                          {item.situation}
                        </td>
                        <td
                          className={`p-2.5 border-b border-[#E2E8F0] font-bold ${item.statusClass}`}
                        >
                          {item.status}
                        </td>
                        <td className="p-2.5 border-b border-[#E2E8F0] text-[#334155]">
                          {item.timeframe}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Section>

            {/* Section 3 - Non-Refundable Cases */}
            <Section id={2} title="Non-Refundable Situations">
              <p className="text-[14px] text-[#334155] leading-relaxed mb-3">
                Refunds will not be issued in the following circumstances:
              </p>
              <ul className="list-none mt-2 space-y-1">
                {[
                  "The service was successfully completed and the printer issue was fully resolved",
                  "The issue is caused by physical hardware failure requiring replacement parts (not a software/configuration issue)",
                  "The customer provided incorrect information about the printer model, operating system, or issue — leading to an unsuccessful session",
                  "The customer was unable or unwilling to follow the technician's instructions during the session",
                  "The issue recurs more than 7 days after the service session",
                  "AMC annual contracts cancelled after the 14-day cooling-off period",
                  "Services purchased through a third-party platform or reseller (refer to their refund policy)",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="text-[14px] text-[#334155] py-1.5 pl-5 relative border-b border-[#E2E8F0] last:border-0"
                  >
                    <span className="absolute left-0 text-[#FF6B1A] text-xs font-bold">
                      →
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="bg-[#FFF7ED] border border-[#FED7AA] border-l-3 border-l-[#FF6B1A] rounded-r-lg p-3.5 my-3">
                <strong className="text-[#0F172A] font-semibold">
                  Hardware failures:
                </strong>{" "}
                If your printer has a physical hardware defect (e.g. broken feed
                rollers, faulty fuser unit, damaged printhead), our remote
                service may be unable to resolve it. In such cases, we will
                inform you before charging and recommend appropriate next steps
                including manufacturer service.
              </div>
            </Section>

            {/* Section 4 - AMC Contract Refunds */}
            <Section id={3} title="AMC (Annual Maintenance Contract) Refunds">
              <p className="text-[14px] text-[#334155] leading-relaxed mb-3">
                Annual Maintenance Contracts are subject to the following refund
                terms:
              </p>
              <ul className="list-none mt-2 space-y-1">
                {[
                  "Within 14 days of purchase: Full refund, provided no service sessions have been used",
                  "After 14 days: No refund for the annual contract fee, as the support coverage has begun",
                  "If a service session was used within 14 days: The cost of sessions used will be deducted from any refund at standard per-session rates",
                  "Contract renewal: You may cancel auto-renewal at any time before the renewal date by contacting us",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="text-[14px] text-[#334155] py-1.5 pl-5 relative border-b border-[#E2E8F0] last:border-0"
                  >
                    <span className="absolute left-0 text-[#FF6B1A] text-xs font-bold">
                      →
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </Section>

            {/* Section 5 - How to Request a Refund */}
            <Section id={4} title="How to Request a Refund">
              <p className="text-[14px] text-[#334155] leading-relaxed mb-3">
                Requesting a refund is simple. Follow these steps:
              </p>
              <div className="space-y-4 my-4">
                {[
                  {
                    step: 1,
                    title: "Contact us within the eligible timeframe",
                    desc: "Call us at  +1 (330) 822-2231 or email refunds@printercarehelps.com. Have your service date and any reference number ready.",
                  },
                  {
                    step: 2,
                    title: "Describe your reason for the refund",
                    desc: "Tell us what happened and why you believe you are eligible. We may ask a few questions to understand the situation.",
                  },
                  {
                    step: 3,
                    title: "We review and confirm",
                    desc: "Our team will review your request and respond within 2 business days with a decision and next steps.",
                  },
                  {
                    step: 4,
                    title: "Refund is processed",
                    desc: "Approved refunds are returned to your original payment method within 5–7 business days.",
                  },
                ].map((item) => (
                  <div
                    key={item.step}
                    className="flex gap-3.5 items-start py-3.5 border-b border-[#E2E8F0] last:border-0"
                  >
                    <div className="w-7 h-7 rounded-full bg-[#FF6B1A] text-white flex items-center justify-center font-['Barlow_Condensed',sans-serif] text-sm font-extrabold flex-shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-[#0F172A] mb-0.5">
                        {item.title}
                      </div>
                      <div className="text-[13px] text-[#64748B] leading-relaxed">
                        {item.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Section>

            {/* Section 6 - Refund Timeline */}
            <Section id={5} title="Refund Timeline">
              <p className="text-[14px] text-[#334155] leading-relaxed mb-3">
                Once your refund is approved, processing times depend on your
                payment method:
              </p>
              <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg p-4 grid grid-cols-1 md:grid-cols-3 gap-2.5 my-3 text-center">
                <div>
                  <div className="font-['Barlow_Condensed',sans-serif] text-2xl font-black text-[#FF6B1A] leading-none mb-1">
                    2
                  </div>
                  <div className="text-xs text-[#64748B] leading-relaxed">
                    Business days to review your request
                  </div>
                </div>
                <div>
                  <div className="font-['Barlow_Condensed',sans-serif] text-2xl font-black text-[#FF6B1A] leading-none mb-1">
                    5–7
                  </div>
                  <div className="text-xs text-[#64748B] leading-relaxed">
                    Business days for refund to appear on card
                  </div>
                </div>
                <div>
                  <div className="font-['Barlow_Condensed',sans-serif] text-2xl font-black text-[#FF6B1A] leading-none mb-1">
                    10
                  </div>
                  <div className="text-xs text-[#64748B] leading-relaxed">
                    Maximum business days total end-to-end
                  </div>
                </div>
              </div>
              <p className="text-[14px] text-[#334155] leading-relaxed mb-3">
                Refunds are returned to the original payment method. We cannot
                issue refunds to a different card or account. If your original
                payment method is no longer available, contact us and we will
                work with you on an alternative solution.
              </p>
              <div className="bg-[#FFF7ED] border border-[#FED7AA] border-l-3 border-l-[#FF6B1A] rounded-r-lg p-3.5 my-3">
                Bank processing times may vary. If you do not see your refund
                after 10 business days, please contact your bank first, then
                reach out to us if the issue persists.
              </div>
            </Section>

            {/* Section 7 - Cancellation Policy */}
            <Section id={6} title="Cancellation Policy">
              <p className="text-[14px] text-[#334155] leading-relaxed mb-3">
                You may cancel a booked service session at any time before the
                session begins with no charge. If you need to cancel:
              </p>
              <ul className="list-none mt-2 space-y-1">
                {[
                  "Cancel before a technician is assigned: Full refund, no questions asked",
                  "Cancel after a technician is assigned but before session starts: Full refund",
                  "Cancel during an active session: A partial charge may apply depending on time spent",
                  "No-show (booking made, no contact): No charge will be applied; session is automatically cancelled after 30 minutes",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="text-[14px] text-[#334155] py-1.5 pl-5 relative border-b border-[#E2E8F0] last:border-0"
                  >
                    <span className="absolute left-0 text-[#FF6B1A] text-xs font-bold">
                      →
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-[14px] text-[#334155] leading-relaxed mt-3">
                To cancel a session, call us at +1 (330) 822-2231 or email us at
                support@printercarehelps.com. Please have your booking reference
                ready.
              </p>
            </Section>

            {/* Section 8 - Disputes */}
            <Section id={7} title="Disputes and Chargebacks">
              <p className="text-[14px] text-[#334155] leading-relaxed mb-3">
                We strongly encourage you to contact us directly before
                initiating a chargeback with your bank or card issuer. Most
                issues can be resolved quickly and amicably, and a direct
                resolution is faster than a formal dispute process.
              </p>
              <ul className="list-none mt-2 space-y-1">
                {[
                  "Contact us first: refunds@printercarehelps.com or  +1 (330) 822-2231",
                  "We will respond within 2 business days and aim to resolve within 10 business days",
                  "If we cannot resolve your complaint, you retain the right to dispute the charge with your card issuer",
                  "We will cooperate fully with any bank or card dispute investigation",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="text-[14px] text-[#334155] py-1.5 pl-5 relative border-b border-[#E2E8F0] last:border-0"
                  >
                    <span className="absolute left-0 text-[#FF6B1A] text-xs font-bold">
                      →
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </Section>

            {/* Section 9 - Contact Us */}
            <Section id={8} title="Contact Us for Refunds">
              <p className="text-[14px] text-[#334155] leading-relaxed mb-3">
                Our refund team is available to help you Monday through Sunday,
                including weekends:
              </p>
              <div className="bg-[#0A1628] rounded-xl p-5 md:p-6 mt-4">
                <p className="text-white/60 text-[13px] mb-2">
                  PrinterCareHelps — Refunds & Billing
                </p>
                <p className="mb-1.5">
                  📧{" "}
                  <a
                    href="mailto:refunds@printercarehelps.com"
                    className="text-[#FF8C4A] no-underline font-semibold text-[14px] hover:text-[#FF6B1A]"
                  >
                    refunds@printercarehelps.com
                  </a>
                </p>
                <p className="mb-1.5">
                  📞{" "}
                  <a
                    href="tel:+13308222231"
                    className="text-[#FF8C4A] no-underline font-semibold text-[14px] hover:text-[#FF6B1A]"
                  >
                    +1 (330) 822-2231
                  </a>{" "}
                  — Available 24/7
                </p>
                <p>
                  💬{" "}
                  <a
                    href="https://wa.me/13308222231"
                    className="text-[#FF8C4A] no-underline font-semibold text-[14px] hover:text-[#FF6B1A]"
                  >
                    WhatsApp: +1 (330) 822-2231
                  </a>
                </p>
                <p className="text-white/35 text-xs mt-2.5">
                  Please have your service date, invoice number, and payment
                  method details ready when you contact us. This helps us
                  process your request faster.
                </p>
              </div>
            </Section>
          </main>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

/* Section Component */
const Section = ({
  id,
  title,
  children,
}: {
  id: number;
  title: string;
  children: React.ReactNode;
}) => (
  <div
    id={`section-${id}`}
    data-section-id={id}
    className="scroll-mt-28 mb-9 pb-9 border-b border-[#E2E8F0] last:border-0 last:mb-0 last:pb-0"
  >
    <span className="text-[11px] font-bold tracking-wide uppercase text-[#FF6B1A] block mb-1.5">
      Section {String(id + 1).padStart(2, "0")}
    </span>
    <h2 className="font-['Barlow_Condensed',sans-serif] text-[22px] font-extrabold text-[#0F172A] mb-3.5 leading-tight">
      {title}
    </h2>
    <div>{children}</div>
  </div>
);

export default RefundPolicy;
