import { syne, inter } from "@/fonts/font";
import Script from "next/script";

import ClientLayout from "@/components/ClientLayout";

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
import "../../public/assets/css/dark-inner-pages.css";
import "react-creative-cursor/dist/styles.css";
import "../../public/assets/css/custom.css";

export const metadata = {
  metadataBase: new URL("https://dizinetech.com"),

  title: "DizineTech | Web, SEO & AI Solutions",

  description:
    "DizineTech is a digital agency providing web development, software development, SEO, AEO, GEO, and AI solutions to help businesses grow online.",

  openGraph: {
    title: "Dizinetech | Web, SEO & AI Solutions",
    description:
      "Explore our web development, SEO and AI solutions. Let's build something impactful together.",
    url: "https://dizinetech.com",
    siteName: "DizineTech",
    images: [
      {
        url: "/assets/img/dizinetech-og.png",
        width: 100,
        height: 100,
        alt: "Dizinetech | Web, SEO & AI Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "DizineTech | Digital Solutions for Business Growth",
    description:
      "Web Development, SEO, Digital Marketing and AI Solutions.",
    images: ["/assets/img/dizinetech-og.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${syne.variable}`}>
        <ClientLayout>{children}</ClientLayout>

        <Script
          src="/assets/js/gsap.min.js"
          strategy="beforeInteractive"
        />
        <Script
          src="/assets/js/ScrollTrigger.min.js"
          strategy="beforeInteractive"
        />
        <Script
          src="/assets/js/SplitText.min.js"
          strategy="beforeInteractive"
        />
      </body>
    </html>
  );
}