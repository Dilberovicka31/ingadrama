import Header from './components/Header';
import Hero from './components/Hero';

function App() {
  return (
    <>
      <Header />

      <section id="hero" data-theme="dark" style={{ height: '100vh' }}>
        <Hero />
      </section>

      <section id="about" data-theme="light" style={{ height: '100vh', backgroundColor: '#fff' }}>
        About Section
      </section>

      <section id="portfolio" data-theme="light" style={{ height: '100vh', backgroundColor: '#f7f7f7' }}>
        Portfolio Section
      </section>

      <section id="booking" data-theme="dark" style={{ height: '100vh', backgroundColor: '#111' }}>
        Booking Section
      </section>

      <section id="contact" data-theme="light" style={{ height: '100vh', backgroundColor: '#fff' }}>
        Contact Section
      </section>
    </>
  );
}

export default App;
