import React from "react";
import JS from '../assets/javascript.svg'
import Java from '../assets/java.svg'
import HTML from '../assets/html5.svg'
import CSS from '../assets/css3.svg'
import ReactJS from '../assets/react.svg'
import TailwindCSS from '../assets/tailwindcss.svg'
import MUI from '../assets/mui.svg'
import Node from '../assets/nodejs.svg'
import Mongo from '../assets/mongodb.svg'
import SQL from '../assets/mysql.svg'
import VScode from '../assets/vscode.svg'
import Postman from '../assets/postman.svg'
import Figma from '../assets/figma.svg'
import PS from '../assets/photoshop.svg'
import Ai from '../assets/illustrator.svg'
import { FaGithub } from "react-icons/fa";
import { SiExpress } from "react-icons/si";

const Skills = ({ isDarkMode }) => {
  return (
    <div
      className={`mt-10 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 w-fit mx-auto pb-10 lg:pb-0 md:pb-0 ${
        isDarkMode ? "" : ""
      }`}
    >
      <p className="flex gap-2 items-center"><img src={HTML} className="w-10 h-10" />HTML</p>
      <p className="flex gap-2 items-center"><img src={CSS} className="w-10 h-10" />CSS</p>
      <p className="flex gap-2 items-center"><img src={JS} className="w-10 h-10" />JavaScript</p>
      <p className="flex gap-2 items-center"><img src={ReactJS} className="w-10 h-10" />ReactJS</p>
      <p className="flex gap-2 items-center"><img src={TailwindCSS} className="w-10 h-10" />Tailwind CSS</p>
      <p className="flex gap-2 items-center"><img src={MUI} className="w-10 h-10" />Material UI</p>
      <p className="flex gap-2 items-center"><img src={Node} className="w-10 h-10" />Node.js</p>
      <p className="flex gap-2 items-center"><SiExpress className="w-10 h-10" />ExpressJS</p>
      <p className="flex gap-2 items-center"><img src={Java} className="w-10 h-10" />Java</p>
      <p className="flex gap-2 items-center"><img src={Mongo} className="w-10 h-10" />MongoDB</p>
      <p className="flex gap-2 items-center"><img src={SQL} className="w-10 h-10" />MySQL</p>
      <p className="flex gap-2 items-center"><img src={Postman} className="w-10 h-10" />Postman</p>
      <p className="flex gap-2 items-center"><FaGithub className="w-10 h-10"/>GitHub</p>
      <p className="flex gap-2 items-center"><img src={VScode} className="w-10 h-10" />VS Code</p>
      <p className="flex gap-2 items-center"><img src={Figma} className="w-10 h-10" />Figma</p>
      <p className="flex gap-2 items-center"><img src={PS} className="w-10 h-10" />Photoshop</p>
      <p className="flex gap-2 items-center"><img src={Ai} className="w-10 h-10" />Illustrator</p>
    </div>
  );
};

export default Skills;
