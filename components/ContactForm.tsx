'use client';

import { useState } from 'react';
import emailjs from 'emailjs-com';

type FormData = {
  name: string;
  email: string;
  message: string;
};

const ContactForm = ({ onClose }: { onClose: () => void }) => {
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(null);
  };

  const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setError('Please fill in all fields.');
      return;
    }
    if (!validateEmail(formData.email)) {
      setError('Please enter a valid email address.');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      await emailjs.send(
        'service_ummkgft',      // Your Service ID
        'template_1ltt9ev',     // Your Template ID
        formData,
        'cNs67DMwy0rx_6f7q'    // Your correct Public Key
      );
      setSent(true);
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      console.error(err);
      setError('Oops! Something went wrong. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4 z-50">
      <div className="bg-white dark:bg-gray-900 rounded-xl shadow-2xl w-full max-w-lg p-8 relative">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-900 dark:text-white">
          Contact Me
        </h2>

        {sent ? (
          <div className="text-center">
            <p className="text-green-600 text-lg mb-6 font-semibold">
              🎉 Your message has been sent successfully!
            </p>
            <button
              onClick={() => {
                setSent(false);
                setError(null);
              }}
              className="bg-purple-600 hover:bg-purple-700 transition text-white px-6 py-3 rounded-lg font-medium focus:outline-none focus:ring-4 focus:ring-purple-400"
            >
              Send Another Message
            </button>
            <button
              onClick={onClose}
              className="block mt-4 text-red-500 hover:text-red-700 font-semibold underline focus:outline-none"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="space-y-5">
            {/* Name */}
            <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 font-medium">
              Your Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="John Doe"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
              value={formData.name}
              onChange={handleChange}
              required
              aria-required="true"
            />

            {/* Email */}
            <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 font-medium">
              Your Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="john@example.com"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
              value={formData.email}
              onChange={handleChange}
              required
              aria-required="true"
            />

            {/* Message */}
            <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 font-medium">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Write your message here..."
              rows={5}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white resize-none"
              value={formData.message}
              onChange={handleChange}
              required
              aria-required="true"
            />

            {/* Error */}
            {error && <p className="text-red-600 font-semibold">{error}</p>}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 rounded-md text-white font-semibold ${
                loading
                  ? 'bg-purple-400 cursor-not-allowed'
                  : 'bg-purple-600 hover:bg-purple-700 transition'
              } focus:outline-none focus:ring-4 focus:ring-purple-400`}
              aria-busy={loading}
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>

            {/* Cancel Button */}
            <button
              type="button"
              onClick={onClose}
              className="w-full mt-3 text-center text-red-500 hover:text-red-700 font-semibold underline focus:outline-none"
            >
              Cancel
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ContactForm;
