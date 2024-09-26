import Image from "next/image";
import ContactForm from "@/components/ContactForm";

// Export metadata only if needed separately elsewhere, or remove it from here if handled globally
export const metadata = {
  title: "Quockerwodger Photography",
  description: "Professional photography by Spencer Nakamura.",
};

export default function HomePage() {
  return (
    <main>
      {/* Header */}
      <header className="text-center p-8 bg-gray-800 text-white">
        <h1 className="text-4xl font-bold">Quockerwodger Photography</h1>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="https://www.behance.net/Quockerwodger" target="_blank" rel="noopener noreferrer">
            <Image src="/logo/behance-logo.svg" alt="Behance Logo" width={24} height={24} />
          </a>
          <a href="https://www.linkedin.com/in/spencer-nakamura-9736ab2a3" target="_blank" rel="noopener noreferrer">
            <Image src="/logo/linkedin-logo.svg" alt="LinkedIn Logo" width={24} height={24} />
          </a>
          <a href="https://www.instagram.com/quockerw0dger/" target="_blank" rel="noopener noreferrer">
            <Image src="/logo/instagram-logo.svg" alt="Instagram Logo" width={24} height={24} />
          </a>
        </div>
      </header>

      {/* Navigation */}
      <nav className="text-center p-4">
        <a href="#portfolio" className="mx-4 text-lg">Portfolio</a>
        <a href="#about" className="mx-4 text-lg">About</a>
        <a href="#contact" className="mx-4 text-lg">Contact</a>
      </nav>

      {/* Portfolio Section */}
      <section id="portfolio" className="p-8">
        <h2 className="text-3xl font-bold text-center mb-8">Portfolio</h2>
        <div className="flex flex-wrap justify-center gap-8">
          <Image src="/photo1.jpg" alt="Photo 1" width={300} height={200} className="rounded-lg shadow-md" />
          <Image src="/photo2.jpg" alt="Photo 2" width={300} height={200} className="rounded-lg shadow-md" />
          <Image src="/photo3.jpg" alt="Photo 3" width={300} height={200} className="rounded-lg shadow-md" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="p-8 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-lg max-w-2xl mx-auto">
          Hi, I&apos;m Spencer Nakamura, a passionate photographer based in Vancouver. I love capturing moments at events, portraits, and street photography.
          Explore my work and contact me for bookings!
        </p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="p-8">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Me</h2>
        <ContactForm />
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center p-4">
        <p>&copy; 2024 Quockerwodger Photography. All rights reserved.</p>
      </footer>
    </main>
  );
}
