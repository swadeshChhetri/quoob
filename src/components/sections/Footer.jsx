import React from "react";
import { Linkedin, Twitter, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white pt-24 pb-12 px-6 md:px-20">
      {/* TOP CTA SECTION */}
      <div className="text-center mb-20">
        <h2 className="text-3xl md:text-4xl font-semibold mb-10">
          Start transforming work with
          <span className="px-3 text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-lime-600">
            agents
          </span>
        </h2>

        <div className="flex items-center justify-center gap-6 font-semibold">
          <button className="px-8 py-3 rounded-full border border-lime-400 text-white hover:bg-lime-400 hover:text-black transition">
            Request a demo
          </button>

          <button className="px-8 py-3 rounded-full bg-lime-400 hover:bg-lime-500 text-black transition">
            Try for free
          </button>
        </div>
      </div>

      {/* MAIN FOOTER GRID */}
      <div className="border-t border-gray-800 pt-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          {/* LOGO */}
          <div className="flex items-start">
            <div className="flex items-center space-x-2 ">
              <img
                src="/image/logo.svg" // <-- replace with your logo path
                alt="Qyoob Logo"
                className="w-30"
              />
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Product</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Trust</li>
              <li>AI Studio</li>
              <li>Graph RAG</li>
              <li>Palmyra LLMs</li>
              <li>Qyoob Agent</li>
              <li>Request a demo</li>
              <li>Try for free</li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Resources</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Guides</li>
              <li>AI blog</li>
              <li>AI Agent Library</li>
              <li>Engineering blog</li>
              <li>Enterprise AI agents</li>
              <li>GEO optimization</li>
              <li>Blog title generator</li>
              <li>AI product description</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Company</h4>
            <ul className="space-y-2 text-gray-300">
              <li>About</li>
              <li>Careers</li>
              <li>Partners</li>
              <li>Legal hub</li>
              <li>Newsroom</li>
              <li>Contact us</li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Support</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Status</li>
              <li>Help center</li>
              <li>AI Academy</li>
              <li>Developer docs</li>
            </ul>
          </div>
        </div>
      </div>

      {/* NEWSLETTER */}
      <div className="mt-20 border-t border-gray-800 pt-12">
        <p className="text-lg font-medium mb-3">
          Get the latest updates about enterprise AI
        </p>
        <p className="text-gray-400 mb-6">Subscribe to Qyoob’s Brief</p>

        <div className="flex items-center max-w-lg w-full bg-[#111] rounded-full border border-gray-700 overflow-hidden">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 bg-transparent px-5 py-3 text-white outline-none"
          />
          <button className="px-8 py-3 bg-lime-400 hover:bg-lime-500 transition text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-lime-400">
            →
          </button>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="mt-16 flex flex-col md:flex-row items-center justify-between text-gray-400 text-sm">
        <p className="mb-4 md:mb-0">© 2025 Qyoob</p>

        <div className="flex items-center gap-6 mb-4 md:mb-0">
          <a
            href="https://www.linkedin.com/company/qyoob-ai/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin size={20} className="hover:text-white cursor-pointer" />
          </a>

          <a
            href="https://twitter.com/your-handle"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter size={20} className="hover:text-white cursor-pointer" />
          </a>

          <a
            href="https://github.com/your-username"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={20} className="hover:text-white cursor-pointer" />
          </a>
        </div>

        <div className="flex items-center gap-4">
          <span className="cursor-pointer hover:text-white">
            YOUR PRIVACY CHOICES
          </span>
          <span>|</span>
          <span className="cursor-pointer hover:text-white">TERMS</span>
          <span>|</span>
          <span className="cursor-pointer hover:text-white">PRIVACY</span>
        </div>
      </div>
    </footer>
  );
}
