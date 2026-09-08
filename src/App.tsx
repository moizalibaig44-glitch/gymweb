import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { Philosophy } from './components/Philosophy';
import { Facilities } from './components/Facilities';
import { Membership } from './components/Membership';
import { Coaches } from './components/Coaches';
import { Recovery } from './components/Recovery';
import { CoffeeBar } from './components/CoffeeBar';
import { Testimonials } from './components/Testimonials';
import { Location } from './components/Location';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-onyx">
      <Hero />
      <TrustBar />
      <Philosophy />
      <Facilities />
      <Membership />
      <Coaches />
      <Recovery />
      <CoffeeBar />
      <Testimonials />
      <Location />
      <Footer />
    </div>
  );
}

export default App;
