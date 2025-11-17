import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Sections from './components/Sections';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-body bg-[#fdf6ee] min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Sections />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
