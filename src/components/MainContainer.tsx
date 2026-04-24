import { lazy, PropsWithChildren, Suspense, useEffect, useState } from "react";
import About from "./About";
import Career from "./Career";
import Contact from "./Contact";
import Cursor from "./Cursor";
import Landing from "./Landing";
import Navbar from "./Navbar";
import SocialIcons from "./SocialIcons";
import WhatIDo from "./WhatIDo";
import Work from "./Work";
import Specialization from "./Specialization";
import Gaming from "./Gaming";
import Tools from "./Tools";
import SocialPresence from "./SocialPresence";
import setSplitText from "./utils/splitText";

const TechStack = lazy(() => import("./TechStack"));

const MainContainer = ({ children }: PropsWithChildren) => {
  const [isDesktopView, setIsDesktopView] = useState<boolean>(
    window.innerWidth > 1024
  );

  useEffect(() => {
    const resizeHandler = () => {
      setSplitText();
      setIsDesktopView(window.innerWidth > 1024);
    };
    resizeHandler();
    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, [isDesktopView]);

  useEffect(() => {
    const bgText = document.querySelector('.fixed-bg-text') as HTMLElement;
    const handleScroll = () => {
      if (!bgText) return;
      const scrollY = window.scrollY;
      const maxScroll = Math.max(1000, document.body.scrollHeight - window.innerHeight);
      const newOpacity = 0.04 + Math.min((scrollY / maxScroll) * 0.16, 0.16);
      bgText.style.opacity = newOpacity.toString();
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="container-main">
      <div className="landing-background-text fixed-bg-text">
        <p>Senior social media manager</p>
        <p>8 years expert</p>
      </div>
      <Cursor />
      <Navbar />
      {isDesktopView && children}
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <div className="container-main">
            <Landing>{!isDesktopView && children}</Landing>
            <About />
            <WhatIDo />
            <Career />
            <Work />
            {isDesktopView && (
              <Suspense fallback={<div>Loading....</div>}>
                <TechStack />
              </Suspense>
            )}
            <Specialization />
            <Gaming />
            <Tools />
            <SocialPresence />
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
