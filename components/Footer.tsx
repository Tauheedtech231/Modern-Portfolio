import { useState } from "react";
import { FaLocationArrow } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";
import ContactForm from "./ContactForm";

const Footer = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <footer className="w-full pt-20 pb-10 relative" id="contact">
      {/* Contact Modal */}
      {showForm && <ContactForm onClose={() => setShowForm(false)} />}

      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96 -z-10">
        <img src="/footer-grid.svg" alt="grid" className="w-full h-full opacity-50" />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw] text-center">
          Ready to take <span className="text-purple">your</span> digital presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you achieve your goals.
        </p>

     

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/923237594869?text=Hello%2C%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect!"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MagicButton  title="Message me on WhatsApp" icon={<FaWhatsapp />} position="right" />
        </a>
      </div>

      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2025  Tauheed Khan
        </p>
        <div className="flex items-center md:gap-3 gap-6 mt-4 md:mt-0">
          {socialMedia.map((info) => (
  <a
    key={info.id}
    href={info.link}
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
  >
    <img src={info.img} alt="icons" width={20} height={20} />
  </a>
))}

        </div>
      </div>
    </footer>
  );
};

export default Footer;
