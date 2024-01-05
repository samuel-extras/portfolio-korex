import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import p from "../../../public/p.jpeg";
// import p0 from "../../../public/p0.jpeg";
import p10 from "../../../public/p1.0.jpeg";
import p1 from "../../../public/p1.1.jpeg";
import p12 from "../../../public/p1.2.jpeg";
import p13 from "../../../public/p1.3.jpeg";
import bz1 from "../../../public/bz1.jpeg";
import bz2 from "../../../public/bz2.jpeg";
import bz3 from "../../../public/bz3.jpeg";
import bz4 from "../../../public/bz4.jpeg";
import bz5 from "../../../public/bz5.jpeg";
import bz6 from "../../../public/bz6.jpeg";
import fa from "../../../public/fa.jpeg";

const projects = [
  {
    name: "Iotech Extra’s Website Revamp - Web Application",
    desc: "The project focused on redesigning and optimizing the website to showcase the company's services, portfolio, and expertise in a visually appealing and user-friendly manner.",
    duties: [
      "●  Led a team of 5 Laravel developers and 2 UI/UX designers throughout the project ensuring collaboration and synergy for a successful website revamp",
    ],
    website: "https://www.iotechextra.com.ng",
    tools: "Figma, Zoho Cliq, Slack, Google Doc",
    images: [p, p10, p1, p12, p13],
  },
  {
    name: "Bizin App Development - Web Application",
    desc: "Developing an app to assist SMEs in solving operational challenges by integrating marketplace services and a suite of resources.",
    duties: [
      "●  Led the development of the Bizin app, designed to streamline business operations by integrating marketplace services and various resources",
      "●  Integration of marketplace services and resources to facilitate streamlined business operations.",
      "●  Creation of an intuitive platform enabling businesses to access diverse resources and services conveniently.",
    ],
    website: "https://www.bizinc.io",
    tools: "App.uizard.io, Discord, Slack, Google Doc",
    images: [bz1, bz2, bz3, bz4, bz5, bz6],
  },
  {
    name: "Fazsion Website Product Lifecycle Management - E-commerce Application",
    desc: "This project requires close collaboration with multiple teams within Fazsion, including product designers, procurement, inventory management, and sales, to effectively manage the product lifecycles from conception to sale",
    duties: [
      "● Collaborate with multiple team to effectively manage the product lifecycles",
    ],
    website: "https://fazsion.ng/",
    tools: "Slack, Unleashed, Google Sheet, Cloudinary, Magento",
    images: [fa],
  },
];

export default function Home() {
  return (
    <main className="flex min-h-scree n flex-col items-center justify-between px-6 py-24">
      <div className="z-10 max-w-6xl w-full ">
        <div className="space-y-11 w-full">
          <h2 className="text-white text-4xl lg:text-6xl font-normal font-sansation underline">
            Project
          </h2>
          <div className="bg-[#1E1E1E] rounded-[20px] px-7 flex py-2 items-center gap-6 w-fit">
            {" "}
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 19.5C16.1421 19.5 19.5 16.1421 19.5 12C19.5 7.85786 16.1421 4.5 12 4.5C7.85786 4.5 4.5 7.85786 4.5 12C4.5 16.1421 7.85786 19.5 12 19.5Z"
                fill="#4ECB71"
              />
              <path
                d="M12 22.5C9.9233 22.5 7.89323 21.8842 6.16652 20.7304C4.4398 19.5767 3.09399 17.9368 2.29927 16.0182C1.50455 14.0996 1.29661 11.9884 1.70176 9.95156C2.1069 7.91476 3.10693 6.04383 4.57538 4.57538C6.04383 3.10693 7.91476 2.1069 9.95156 1.70176C11.9884 1.29661 14.0996 1.50455 16.0182 2.29927C17.9368 3.09399 19.5767 4.4398 20.7304 6.16652C21.8842 7.89323 22.5 9.9233 22.5 12C22.4968 14.7838 21.3896 17.4527 19.4211 19.4211C17.4527 21.3896 14.7838 22.4968 12 22.5ZM12 3C10.22 3 8.47992 3.52785 6.99987 4.51678C5.51983 5.50571 4.36628 6.91132 3.68509 8.55585C3.0039 10.2004 2.82567 12.01 3.17294 13.7558C3.5202 15.5016 4.37737 17.1053 5.63604 18.364C6.89472 19.6226 8.49836 20.4798 10.2442 20.8271C11.99 21.1743 13.7996 20.9961 15.4442 20.3149C17.0887 19.6337 18.4943 18.4802 19.4832 17.0001C20.4722 15.5201 21 13.78 21 12C20.9972 9.61391 20.0481 7.32634 18.3609 5.63911C16.6737 3.95189 14.3861 3.00278 12 3Z"
                fill="#4ECB71"
              />
            </svg>
            <p className="text-white text-lg lg:text-xl font-normal font-sansation">
              User Stories{" "}
            </p>
          </div>
          {projects.map((project, i) => (
            <div key={project.name + i} className="max-w-5xl mx-auto space-y-4">
              <div>
                <h5 className="text-white text-3xl font-normal font-sansation my-6 ">
                  <span className="font-bold text-4xl">Project name: </span>{" "}
                  &nbsp; {project.name}
                </h5>
                <p className="text-white text-xl lg:text-2xl font-normal font-sansation leading-[50px] my-2">
                  {project.desc}
                  <br />
                </p>
                {project.duties.map((duty, i) => (
                  <p
                    key={i}
                    className="text-white text-xl font-normal font-sansation"
                  >
                    {duty}
                  </p>
                ))}
                <p className="my-2">
                  <span className="text-white text-2xl  font-bold font-sansation ">
                    Project Link:{" "}
                  </span>{" "}
                  &nbsp;
                  <a
                    href={project.website}
                    target="_blank"
                    className="text-green-400 text-xl  font-normal font-sansation underline "
                  >
                    {project.website}
                  </a>
                </p>
                <p className="text-white text-2xl  font-normal font-sansation my-2">
                  <span className="text-white text-2xl  font-bold font-sansation">
                    Tools Used:
                  </span>
                  &nbsp;
                  <span className="text-white text-xl  font-normal font-sansation">
                    Figma, Zoho Cliq, Slack, Google Doc
                  </span>
                </p>
              </div>
              <div className="py-6">
                <h5 className="text-white text-4xl font-bold font-sansation leading-[50px]">
                  Project Gallery
                </h5>
                <div className="px-8 xl:px-0">
                  <Carousel className="w-auto xl:p-12 my-10 xl:my-0 ">
                    <CarouselContent className="">
                      {project.images.map((image, index) => (
                        <CarouselItem key={index}>
                          <div className="p-1">
                            <Image
                              src={image}
                              alt="projects"
                              className="mx-auto my-auto rounded-[20px]"
                            />
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                  </Carousel>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
