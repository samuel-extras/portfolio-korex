import Image from "next/image";
import Korex from "../../../public/korex2.jpg";

export default function Home() {
  return (
    <main className="min-h-screen px-6 py-24 lg:px-24">
      <div className=" w-full  ">
        <div className="space-y-10 mx-auto">
          <h2 className="text-white text-4xl lg:text-6xl font-normal font-sansation underline">
            About Me
          </h2>
          <div>
            <div className="md:w-[40%] float-left w-full p-10 md:p-0 md:pr-10">
              <Image src={Korex} alt="Korede" />
            </div>
            <p className=" text-white text-xl lg:text-2xl font-normal font-sansation leading-[35px] clear-right">
              I&apos;m Oluwabusuyi Korede Joshua, a Product Manager in Ikeja,
              Nigeria, with a Computer Science degree from Gateway ICT
              Polytechnic. Specializing in crafting user-centric digital
              solutions, I&apos;ve led diverse teams across industries, refining
              roadmaps based on user feedback. Proficient in Figma, Zoho Cliq,
              Slack, Google sheet, Google Doc, Trelo Board, Jira and Asana , I
              ensure seamless communication and task efficiency.
              <br />
              <br />
              Notable achievements include successful website revamps and
              user-centric web app development. Committed to continuous
              learning, I hold certifications in Product Lifecycle Management
              and digital marketing, staying ahead in today&apos;s dynamic
              digital landscape. My passion lies in innovation, effective
              collaboration, and a deep understanding of user needs.
              <br />
              <br />
              Moreover, I am a dedicated and results-driven Product and Project
              Manager with a strong track record of leading the design,
              development, and deployment of technology, operational,
              E-commerce, and event solutions. My passion lies in expanding
              product offerings, improving the user experience, enhancing
              operational efficiency, and ultimately driving profitability. With
              a hands-on approach, I specialize in leveraging data analytics and
              fostering collaboration across cross-functional teams to deliver
              products and services on-time and within budget consistently
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
