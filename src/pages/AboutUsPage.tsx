import React from "react";
import Header from "../components/Header";
import SectionTitle from "../components/SectionTitle";
import { analytics, skills } from "../statics/data";
import CountUp from "react-countup";
import SkillProgress from "../components/SkillProgress";

function AboutUsPage() {
  
  return (
    <div className="w-full flex flex-col items-center ">
      <Header active="About" />
      <section
        className=" pt-[180px] text-white flex items-center w-full justify-center lg:px-[100px] xl:max-w-[1520px] px-[10px]"
        id="about"
      >
        <div className="bg-black p-[30px] max-w-[540px] rounded-[10px] md:max-w-[720px] lg:max-w-full w-full ">
          <div className="flex flex-col gap-[15px]">
            <SectionTitle title="About" />

            <p className="font-poppins text-[36px] font-[700] uppercase">
              Learn more about me
            </p>
          </div>
          <div className="flex w-full">
            <div className="xl:block hidden w-[1300px]"></div>
            <div className="py-[60px] flex flex-col gap-[40px]">
              <p className="text-primary font-[700] text-[26px]">
                Full Stack & Blockchain Expert
              </p>
              <div className="flex flex-col xl:flex-row gap-[30px] justify-between">
                <div className="flex flex-col flex-1 gap-[15px]">
                  <div className="flex gap-[4px] items-center">
                    <p className="font-bold">Birthday:</p>
                    <p>23 August 1990</p>
                  </div>
                  <div className="flex gap-[4px] items-center">
                    <p className="font-bold">Telegram:</p>
                    <p>https://t.me/jackdu176</p>
                  </div>
                  <div className="flex gap-[4px] items-center">
                    <p className="font-bold">City:</p>
                    <p>Singapore Singapore</p>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-[15px]">
                  <div className="flex gap-[4px] items-center">
                    <p className="font-bold">Age:</p>
                    <p>33</p>
                  </div>
                  <div className="flex gap-[4px] items-center">
                    <p className="font-bold">Degree:</p>
                    <p>Bachelor</p>
                  </div>
                  <div className="flex gap-[4px] items-center">
                    <p className="font-bold">Email:</p>
                    <p>JackDu103@hotmail.com</p>
                  </div>
                  <div className="flex gap-[4px] items-center">
                    <p className="font-bold">Full time job:</p>
                    <p>Available</p>
                  </div>
                </div>
              </div>

              <p className="leading-[30px]">
                I am a smart contract,full stack developer with 10 years of
                experiences.
                <br />✅ Frontend: React.js, Next.js, Gatsby, Vue.js, Vuex,
                Nuxt.js, Angular,React Native, Tailwind-CSS
                <br />✅ Backend: Node.js, Express.js, Nest.js, Restful API,
                Django,Mysql
                <br />✅ Blockchain: - DeFi, Dapp - Smart Contracts(development,
                integrate with frontend using Web3, deploying on Ethereum/Solana
                Network using Hardhat/Truffle/Remix) - NFT Marketplace, NFT
                games, NFT Foundry Website, NFT Art Image by rarity, OpenSea,
                Pinata, Metadata Generate, Staking, Reveal Function - ERC-20,
                ERC-721, ERC-1155, Solidity,Rust,Cardano
              </p>
            </div>
          </div>
          <div className="grid gap-[30px] grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
            {analytics.map((analytic, index) => (
              <div className="flex gap-[2px] items-center flex-col">
                <div className="bg-[#FFFFFF14] rounded-full w-[30px] h-[30px]"></div>
                <div
                  key={index}
                  className="w-full bg-[#FFFFFF14] flex-col gap-[10px] h-[180px] flex items-center justify-center"
                >
                  <CountUp
                    className="text-[36px] font-[600]"
                    separator=""
                    end={analytic.count}
                    duration={2}
                  />
                  <p>{analytic.title}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="py-[30px] px-[20px]">
            <SectionTitle title="SKILLS" />
            <div className="w-full flex   lg:flex-row  flex-col items-center gap-[40px]">
              {skills.map((skill) => (
                <div className="lg:w-[50%]">
                  <SkillProgress categories={skill.categories} seriesData={skill.percentage} />
                </div>
              ))}
              
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUsPage;
