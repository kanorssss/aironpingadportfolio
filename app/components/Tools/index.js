import {
  FaHtml5,
  FaJs,
  FaLaravel,
  FaCss3Alt,
  FaVuejs,
  FaNodeJs,
  FaSquareGithub,
  FaSquareGitlab,
  FaReact,
  FaAngular,
  FaPhp,
  FaPython,
  FaBootstrap,
  FaGithub,
} from "react-icons/fa6";
import { TbBrandCSharp } from "react-icons/tb";
import { IoLogoIonic } from "react-icons/io";
import { SiNextdotjs, SiPostman } from "react-icons/si";
import {
  SiTailwindcss,
  SiMysql,
  SiFirebase,
  SiDotnet,
  SiExpress,
} from "react-icons/si";
export default function Tools() {
  const skills = [
    { icon: FaJs, title: "JavaScript" },
    { icon: FaPhp, title: "Php" },
    { icon: FaLaravel, title: "Laravel" },
    { icon: FaVuejs, title: "VueJS" },

    { icon: SiMysql, title: "MySql" },
    { icon: SiFirebase, title: "Firebase" },

    { icon: SiTailwindcss, title: "Tailwind CSS" },
    { icon: FaBootstrap, title: "Bootstrap" },

    { icon: FaHtml5, title: "Html" },
    { icon: FaCss3Alt, title: "Css" },
    { icon: FaNodeJs, title: "Node.js" },
    { icon: SiPostman, title: "Postman" },
    { icon: SiNextdotjs, title: "Next Js" },
    { icon: FaGithub, title: "GitHub" },
    { icon: SiExpress, title: "Express.js" },
  ];
  //   const icons = [
  //     FaJs,
  //     FaPhp,
  //     FaLaravel,
  //     SiMysql,
  //     FaHtml5,
  //     FaCss3Alt,
  //     FaVuejs,
  //     FaReact,
  //     FaAngular,
  //     SiFirebase,
  //     FaPython,
  //     FaNodeJs,
  //     IoLogoIonic,
  //     TbBrandCSharp,
  //     SiTailwindcss,
  //     FaBootstrap,
  //     SiVuetify,
  //     FaSquareGithub,
  //     FaSquareGitlab,
  //   ];

  return (
    <>
      <div className="grid grid-cols-5 gap-4">
        {skills.map((skill) => (
          <div className="flex justify-center items-center flex-col hover:text-[#F0DB4F]">
            <skill.icon size="2.5em" />
            <p className="text-xs py-2">{skill.title}</p>
          </div>
        ))}
      </div>
    </>
  );
}
