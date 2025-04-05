const Footer = () => {
    return (
      <footer className="bg-black text-[#99489D] py-12">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
    
          {/* Branding */}
          <div>
            <h3 className="text-3xl font-bold text-[#99489D] mb-4">Deborah Russell-A</h3>
            <p className="text-white text-sm leading-relaxed">
                SEO Content Writer with record of articles that have ranked on Google’s first page for specific keywords in the SaaS and Culture industry.
            </p>
          </div>
    
          {/* Navigation */}
          <div>
            <h4 className="text-xl font-bold text-[#99489D] mb-4">Explore</h4>
            <ul className="space-y-2 text-white text-sm">
              <li>
                <a href="#timezone" className="hover:text-white transition">Timezone Converter</a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition">About Me</a>
              </li>
              <li>
                <a href="#previouswork" className="hover:text-white transition">Previous Work</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition">Contact Me</a>
              </li>
            </ul>
          </div>
    
          {/* Socials */}
          <div>
            <h4 className="text-xl font-bold text-[#99489D] mb-4">Let's Connect</h4>
            <div className="flex justify-center md:justify-start gap-5 text-2xl">
              <a
                href="https://linkedin.com/in/deborahrussell"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                <i className="fas fa-globe"></i>
              </a>
              <a
                href="mailto:russdeborah220@gmail.com"
                className="hover:text-white transition"
              >
                <i className="fas fa-envelope"></i>
              </a>
              <a
                href="https://twitter.com/deborahwrites"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                <i className="fab fa-twitter"></i>
              </a>

              {/* GitHub Icon */}
            <a
              href="https://github.com/debbeeruss"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <i className="fab fa-github"></i>
            </a>
            </div>
          </div>
        </div>
    
        {/* Bottom bar */}
        <div className="mt-10 text-center text-sm text-[#a46aae] border-t border-[#99489D] pt-6">
          &copy; {new Date().getFullYear()} Deborah Russell-A. All rights reserved.
        </div>
      </footer>
    );
  };
  
  export default Footer;
  