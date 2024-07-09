import { useState } from "react";
import { headers } from "../statics/data"

function Header({ active }:{active:string}) {
  const [activeHeader, setActiveHeader] = useState(active);

  const handleHeaderClick = (headerName:string) => {
    setActiveHeader(headerName);
  };
  return (
    <header className='flex fixed top-0 left-0  px-[10%]  items-center w-full py-[45px] flex-col justify-center'>
  <div className='text-white w-full md:text-start text-center  flex md:flex-row flex-col md:items-start items-center  justify-between gap-[20px]'
    >
      <h1 className='md:text-[48px] w-full text-start text-[36px] font-[700]'>
        <a className="w-full text-start">
        Jack Du
        </a>
        </h1>
      
        <div className="flex gap-[20px] items-center">
          {headers.map((header,index) => (
            <a   key={index}
            className={`header-link ${header.name === activeHeader ? "active" : ""}`}
            href={header.to}
            onClick={() => handleHeaderClick(header.name)}>{header.name}</a>
        ))}
        </div>
        
    </div>
    </header>
  )
}

export default Header