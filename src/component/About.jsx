const About = () => {
  return (
    <>
      <div className="w-full h-[48.6rem] bg-[#FFFFFF] gap-y-8 pb-12 flex flex-col justify-center items-center" id="about">
            <h2 className="text-[1.9rem]  font-semibold uppercase">About me</h2>
            <div className=" bg-[rgb(0,0,0,0.2)] rounded-[20rem] w-[11rem] h-[11rem] flex justify-center items-center">
                <img src="images/logo.png" className="w-[5rem]" alt="profilephoto" />
            </div>
            <div className="w-[20rem] sm:w-[30rem] lg:w-[40rem]">
                <p className="text-justify text-[#666666] text-[1.2rem] font-normal">Hey! My name is Samarth and I&#39;m a web developer with a passion for front end development and design. I&#39;m currently a final year student at <a href="https://www.mmcoe.edu.in/" className="text-[#00009C]">Marathwada Mitra Mandal&#39;s College of Engineering</a> pursuing a degree in computer engineering. Adept at identifying opportunities to enhance front-end skill and improve the user experience.</p>
            </div>

        </div>
    </>
  )
}

export default About
