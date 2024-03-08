"use client";

import Image from "next/image";
import Header from "@/components/Header";
import HomeSection from "@/components/HomeSection";
import { isUserValid } from "../../../backend/src/pocketbase";
import ListSection from "@/utils/ListSection";

export default function Home() {
  return (
    <main className="">
      <Header />
      <div className="bg-white flex justify-center">
        <div className="flex flex-row justify-center mx-12 w-full bg-white">
          <div className="w-1/4 text-black py-4">
            <ListSection />
          </div>

          <div className="text-black w-3/4 flex justify-center">
            <HomeSection />
          </div>
        </div>
      </div>
    </main>
  );
}