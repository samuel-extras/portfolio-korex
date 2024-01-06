"use client";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import React from "react";

const experiences = [
  {
    position: "Product Manager",
    date: "October 2023 - Present",
    company: "Bizinc",
    location: "Atlanta",
    type: "Remote",
    description: [
      "Oversaw the complete product lifecycle, continuously refining the product roadmap in response to market dynamics and user feedback.",
      "Facilitated seamless collaboration among diverse teams, ensuring all deliverables aligned with strategic business objectives.",
      "Conducted ongoing market research to pinpoint emerging trends and capitalize on new opportunities within a competitive landscape.",
    ],
  },
  {
    position: "Product Operations Manager",
    date: "May 2023 - Present",
    company: "Fazsion",
    location: "Lagos",
    type: "Hybrid",
    description: [
      "Collaborated with cross-functional teams, enhancing efficiency and surpassing revenue targets while exceeding customer satisfaction goals through effective product lifecycle management.",
      "Optimized product image uploads and descriptions, adhering to SEO best practices, resulting in a notable boost in the website's search engine ranking.",
    ],
  },
  {
    position: "Product Manager",
    date: "May 2023 - Present",
    company: "Iotech Extra",
    location: "Lagos",
    type: "Remote",
    description: [
      "Directed and optimized the performance and productivity of a team of 5 Laravel Developers and a UI/UX designer.",
      "Produced structured Functional Requirement Documents (FRD) and Product Requirement Documents (PRD), facilitating organized project execution.",
    ],
  },
  {
    position: "Operations Manager",
    date: "May 2023 - October",
    company: "Zylus Peak Properties ",
    location: "Lagos",
    type: "Hybrid",
    description: [
      "Spearheaded team management and Analyze operational processes, identifying areas for improvement and implementing solutions that increased efficiency and accuracy.",
      "Led and Collaborate cross-functionally with departments such as sales, marketing, and finance to align operational goals with overall company objectives.",
    ],
  },
  {
    position: "Product Manager",
    date: "July 2022 - April 2023",
    company: "AppCake",
    location: "Ukraine",
    type: "Remote",
    description: [
      "Collaborated with cross-functional teams to deliver the product in 30% less time and led to customer satisfaction.",
      "Optimised Android Unity and IOS projects, resulting in a significant reduction in app crashes and improved user retention.",
    ],
  },
  {
    position: "Management Intern ",
    date: "November 2019 - October 2020",
    company: "Ministry of Information and Civic Orientation",
    location: "Osogbo, Nigeria",
    type: "",
    description: [
      "Managed and organized executive email and correspondence, resulting in improvement in response time and maintaining efficient communication channels.",
      "Ensured effective and clear communication with both internal and external stakeholders",
    ],
  },
];

export default function Home() {
  const [index, setIndex] = React.useState(0);

  return (
    <main className="flex min-h-scree n flex-col items-center justify-between px-4 py-24">
      <div className="z-10 max-w-6xl w-full ">
        <div className="space-y-11">
          <h2 className="text-white text-4xl lg:text-6xl font-normal font-sansation underline">
            Experience:{" "}
          </h2>
          {experiences.map((experience, i) => (
            <div
              key={experience.company + i}
              className={`bg-[#1E1E1E] px-4 lg:px-12 pt-6 pb-14 rounded-[20px] ${
                index != Number(i) ? " hidden" : " block"
              }`}
            >
              <div className="flex justify-between items-center flex-wrap gap-x-10">
                <p className="text-white  text-lg md:text-xl lg:text-2xl font-bold font-sansation">
                  {experience.position}
                </p>
                <p className="text-white  text-lg md:text-xl lg:text-2xl font-bold font-sansation">
                  {experience.date}
                </p>{" "}
              </div>
              <div>
                <p className="my-4">
                  <span className="text-white text-lg md:text-xl lg:text-2xl font-bold font-sansation">
                    {experience.company}
                  </span>
                  <span className="text-white text-lg md:text-xl lg:text-2xl font-normal font-sansation">
                    {" "}
                    – {experience.location} - {experience.type}
                  </span>
                </p>
                <div className="space-y-4">
                  {experience.description.map((desc, i) => (
                    <div key={desc + i} className="flex gap-7 items-start">
                      <svg
                        width="23"
                        height="24"
                        viewBox="0 0 23 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="mt-1"
                      >
                        <path
                          d="M11.5 19.5C15.4695 19.5 18.6875 16.1421 18.6875 12C18.6875 7.85786 15.4695 4.5 11.5 4.5C7.53045 4.5 4.3125 7.85786 4.3125 12C4.3125 16.1421 7.53045 19.5 11.5 19.5Z"
                          fill="#4ECB71"
                        />
                        <path
                          d="M11.5 22.5C9.50983 22.5 7.56435 21.8842 5.90958 20.7304C4.25481 19.5767 2.96507 17.9368 2.20347 16.0182C1.44186 14.0996 1.24259 11.9884 1.63085 9.95156C2.01912 7.91476 2.97748 6.04383 4.38474 4.57538C5.79201 3.10693 7.58497 2.1069 9.53691 1.70176C11.4888 1.29661 13.5121 1.50455 15.3508 2.29927C17.1894 3.09399 18.761 4.4398 19.8667 6.16652C20.9723 7.89323 21.5625 9.9233 21.5625 12C21.5595 14.7838 20.4983 17.4527 18.6119 19.4211C16.7255 21.3896 14.1678 22.4968 11.5 22.5ZM11.5 3C9.79414 3 8.12659 3.52785 6.70821 4.51678C5.28984 5.50571 4.18435 6.91132 3.53154 8.55585C2.87874 10.2004 2.70793 12.01 3.04073 13.7558C3.37353 15.5016 4.19498 17.1053 5.40121 18.364C6.60744 19.6226 8.14426 20.4798 9.81735 20.8271C11.4904 21.1743 13.2246 20.9961 14.8006 20.3149C16.3767 19.6337 17.7237 18.4802 18.6714 17.0001C19.6192 15.5201 20.125 13.78 20.125 12C20.1223 9.61391 19.2128 7.32634 17.5959 5.63911C15.9789 3.95189 13.7867 3.00278 11.5 3Z"
                          fill="#4ECB71"
                        />
                      </svg>
                      <p className="w-[1022px] text-white text-base md:text-lg lg:text-2xl font-normal font-sansation">
                        {desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
          <Pagination>
            <PaginationContent>
              <PaginationItem
                onClick={() => {
                  if (index > 0) {
                    setIndex(index - 1);
                  }
                }}
              >
                <PaginationPrevious />
              </PaginationItem>
              {experiences.map((experience, i) => (
                <PaginationItem onClick={() => setIndex(Number(i))} key={i}>
                  <PaginationLink isActive={Number(i) == index}>
                    {i + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}

              <PaginationItem
                onClick={() => {
                  if (index != experiences.length - 1) {
                    setIndex(index + 1);
                  }
                }}
              >
                <PaginationNext />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </main>
  );
}
