import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap-trial/ScrollSmoother";
import { portfolioData, navSections } from "../data/portfolioData";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);
export let smoother: ScrollSmoother;

const Navbar = () => {
  useEffect(() => {
    smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.7,
      speed: 1.7,
      effects: true,
      autoResize: true,
      ignoreMobileResize: true,
    });

    smoother.scrollTop(0);
    smoother.paused(true);

    let links = document.querySelectorAll(".header ul a");
    links.forEach((elem) => {
      let element = elem as HTMLAnchorElement;
      element.addEventListener("click", (e) => {
        if (window.innerWidth > 1024) {
          e.preventDefault();
          let elem = e.currentTarget as HTMLAnchorElement;
          let section = elem.getAttribute("data-href");
          smoother.scrollTo(section, true, "top top");
        }
      });
    });
    window.addEventListener("resize", () => {
      ScrollSmoother.refresh(true);
    });
  }, []);
  return (
    <>
      <div className="header">
        <a href="/#" className="navbar-title" data-cursor="disable">
          {portfolioData.personal.firstName.substring(0, 1)}{portfolioData.personal.lastName.substring(0, 1)}
        </a>
        <ul>
          {navSections.map((section) => (
            <li key={section.label}>
              <a data-href={section.href} href={section.href}>
                <HoverLinks text={section.label} />
              </a>
            </li>
          ))}
        </ul>
        <div className="navbar-cta-group">
          <a
            href={portfolioData.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="navbar-cta navbar-cta-secondary"
            data-cursor="disable"
          >
            Connect with Me
          </a>
          <a
            href={portfolioData.social.behance}
            target="_blank"
            rel="noopener noreferrer"
            className="navbar-cta navbar-cta-primary"
            data-cursor="disable"
          >
            View Portfolio
          </a>
        </div>
      </div>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
