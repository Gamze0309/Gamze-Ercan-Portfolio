const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: "Software Engineer",
      company: "Tech Solutions Inc.",
      period: "2023 - Present",
      description:
        "Developing scalable web applications using React and TypeScript. Collaborating with cross-functional teams to deliver high-quality software.",
    },
    {
      id: 2,
      role: "Frontend Developer",
      company: "Tech Solutions Inc.",
      period: "2021 - 2023",
      description:
        "Built responsive and interactive user interfaces. Optimized application performance and ensured cross-browser compatibility.",
    },
    {
      id: 3,
      role: "Junior Developer",
      company: "Tech Solutions Inc.",
      period: "2020 - 2021",
      description:
        "Assisted in the development of MVP features. Gained hands-on experience with modern JavaScript frameworks and agile methodologies.",
    },
  ];

  return (
    <div
      id="experience"
      className="min-h-screen md:h-screen w-full md:snap-start bg-light flex flex-col items-center relative py-20"
    >
      <div className="container md:px-20">
        <h2 className="text-3xl md:text-5xl font-bold text-dark mb-12 text-center font-primary-family">
          My Career Journey{" "}
          <span role="img" aria-label="rocket">
            🚀
          </span>
        </h2>
        <div className="mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="bg-green/20 rounded-2xl p-6 shadow-sm border border-orange/30"
            >
              <h3 className="text-lg md:text-xl font-bold text-dark font-primary-family">
                {exp.role}
              </h3>
              <span className="text-sm text-orange font-bold mb-2 block font-primary-family">
                {exp.company}
              </span>
              <span className="text-xs text-dark/70 mb-3 block font-primary-family">
                {exp.period}
              </span>
              <p className="text-dark/80 text-sm leading-relaxed font-content-family">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
