import {Typewriter} from 'react-simple-typewriter'
const Hero = () => {
  // const {text} = useTypewriter({
  //   words:['Developer', 'Designer', 'Coder'],
  //   loop:{},
  // });
  return (
    <div>
      <div className="font-Poppins w-full h-[41.4rem] bg-[#0A192F] pb-24 flex flex-col items-center justify-center">
            <h1 className="text-[1.8rem] text-[#CCD6F6] font-Poppins">Welcome</h1>
            <p className=" font-Poppins text-[3.6rem] text-[#8892B0] font-semibold">
            <Typewriter words={[" I'm a Samarth."," I'm a Developer.", " I'm a Designer."]} cursor deleteOnComplete delaySpeed={4000} loop/>
            </p>
            {/* <h1 className="text-[1.6rem] text-[#CCD6F6] font-Poppins">based in Pune, Maharashtra</h1> */}
        </div>
    </div>
  )
}

export default Hero
