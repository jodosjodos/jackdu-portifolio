import Header from "../components/Header";
import SectionTitle from "../components/SectionTitle";
const services = [
  {
    title: "Web Development",
    description: "Bots Trading | Sports Betting | Booking System |",
  },
  {
    title: "Mobile App Development",
    description:
      "Online dating app | Delivery app | Fitness app | Online shopping app |",
  },
  {
    title: "Blockchain",
    description: "Defi and Dapps platform | Smart contracts | NFT |",
  },
];
function ServicePage() {
  return (
    <div className="w-full flex flex-col items-center ">
      <Header active="Service" />
      <section
        className=" pt-[180px] text-white flex items-center w-full justify-center lg:px-[100px] xl:max-w-[1520px] px-[10px]"
        id="service"
      >
        <div className="bg-black p-[30px] max-w-[540px] rounded-[10px] md:max-w-[720px] lg:max-w-full w-full ">
          <div className="flex flex-col gap-[15px]">
            <SectionTitle title="Service" />

            <p className="font-poppins text-[36px] font-[700] uppercase">
              My Services
            </p>
          </div>
          <div className="min-h-screen bg-black text-white flex flex-col items-center">
            <div className="flex space-x-4">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-gray-800 p-6 rounded-lg hover:bg-green-500 transition-colors duration-300 transform hover:-translate-y-2"
                >
                  <div className="bg-green-500 h-16 w-16 mb-4 mx-auto transform hover:scale-105 transition-transform duration-300"></div>
                  <h4 className="text-center text-xl font-semibold">
                    {service.title}
                  </h4>
                  <p className="text-center mt-2">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ServicePage;
