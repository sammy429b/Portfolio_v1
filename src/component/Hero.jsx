import { Typewriter } from 'react-simple-typewriter'
const Hero = () => {
  // const {text} = useTypewriter({
  //   words:['Developer', 'Designer', 'Coder'],
  //   loop:{},
  // });
  return (
    <div className='flex'>
      <div className="lg:w-1/2 ont-Poppins w-full h-[41.4rem] bg-[#0A192F] pb-24 flex flex-col pl-[7rem] gap-y-1 text-left lg:items-start justify-center">
        <h1 className="font-Poppins text-[1.8rem] lg:text-[2.3rem] text-[#F5F5F5] font-semibold">Hello, I'm a</h1>
        <h1 className="font-Poppins text-[2.2rem] lg:text-[3rem] text-[#16502D] font-semibold leading-none">Samarth Bahirgonde</h1>
        <p className=" font-Poppins text-[2.7rem] lg:text-[4rem] text-[#8892B0] font-semibold leading-none">
          <Typewriter words={["Developer.", "Designer."]} cursor deleteOnComplete delaySpeed={3000} loop deleteSpeed={150}/>
        </p>
        
        <div className='mt-4'>
          <button className='shadow-lg w-[8rem] h-[3rem] text-[#8892B0] border-2 rounded-sm border-[#8892B0] hover:bg-[#8892B0] duration-500 hover:text-black mr-2'>Get in touch</button>
        </div>

        <div className='text-[#8892B0] gap-x-4 flex text-[2rem] mt-2 '>
          <a href='https://github.com/sammy429b' target='_blank' rel='noreferrer' className='hover:text-[2.2rem] duration-200 mx-1 hover:mx-0'>
          <i className="fa-brands fa-github"></i>
          </a>
          <a href='https://instagram.com/_sam_429_b?igshid=NGExMmI2YTkyZg==' target='_blank' rel='noreferrer' className='hover:text-[2.2rem] duration-200 mx-2 hover:mx-1'>
          <i className="fa-brands fa-instagram"></i>
          </a>
          <a href='https://www.linkedin.com/in/samarth-bahirgonde/' target='_blank' rel='noreferrer' className='hover:text-[2.2rem] duration-200 mx-2 hover:mx-1'>
          <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </div>
      <div className='w-1/2 lg:flex items-center justify-center hidden  bg-[#0A192F]'>
        <img src="/images/Hero.svg" className="w-[35.9rem] object-fill " alt="" />
      </div>
    </div>
  )
}

export default Hero
