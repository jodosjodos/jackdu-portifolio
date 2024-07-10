import DateContainer from "../components/DateContainer";
import SectionTitle from "../components/SectionTitle";
import TimeLine from "../components/Timeline";
import Layout from "../layout/Layout";
import { experience } from "../statics/data";

function ResumePage() {
  return (
    <Layout active="Resume">
      <section
        className="pt-[180px] text-white flex  items-center w-full justify-center lg:px-[60px] xl:px-[100px] xl:max-w-[1780px] px-[10px]"
        id="service"
      >
        <div className="bg-black p-[30px]  max-w-[540px] rounded-[10px] md:max-w-[720px] lg:max-w-full w-full ">
          <div className="flex flex-col gap-[15px]">
            <SectionTitle title="RESUME" />

            <p className="font-poppins pb-[30px] text-[36px] font-[700] uppercase">
              CHECK MY RESUME
            </p>
          </div>
          <div className="flex lg:gap-[30px] flex-col lg:flex-row justify-between">
            <div className="flex lg:w-[50%] w-full flex-col py-[25px] items-start">
              <p className="text-[26px] font-semibold">Summary</p>
              <TimeLine items={[ <p className="text-[14px] my-[10px]">
                  10 years of experience in full stack,blockchain lead
                  developers
                </p>]} title={["FULL STACK & BLOCKCHAIN LEAD DEVELOPER"]}>
               
              </TimeLine>
              <p className="text-[26px] font-semibold">Education</p>
              <TimeLine items={[<div>
                <div className="flex flex-col py-[10px] gap-[20px]">
                  <DateContainer title="2008 - 2012" />
                </div>
                <p className="text-[14px] my-[5px]">
                  National University of Singapore
                </p>
              </div>]}
                title={["COMPUTER ENGINEERING"]}
              >
                
              </TimeLine>
            </div>
            <div className="flex lg:w-[50%] w-full flex-col py-[25px] items-start">
              <p className="text-[26px] font-semibold">Experience</p>
              <TimeLine
                items={experience.map((exp) => (
                  <div className="flex  pt-[20px] flex-col gap-[20px]">
                    <DateContainer title={exp.date} />
                    <p className="text-[14px] ">
                     Company: {exp.company}
                    </p>
                    <p className="text-[14px]">
                     Location:{exp.location}
                    </p>
                    <div className=" pb-[30px] flex-col flex gap-[5px]">
                      <p >Responsibilities</p>
                      {exp.responsibilities.map((responsibility) => (
                        <p className="pl-[15px] leading-[25px]">-{responsibility}</p>
                      ))}
                    </div>
                  </div>
               
                ))
                 
                }
                title={experience.map((exp)=>(exp.title))}
              ></TimeLine>

             
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default ResumePage;
