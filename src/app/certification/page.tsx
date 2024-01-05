const certifications = [
  {
    cert: "January 2024 - Clients needs and software requirements",
    issuer: "University of Alberta",
  },
  {
    cert: "MAY 2023 - Product Masterclass: How to Build Digital Products",
    issuer: "Product School",
  },
  {
    cert: "APRIL 2023 - Product Lifecycle Management Greater Learning",
    issuer: "Greater Learning",
  },
  {
    cert: "SEPTEMBER 2022 - ALX Virtual Assistant Course_Honors Alx_africa",
    issuer: "ALX",
  },
  {
    cert: "APRIL 2021 - Fundamentals of digital marketing Google Digital Garage",
    issuer: "Google",
  },
];

export default function Home() {
  return (
    <main className="flex min-h-scree n flex-col items-center justify-between px-6 py-24">
      <div className="z-10 max-w-6xl w-full ">
        <div className="space-y-11 w-full">
          <h2 className="text-white text-4xl md:text-6xl font-normal font-sansation underline">
            Certification:{" "}
          </h2>
          <div className="max-w-5xl mx-auto space-y-8">
            {certifications.map((certification) => (
              <div key={certification.cert}>
                <div className="flex gap-7 items-start">
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
                  <p className=" text-white text-xl md:text-2xl font-normal font-sansation">
                    {certification.cert}
                  </p>
                </div>
                <p className=" text-white text-xl md:text-2xl font-normal font-sansation ml-12 my-2">
                  {certification.issuer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
