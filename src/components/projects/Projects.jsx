import React, { useState } from "react";
import Headings from "../subComponents/Headings";
import projectDatas from "./projectDatas";
import { MdPreview } from "react-icons/md";
import { FaSquareGithub } from "react-icons/fa6";

function Projects() {
  const [hoverVideo, setHoverVideo] = useState(null);
  const langStyle = {
    border: "1px solid black",
    backgroundColor: "rgb(255, 255, 255)",
    boxShadow: "3px 3px rgb(0, 0, 0)",
    padding: "0 5px",
    fontSize: ".6rem",
  };

  return (
    <>
      <section data-aos="fade-down" name="projects" className="mt-20">
        <Headings title="Projects" />
        <video src=""></video>
        <div>
          {projectDatas.map((data, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center  w-full gap-10 my-10 ${index % 2 === 0 ? '' : ' md:flex-row-reverse'
                }`}
            >
              {/* <div data-aos="fade-right" className="secondDiv overflow-hidden md:w-1/2" >
                <img src={data.cover} alt="" />
              </div> */}
              <div
                data-aos="fade-right"
                className="secondDiv overflow-hidden md:w-1/2 relative"
                onMouseEnter={() => setHoverVideo(index)}
                onMouseLeave={() => setHoverVideo(null)}
              >
                <img
                  src={data.cover}
                  alt=""
                  className="w-full h-auto"
                  style={{ filter: hoverVideo === index && data.video ? "blur(5px)" : "none" }}
                />
                {hoverVideo === index && (
                  <video
                    src={data.video}
                    autoPlay
                    muted
                    loop
                    className="md:block hidden absolute inset-0 w-full h-full "
                  />
                )}
              </div>
              <div data-aos="fade-left" className="md:w-1/2 md:text-justify md:mt-20  mb-5">
                <h2 className="text-3xl font-bold mb-2 ">{data.title}</h2>
                <p><span className="font-bold">Description: </span>{data.description}</p>
                <p><span className="font-bold">Problem: </span>{data.problem}</p>
                <p><span className="font-bold">Solution: </span>{data.solution} </p>
                {/* <span className=" font-bold">{data.features}</span> */}
                <div className="my-3 flex gap-3">
                  {data.technologies.map((tech, index) => (
                    <p key={index} style={langStyle}>{tech}</p>
                  ))}
                </div>
                <div className="flex items-center font-thin cursor-pointer text-xs">
                  {data.live && <div className="">
                    <a href={data.live} target="_blank" rel="noreferrer" className="flex items-center">
                    <span>Live - </span>
                      <MdPreview className="hover:scale-110 text-xl sm:text-2xl" />
                    </a>
                  </div>}
                  {data.github && <div className="">
                    <a href={data.github} target="_blank" rel="noreferrer" className="flex items-center">
                      <span>Code - </span>
                      <FaSquareGithub className="hover:scale-110 text-xl sm:text-2xl" />
                    </a>
                  </div>}

                </div>
              </div>
            </div>
          ))}

        </div>
      </section>
    </>
  );
}

export default Projects;
