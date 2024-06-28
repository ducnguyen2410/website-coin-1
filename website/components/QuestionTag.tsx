"use client";

import Image from "next/image";
import arrow from "./../public/arrow.svg";
import { useState } from "react";

export default function QuestionTag({
  question,
  answer,
  handleFunction,
  id,
  activeId,
}: any) {
  const isOpen = activeId === id;

  function handleOpen() {
    handleFunction(id);
  }
  return (
    <div className="flex flex-row gap-[15rem] mx-20">
      <div
        className={`${
          isOpen ? "bg-[#CCE3DE]" : "bg-[#EAF4F4]"
        } items-center flex flex-row gap-5 w-[30rem] justify-between px-10 h-[8rem] rounded-full cursor-pointer  transition-[0.3s] ${
          isOpen ? "w-[32rem]" : ""
        }`}
        onClick={() => handleOpen()}
      >
        <span className="font-[600]">{question}</span>
        <Image src={arrow} alt="" width={40} />
      </div>
      {isOpen && (
        <div className="h-[8rem] bg-[#CCE3DE] flex flex-row items-center px-14 border-[2px] border-solid border-black rounded-full flex-1 duration-500 ease-in-out transform transform transition-[0.3s]">
          <span className="font-[600]">{answer}</span>
        </div>
      )}
    </div>
  );
}
