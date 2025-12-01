import { SECTION_IDS } from "../constants";

const Information = () => {
  return (
    <div
      id={SECTION_IDS.INFORMATION}
      className="section-container bg-green justify-center"
    >
      <div className="info-decoration-circle top-32 left-10 w-32 h-32 bg-light animate-pulse"></div>
      <div className="info-decoration-circle bottom-10 right-10 w-48 h-48 bg-yellow"></div>
      <div
        className="info-decoration-star top-24 right-1/4 text-3xl text-yellow opacity-80 animate-bounce"
        aria-hidden="true"
      >
        ★
      </div>
      <div
        className="info-decoration-star bottom-32 left-20 text-xl text-light opacity-60 animate-pulse"
        aria-hidden="true"
      >
        ★
      </div>
      <div
        className="info-decoration-star top-1/3 left-10 text-lg text-orange opacity-70"
        aria-hidden="true"
      >
        ★
      </div>

      <div className="container mx-auto px-6 md:px-16 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-12">
          <div className="flex-1 text-center md:text-right space-y-2 md:space-y-4">
            <h2 className="info-subsection-title">Who I Am</h2>
            <p className="info-subsection-text">
              I am a dedicated{" "}
              <span className="font-bold text-light">Software Engineer</span>{" "}
              with a passion for building robust and scalable web applications.
              My journey is defined by a continuous drive to learn and an eye
              for clean, maintainable code.
            </p>
          </div>

          <div className="info-center-icon">
            <div className="absolute inset-0 border-2 border-dark/20 rounded-full"></div>
            <div className="absolute w-full h-0.5 bg-dark/20"></div>
            <div className="absolute h-full w-0.5 bg-dark/20"></div>
            <div className="relative w-14 h-14 md:w-20 md:h-20 bg-yellow rounded-full flex items-center justify-center">
              <div className="w-8 h-8 md:w-12 md:h-12 bg-orange rounded-full"></div>
            </div>
          </div>

          <div className="flex-1 text-center md:text-left space-y-2 md:space-y-4">
            <h2 className="info-subsection-title">What I Do</h2>
            <p className="info-subsection-text">
              I specialize in{" "}
              <span className="font-bold text-light">Frontend Development</span>{" "}
              and modern UI/UX practices. I strive to create seamless digital
              experiences that are not only functional but also elegant and
              user-friendly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Information;
