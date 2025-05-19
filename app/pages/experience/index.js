export default function Experience() {
  const experiences = [
    {
      date: "2022 - 2025(July 31-Present)",
      position: "Full Stack Web Developer",
      company:
        "Information and Communication Technology - Medical Colleges of Northern Philippines/International School of Asia and the Pacific",
      description:
        "Developed a comprehensive School Management System with integrated Finance and Accounting modules, delivering end-to-end functionality for educational institutions while ensuring accurate financial tracking, reporting, and compliance.",
      link: "https://www.mcnp.edu.ph/",
    },
    {
      date: "2021-2022",
      position: "",
      company: "Free Lance Full Stack Web Developer",
      description: "",
      link: "https://www.facebook.com/csu.biznest",
    },
    // {
    //   date: "2022 - 2023",
    //   position: "Full-Stack Web Developer",
    //   company: "House Research Development (Singapore) Pte. Ltd",
    //   description:
    //     "A company that provided an intensive bootcamp focused on web development. This experience allowed me to learn a lot of valuable insights and skills in the field of web development.",
    //   link: "https://www.hrd-s.com/about.html",
    // },
  ];
  return (
    <section id="experience" className="pt-8">
      <h2 class="font-semibold text-base mb-4 uppercase mt-24">
        Work Experience
      </h2>
      <div className="space-y-12">
        {experiences.map((experience) => (
          <div className="group  ">
            <div className=" grid grid-cols-3 gap-4 ">
              <p className=" text-white/50">{experience.date}</p>
              <div className="flex flex-col col-span-2">
                <a
                  href={experience.link}
                  className="group/link hover:underline"
                  target="_blank"
                >
                  {experience.company}
                  <span className="inline-block">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                </a>
                <span className="font-medium text-white/50 group-hover:text-[#F0DB4F] ">
                  {experience.position}
                </span>
                <p className="mt-2 text-white/70">{experience.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <a
          className="inline-flex items-center font-medium leading-tight text-[#F0DB4F]  group"
          aria-label="View Full Résumé"
          href="/AIRON JIM PINGAD.pdf"
        >
          <span>
            <span className="border-b border-transparent pb-px transition group-hover:border-[#F0DB4F] motion-reduce:transition-none">
              View Full{""}
            </span>
            <span className="whitespace-nowrap">
              <span className="border-b border-transparent pb-px transition group-hover:border-[#F0DB4F] motion-reduce:transition-none">
                Resume
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
          </span>
        </a>
      </div>
    </section>
  );
}
