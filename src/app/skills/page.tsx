import Image from "next/image";
import { Button } from "@/components/ui/button";
import Korex from "../../../public/korex.png";

export default function Home() {
  return (
    <main className="flex min-h-scree n flex-col items-center justify-between px-8 md:px-24 py-24 ">
      <div className="z-10 max-w-5xl w-full ">
        <div className="space-y-11">
          <h2 className="text-white text-4xl md:text-6xl font-normal font-sansation underline">
            Skills:{" "}
          </h2>
          <div className="grid sm:grid-cols-2 max-w-[692px] mx-auto gap-8">
            <div className="w-full max-w-xs bg-[#1E1E1E] rounded-[20px] px-8 pb-10 pt-3 place-self-center">
              <svg
                width="90"
                height="90"
                viewBox="0 0 90 90"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.5 41.25H13.7625C15.3 36.8625 19.4625 33.75 24.375 33.75C27.3587 33.75 30.2202 34.9353 32.33 37.045C34.4397 39.1548 35.625 42.0163 35.625 45C35.625 47.4375 34.8375 49.6875 33.525 51.525L37.7625 57.5625L49.1625 15L54.7875 22.9875L62.625 34.1625L65.625 33.75C70.5375 33.75 74.7 36.8625 76.2375 41.25H82.5V48.75H76.2375C75.4665 50.9474 74.0303 52.8502 72.1286 54.1942C70.2268 55.5382 67.9537 56.2567 65.625 56.25C62.6413 56.25 59.7798 55.0647 57.67 52.9549C55.5603 50.8452 54.375 47.9837 54.375 45C54.375 42.5625 55.1625 40.3125 56.475 38.475L52.2375 32.4375L40.8375 75L27.375 55.8375C24.6302 56.6081 21.6949 56.3042 19.1662 54.9876C16.6374 53.671 14.7052 51.4406 13.7625 48.75H7.5V41.25ZM65.625 39.375C64.1332 39.375 62.7024 39.9676 61.6475 41.0225C60.5926 42.0774 60 43.5082 60 45C60 46.4918 60.5926 47.9226 61.6475 48.9775C62.7024 50.0324 64.1332 50.625 65.625 50.625C67.1168 50.625 68.5476 50.0324 69.6025 48.9775C70.6574 47.9226 71.25 46.4918 71.25 45C71.25 43.5082 70.6574 42.0774 69.6025 41.0225C68.5476 39.9676 67.1168 39.375 65.625 39.375ZM24.375 39.375C22.8832 39.375 21.4524 39.9676 20.3975 41.0225C19.3426 42.0774 18.75 43.5082 18.75 45C18.75 46.4918 19.3426 47.9226 20.3975 48.9775C21.4524 50.0324 22.8832 50.625 24.375 50.625C25.8668 50.625 27.2976 50.0324 28.3525 48.9775C29.4074 47.9226 30 46.4918 30 45C30 43.5082 29.4074 42.0774 28.3525 41.0225C27.2976 39.9676 25.8668 39.375 24.375 39.375Z"
                  fill="#4ECB71"
                />
              </svg>
              <h5 className="text-white text-2xl md:text-[32px] font-bold font-sansation">
                Product Strategy
              </h5>
              <p className="text-white text-lg md:text-xl font-normal font-sansation ">
                Roadmapping, A/B Tests, Project Management.
              </p>
            </div>
            <div className="w-full max-w-xs bg-[#1E1E1E] rounded-[20px] px-8 pb-10 pt-3 place-self-center">
              <svg
                width="90"
                height="90"
                viewBox="0 0 90 90"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M34.155 44.0925L42.72 35.505L35.0175 27.78L30.6787 32.1188L28.0237 29.4675L32.3437 25.125L25.0237 17.805L16.4362 26.3925L34.155 44.0925ZM63.5325 73.4925L72.12 64.905L64.8037 57.585L60.4612 61.905L57.8062 59.25L62.1262 54.9075L54.4762 47.28L45.9075 55.845L63.5325 73.4925ZM26.8237 75H15V63.1725L31.4775 46.695L11.25 26.3925L25.0237 12.6188L45.42 32.9438L62.1712 16.17C62.5837 15.755 63.0187 15.4563 63.4762 15.2738C63.9337 15.0913 64.4212 15 64.9387 15C65.4587 15 65.9463 15.0913 66.4012 15.2738C66.8563 15.4563 67.2925 15.755 67.71 16.17L73.83 22.53C74.245 22.9425 74.5325 23.3775 74.6925 23.835C74.85 24.29 74.9287 24.7775 74.9287 25.2975C74.9287 25.8175 74.8487 26.29 74.6887 26.715C74.5312 27.14 74.245 27.56 73.83 27.975L57.225 44.6738L77.3812 64.9763L63.6075 78.75L43.305 58.5225L26.8237 75ZM18.75 71.25H25.2262L62.0513 34.4513L55.5487 27.9525L18.75 64.7775V71.25ZM58.845 31.1738L55.5487 27.9525L62.0475 34.4513L58.845 31.1738Z"
                  fill="#4ECB71"
                />
              </svg>

              <h5 className="text-white text-2xl md:text-[32px] font-bold font-sansation">
                Product Design{" "}
              </h5>
              <p className="text-white text-lg md:text-xl font-normal font-sansation ">
                User Stories, User Flow, Wireframes, Persona Writing.{" "}
              </p>
            </div>
            <div className="w-full max-w-xs bg-[#1E1E1E] rounded-[20px] px-8 pb-10 pt-3 place-self-center">
              <svg
                width="90"
                height="90"
                viewBox="0 0 90 90"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M90 16.875V45H84.375V26.499L50.625 60.249L33.75 43.374L4.08691 72.9932L0.131836 69.0381L33.75 35.376L50.625 52.251L80.376 22.5H61.875V16.875H90Z"
                  fill="#4ECB71"
                />
              </svg>

              <h5 className="text-white text-2xl md:text-[32px] font-bold font-sansation">
                Market & User Research{" "}
              </h5>
              <p className="text-white text-lg md:text-xl font-normal font-sansation ">
                Market Analysis, Experiment Design, Usability Testing.{" "}
              </p>
            </div>
            <div className="w-full max-w-xs bg-[#1E1E1E] rounded-[20px] px-8 pb-10 pt-3 place-self-center">
              <svg
                width="90"
                height="90"
                viewBox="0 0 90 90"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M26.25 75H63.75M33.75 60V75M56.25 60V75M33.75 45V30M45 45V41.25M56.25 45V37.5M11.25 18.75C11.25 17.7554 11.6451 16.8016 12.3483 16.0984C13.0516 15.3951 14.0054 15 15 15H75C75.9946 15 76.9484 15.3951 77.6517 16.0984C78.3549 16.8016 78.75 17.7554 78.75 18.75V56.25C78.75 57.2446 78.3549 58.1984 77.6517 58.9016C76.9484 59.6049 75.9946 60 75 60H15C14.0054 60 13.0516 59.6049 12.3483 58.9016C11.6451 58.1984 11.25 57.2446 11.25 56.25V18.75Z"
                  stroke="#4ECB71"
                  strokeWidth="7.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <h5 className="text-white text-2xl md:text-[32px] font-bold font-sansation">
                Analytics & Programming{" "}
              </h5>
              <p className="text-white text-lg md:text-xl font-normal font-sansation ">
                Software Development and Management.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
