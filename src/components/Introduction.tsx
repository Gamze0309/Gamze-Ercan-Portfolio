import { useState, useEffect } from "react";
import Lottie from "lottie-react";
import animationData from "../assets/developer.json";

const ROLES = ["UI Enthusiast", "Problem Solver", "Developer"];

function Introduction() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      id="introduction"
      className="flex flex-col md:flex-row min-h-screen md:h-screen w-full md:snap-start font-primary-family"
    >
      <div className="flex w-full md:w-1/3 h-64 md:h-full bg-yellow items-center justify-center mt-20 md:mt-0">
        <Lottie animationData={animationData} loop />
      </div>
      <div className="w-full md:w-2/3 flex-1 md:h-full bg-light flex flex-col justify-center px-6 sm:px-4 lg:px-12 gap-6 md:overflow-hidden md:pt-12">
        <p className="text-green font-bold text-lg md:text-xl">
          Hi, I am Gamze 👋
        </p>
        <h1 className="text-dark font-bold text-lg md:text-5xl sm:text-2xl leading-tight">
          Software engineer building scalable, maintainable applications focused
          on clean architecture and high‑reliability systems.
        </h1>
        <p className="text-dark font-bold text-sm md:text-base mt-8">
          Frontend Developer • Full-Stack Developer • React • Next.js •
          JavaScript • TypeScript •{" "}
          <span className="bg-dark text-yellow px-2 py-1 rounded">
            {ROLES[roleIndex]}
          </span>
        </p>
      </div>
    </div>
  );
}

export default Introduction;
