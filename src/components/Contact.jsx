import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen px-3 text-white">
      <h1 className="text-4xl font-bold mb-2 text-pink-400">Thanks for exploring my project!</h1>
      <p className="text-lg mb-8 text-center max-w-xl">
        I’d love to connect with you! Reach out on GitHub or LinkedIn for collaboration, feedback, or just to say hi.
      </p>

      <div className="flex gap-6">
        <a
          href="https://github.com/vanshika241"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded text-white text-lg transition"
        >
          <FaGithub size={24} /> GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/vanshika-chaudhary-704726259"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 bg-blue-700 hover:bg-blue-600 rounded text-white text-lg transition"
        >
          <FaLinkedin size={24} /> LinkedIn
        </a>
      </div>
    </div>
  );
};

export default Contact;
