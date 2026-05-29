import { useEffect, useState } from "react";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
const TermsAndConditions = () => {
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
        <div className="bg-[#132240] px-6 md:px-12 py-14 md:py-16 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(255,107,26,0.08)_0%,transparent_50%)]"></div>
          </div>
          <div className="max-w-[860px] mx-auto relative z-10">
            <div className="inline-flex items-center gap-2 bg-blue-900/20 border border-blue-400/35 text-blue-300 text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wide mb-4">
              📋 Legal Document
            </div>
            <h1 className="font-['Barlow_Condensed',sans-serif] text-4xl md:text-5xl font-black text-white leading-tight mb-3">
              Terms & <span className="text-[#FF6B1A]">Conditions</span>
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
                  Governing Law:
                </strong>{" "}
                United States
              </div>
            </div>
          </div>
        </div>

        {/* Main Layout */}
        <div className="max-w-[1060px] mx-auto grid md:grid-cols-[240px_1fr] gap-8 px-6 md:px-12 py-10 md:py-16">
          {/* Sidebar TOC */}
          <aside className="relative">
            <div className="bg-white border border-[#E2E8F0] rounded-2xl p-5 sticky top-20">
              <div className="text-[11px] font-bold tracking-wide uppercase text-[#64748B] mb-3 pb-2.5 border-b border-[#E2E8F0]">
                Contents
              </div>
              <ul className="list-none space-y-0.5">
                {[
                  "Acceptance of Terms",
                  "Our Services",
                  "Independent Provider",
                  "Pricing & Payment",
                  "No Fix, No Fee Policy",
                  "User Responsibilities",
                  "Limitation of Liability",
                  "Intellectual Property",
                  "Termination",
                  "Dispute Resolution",
                  "Changes to Terms",
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
                className="block text-center py-2.5 rounded-lg text-xs font-semibold mb-1.5 bg-[#0A1628] text-white hover:bg-[#132240] transition no-underline"
              >
                Privacy Policy →
              </a>
              <a
                href="/refund-policy"
                className="block text-center py-2.5 rounded-lg text-xs font-semibold bg-[#FF6B1A] text-white hover:bg-[#E05510] transition no-underline"
              >
                Refund Policy →
              </a>
            </div>
          </aside>

          {/* Main Content */}
          <main className="bg-white border border-[#E2E8F0] rounded-2xl p-6 md:p-10">
            {/* Important Notice */}
            <div className="bg-[#FFF7ED] border border-[#FED7AA] border-l-4 border-l-[#FF6B1A] rounded-r-lg p-4 mb-8">
              <div className="text-[13px] font-bold text-[#FF6B1A] mb-1.5 uppercase tracking-wide">
                ⚠ Please Read Before Using Our Services
              </div>
              <p className="text-[13px] text-[#334155] leading-relaxed">
                By using PrinterCareHelps services — whether by phone, website,
                or any other channel — you agree to be bound by these Terms and
                Conditions. If you do not agree, please do not use our services.
              </p>
            </div>

            {/* Section 1 - Acceptance of Terms */}
            <Section id={0} title="Acceptance of Terms">
              <p className="text-[14px] text-[#334155] leading-relaxed mb-3">
                These Terms and Conditions ("Terms") govern your access to and
                use of PrinterCareHelps services, website
                (printercarehelps.com), and all related communications. By
                engaging our services in any form — including calling us,
                submitting a contact form, making a payment, or using our
                website — you confirm that:
              </p>
              <ul className="list-none mt-3 space-y-1">
                {[
                  "You are at least 18 years of age or have the consent of a parent or legal guardian",
                  "You have read, understood, and agree to be bound by these Terms",
                  "You have the authority to enter into this agreement on behalf of yourself or any organisation you represent",
                  "You agree to our Privacy Policy and Refund Policy, which are incorporated into these Terms by reference",
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

            {/* Section 2 - Our Services */}
            <Section id={1} title="Our Services">
              <p className="text-[14px] text-[#334155] leading-relaxed mb-3">
                PrinterCareHelps provides independent, third-party remote and
                on-site printer support services. Our services include but are
                not limited to:
              </p>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse my-3 text-[13px]">
                  <thead>
                    <tr className="bg-[#F8FAFC]">
                      <th className="p-2.5 text-left text-[11px] font-bold uppercase tracking-wide text-[#64748B] border-b border-[#E2E8F0]">
                        Service
                      </th>
                      <th className="p-2.5 text-left text-[11px] font-bold uppercase tracking-wide text-[#64748B] border-b border-[#E2E8F0]">
                        Description
                      </th>
                      <th className="p-2.5 text-left text-[11px] font-bold uppercase tracking-wide text-[#64748B] border-b border-[#E2E8F0]">
                        Starting Price
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        name: "Printer Installation",
                        desc: "New printer setup, driver install, test print",
                        price: "$29",
                      },
                      {
                        name: "Printer Repair",
                        desc: "Diagnostics and resolution of errors, jams, quality issues",
                        price: "$29",
                      },
                      {
                        name: "WiFi & Network Setup",
                        desc: "Wireless configuration, multi-device printing",
                        price: "$39",
                      },
                      {
                        name: "Driver Troubleshooting",
                        desc: "Driver conflicts, offline errors, connectivity issues",
                        price: "$29",
                      },
                      {
                        name: "Cartridge Support",
                        desc: "Ink/toner guidance, printhead cleaning, refill help",
                        price: "$29",
                      },
                      {
                        name: "AMC Business Plans",
                        desc: "Annual maintenance contracts for offices",
                        price: "$99/yr",
                      },
                    ].map((service, i) => (
                      <tr key={i}>
                        <td className="p-2.5 border-b border-[#E2E8F0] text-[#334155]">
                          {service.name}
                        </td>
                        <td className="p-2.5 border-b border-[#E2E8F0] text-[#334155]">
                          {service.desc}
                        </td>
                        <td className="p-2.5 border-b border-[#E2E8F0] font-bold text-[#FF6B1A] font-['Barlow_Condensed',sans-serif] text-[15px]">
                          {service.price}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-[14px] text-[#334155] leading-relaxed mt-2">
                Service availability may vary. We reserve the right to refuse
                service to any individual or organisation at our discretion.
                Prices shown are starting prices and may vary based on issue
                complexity.
              </p>
            </Section>

            {/* Section 3 - Independent Service Provider */}
            <Section id={2} title="Independent Service Provider Disclosure">
              <div className="bg-[#FFF7ED] border border-[#FED7AA] border-l-3 border-l-[#FF6B1A] rounded-r-lg p-3.5 my-3">
                <strong className="text-[#0F172A] font-semibold">
                  IMPORTANT:
                </strong>{" "}
                PrinterCareHelps is an independent, third-party printer support
                provider. We are NOT affiliated with, endorsed by, authorised
                by, or sponsored by HP Inc., Canon Inc., Seiko Epson
                Corporation, Brother Industries Ltd., Ricoh Company Ltd.,
                Samsung Electronics, Lexmark International, Xerox Corporation,
                or any other printer manufacturer.
              </div>
              <p className="text-[14px] text-[#334155] leading-relaxed mt-3">
                All brand names, trademarks, and product names mentioned on our
                website or in our communications are the property of their
                respective owners. References to these brands are made solely
                for the purpose of identifying the products we support.
              </p>
              <p className="text-[14px] text-[#334155] leading-relaxed mt-3">
                Our services are independent paid support solutions. We are not
                a substitute for official manufacturer support, warranty
                service, or authorised repair centres. Manufacturer warranties
                are not affected by using our service, but using our service
                does not extend or supplement any manufacturer warranty.
              </p>
            </Section>

            {/* Section 4 - Pricing and Payment */}
            <Section id={3} title="Pricing and Payment">
              <p className="text-[14px] text-[#334155] leading-relaxed mb-3">
                All prices for our services will be communicated to you clearly
                before work begins. By agreeing to proceed with a service, you
                agree to pay the quoted price.
              </p>
              <ul className="list-none mt-3 space-y-1">
                {[
                  "Payment is due at the time of service or as agreed in advance for AMC contracts",
                  "We accept major credit cards, debit cards, and other payment methods as advertised",
                  "All prices are quoted in US Dollars (USD) unless otherwise stated",
                  "Prices are subject to change with notice — quoted prices are honoured at time of booking",
                  "For AMC contracts, annual fees are billed upfront and are non-refundable after the 14-day cooling-off period",
                  "We do not store your payment card details — all transactions are processed by our secure payment provider",
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
              <div className="bg-[#EFF6FF] border border-[#BFDBFE] border-l-3 border-l-[#1D4ED8] rounded-r-lg p-3.5 my-3">
                Invoices and receipts will be sent to the email address provided
                at the time of service. Please retain these for your records.
              </div>
            </Section>

            {/* Section 5 - No Fix, No Fee */}
            <Section id={4} title="No Fix, No Fee Policy">
              <p className="text-[14px] text-[#334155] leading-relaxed mb-3">
                We operate a "No Fix, No Fee" guarantee for eligible services.
                This means:
              </p>
              <ul className="list-none mt-3 space-y-1">
                {[
                  "If our technician is unable to resolve your printer issue during the service session, you will not be charged for that session",
                  "This policy applies to remote support sessions for standard printer issues",
                  "The policy does not apply where the issue is caused by hardware failure requiring physical replacement parts",
                  "The policy does not apply to AMC (Annual Maintenance Contract) plans",
                  "If you terminate the session before it is complete, standard charges may apply",
                  "In cases of dispute, our decision regarding 'resolved' status is final, subject to our complaints process",
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

            {/* Section 6 - User Responsibilities */}
            <Section id={5} title="User Responsibilities">
              <p className="text-[14px] text-[#334155] leading-relaxed mb-3">
                By using our services, you agree to:
              </p>
              <ul className="list-none mt-3 space-y-1">
                {[
                  "Provide accurate and complete information about your printer, issue, and contact details",
                  "Ensure you have the authority to authorise changes to the device and system being serviced",
                  "Back up any important data before permitting remote access or on-site servicing",
                  "Not use our services for any unlawful purpose or in violation of any regulations",
                  "Not misuse, harass, or threaten our technicians or support staff",
                  "Pay for services rendered in accordance with the agreed pricing",
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
                  Data backup responsibility:
                </strong>{" "}
                We strongly recommend backing up all important files before any
                service session. PrinterCareHelps is not responsible for any
                data loss occurring during or after a service session.
              </div>
            </Section>

            {/* Section 7 - Limitation of Liability */}
            <Section id={6} title="Limitation of Liability">
              <p className="text-[14px] text-[#334155] leading-relaxed mb-3">
                To the maximum extent permitted by applicable law,
                PrinterCareHelps and its employees, agents, and contractors
                shall not be liable for:
              </p>
              <ul className="list-none mt-3 space-y-1">
                {[
                  "Any indirect, incidental, special, consequential, or punitive damages",
                  "Loss of data, profits, revenue, business, or goodwill",
                  "Damage to hardware, software, or other property arising from our services",
                  "Any issues arising from third-party software, hardware, or manufacturer defects",
                  "Service interruptions or failures beyond our reasonable control",
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
                Our total liability for any claim arising from our services
                shall not exceed the amount paid by you for the specific service
                giving rise to the claim.
              </p>
            </Section>

            {/* Section 8 - Intellectual Property */}
            <Section id={7} title="Intellectual Property">
              <p className="text-[14px] text-[#334155] leading-relaxed">
                All content on the PrinterCareHelps website — including text,
                graphics, logos, images, and software — is the property of
                PrinterCareHelps or its content suppliers and is protected by
                applicable intellectual property laws. You may not reproduce,
                distribute, or create derivative works without our express
                written permission.
              </p>
            </Section>

            {/* Section 9 - Termination */}
            <Section id={8} title="Termination of Service">
              <p className="text-[14px] text-[#334155] leading-relaxed mb-3">
                We reserve the right to refuse, suspend, or terminate service to
                any customer at any time if:
              </p>
              <ul className="list-none mt-3 space-y-1">
                {[
                  "You violate any of these Terms and Conditions",
                  "We determine, at our sole discretion, that continuing service would be inappropriate or unsafe",
                  "You engage in abusive, threatening, or inappropriate behaviour toward our staff",
                  "Payment is declined or outstanding balances are not settled",
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
                In cases of termination for cause, no refund will be issued for
                services already rendered.
              </p>
            </Section>

            {/* Section 10 - Dispute Resolution */}
            <Section id={9} title="Dispute Resolution">
              <p className="text-[14px] text-[#334155] leading-relaxed mb-3">
                In the event of a dispute arising from our services, we
                encourage you to contact us first so we can attempt to resolve
                the matter informally. Most issues can be resolved quickly and
                amicably.
              </p>
              <ul className="list-none mt-3 space-y-1">
                {[
                  "Contact us within 30 days of the issue arising at support@printercarehelps.com",
                  "We will acknowledge your complaint within 2 business days and aim to resolve it within 10 business days",
                  "If informal resolution fails, disputes shall be resolved by binding arbitration in accordance with applicable law",
                  "These Terms shall be governed by the laws of the United States",
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

            {/* Section 11 - Changes to Terms */}
            <Section id={10} title="Changes to These Terms">
              <p className="text-[14px] text-[#334155] leading-relaxed">
                We reserve the right to modify these Terms at any time. Changes
                will be effective immediately upon posting to our website. Your
                continued use of our services following any changes constitutes
                your acceptance of the updated Terms. We recommend reviewing
                these Terms periodically.
              </p>
            </Section>

            {/* Section 12 - Contact Us */}
            <Section id={11} title="Contact Us">
              <p className="text-[14px] text-[#334155] leading-relaxed mb-3">
                For questions about these Terms and Conditions:
              </p>
              <div className="bg-[#0A1628] rounded-xl p-5 md:p-6 mt-4">
                <p className="text-white/60 text-[13px] mb-2">
                  PrinterCareHelps — Legal
                </p>
                <p className="mb-1.5">
                  📧{" "}
                  <a
                    href="mailto:legal@printercarehelps.com"
                    className="text-[#FF8C4A] no-underline font-semibold text-[14px] hover:text-[#FF6B1A]"
                  >
                    legal@printercarehelps.com
                  </a>
                </p>
                <p>
                  📞{" "}
                  <a
                    href="tel:+13308222231"
                    className="text-[#FF8C4A] no-underline font-semibold text-[14px] hover:text-[#FF6B1A]"
                  >
                    +1 (330) 822-2231
                  </a>
                </p>
                <p className="text-white/35 text-xs mt-2">
                  We aim to respond to all legal inquiries within 5 business
                  days.
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

export default TermsAndConditions;
