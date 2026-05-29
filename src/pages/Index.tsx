import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import PrinterShowcase from "@/components/landing/PrinterShowcase";
import PromoBanner from "@/components/landing/PromoBanner";
import WhyChooseUs from "@/components/landing/WhyChooseUs";
import Testimonials from "@/components/landing/Testimonials";
import InquiryForm from "@/components/landing/InquiryForm";
import Footer from "@/components/landing/Footer";
import Chatbot from "@/components/chatbot/Chatbot";

const Index = () => (
  <>
    <Header />
    <Hero />
    <Services />
    <PrinterShowcase />
    <PromoBanner />

    <Testimonials />
    <WhyChooseUs />
    <InquiryForm />
    <Footer />
    <Chatbot />
  </>
);

export default Index;
