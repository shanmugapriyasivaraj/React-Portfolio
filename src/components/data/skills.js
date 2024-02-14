import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import { SiJavascript, SiTailwindcss } from "react-icons/si";
import { AiOutlineConsoleSql } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { SiBootstrap } from "react-icons/si";

const skillItem = [
  {
    id: 0,
    tech: "HTML",
    icon: <FaHtml5 />,
  },
  {
    id: 1,
    tech: "CSS",
    icon: <FaCss3Alt />,
  },
  {
    id: 2,
    tech: "Javascript",
    icon: <SiJavascript />,
  },
  {
    id: 3,
    tech: "React Js",
    icon: <FaReact />,
  },
  {
    id: 4,
    tech: "Tailwind CSS",
    icon: <SiTailwindcss />,
  },
  {
    id: 5,
    tech: "Sql",
    icon: <AiOutlineConsoleSql />,
  },
  {
    id: 6,
    tech: "Github",
    icon: <FaGithub />,
  },

  {
    id: 7,
    tech: "Bootstrap",
    icon: <SiBootstrap />,
  },
];
export default skillItem;
