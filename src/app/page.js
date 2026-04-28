"use client";

import ContentsMenu from "@/components/contentsMenu";
import Header from "@/components/header";
import { useCMS } from "@/hooks/useCMS";
import { sanity } from "@/sanity";
import Image from "next/image";
import { useState } from "react";
import { FaBars } from "react-icons/fa";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const { data, error } = useCMS();

  function handleToggler() {
    setIsOpen(!isOpen);
  }
  return (
    <div className="bg-zinc-50 font-sans w-full relative">
      <button
        onClick={handleToggler}
        type="button"
        className="absolute top-0 right-0 mr-2 rounded-lg mt-2 text-white p-3 text-3xl"
      >
        <FaBars />
      </button>
      <Header />
      <div className="relative">
        <ContentsMenu isOpen={isOpen} cms={data} />
      </div>
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center flex-col items-center w-full p-3 h-auto">
        <Image width={200} height={200} alt="Logo" src="/sfllogo.svg" />
        <h1 className="font-bold text-2xl text-center">SFL Driver's Binder</h1>
      </div>
    </div>
  );
}
