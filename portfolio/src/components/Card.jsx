import React from "react";
import { FaGithub } from "react-icons/fa";

const Card = ({
  title,
  description,
  image,
  techStack,
  githubLink,
  isDarkMode,
}) => {
  return (
    <div
      className={`rounded-lg overflow-hidden h-full ${
        isDarkMode
          ? "border-[1px] border-[#6a6a6a] backdrop-blur-md bg-white/10"
          : "border-[1px] border-[#a3a3a3] backdrop-blur-md bg-black/10"
      }`}
    >
      {/* Image */}
      <img src={image} alt={title} className="w-full h-48 object-cover" />

      <div className="p-4">
        {/* Project Name */}
        <h2 className="text-lg font-bold mb-2">{title}</h2>

        {/* Project Description */}
        <p className="text-sm opacity-65 mb-4 h-[100px]">{description}</p>

        <div className="flex items-center justify-between">
          {/* Tech Stack Icons */}
          <div className="flex space-x-2">
            {techStack.map((tech, index) => (
              <img key={index} src={tech.icon} className="w-6 h-6" />
            ))}
          </div>

          {/* GitHub Link */}
          <div className="flex items-center space-x-2">
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className={` ${
                isDarkMode
                  ? "text-white hover:text-[#ababab]"
                  : "text-[#111111] hover:text-[#424242]"
              }`}
            >
              <FaGithub className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
