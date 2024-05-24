'use client'
import { cn } from "@/utils/cn";
import { BackgroundGradientAnimation } from "./gradientbg";
import { Globe } from "./Globe";
import { GlobeDemo } from "./GridGlobe";
import { div } from "three/examples/jsm/nodes/Nodes.js";
import Lottie from "react-lottie";
import { useState } from "react";
import animationData from "@/data/confetti.json";
import MagicButton from "./magicButton";
import { IoCopyOutline } from "react-icons/io5";
export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid lg:grid-cols-5 w-full  lg:grid-rows-5 md:grid-rows-7 md:auto-rows-[18rem] md:grid-cols-3 gap-6  mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id?: number;
  img?: string;
  spareImg?: string;
  imgClassName?: string;
  titleClassName?: string;
}) => {
const [copied, setcopied] = useState(false)
const handleCopy = ()=>{
navigator.clipboard.writeText('vishwas.chouhan2003@gmail.com');
setcopied(true);
}
  return (
    <div
      className={cn(
        "row-span-1  relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        //   add these two
        //   you can generate the color from here https://cssgradient.io/
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div className={`${id === 6 && 'flex justify-center'} h-full'`}>
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover , object-center")}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${
            id === 5 && "w-full opacity-80"
          }`}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className={"object-cover , object-center w-full h-full"}
            />
          )}
        </div>
        {id === 6 && (
          <BackgroundGradientAnimation>
            {/* <div className="absolute z-50 items-center justify-center flex text-white font-bold" /> */}
          </BackgroundGradientAnimation>
        )}
        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
          )}
        >
          <div className="font-sans font-extralight text-[#c1c2d3]  text-sm md:text-xs lg:text-base z-10 ">
            {description}
          </div>
          <div className="font-sans font-bold text-lg  lg:text-3xl max-w-96 z-10">
            {title}
          </div>
        
        {id == 2 && <GlobeDemo/>}

        {id === 3 && (
            <div className="flex gap-1 lg:gap-3 w-fit absolute -right-3 -top-3 lg:-right-2">
                <div className=" flex flex-col gap-3 lg:gap-6">
                {['ReactJs', 'NextJs' ,'AngularJs'].map((item)=>(
                    <span key={item} className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]">
                            {item}
                    </span>
                ))}
                <span className="px-3 py-4 rounded-lg text-center bg-[#10132e]"/>
                </div>
                <div className=" flex flex-col gap-3 lg:gap-6">
                <span className="px-3 py-4 rounded-lg text-center bg-[#10132e]"/>
                {['Typescript', 'Javascript', 'java'].map((item)=>(
                    <span key={item} className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]">
                            {item}
                    </span>
                ))}
                <span className="px-3 py-4 rounded-lg text-center bg-[#10132e]"/>
                </div>
            </div>

        )}
        {id === 6 && (
            <div className="mt-5 relative">
                <div className={`absolute -bottom-5 right-0`}>
                <Lottie options={{
                    loop:copied,
                    autoplay: copied,
                    animationData: animationData,
                    rendererSettings: {
                        preserveAspectRatio: 'xMidYMid slice'
                    }
                }}/>
                </div>
                <MagicButton title={copied? 'Email Copied' : 'Copy My Email'} icon={<IoCopyOutline/>} position="left" otherClasses=" !bg-[#161a31]" handleClick={handleCopy}/>
            </div>
        )}
      </div>

    </div></div>
  );
};
