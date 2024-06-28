"use client";
import Image from "next/image";
import symbolImage from "./../../public/symbol.webp";
import QuestionTag from "../../components/QuestionTag";
import copyIcon from "../../public/copy.svg";
import tickIcon from "../../public/tick.svg";
import pumpfund from "../../public/EmT4yP6S_400x400.jpg";
import telegram from "../../public/teleIcon.svg";
import twitter from "../../public/twitterIcon.svg";
import apestore from "../../public/logoApeStore.png";
import { useState } from "react";

export default function Home() {
  const [currentWorking, setCurrentWorking] = useState(-1);
  const [copy, setCopy] = useState(false);
  const contractId = "fdfd";
  function handleFunction(id: number) {
    setCurrentWorking(id === currentWorking ? -1 : id);
  }
  async function handleCopy() {
    await navigator.clipboard.writeText(contractId);
    setCopy(true);
  }
  const scrollToIntro = () => {
    const introSection = document.getElementById("intro");
    if (introSection) {
      introSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="w-full h-full flex flex-col pt-20 bg-[#F6FFF8] overflow-auto">
      <div className="flex flex-col w-full">
        <span className="text-[4rem] mb-10 ml-20">Hello there,</span>
        <div className="flex flex-row items-center gap-[5rem] justify-center">
          <Image src={symbolImage} alt="Symbol" width={200} />
          <span className="text-[2rem] w-[40%]">
            Are you looking for a peaceful and trusted community ? If yes, then
            you found the right place.
          </span>
        </div>
        <div
          className="flex justify-end mr-[30rem] mt-10"
          onClick={scrollToIntro}
        >
          <div className="border-[2px] bg-[#EAF4F4] border-solid border-black rounded-[50px] text-black p-6 px-10 cursor-pointer hover:bg-[#CCE3DE] transition-[0.3s] hover:text-black scroll-smooth">
            <span className="font-[600]">Know more about us</span>
          </div>
        </div>
        <div
          className="w-full flex flex-row items-center justify-center mt-20 gap-5 border-y-[2px] border-solid border-black py-2 font-bold bg-[#CCE3DE] scroll-smooth"
          id="intro"
        >
          <span>$MANIFEST</span>
          <span>$MANIFEST</span>
          <span>$MANIFEST</span>
          <span>$MANIFEST</span>
          <span>$MANIFEST</span>
          <span>$MANIFEST</span>
          <span>$MANIFEST</span>
          <span>$MANIFEST</span>
          <span>$MANIFEST</span>
          <span>$MANIFEST</span>
          <span>$MANIFEST</span>
        </div>
      </div>
      <div className="flex flex-col gap-5 my-20">
        <span className="text-[3rem] block text-center mb-10">About us</span>
        <QuestionTag
          question="What is this project's concept about ?"
          answer={`Manifesting is basically like telling the cosmos: "Hey, I want this" with a belief to make it real. It seems like magic, and we are all the magicians in our own stories. So, think large, aim high, because you never know, maybe the universe can surprise you with something truly amazing!`}
          handleFunction={handleFunction}
          id={0}
          activeId={currentWorking}
        />
        <QuestionTag
          question="What are the future plans of this project ?"
          handleFunction={handleFunction}
          id={1}
          activeId={currentWorking}
        />
        <QuestionTag
          question="What are you getting from this project ?"
          handleFunction={handleFunction}
          id={2}
          activeId={currentWorking}
        />
      </div>
      <div className="w-full flex flex-row items-center justify-center mt-20 gap-5 border-y-[2px] border-solid border-black py-2 font-bold bg-[#CCE3DE]">
        <span>$MANIFEST</span>
        <span>$MANIFEST</span>
        <span>$MANIFEST</span>
        <span>$MANIFEST</span>
        <span>$MANIFEST</span>
        <span>$MANIFEST</span>
        <span>$MANIFEST</span>
        <span>$MANIFEST</span>
        <span>$MANIFEST</span>
        <span>$MANIFEST</span>
        <span>$MANIFEST</span>
      </div>
      <div className="flex flex-col items-center justify-center mt-20 mb-[5rem]">
        <span className="text-[3rem]">Contact us</span>
        <div className="p-2 border-[3px] border-solid border-black w-[80%] text-center rounded-[20px] mt-5 bg-[#CCE3DE]">
          <span className="flex flex-row items-center justify-center gap-3">
            CA:{" "}
            {!contractId ? (
              <span>Not available</span>
            ) : (
              <div className="flex flex-row gap-5">
                <span>{contractId}</span>
                {!copy && (
                  <Image
                    src={copyIcon}
                    alt=""
                    className="cursor-pointer"
                    onClick={() => handleCopy()}
                  />
                )}
                {copy && <Image src={tickIcon} alt="" />}
              </div>
            )}
          </span>
        </div>
        <div className="flex flex-row gap-20 mt-10">
          <a
            href="https://t.me/ishiinubase"
            className="rounded-full border-[3px] border-solid border-black"
            target="_blank"
          >
            <Image
              src={telegram}
              alt="Telegram"
              width="65"
              className="rounded-full"
            />
          </a>
          <a
            href="https://x.com/ishicoinbase"
            className="rounded-full border-[3px] border-solid border-black"
            target="_blank"
          >
            <Image
              src={twitter}
              alt="Twitter"
              width="65"
              className="rounded-full"
            />
          </a>
          <a
            href="https://t.me/ishiinubase"
            className="rounded-full border-[3px] border-solid border-black"
            target="_blank"
          >
            <Image
              src={pumpfund}
              alt="Pump Fund"
              height="65"
              width="65"
              className="rounded-full"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
