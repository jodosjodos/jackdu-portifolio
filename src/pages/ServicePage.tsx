import Header from "../components/Header";
import SectionTitle from "../components/SectionTitle";
import { services } from "../statics/data";

function ServicePage() {
  return (
    <div className="w-full flex flex-col items-center ">
      <Header active="Service" />
      <section
        className="pt-[180px] text-white flex  items-center w-full justify-center lg:px-[100px] xl:max-w-[1780px] px-[10px]"
        id="service"
      >
        <div className="bg-black p-[30px]  max-w-[540px] rounded-[10px] md:max-w-[720px] lg:max-w-full w-full ">
          <div className="flex flex-col gap-[15px]">
            <SectionTitle title="Service" />

            <p className="font-poppins text-[36px] font-[700] uppercase">
              My Services
            </p>
          </div>
          <div className="h-fit bg-black text-white flex flex-col items-center">
            <div className="grid pt-[45px] grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[20px]">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-[#FFFFFF14] service-card p-6 flex flex-col cursor-pointer items-center justify-center   transition-colors h-[400px] duration-300 transform hover:-translate-y-1"
                >
                  <div className="relative">
                    <div className="bg-[#FFFFFF89] gray-card h-[80px] w-[80px] absolute rounded-[8px] left-[-10px] top-[-10px]"></div>
                  <div className="bg-green-500 h-[80px] w-[80px] rounded-[8px] mb-4 mx-auto transform green-card hover:scale-105 transition-transform duration-300"></div>
            
                  </div>
                  <h4 className="text-center text-[28px] font-semibold">
                    {service.title}
                  </h4>
                  <p className="text-center mt-3">{service.description}</p>
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
