"use client";

import { useState } from "react";
import { FaLocationArrow } from "react-icons/fa6";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import ReactMarkdown from "react-markdown";

import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";

interface Project {
  id: number;
  title: string;
  des: string;
  img: string;
  iconLists: string[];
  link: string;
  showWebsite: boolean;
}

const RecentProjects = () => {
  const [currentProject, setCurrentProject] = useState<Project | null>();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (project: Project) => {
    setCurrentProject(project);
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    setCurrentProject(null);
  };

  return (
    <div id="projects" className="py-20 h-fit overflow-hidden">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-greenish-500">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map((item) => (
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
            key={item.id}
            onClick={() => handleClick(item)}
          >
            <PinContainer title="Click">
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] h-[32vw] min-h-[180px] max-h-[400px] lg:h-[30vh] mb-10 group shimmer-img">
                {/* shimmer overlay altijd zichtbaar */}
                <div className="shimmer-img__overlay rounded-3xl pointer-events-none" />
                {/* donkere overlay met transition, boven alles behalve icons/tekst */}
                <div className="absolute inset-0 bg-black/60 rounded-3xl opacity-80 group-hover:opacity-30 transition-opacity duration-300 pointer-events-none z-20" />
                <div
                  className="relative w-full h-full lg:overflow-hidden overflow-visible lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  {/* layover hover */}
                  <img
                    src="/bg.png"
                    alt="bgimg"
                    className="w-full h-full object-cover rounded-3xl"
                  />
                </div>
                {/* image zoom top altijd zichtbaar */}
                <img
                  src={item.img}
                  alt="cover"
                  className="z-10 absolute bottom-0 rounded-3xl w-full h-auto max-h-full object-cover"
                />
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {item.title}
              </h1>

              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {item.preview}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <img src={icon} alt="icon5" className="p-2" />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                  <p className="flex lg:text-xl md:text-xs text-sm text-greenish-500">
                    More info
                  </p>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
      {currentProject && (
        <Dialog open={isOpen} onOpenChange={handleClose}>
          <DialogTrigger className="hidden">Open</DialogTrigger>
          <DialogContent className="max-h-[80vh] overflow-y-auto max-w-3xl">
            <DialogHeader>
              <DialogTitle className="text-2xl pb-4">
                {currentProject.title}
              </DialogTitle>
              <DialogDescription className="text-base whitespace-pre-wrap pb-8">
                <ReactMarkdown
                  components={{
                    h1: ({ node, ...props }) => (
                      <h1
                        className="text-2xl font-bold text-greenish-500 mt-4 mb-2"
                        {...props}
                      />
                    ),
                    h2: ({ node, ...props }) => (
                      <h2
                        className="text-xl font-semibold text-greenish-400 mt-4 mb-2"
                        {...props}
                      />
                    ),
                    h3: ({ node, ...props }) => (
                      <h3
                        className="text-lg font-semibold text-greenish-300 mt-4 mb-2"
                        {...props}
                      />
                    ),
                    p: ({ node, ...props }) => (
                      <p
                        className="mb-2 text-white-100 leading-relaxed"
                        {...props}
                      />
                    ),
                    ul: ({ node, ...props }) => (
                      <ul
                        className="list-disc list-outside mb-4 pl-6 space-y-2 marker:text-greenish-500 marker:text-lg"
                        {...props}
                      />
                    ),
                    ol: ({ node, ...props }) => (
                      <ol
                        className="list-decimal list-outside mb-4 pl-6 space-y-2 marker:text-greenish-500 marker:text-lg"
                        {...props}
                      />
                    ),
                    li: ({ node, ...props }) => (
                      <li className="mb-1 text-white-100" {...props} />
                    ),
                    a: ({ node, ...props }) => (
                      <a
                        className="text-greenish-500 underline hover:text-greenish-400 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                        {...props}
                      />
                    ),
                    code: ({ node, ...props }) => (
                      <code
                        className="bg-black/60 text-greenish-400 px-1 py-0.5 rounded text-sm font-mono"
                        {...props}
                      />
                    ),
                    pre: ({ node, ...props }) => (
                      <pre
                        className="bg-black/80 rounded p-3 overflow-x-auto my-2"
                        {...props}
                      />
                    ),
                    blockquote: ({ node, ...props }) => (
                      <blockquote
                        className="border-l-4 border-greenish-500 pl-4 italic text-white-200 my-4 py-2 bg-white/5 rounded"
                        {...props}
                      />
                    ),
                    hr: () => (
                      <hr className="my-6 border-t border-greenish-700/40" />
                    ),
                    img: ({ node, ...props }) => (
                      <img
                        className="rounded-lg shadow-lg my-4 max-w-full h-auto"
                        {...props}
                      />
                    ),
                  }}
                >
                  {currentProject.des}
                </ReactMarkdown>
              </DialogDescription>
              {currentProject.showWebsite && (
                <Link
                  href={currentProject.link}
                  className="text-greenish-500 mt-8 cursor-pointer font-bold"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View live website
                </Link>
              )}
            </DialogHeader>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default RecentProjects;
