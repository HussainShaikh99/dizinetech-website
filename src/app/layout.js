"use client";
import { useEffect } from "react";
import { useWow } from '@/customHooks/useWow';

import useMagneticHover from "@/customHooks/useMagneticHover";
import { syne, inter } from "@/fonts/font";
import { usePathname } from 'next/navigation'; // Import usePathname
import "../../public/assets/css/bootstrap-icons.css";
import "../../public/assets/css/boxicons.min.css";
import "../../public/assets/css/swiper-bundle.min.css";
import "react-modal-video/css/modal-video.css";
import "../../public/assets/css/slick-theme.css";
import "../../public/assets/css/animate.min.css";
import "../../public/assets/css/nice-select.css";
import "../../public/assets/css/slick.css";
import "../../public/assets/css/bootstrap.min.css";
import "../../public/assets/css/style.css";
import 'react-creative-cursor/dist/styles.css';
import Script from 'next/script';
import AnimateCursor from "@/components/common/AnimateCursor";

export default function RootLayout({ children }) {
  const pathname = usePathname(); // Get the current pathname

  useMagneticHover();

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  const handleAnimation = () => {
    const gsap = window.gsap;
    const SplitText = window.SplitText;

    if (!gsap || !SplitText) {
      console.error("GSAP or SplitText is not loaded.");
      return;
    }

    // Title Animation
    let splitTitleLines = gsap.utils.toArray(".text-animation");

    splitTitleLines.forEach((splitTextLine) => {
      const tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: splitTextLine,
          start: "top 90%",
          end: "bottom 60%",
          scrub: false,
          markers: false,
          toggleActions: "play none none none",
        },
      });

      const itemSplitted = new SplitText(splitTextLine, { type: "words, lines" });
      gsap.set(splitTextLine, { perspective: 400 });
      itemSplitted.split({ type: "lines" });
      tl2.from(itemSplitted.lines, {
        duration: 1,
        delay: 0.3,
        opacity: 0,
        rotationX: -80,
        force3D: true,
        transformOrigin: "top center -50",
        stagger: 0.1,
      });
    });

    // Text Animation
    let splitTextLines = gsap.utils.toArray(".text-animation p");

    splitTextLines.forEach((splitTextLine) => {
      const tl3 = gsap.timeline({
        scrollTrigger: {
          trigger: splitTextLine,
          start: "top 90%",
          end: "bottom 60%",
          scrub: false,
          markers: false,
          toggleActions: "play none none none",
        },
      });

      const itemSplitted = new SplitText(splitTextLine, { type: "lines" });
      gsap.set(splitTextLine, { perspective: 400 });
      itemSplitted.split({ type: "lines" });
      tl3.from(itemSplitted.lines, {
        duration: 1,
        delay: 0.5,
        opacity: 0,
        rotationX: -80,
        force3D: true,
        transformOrigin: "top center -50",
        stagger: 0.1,
      });
    });
  };

  useEffect(() => {
    // Wait for GSAP scripts to load before running animations
    const checkGSAPLoaded = setInterval(() => {
      if (window.gsap && window.SplitText) {
        clearInterval(checkGSAPLoaded);
        handleAnimation(); // Call animation when GSAP is loaded
      }
    }, 100); // Check every 100ms

    return () => clearInterval(checkGSAPLoaded);
  }, [pathname]); // This runs once after initial mount

  // Magnetic Cursor Functionality
  useEffect(() => {
    const ball = document.getElementById("ball");
    const magneticItems = document.querySelectorAll(".magnetic-item");
    const magicCursor = document.getElementById("magic-cursor");

    if (!magicCursor || window.innerWidth <= 1024) return;

    gsap.config({
      nullTargetWarn: false,
      trialWarn: false,
    });

    const mouse = { x: 0, y: 0 };
    const pos = { x: 0, y: 0 };
    const ratio = 0.15;
    let active = false;
    const ballWidth = 20;
    const ballHeight = 20;
    const ballOpacity = 0.5;

    gsap.set(ball, {
      xPercent: -50,
      yPercent: -50,
      width: ballWidth,
      height: ballHeight,
      opacity: ballOpacity,
    });

    document.addEventListener("mousemove", (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });

    gsap.ticker.add(() => {
      if (!active) {
        pos.x += (mouse.x - pos.x) * ratio;
        pos.y += (mouse.y - pos.y) * ratio;
        gsap.set(ball, { x: pos.x, y: pos.y });
      }
    });

    magneticItems.forEach(item => {
      const wrap = document.createElement("div");
      wrap.className = "magnetic-wrap";
      item.parentNode.insertBefore(wrap, item);
      wrap.appendChild(item);

      wrap.addEventListener("mousemove", (e) => {
        parallaxCursor(e, wrap, 2);
        callParallax(e, wrap);
      });

      wrap.addEventListener("mouseenter", () => {
        active = true;
        gsap.to(ball, { duration: 0.3, width: 70, height: 70, opacity: 1 });
      });

      wrap.addEventListener("mouseleave", () => {
        active = false;
        gsap.to(ball, {
          duration: 0.3,
          width: ballWidth,
          height: ballHeight,
          opacity: ballOpacity,
        });
      });
    });

    function callParallax(e, parent) {
      parallaxIt(e, parent, parent.querySelector(".magnetic-item"), 25);
    }

    function parallaxIt(e, parent, target, movement) {
      const boundingRect = parent.getBoundingClientRect();
      const relX = e.clientX - boundingRect.left;
      const relY = e.clientY - boundingRect.top;

      gsap.to(target, {
        duration: 0.3,
        x: ((relX - boundingRect.width / 2) / boundingRect.width) * movement,
        y: ((relY - boundingRect.height / 2) / boundingRect.height) * movement,
        ease: "power2.out",
      });
    }

    function parallaxCursor(e, parent, movement) {
      const rect = parent.getBoundingClientRect();
      const relX = e.clientX - rect.left;
      const relY = e.clientY - rect.top;

      pos.x = rect.left + rect.width / 2 + (relX - rect.width / 2) / movement;
      pos.y = rect.top + rect.height / 2 + (relY - rect.height / 2) / movement;
      gsap.to(ball, { duration: 0.3, x: pos.x, y: pos.y });
    }

    return () => {
      document.removeEventListener("mousemove", (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
      });
      gsap.ticker.remove(); // Removed the undefined function call
    };
  }, []); // Runs only once on mount

  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/assets/img/fav-icon.svg"
          type="image/x-icon"
          sizes="16x16"
        />
        <meta name="description" content="Your description here" />
        <meta name="keywords" content="next.js, SEO, meta tags" />
        <title>Nexaq - SEO Digital Marketing Agency NextJS Template</title>

        {/* GSAP Scripts */}
        <Script src="/assets/js/gsap.min.js" strategy="beforeInteractive" onLoad={() => { window.gsap.registerPlugin(window.ScrollTrigger); }} />
        <Script src="/assets/js/ScrollTrigger.min.js" strategy="beforeInteractive" />
        <Script src="/assets/js/SplitText.min.js" strategy="beforeInteractive" />
      </head>
      <body id="body" className={`tt-magic-cursor ${inter.variable} ${syne.variable}`}>
        <div id="magic-cursor">
          <div id="ball"></div>
        </div>
        <AnimateCursor />
        {children}
      </body>
    </html>
  );
}
