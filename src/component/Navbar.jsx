const Navbar = () => {
    return (
        <>
            <header className="w-full h-[44rem] md:h-[5rem] bg-[#0A192F]  text-[#8892B0] text-[1.12rem] flex  flex-col gap-y-16 md:flex-row items-center md:justify-between pl-16 pr-4">
                <div className="">
                    <img src="images/logo.png" alt="logo" className="w-[3rem] pt-8 md:pt-0"/>
                </div>
                <div className="md:w-[40rem] flex flex-col gap-y-20 items-center md:flex-row md:justify-between">
                    <p><a href="#about">About </a></p>
                    <p><a href="#skills">Skills </a></p>
                    <p><a href="#project">Project </a></p>
                    <p><a href="#contact">Contact </a></p>
                    <p className="">
                        <a href="Samarth Bahirgonde.pdf" download className=""><button className="w-[6rem] h-[2.5rem] border-2 border-[#8892B0]">Resume</button></a>
                    </p>
                </div>
            </header>


        </>
    )
}

export default Navbar
