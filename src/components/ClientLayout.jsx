"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import WhatsAppButton from "@/components/WhatsAppButton";

// Move your existing client-side imports and
// animation/effect code from the old layout here.

export default function ClientLayout({ children }) {
  // Keep your existing hooks and useEffect logic here.

  return (
    <>
      {children}
      <WhatsAppButton />
    </>
  );
}