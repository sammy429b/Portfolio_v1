import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  return (
    <>
      <div className="flex bg-[#F0F0F0] h-screen">
        <div className="lg:w-1/2 ont-Poppins w-full   pb-24 flex flex-col pl-[7rem] gap-y-1 text-left lg:items-start justify-center">
          <h1 className="font-Poppins text-[1.7rem] lg:text-[2.3rem] text-[#7F8DAA] font-semibold">
            Hello, I'm a
          </h1>
          <h1 className="font-Poppins text-[2.3rem] lg:text-[3rem] text-[#001C55] font-semibold leading-none">
            Samarth Bahirgonde
          </h1>
          <p className=" font-Poppins text-[2.7rem] lg:text-[4rem] text-[#6674cc] font-semibold leading-none">
            <Typewriter
              words={["Developer.", "Designer."]}
              cursor
              deleteOnComplete
              delaySpeed={3000}
              loop
              deleteSpeed={150}
            />
          </p>

          <div className="mt-4">
            <a href="#contact">
              <button className="shadow-lg w-[8rem] h-[3rem] text-blue-600 border-2 rounded-sm border-blue-600 hover:bg-blue-600 duration-500 hover:text-white mr-2">
                Get in touch
              </button>
            </a>
          </div>

          <div className="items-center justify-center w-[9rem] h-[4rem] text-black flex text-[2rem] mt-2 ">
            <a
              href={import.meta.env.VITE_GitLink}
              target="_blank"
              rel="noreferrer"
              className="duration-200 mx-2 hover:mb-2 w-[10rem] hover:shadow-md px-2"
            >
              <i className="fa-brands fa-github"></i>
            </a>
            <a
              href={import.meta.env.VITE_InstaLink}
              target="_blank"
              rel="noreferrer"
              className="duration-200 mx-2 hover:mb-2 hover:shadow-md px-2"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a
              href={import.meta.env.VITE_LinkedInLink}
              target="_blank"
              rel="noreferrer"
              className="duration-200 mx-2 hover:mb-2 hover:shadow-md px-2"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </div>
        </div>
        <div className="w-1/2 lg:flex items-center justify-center hidden  ">
          <img
            src="/images/code.svg"
            className="w-[35.9rem] mix-blend-multiply object-fill p-8"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
