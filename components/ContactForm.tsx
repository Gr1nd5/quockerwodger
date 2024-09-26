"use client"; // Add this to make it a Client Component

import { useState, useEffect } from 'react';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // Scroll event handler to shrink header
  useEffect(() => {
    const handleScroll = () => {
      const header = document.getElementById('header');
      if (window.scrollY > 50) {
        header?.classList.add('shrink');
      } else {
        header?.classList.remove('shrink');
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Email validation function
  const validateEmail = (email: string) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  // Form submission handler
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent the default form submission

    // Basic validation
    if (name === "" || email === "" || message === "") {
      alert("Please fill out all fields before submitting.");
    } else if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
    } else {
      alert(`Thank you, ${name}! Your message has been sent.`);
      // Reset form fields
      setName('');
      setEmail('');
      setMessage('');
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Your Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <textarea
        placeholder="Your Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        rows={5}
        required
      ></textarea>
      <button type="submit">Send Message</button>
    </form>
  );
}
