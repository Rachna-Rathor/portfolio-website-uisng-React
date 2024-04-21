import React from "react";
import projectData from "../project/data.";

function Projects() {
  return (
    <div name="Projects"
      className="max-w-screen-2xl container mx-auto px-3 md:px-20 ">
      <div className="mb-8">
        <h1 className="text-2xl font-bold ">Projects</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projectData.map((item, index) => (
          <div
            className="border rounded-md overflow-hidden relative shadow-md  hover:scale-200 duration-200"
            key={index}
          >
            <img src={item.img} alt={item.title} className="w-full h-auto" />
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center"></div>
            <div className="p-4 text-center">
              <div className="">
                <h3 className=" rounded-md py-3 text-white bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ...">
                  {item.title}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
