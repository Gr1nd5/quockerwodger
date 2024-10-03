// pages/index.js
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Quockerwodger Photography</title>
        <meta name="description" content="Professional photography by Spencer Nakamura. Browse portfolio and contact for bookings." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <header>
        <h1>Quockerwodger Photography</h1>
        <div className="social-links">
          <a href="https://www.behance.net/Quockerwodger" target="_blank" rel="noreferrer">
            <img src="/logo/behance-logo.svg" alt="Behance Logo" />
          </a>
          <a href="https://www.linkedin.com/in/spencer-nakamura-9736ab2a3" target="_blank" rel="noreferrer">
            <img src="/logo/linkedin-logo.svg" alt="LinkedIn Logo" />
          </a>
          <a href="https://www.instagram.com/quockerw0dger/" target="_blank" rel="noreferrer">
            <img src="/logo/instagram-logo.svg" alt="Instagram Logo" />
          </a>
        </div>
      </header>
      <nav>
        <a href="#portfolio">Portfolio</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>
      <main>
        <section id="portfolio">
          <h2>Portfolio</h2>
          <div className="portfolio">
            <img src="/photo1.jpg" alt="Photo 1" />
            <img src="/photo2.jpg" alt="Photo 2" />
            <img src="/photo3.jpg" alt="Photo 3" />
          </div>
        </section>
        <section id="about">
          <h2>About Me</h2>
          <p>Hi, I'm Spencer Nakamura, a passionate photographer based in Vancouver. I love capturing moments at events, portraits, and street photography. Explore my work and contact me for bookings!</p>
        </section>
        <section id="contact">
          <h2>Contact Me</h2>
          <form className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="5" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </section>
      </main>
      <footer>
        <p>&copy; 2024 Quockerwodger Photography. All rights reserved.</p>
      </footer>
    </>
  );
}
