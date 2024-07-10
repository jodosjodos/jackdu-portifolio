import { ReactNode } from "react";

export default function TimeLine({ items, title }: { items: ReactNode[], title: string[] }): JSX.Element {
  console.log(items)
  return (
    <div className="w-full py-[20px] px-[10px]">
      {items.map((child, index) => (
        <ol className="border-l-2 border-info-100">

        <li>
          <div className="flex-start md:flex">
            <div className="-ml-[13px] flex h-[25px] w-[25px] items-center justify-center rounded-full bg-info-100 text-info-700">
              <div className="bg-[#64d36e] w-[16px] mt-[-20px] ml-[3px] h-[16px] rounded-full"></div>
            </div>
            <div className="flex mt-[-2px]  px-[20px] flex-col gap-[5px]">
              <h2 className="text-[#64d36e] font-semibold text-[18px]">{title[index]}</h2>
              {child}
            </div>
          </div>
        </li>
      </ol>
      ))}
      
    </div>
  );
}
