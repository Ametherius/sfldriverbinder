"use client";

import Book from "@/components/book";
import ContentsMenu from "@/components/contentsMenu";
import Header from "@/components/header";
import { useFiles } from "@/hooks/useFiles";
import Image from "next/image";
import { useState } from "react";
import { FaBars } from "react-icons/fa";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [files] = useFiles();
  console.log(files);

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
        <ContentsMenu isOpen={isOpen} />
      </div>
      <div className="relative  w-full h-screen p-3">
        <Book />
      </div>
    </div>
  );
}
