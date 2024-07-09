import { useState } from "react";
import { headers } from "../statics/data";

function HomePage() {
  const [activeHeader, setActiveHeader] = useState("Home");

  const handleHeaderClick = (headerName:string) => {
    setActiveHeader(headerName);
  };

  return (
    <header className="flex px-[10%] main items-center w-full h-screen flex-col justify-center">
      <div className="text-white w-full md:text-start text-center flex flex-col gap-[20px]">
        <h1 className="md:text-[48px] text-[36px] font-[700]">
          <a>Jack Du</a>
        </h1>
        <p className="max-w-[550px] md:text-[24px] text-[20px] leading-[30px]">
          I'm a senior Full Stack, Blockchain Developer with 10 years of experiences.
        </p>
        <div className="flex gap-[20px] items-center">
          {headers.map((header, index) => (
            <a
              key={index}
              className={`header-link ${header.name === activeHeader ? "active" : ""}`}
              href={header.to}
              onClick={() => handleHeaderClick(header.name)}
            >
              {header.name}
            </a>
          ))}
        </div>
        <div className="flex md:justify-start justify-center">
          <button className="bg-[#1e1d1e] italic rounded-[50%] h-[40px] w-[70px] text-[16px] hover:bg-primary">
            LinkedIn
          </button>
        </div>
      </div>
    </header>
  );
}

export default HomePage;
