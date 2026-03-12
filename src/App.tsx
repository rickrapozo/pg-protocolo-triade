import HeroSection from './components/HeroSection';
import ScrollingMarquee from './components/ScrollingMarquee';
import DiagnosisSection from './components/DiagnosisSection';
import SolutionSection from './components/SolutionSection';
import AuthoritySection from './components/AuthoritySection';
import OfferSection from './components/OfferSection';
import GuaranteeSection from './components/GuaranteeSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';

function App() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ScrollingMarquee />
      <DiagnosisSection />
      <SolutionSection />
      <AuthoritySection />
      <OfferSection />
      <GuaranteeSection />
      <FAQSection />
      <Footer />
    </main>
  );
}

export default App;
