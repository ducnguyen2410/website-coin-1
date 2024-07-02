"use client";
import Image from "next/image";
import copyIcon from "../../public/copy.svg";
import tickIcon from "../../public/tick.svg";
import pumpfund from "../../public/EmT4yP6S_400x400.jpg";
import telegram from "../../public/teleIcon.svg";
import twitter from "../../public/twitterIcon.svg";
import brainLogo from "@/public/brainImage.png";
import { useState } from "react";
import image1 from "@/public/Untitled (3).png";
import image2 from "@/public/Untitled (4).png";
import image3 from "@/public/Untitled (5).png";
import image4 from "@/public/Untitled (6).png";
import image5 from "@/public/Untitled (7).png";
import image6 from "@/public/Untitled (8).png";
import image7 from "@/public/Untitled (9).png";
import image8 from "@/public/Untitled (10).png";
import image9 from "@/public/Untitled (11).png";

export default function Home() {
  const [currentWorking, setCurrentWorking] = useState(-1);
  const [copy, setCopy] = useState(false);
  const contractId = "";
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
    <div className="w-full h-full flex flex-col overflow-auto">
      <div className="w-full h-full" id="container">
        <div className="flex w-full" id="banner">
          <div id="slider" style={{ "--quantity": 9 } as any}>
            <div id="item" style={{ "--position": 1 } as any}>
              <Image src={image1} alt="" />
            </div>
            <div id="item" style={{ "--position": 2 } as any}>
              <Image src={image2} alt="" />
            </div>
            <div id="item" style={{ "--position": 3 } as any}>
              <Image src={image3} alt="" />
            </div>
            <div id="item" style={{ "--position": 4 } as any}>
              <Image src={image4} alt="" />
            </div>
            <div id="item" style={{ "--position": 5 } as any}>
              <Image src={image5} alt="" />
            </div>
            <div id="item" style={{ "--position": 6 } as any}>
              <Image src={image6} alt="" />
            </div>
            <div id="item" style={{ "--position": 7 } as any}>
              <Image src={image7} alt="" />
            </div>
            <div id="item" style={{ "--position": 8 } as any}>
              <Image src={image8} alt="" />
            </div>
            <div id="item" style={{ "--position": 9 } as any}>
              <Image src={image9} alt="" />
            </div>
          </div>
          <div id="content">
            <div id="author">
              <span className="text-center block">$MANIFEST</span>
            </div>
            <div id="model"></div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center my-20 mb-[5rem]">
          <span className="text-[3rem] text-white italic">`Manifestation`</span>
          <span className="explanation">Make your dream become your reality</span>
          <span className="text-white text-[0.9rem] font-bold mt-10">
            Contract Address (Click to copy)
          </span>
          <div className="p-2 border-[3px] border-solid border-black w-[80%] text-center rounded-[20px] mt-5 bg-black">
            <span className="flex flex-row items-center justify-center gap-3 text-white">
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
          <div className="w-full mt-10 p-20" id="container-contact">
            <div className="flex flex-col gap-10 my-10 items-center border-[3px] border-solid border-white rounded-[10px] py-5">
              <span className="font-bold text-[1.7rem] text-white">
                Contact us through
              </span>
              <div className="flex flex-row gap-5">
                <div className="flex flex-row gap-4 text-white items-center">
                  <span className="font-bold italic">Telegram:</span>
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
                </div>
                <div className="flex flex-row gap-4 text-white items-center">
                  <span className="font-bold italic">Twitter:</span>
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
                </div>
                <div className="flex flex-row gap-4 text-white items-center ">
                  <span className="font-bold italic">Pump:</span>
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
          </div>
        </div>
      </div>
    </div>
  );
}
