import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ClientLogos from "../components/ClientLogos";
import DashboardPreview from "../components/DashboardPreview";
import Features from "../components/Features";
import Testimonial from "../components/Testimonial";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />
      <main>
        <Hero />
        <ClientLogos />
        <DashboardPreview />
        <Features />
        <Testimonial />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
