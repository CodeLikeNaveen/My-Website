import React from "react";

const ProjectCard = ({ title, description, language, link}) => {
    const len = language.length
  return (
    <div className="rounded-lg border bg-white bg-card text-card-foreground shadow-sm portfolio-card">
        <a href={link}>
            <div className="flex flex-col space-y-1.5 p-6">
                <div className="finline-bock px-6 py-2 
                                    rounded-full
                                    item-center 
                                    shadow-2xl
                                    bg-gradient-to-r from-blue-500 to-blue-900
                                    hover:bg-gradient-to-l
                                    transform 
                                    transition-transform 
                                    duration-200
                                    hover:-translate-y-1
                                    text-white                            
                                    text-xl">{title}</div>
                <div className="p-6 pt-0">
                    <p className="text-gray-600 mb-4">
                        {description}
                    </p>
                    <p className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground mt-2 md:mt-0 w-fit">{language}</p>
                </div>
            </div>
        </a>
    </div>
  );
};

export default ProjectCard;
