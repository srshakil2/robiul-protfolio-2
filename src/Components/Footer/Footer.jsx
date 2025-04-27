const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 text-[#828282] ">
        <aside className=" mx-auto  md:mx-0 text-center md:text-left">
          <img
            className="w-1/3 mx-auto "
            src="https://img.icons8.com/?size=160&id=ucAIGFnVjuzs&format=png"
            alt="My Logo"
          />

          <p className="text-[#70FF00] w-full text-3xl font-bold">
            Robiul Hasan
          </p>
        </aside>

        <nav>
          <header className="footer-title opacity-100 text-[#70FF00]">
            Address
          </header>
          <a className="link link-hover">Email: robiul769430@gmail.com</a>
          <a className="link link-hover">Dhunat-5850, Bogra, Bangladesh</a>
        </nav>

        <nav>
          <header className="footer-title  opacity-100 text-[#70FF00]">
            Projects
          </header>
          <a
            href="https://education-manegment.web.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="link link-hover"
          >
            Education Management
          </a>
          <a
            href="https://merathon-client-side.web.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="link link-hover"
          >
            Marathon Play
          </a>
          <a
            href="https://crowdcube-assignment-10.web.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="link link-hover"
          >
            Donation Campaign
          </a>
        </nav>

        <nav>
          <header className="footer-title  opacity-100 text-[#70FF00]">
            Social Media
          </header>
          <a
            href="https://www.linkedin.com/in/robiulbd/"
            target="_blank"
            rel="noopener noreferrer"
            className="link link-hover"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/srshakil2"
            target="_blank"
            rel="noopener noreferrer"
            className="link link-hover"
          >
            GitHub
          </a>
        </nav>

        <nav>
          <header className="footer-title  opacity-100 text-[#70FF00]">
            Legal
          </header>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
