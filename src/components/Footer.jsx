import { Facebook, Github, Instagram, Linkedin, Mail } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-black border-t-1 border-neutral-200">
      <div className="h-55 flex flex-col justify-center items-center gap-6">
        <h1 className="text-white text-3xl font-semibold border-b-2 border-slate-700 pb-1">
          Contact Me
        </h1>

        <ul className="flex justify-center items-center gap-4">
          {[
            { Icon: Facebook, link: "https://facebook.com" },
            { Icon: Instagram, link: "https://instagram.com" },
            { Icon: Linkedin, link: "https://linkedin.com" },
            { Icon: Github, link: "https://github.com" },
            { Icon: Mail, link: "mailto:your@email.com" },
          ].map(({ Icon, link }, idx) => (
            <li key={idx}>
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white border-2 border-[#66B933] rounded-full h-12 w-12 flex items-center justify-center transition-all duration-300 hover:bg-[#66B933] hover:text-black hover:scale-110 hover:shadow-[0_0_12px_rgba(99,102,241,0.6)]"
              >
                {<Icon size={22} />}
              </a>
            </li>
          ))}
        </ul>

        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} <span className="font-medium text-white">Jenn Julian Ros</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
