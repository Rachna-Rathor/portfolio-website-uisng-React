import React from "react";
import css from "../../public/css.jpg";
import express from "../../public/express.png";
import html from "../../public/html.png";
import java from "../../public/java.png";
import javascript from "../../public/javascript.png";
import mongodb from "../../public/mongodb.jpg";
import node from "../../public/node.png";
import reactjs from "../../public/reactjs.png";

function Skills() {
  const cardItem = [
    {
      id: 1,
      logo: html,
      name: "HTML",
      sourceCodeUrl: "https://github.com/whatwg/html",
      videoCodeUrl: "https://www.youtube.com/watch?v=HcOc7P5BMi4",
    },
    {
        id: 2,
        logo: css,
        name: "CSS",
        sourceCodeUrl: "https://github.com/w3c/csswg-drafts",
        videoCodeUrl: "https://www.youtube.com/watch?v=ESnrn1kAD4E",
      },
      {
        id: 3,
        logo: reactjs,
        name: "ReactJs",
        sourceCodeUrl: "https://github.com/facebook/react",
        videoCodeUrl: "https://www.youtube.com/watch?v=FxgM9k1rg0Q",
      },
      {
        id: 4,
        logo: node,
        name: "Nodejs",
        sourceCodeUrl: "https://github.com/nodejs/node",
        videoCodeUrl: "https://www.youtube.com/watch?v=ChVE-JbtYbM",
      },
      {
        id: 5,
        logo: java,
        name: "Java",
        sourceCodeUrl: "https://openjdk.java.net/",
        videoCodeUrl: "https://www.youtube.com/watch?v=PymbRTMb4hY",
      },
      {
        id: 6,
        logo: javascript,
        name: "JavaScript",
        sourceCodeUrl: "https://github.com/tc39/ecma262",
        videoCodeUrl: "https://www.youtube.com/watch?v=Zg4-uSjxosE",
      },
      {
        id: 7,
        logo: mongodb,
        name: "MongoDB",
        sourceCodeUrl: "https://github.com/mongodb/mongo",
        videoCodeUrl: "https://www.youtube.com/watch?v=ChVE-JbtYbM",
      },
      {
        id: 8,
        logo: express,
        name: "Express",
        sourceCodeUrl: "https://github.com/expressjs/express",
        videoCodeUrl: "https://www.youtube.com/watch?v=ChVE-JbtYbM",
      },
    ];

  const handleSourceCodeClick = (url) => {
    window.open(url, "_blank");
  };

  const videoCodeClick = (videourl) => {
    window.open(videourl, "_blank");
  };

  return (
    <div name="Skills"
     className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10">
        <hr />
      <div className="">
        <h1 className="text-3xl font-bold mb-5 mt-4">Skills</h1>
        <span className="underline font-semibold"></span>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-8">
          {cardItem.map(({ id, logo, name, sourceCodeUrl, videoCodeUrl }) => (
            <div
              className="md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <img
                src={logo}
                className="w-[120px] h-[120px] p-1 rounded-full border-[2px]"
                alt={name}
              />
              <div>
                <div className="px-2 font-bold text-xl mb-2">{name}</div>
                <p className="px-2 text-gray-700">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
              <div className="flex flex-col md:flex-row justify-center md:justify-around px-6 py-4 space-x-0 md:space-x-3">
                <button 
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded mb-2 md:mb-0"
                  onClick={() => videoCodeClick(videoCodeUrl)}
                >
                  Video
                </button>
                <button
                  className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded"
                  onClick={() => handleSourceCodeClick(sourceCodeUrl)}
                >
                  Source code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
