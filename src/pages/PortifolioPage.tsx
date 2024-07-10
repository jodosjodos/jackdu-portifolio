import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import SectionTitle from "../components/SectionTitle";

const services = [
  {
    image: "/online_shot.png",
    title: "Price Comparison Website",
    url: "https://ae.pricena.com/en/",
    type: "web",
  },
  {
    image: "/dating_site.png",
    title: "Dating Website",
    url: "https://gopromenad.com/",
    type: "web",
  },
  {
    image: "/NFT_market.png",
    title: "NFT Marketplace",
    url: "https://market.kryptomon.co/",
    type: "blockchain",
  },
  {
    image: "/LF_Finance.png",
    title: "LP Finance Project",
    url: "https://lp.finance/",
    type: "blockchain",
  },
];

const filters = [
  {
    name: "All",
    value: "all",
  },
  {
    name: "WEB",
    value: "web",
  },
  {
    name: "BLOCKCHAIN",
    value: "blockchain",
  },
];

function PortfolioPage() {
  const [selectedFilter, setSelectedFilter] = useState("all");
  
  const filteredServices = selectedFilter === "all"
    ? services
    : services.filter(service => service.type === selectedFilter);

  return (
    <div className="w-full flex flex-col items-center min-h-screen bg-black">
      <Header active="" />
      <section
        className="pt-36 text-white flex  px-2"
        id="portfolio"
      >
        <div className="bg-black p-8 ">
          <div className="flex flex-col gap-4">
            <SectionTitle title="portfolio" />
            <p className="font-poppins text-4xl font-bold uppercase">
              My Portfolio
            </p>
          </div>
          <div className="flex flex-row justify-center items-center gap-5 mt-5">
            {filters.map((filter) => (
              <div
                key={filter.value}
                onClick={() => setSelectedFilter(filter.value)}
                className={`py-2 px-4 bg-[#1b1a1b] font-bold rounded-md hover:bg-primary hover:cursor-pointer ${
                  selectedFilter === filter.value ? "bg-primary" : ""
                }`}
              >
                {filter.name}
              </div>
            ))}
          </div>
          <div className="bg-black text-white flex flex-col items-center mt-10 w-full">
            <div className="flex flex-row gap-5  justify-between">
              {filteredServices.map((portfolio, index) => (
                <Link
                  key={index}
                  className="flex flex-col cursor-pointer max-w-xs w-full"
                  to={portfolio.url}
                >
                  <div className="flex flex-col items-center bg-[#1b1a1b] rounded-md p-4 ">
                    <img
                      src={portfolio.image}
                      alt={portfolio.title}
                      className="w-full h-48 object-cover rounded-md"
                    />
                    <h4 className="mt-4 text-green-600 cursor-pointer font-semibold text-2xl">
                      {portfolio.title}
                    </h4>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PortfolioPage;
