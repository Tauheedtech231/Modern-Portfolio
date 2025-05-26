import { useState, useEffect } from "react";
import { IoCopyOutline } from "react-icons/io5";
import Lottie from "lottie-react";
import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./GradientBg";
import GridGlobe from "./GridGlobe";
import animationData from "@/data/confetti.json";
import MagicButton from "../MagicButton";

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
        "grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-4 lg:gap-6 mx-auto max-w-7xl",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const [copied, setCopied] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const techStacks = {
    frontend: ["ReactJS", "NextJS", "Tailwind CSS"],
    backend: ["NodeJS", "ExpressJS", "MongoDB"],
    languages: ["TypeScript", "JavaScript", "Python"]
  };

  const handleCopy = () => {
    if (!isClient) return;
    const text = "tauheeddeveloper13@gmail.com";
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none flex flex-col space-y-4 border border-white/[0.1]",
        className,
        {
          "md:col-span-2": id === 1 || id === 4 || id === 6,
          "md:row-span-2": id === 3 || id === 5,
          "bg-gradient-to-br from-violet-600 to-indigo-900": id === 1,
          "bg-gradient-to-br from-cyan-600 to-blue-900": id === 2,
          "bg-gradient-to-br from-emerald-600 to-teal-900": id === 3,
          "bg-gradient-to-br from-amber-600 to-orange-900": id === 4,
          "bg-gradient-to-br from-pink-600 to-rose-900": id === 5,
          "bg-gradient-to-br from-purple-600 to-fuchsia-900": id === 6,
        }
      )}
    >
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover object-center w-full h-full")}
            />
          )}
        </div>
        
        {spareImg && (
          <div className={`absolute right-0 -bottom-5 ${id === 5 && "w-full opacity-80"}`}>
            <img
              src={spareImg}
              alt={spareImg}
              className="object-cover object-center w-full h-full"
            />
          </div>
        )}
        
        {id === 6 && (
          <BackgroundGradientAnimation>
            <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
          </BackgroundGradientAnimation>
        )}

        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
          )}
        >
          <div className="font-sans font-extralight text-sm md:text-base text-[#f8f8f8] z-10 opacity-80">
            {description}
          </div>

          <div className={`font-sans text-xl lg:text-3xl font-bold z-10 text-white mb-[2rem]`}>
            {title}
          </div>

          {id === 2 && <GridGlobe />}

          {id === 3 && (
            <div className="mt-4 grid grid-cols-3 gap-2">
              {Object.entries(techStacks).map(([category, skills]) => (
                <div key={category} className="flex flex-col gap-2">
                  <span className="text-xs font-semibold text-white/70 uppercase">
                    {category}
                  </span>
                  {skills.map((item, i) => (
                    <span
                      key={i}
                      className="py-1 px-2 text-xs lg:text-sm rounded-lg text-center bg-black/20 backdrop-blur-sm border border-white/10"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          )}

          {id === 6 && (
            <div className="mt-5 relative z-20">
              <div className={`absolute -bottom-5 right-0 ${copied ? "block" : "hidden"}`}>
                <Lottie
                  animationData={animationData}
                  loop={copied}
                  autoplay={copied}
                  style={{ height: 200, width: 400 }}
                />
              </div>

              <MagicButton
                title={copied ? "Email Copied!" : "Copy my email"}
                icon={<IoCopyOutline />}
                position="left"
                handleClick={handleCopy}
                otherClasses="!bg-[#161A31] hover:shadow-lg hover:shadow-purple-500/30"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};