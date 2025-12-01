import { useEffect, useRef } from "react";
import Lottie, { type LottieRefCurrentProps } from "lottie-react";
import animationData from "../assets/envelope.json";
import CustomButton from "./CustomButton";
import { ANIMATION_INTERSECTION_THRESHOLD, SECTION_IDS } from "../constants";
import { config } from "../config/env";

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const lottieRef = useRef<LottieRefCurrentProps>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (lottieRef.current) {
            lottieRef.current.stop();
            lottieRef.current.play();
          }
        }
      },
      { threshold: ANIMATION_INTERSECTION_THRESHOLD }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      id={SECTION_IDS.CONTACT}
      ref={sectionRef}
      className="section-container bg-yellow py-20"
    >
      <div className="container px-6 md:px-16">
        <div className="flex justify-center">
          <Lottie
            lottieRef={lottieRef}
            animationData={animationData}
            loop={false}
            autoplay={false}
            className="w-32 h-32 lg:w-48 lg:h-48"
            aria-label="envelope-animation"
          />
        </div>
        <h2 className="section-title mb-6">Send me a message!</h2>
        <p className="section-subtitle">
          I’d love to hear from you. Whether it’s a project idea, collaboration,
          or just a hello — feel free to reach out.
        </p>
        <div className="mx-auto lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <div className="card-base">
            <h3 className="card-title mb-3">Say hello from social media</h3>
            <p className="card-text mt-2">
              LinkedIn:{" "}
              <a
                href={config.contact.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange font-bold hover:underline"
              >
                linkedin.com/in/gamze
              </a>
            </p>
            <p className="card-text mt-2">
              GitHub:{" "}
              <a
                href={config.contact.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange font-bold hover:underline"
              >
                github.com/Gamze0309
              </a>
            </p>
          </div>
          <div className="card-base">
            <h3 className="card-title mb-3">Send me an email</h3>
            <p className="card-text mb-4">
              Prefer quick contact? Drop me a line and I’ll reply soon.
            </p>
            <CustomButton
              text="Send Email"
              link={`mailto:${config.contact.email}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
