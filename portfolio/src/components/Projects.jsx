import React, { useState } from "react";
import Card from "./Card"; 
import Img1 from "../assets/Projects.jpg";
import ReactIcon from "../assets/react.svg";
import NodeIcon from "../assets/nodejs.svg";
import ExpressIcon from "../assets/express.svg";
import MongoIcon from "../assets/mongodb.svg";
import TailwindIcon from "../assets/tailwindcss.svg";
import Skills from "./Skills";
import Contact from "./Contact";

const Projects = ({ isDarkMode }) => {
  const [activeTab, setActiveTab] = useState("tab1");

  const projects = [

    {
      title: "Project 1",
      description:
        "Small description about the project.",
      image: Img1,
      techStack: [
        {
          icon: MongoIcon,
        },
        {
          icon: ExpressIcon,
        },
        {
          icon: ReactIcon,
        },
        {
          icon: NodeIcon,
        },
        {
          icon: TailwindIcon,
        },
      ],
      githubLink: "https://github.com/",
    },
    {
      title: "Project 2",
      description:
        "Small description about the project.",
      image: Img1,
      techStack: [
        {
          icon: MongoIcon,
        },
        {
          icon: ExpressIcon,
        },
        {
          icon: ReactIcon,
        },
        {
          icon: NodeIcon,
        },
        {
          icon: TailwindIcon,
        },
      ],
      githubLink: "https://github.com/",
    },
    {
      title: "Project 3",
      description:
        "Small description about the project.",
      image: Img1,
      techStack: [
        {
          icon: MongoIcon,
        },
        {
          icon: ExpressIcon,
        },
        {
          icon: ReactIcon,
        },
        {
          icon: NodeIcon,
        },
        {
          icon: TailwindIcon,
        },
      ],
      githubLink: "https://github.com/",
    },
    {
      title: "Project 4",
      description:
        "Small description about the project.",
      image: Img1,
      techStack: [
        {
          icon: MongoIcon,
        },
        {
          icon: ExpressIcon,
        },
        {
          icon: ReactIcon,
        },
        {
          icon: NodeIcon,
        },
        {
          icon: TailwindIcon,
        },
      ],
      githubLink: "https://github.com/",
    },
    
  ];

  return (
    <div id="projects" className="min-h-[700px] px-10 md:px-20 lg:px-24 w-full">
      {/* Tabs */}
      <div
        className={`flex justify-center border-t-[1px] p-4 text-white ${
          isDarkMode ? "border-[#656565]" : "border-[#b0b0b0]"
        }`}
      >
        <button
          onClick={() => setActiveTab("tab1")}
          className={`px-5 py-2  ${
            activeTab === "tab1" ? "border-b-[2px]" : ""
          } ${
            isDarkMode
              ? "text-white border-white"
              : "text-[#111111] border-[#111111]"
          }`}
        >
          Projects
        </button>
        <button
          onClick={() => setActiveTab("tab2")}
          className={`px-5 py-2  ${
            activeTab === "tab2" ? "border-b-[2px]" : ""
          } ${
            isDarkMode
              ? "text-white border-white"
              : "text-[#111111] border-[#111111]"
          }`}
        >
          Skills
        </button>
        <button
          onClick={() => setActiveTab("tab3")}
          className={`px-5 py-2  ${
            activeTab === "tab3" ? "border-b-[2px]" : ""
          } ${
            isDarkMode
              ? "text-white border-white"
              : "text-[#111111] border-[#111111]"
          }`}
        >
          Contact
        </button>
      </div>

      {/* Sections */}
      <div className="mt-5 lg:mt-10">
        {activeTab === "tab1" && (
          <div>
            <div
              className={`overflow-y-auto max-h-[570px] lg:max-h-[470px] p-5 rounded-[6px]  scrollbar-custom ${
                isDarkMode
                  ? "border-[1px] border-[#656565]"
                  : "border-[1px] border-[#b0b0b0]"
              }`}
            >
              <div className={`grid lg:grid-cols-4 gap-4`}>
                {projects.map((project, index) => (
                  <div key={index}>
                    <Card
                      isDarkMode={isDarkMode}
                      title={project.title}
                      description={project.description}
                      image={project.image}
                      techStack={project.techStack}
                      githubLink={project.githubLink}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
        {activeTab === "tab2" && (
          <div>
            <Skills isDarkMode={isDarkMode} />
          </div>
        )}

        {activeTab === "tab3" && (
          <div>
            <Contact isDarkMode={isDarkMode} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
