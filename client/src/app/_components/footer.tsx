import Image from "next/image";
import { Instagram, Github, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white p-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between">
        {/* Left Section - Logo and Description */}
        <div className="flex flex-col mb-6 md:mb-0">
          <div className="flex items-center mb-2">
            <Image
              src="/BlockX_Logo.svg"
              alt="BlockX Logo"
              width={40}
              height={40}
            />
            <h1 className="ml-2 text-2xl font-bold">BlockX</h1>
          </div>
          <p className="text-gray-400 text-sm">
            Your go-to platform for buying, selling, and renting properties
            seamlessly.
          </p>
        </div>

        {/* Right Section - Social Media Icons */}
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
          <div className="flex space-x-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition-colors"
            >
              <Instagram size={24} />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition-colors"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section - Copyright */}
      <div className="text-center mt-6 border-t border-gray-700 pt-4">
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} BlockX. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
