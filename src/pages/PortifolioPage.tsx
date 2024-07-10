import { useState } from "react";
import { Link } from "react-router-dom";
import SectionTitle from "../components/SectionTitle";
import Layout from "../layout/Layout";
import { filters, portfolio } from "../statics/data";



function PortfolioPage() {
  const [selectedFilter, setSelectedFilter] = useState("all");
  
  const filteredServices = selectedFilter === "all"
    ? portfolio
    : portfolio.filter(service => service.type === selectedFilter);

  return (
    <Layout  active={"Portifolio"}>
     
      <section
        className="pt-[180px] text-white flex items-center w-full justify-center lg:px-[100px] xl:max-w-[1780px] px-[10px]"
        id="portfolio"
      >
        <div className="bg-black p-[30px] max-w-[540px] rounded-[10px] md:max-w-[720px] lg:max-w-full w-full ">
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
                className={`py-[10px] px-[20px] bg-[#1b1a1b] font-bold rounded-md hover:bg-primary hover:cursor-pointer ${
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
                  className="flex flex-col cursor-pointer max-w-xs xl:min-w-[360px] w-full"
                  to={portfolio.url}
                >
                  <div className="flex flex-col items-center p-4 ">
                    <img
                      src={portfolio.image}
                      alt={portfolio.title}
                      className="w-full h-48 object-cover "
                    />
                    <h4 className="mt-4 text-green-600 cursor-pointer font-semibold text-[24px]">
                      {portfolio.title}
                    </h4>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default PortfolioPage;
