"use client"
import React from "react";
import Image from "next/image";
import { CricketPlayer, HeroBackground } from '@/assets';

const Hero = () => {
  return (
    <div className="relative flex flex-col items-center min-h-screen overflow-hidden">
      <Image
        src={HeroBackground}
        alt="Sky Background"
        layout="fill"
        objectFit="cover"
        className="z-[-2]"
        priority
        quality={100}
      />
      <div 
        className="absolute bottom-0 left-0 w-full h-1/2 md:h-[128px] z-[-1]"
        style={{
          background: 'linear-gradient(323.47deg, #6BC341 23.09%, #2C9330 82.92%)'
        }}
      />
      <div className="relative flex flex-col w-full h-full pt-16">
        <div className="flex flex-col text-right items-center w-full max-w-full px-5 md:hidden">
         <div className="flex flex-col gap-4 w-full">
         <h1 className="text-5xl font-medium leading-tight mb-2">
            <span>The <strong>SKY'S</strong></span><br />
            <span>The <strong>LIMIT</strong></span>
          </h1>
          <p className="text-lg font-semibold mb-2">
            Win like never before<br />and <strong>earn while you play.</strong>
          </p>
         </div>
          <div className="relative w-full aspect-square max-w-[90%] mb-8">
            <Image
              src={CricketPlayer}
              alt="Cricket Player"
              layout="fill"
              objectFit="contain"
              priority
            />
          </div>
          <div className="flex flex-col gap-4 w-full max-w-[300px]">
            <a href="https://github.com" 
              className="bg-[url('../assets/images/hero/background.png')] text-black border-4 border-black py-3 px-6 text-2xl font-bold shadow-md w-full text-center">
              GITHUB
            </a>
            <a href="#play" 
              className="bg-[#117C41] text-black border-4 border-black py-3 px-6 text-2xl font-bold shadow-md w-full text-center">
              PLAY FREE & EARN
            </a>
          </div>
        </div>
        <div className="hidden md:grid grid-cols-2 gap-8 w-full mx-auto text-right">
          <div className="relative aspect-square w-full mb-[-120px] z-10">
            <Image
              src={CricketPlayer}
              alt="Cricket Player"
              layout="fill"
              objectFit="contain"
              objectPosition="bottom"
              priority
            />
          </div>
          <div className="flex flex-col justify-center items-end text-black z-10 p-16">
            <h1 className="text-8xl font-medium leading-tight">
              <span>The <strong>SKY'S</strong></span><br />
              <span>The <strong>LIMIT</strong></span>
            </h1>
            <p className="text-5xl font-semibold mb-8">
              Win like never before when you <strong>keep what you earn.</strong>
            </p>
            <div className="flex flex-col gap-4 items-end w-full">
              <a href="https://github.com" 
                className="bg-[url('../assets/images/hero/background.png')] text-black border-4 border-black py-3 px-6 text-[32px] font-bold shadow-md w-2/4 text-center">
                GITHUB
              </a>
              <a href="#play" 
                className="bg-[#117C41] text-black border-4 border-black py-3 px-6 text-[32px] font-bold shadow-md w-2/4 text-center">
                PLAY FREE & EARN
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;