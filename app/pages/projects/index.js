import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      title: "MySMS(AQUILA)",
      link: "https://main.mcnpisap.cloud/login",
      description:
        "A web-based School Management System with integrated Finance and Accounting modules designed to streamline academic and financial operations for educational institutions.",
      image: "/images/projects/isapmcnphome.png",
      tools: ["PHP", "Laravel", "HTML", "CSS", "JAVASCRIPT", "JQUERY"],
    },
    {
      title:
        "Barangay Profiling System with Data Analytics and Short Message Service",
      link: "https://barangayprofilingsystem.com/",
      description:
        "A user-friendly web-based Barangay Profiling System designed to manage resident information, household records, and barangay statistics. The system integrates data analytics tools for visualizing demographic trends and patterns, and includes a built-in Short Message Service (SMS) functionality for sending timely announcements and alerts to residents.",
      image: "/images/projects/profiling.png",
      tools: ["PHP", "HTML", "CSS", "JAVASCRIPT", "JQUERY", "MYSQL"],
    },
    {
      title: "Sangguniang Kabataan",
      link: "",
      description:
        "A web-based application designed to support the operations of the Sangguniang Kabataan (SK), featuring modules for youth profiling, project and budget monitoring, meeting documentation, and community engagement. The system streamlines SK activities and promotes transparency and accountability in youth-led governance.",
      image: "/images/projects/skpiat.png",
      tools: ["PHP", "Laravel", "HTML", "CSS", "JAVASCRIPT", "MYSQL"],
    },
  ];
  return (
    <section id="projects" className="py-8">
      <h2 class="font-semibold text-base mb-4 uppercase mt-24">Projects</h2>
      <div class="grid grid-cols-1 gap-6 space-y-6">
        {projects.map((project) => (
          <a href={project.link} className="group group/link">
            <div class="flex flex-col md:flex-row lg:flex-row h-full bg-transparent shadow-sm gap-4">
              <div class="sm:h-40 md:h-60  flex-shrink-0 relative  overflow-hidden w- sm:max-w-60  md:max-w-full lg:w-1/2  border rounded-lg">
                <Image
                  alt=""
                  width={600}
                  height={600}
                  class="size-full object-cover  center "
                  src={project.image}
                />
              </div>
              <div class="">
                <h3 class="font-semibold group-hover:text-[#F0DB4F] ">
                  {project.title}
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
                </h3>
                <p class="mt-2 text-sm text-white/70">{project.description}</p>
                <ul class="mt-2 flex flex-wrap" aria-label="Technologies used">
                  {project.tools.map((tool) => (
                    <li class="mr-1.5 mt-2">
                      <div class="flex items-center rounded-full bg-orange-400/10 px-3 py-1 text-xs font-medium leading-5 text-yellow-300 ">
                        {tool}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
