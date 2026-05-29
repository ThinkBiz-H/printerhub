import { useEffect, useState } from "react";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
const PrivacyPolicy = () => {
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
        <div className="bg-[#0A1628] px-6 md:px-12 py-14 md:py-16 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(255,107,26,0.1)_0%,transparent_55%)]"></div>
          </div>
          <div className="max-w-[860px] mx-auto relative z-10">
            <div className="inline-flex items-center gap-2 bg-orange-500/15 border border-orange-500/30 text-[#FF8C4A] text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wide mb-4">
              📄 Legal Document
            </div>
            <h1 className="font-['Barlow_Condensed',sans-serif] text-4xl md:text-5xl font-black text-white leading-tight mb-3">
              Privacy <span className="text-[#FF6B1A]">Policy</span>
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
                <strong className="text-white/70 font-medium">Company:</strong>{" "}
                PrinterCareHelps
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
                  "Information We Collect",
                  "How We Use Your Information",
                  "Information Sharing",
                  "Cookies & Tracking",
                  "Data Security",
                  "Data Retention",
                  "Your Rights",
                  "Children's Privacy",
                  "Third-Party Links",
                  "Policy Changes",
                  "Contact Us",
                ].map((item, i) => (
                  <li key={i}>
                    <button
                      onClick={() => scrollToSection(i)}
                      className={`w-full text-left text-[13px] text-[#64748B] no-underline px-2 py-1.5 rounded-md transition-all duration-200 ${
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
                href="/terms-and-conditions"
                className="block bg-[#0A1628] text-white text-center py-2.5 rounded-lg text-[13px] font-semibold mb-2 hover:bg-[#132240] transition no-underline"
              >
                Terms & Conditions →
              </a>
              <a
                href="/refund-policy"
                className="block bg-[#FF6B1A] text-white text-center py-2.5 rounded-lg text-[13px] font-semibold hover:bg-[#E05510] transition no-underline"
              >
                Refund Policy →
              </a>
            </div>
          </aside>

          {/* Main Content */}
          <main className="bg-white border border-[#E2E8F0] rounded-2xl p-6 md:p-10">
            {/* Effective Banner */}
            <div className="bg-[#F0FDF4] border border-[#BBF7D0] rounded-lg p-3 mb-8 flex items-center gap-2 text-[13px] text-[#16A34A] font-medium">
              ✓ This Privacy Policy is compliant with Google Ads requirements
              for independent tech support services.
            </div>

            {/* Section 1 - Information We Collect */}
            <Section id={0} title="Information We Collect">
              <p className="text-[14px] text-[#334155] leading-relaxed mb-3">
                PrinterCareHelps ("we," "us," or "our") collects information you
                provide directly to us and information we collect automatically
                when you use our website or services.
              </p>
              <p className="text-[14px] font-semibold text-[#0F172A] mt-3 mb-2">
                Information you provide directly:
              </p>
              <ul className="list-none mt-2 space-y-1">
                {[
                  "Full name and contact details (email address, phone number)",
                  "Printer brand, model, and description of the issue you are experiencing",
                  "Payment information (processed securely — we do not store card details)",
                  "Communications you send us via phone, email, WhatsApp, or contact forms",
                  "Service feedback and reviews you choose to submit",
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
              <p className="text-[14px] font-semibold text-[#0F172A] mt-4 mb-2">
                Information collected automatically:
              </p>
              <ul className="list-none mt-2 space-y-1">
                {[
                  "IP address, browser type, device type, and operating system",
                  "Pages visited, time spent on pages, and referring URLs",
                  "Cookie data and similar tracking technologies (see Section 4)",
                  "Call records when you contact us by phone (with prior notification)",
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

            {/* Section 2 - How We Use Your Information */}
            <Section id={1} title="How We Use Your Information">
              <p className="text-[14px] text-[#334155] leading-relaxed mb-3">
                We use the information we collect for the following purposes:
              </p>
              <ul className="list-none mt-2 space-y-1">
                {[
                  "To provide, operate, and improve our printer support services",
                  "To communicate with you about your service request, diagnosis, and resolution",
                  "To process payments and send receipts or invoices",
                  "To send service-related notifications and follow-up messages",
                  "To respond to your inquiries, questions, and support requests",
                  "To send promotional communications where you have provided consent",
                  "To analyse usage patterns and improve our website and service quality",
                  "To comply with legal obligations and resolve any disputes",
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
                  Marketing communications:
                </strong>{" "}
                We will only send you promotional emails or messages if you have
                explicitly opted in. You may unsubscribe at any time by clicking
                "Unsubscribe" in any email or contacting us directly.
              </div>
            </Section>

            {/* Section 3 - Information Sharing */}
            <Section id={2} title="Information Sharing and Disclosure">
              <p className="text-[14px] text-[#334155] leading-relaxed mb-3">
                We do not sell, rent, or trade your personal information to
                third parties for their marketing purposes. We may share your
                information in the following limited circumstances:
              </p>
              <ul className="list-none mt-2 space-y-1">
                {[
                  "Service providers: Trusted third-party vendors who assist in operating our website and delivering services (e.g. payment processors, email service providers, analytics tools)",
                  "Legal requirements: When required by law, court order, or governmental authority",
                  "Business transfers: In the event of a merger, acquisition, or sale of business assets — with advance notice to you",
                  "Protection of rights: To protect the rights, property, or safety of PrinterCareHelps, our customers, or others",
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
                  We never sell your data.
                </strong>{" "}
                Your personal information is used solely to provide and improve
                our services and will never be sold to advertisers or
                third-party data brokers.
              </div>
            </Section>

            {/* Section 4 - Cookies & Tracking */}
            <Section id={3} title="Cookies and Tracking Technologies">
              <p className="text-[14px] text-[#334155] leading-relaxed mb-3">
                We use cookies and similar tracking technologies to enhance your
                experience on our website. Cookies are small data files stored
                on your device.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 my-3">
                {[
                  {
                    label: "Essential Cookies",
                    value:
                      "Required for the website to function. Cannot be disabled.",
                  },
                  {
                    label: "Analytics Cookies",
                    value:
                      "Google Analytics — helps us understand how visitors use our site.",
                  },
                  {
                    label: "Advertising Cookies",
                    value:
                      "Google Ads cookies for conversion tracking and remarketing.",
                  },
                  {
                    label: "Preference Cookies",
                    value:
                      "Remembers your settings and preferences for future visits.",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg p-3.5"
                  >
                    <div className="text-[11px] font-semibold text-[#64748B] uppercase tracking-wide mb-1">
                      {item.label}
                    </div>
                    <div className="text-[13px] text-[#0F172A] font-medium leading-relaxed">
                      {item.value}
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-[14px] text-[#334155] leading-relaxed">
                You may disable cookies through your browser settings. Note that
                disabling certain cookies may affect the functionality of our
                website. You can opt out of Google Analytics by installing the{" "}
                <a
                  href="https://tools.google.com/dlpage/gaoptout"
                  className="text-[#FF6B1A] no-underline hover:underline"
                >
                  Google Analytics opt-out browser add-on
                </a>
                .
              </p>
            </Section>

            {/* Section 5 - Data Security */}
            <Section id={4} title="Data Security">
              <p className="text-[14px] text-[#334155] leading-relaxed mb-3">
                We implement appropriate technical and organisational security
                measures to protect your personal information against
                unauthorised access, alteration, disclosure, or destruction.
                These measures include:
              </p>
              <ul className="list-none mt-2 space-y-1">
                {[
                  "SSL/TLS encryption for all data transmitted through our website",
                  "Secure payment processing via PCI-DSS compliant payment providers",
                  "Access controls limiting who within our organisation can access personal data",
                  "Regular security assessments and staff training on data protection",
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
                While we take reasonable precautions, no method of internet
                transmission or electronic storage is 100% secure. We cannot
                guarantee absolute security of your information.
              </p>
            </Section>

            {/* Section 6 - Data Retention */}
            <Section id={5} title="Data Retention">
              <p className="text-[14px] text-[#334155] leading-relaxed mb-3">
                We retain your personal information for as long as necessary to
                provide our services and comply with legal obligations:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 my-3">
                {[
                  {
                    label: "Customer Records",
                    value:
                      "Retained for 3 years after last service interaction",
                  },
                  {
                    label: "Payment Records",
                    value:
                      "Retained for 7 years for tax and accounting compliance",
                  },
                  {
                    label: "Marketing Data",
                    value: "Until you unsubscribe or request deletion",
                  },
                  {
                    label: "Website Analytics",
                    value: "Aggregated data retained for up to 26 months",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg p-3.5"
                  >
                    <div className="text-[11px] font-semibold text-[#64748B] uppercase tracking-wide mb-1">
                      {item.label}
                    </div>
                    <div className="text-[13px] text-[#0F172A] font-medium leading-relaxed">
                      {item.value}
                    </div>
                  </div>
                ))}
              </div>
            </Section>

            {/* Section 7 - Your Rights */}
            <Section id={6} title="Your Rights">
              <p className="text-[14px] text-[#334155] leading-relaxed mb-3">
                You have the following rights regarding your personal
                information. To exercise any of these rights, contact us at the
                details in Section 11.
              </p>
              <ul className="list-none mt-2 space-y-1">
                {[
                  "Right to Access: Request a copy of the personal data we hold about you",
                  "Right to Rectification: Request correction of inaccurate or incomplete data",
                  'Right to Erasure: Request deletion of your personal data ("right to be forgotten")',
                  "Right to Restrict Processing: Request that we limit how we use your data",
                  "Right to Data Portability: Receive your data in a structured, machine-readable format",
                  "Right to Object: Object to processing of your data for marketing purposes",
                  "Right to Withdraw Consent: Withdraw consent for any processing based on consent at any time",
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
                We will respond to all legitimate requests within 30 days. We
                reserve the right to verify your identity before fulfilling any
                request.
              </p>
            </Section>

            {/* Section 8 - Children's Privacy */}
            <Section id={7} title="Children's Privacy">
              <p className="text-[14px] text-[#334155] leading-relaxed">
                Our services are not directed to children under the age of 18.
                We do not knowingly collect personal information from children.
                If you are a parent or guardian and believe your child has
                provided us with personal information, please contact us
                immediately and we will take steps to delete such information
                from our systems.
              </p>
            </Section>

            {/* Section 9 - Third-Party Links */}
            <Section id={8} title="Third-Party Links">
              <p className="text-[14px] text-[#334155] leading-relaxed mb-3">
                Our website may contain links to third-party websites or
                services. We are not responsible for the privacy practices of
                those websites. We encourage you to review the privacy policies
                of any third-party sites you visit. This Privacy Policy applies
                solely to information collected by PrinterCareHelps.
              </p>
              <div className="bg-[#FFF7ED] border border-[#FED7AA] border-l-3 border-l-[#FF6B1A] rounded-r-lg p-3.5 my-3">
                <strong className="text-[#0F172A] font-semibold">
                  Important:
                </strong>{" "}
                PrinterCareHelps is an independent service provider. Links to
                HP, Canon, Epson, Brother, or other manufacturer websites are
                provided for reference only. We are not affiliated with these
                companies and are not responsible for their content or privacy
                practices.
              </div>
            </Section>

            {/* Section 10 - Policy Changes */}
            <Section id={9} title="Changes to This Policy">
              <p className="text-[14px] text-[#334155] leading-relaxed mb-3">
                We may update this Privacy Policy from time to time to reflect
                changes in our practices, technology, legal requirements, or
                other factors. We will notify you of any material changes by:
              </p>
              <ul className="list-none mt-2 space-y-1">
                {[
                  'Posting the updated policy on this page with a revised "Last Updated" date',
                  "Sending an email notification to customers with active accounts where appropriate",
                  "Displaying a prominent notice on our website for 30 days following the update",
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
                Your continued use of our services after any changes constitutes
                your acceptance of the updated Privacy Policy.
              </p>
            </Section>

            {/* Section 11 - Contact Us */}
            <Section id={10} title="Contact Us">
              <p className="text-[14px] text-[#334155] leading-relaxed mb-3">
                If you have any questions, concerns, or requests regarding this
                Privacy Policy or our data practices, please contact us:
              </p>
              <div className="bg-[#0A1628] rounded-xl p-5 md:p-6 mt-4">
                <p className="text-white/60 text-[13px] mb-2">
                  PrinterCareHelps — Data Privacy
                </p>
                <p className="mb-1.5">
                  📧{" "}
                  <a
                    href="mailto:privacy@printercarehelps.com"
                    className="text-[#FF8C4A] no-underline font-semibold text-[14px] hover:text-[#FF6B1A]"
                  >
                    privacy@printercarehelps.com
                  </a>
                </p>
                <p>
                  📞{" "}
                  <a
                    href="tel:+13308222231"
                    className="text-[#FF8C4A] no-underline font-semibold text-[14px] hover:text-[#FF6B1A]"
                  >
                    +1 (800) 555-1234
                  </a>
                </p>
                <p className="text-white/35 text-xs mt-2">
                  We aim to respond to all privacy-related inquiries within 5
                  business days.
                </p>
              </div>
            </Section>
          </main>
        </div>

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

export default PrivacyPolicy;
