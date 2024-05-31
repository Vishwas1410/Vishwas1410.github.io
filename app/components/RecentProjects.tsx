import { projects } from "@/data";
import { PinContainer } from "./ui/3DPin";
import { FaLocationArrow } from "react-icons/fa6";

const RecentProjects = () => {
  return (
    <div className=" py-20 w-fit " id="projects">
      <h1 className=" heading">
        A Small selection of{" "}
        <span className="text-purple">Recent Projects</span>{" "}
      </h1>
      <div className=" flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10 ">
        {projects.map(({ id, title, des, img, iconLists, link }) => (
          <div
            key={id}
            className="sm:h-[41rem] h-[32.5rem] lg:min-h-[28.5rem] sm:w-[570px] w-full flex items-center justify-center"
          >
            <PinContainer title={link} href={link}>
                <div className="relative flex items-center  justify-center overflow-hidden sm:w-[570px] sm:h-[40vh]  h-[30vh] mb-10 w-[50vw]">
                    <div className="relative w-full  h-full  lg:rounded-3xl bg-[#13162d]">
                        <img src={img} alt={title} className=" w-full h-full rounded-xl" />
                    </div>
                    {/* <img src={img} alt={title} className=" z-10 absolute h-[90vh] w-[120hw] " /> */}
                </div>
                    <h1 className="md:text-xl text-base font-bold lg:text-2xl line-clamp-1">
                        {title}
                    </h1>
                    <p className="lg:text-xl lg:font-normal line-clamp-2 font-light text-sm">
                        {des}
                    </p>
                    <div className="flex items-center justify-between mt-7 mb-3 ">
                        <div className="flex items-center">
                        {iconLists.map((icon , index) => (
                            <div key={icon} className="border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 sm:w-8 sm:h-8 flex justify-center items-center" style={{
                               transform: `translateX(-${5 * index * 2}px)`
                            }}>
                                <img src={icon} alt={icon} className="p-2" />
                            </div>
                        ))}
                        </div>
                        <div className="flex justify-center items-center">
                            <a href={link} target="_blank" rel="noopener noreferrer" className=" flex lg:text-xl md:text-xs text-sm text-purple ">
                                Check Live Site
                            </a>
                            <FaLocationArrow className="ms-3" color="#CBACF9"/>
                        </div>
                    </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
