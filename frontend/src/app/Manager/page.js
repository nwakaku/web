"use client";

import Header from "@/components/Header";
import { useState, useEffect } from "react";
import ManagerSection from "@/components/ManagerSection";
import { useAuth } from "@/contexts/auth-context";

export default function page() {
  const [domLoaded, setDomLoaded] = useState(false);
  const { setProgress } = useAuth();

  useEffect(() => {
    setDomLoaded(true);
    setProgress(0);
  }, []);
  return (
    <>
      {domLoaded && (
        <main className="mx-5">
          <Header />
          <ManagerSection />
        </main>
      )}
    </>
  );
}