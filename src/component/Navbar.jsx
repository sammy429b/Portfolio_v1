const Navbar = () => {
    return (
        <>
            <header className="w-full h-[44rem] sm:h-[5rem] bg-black text-white text-[1.12rem] flex  flex-col gap-y-16 sm:flex-row items-center sm:justify-between pl-16 pr-4">
                <div className="">
                    <img src="images/logo.png" alt="logo" className="w-[3rem] pt-8 sm:pt-0"/>
                </div>
                <div className="sm:w-[45rem] flex flex-col gap-y-20 items-center sm:flex-row sm:justify-between">
                    <p><a href="#about">About </a></p>
                    <p><a href="#skills">Skills </a></p>
                    <p><a href="#project">Project </a></p>
                    <p><a href="#contact">Contact </a></p>
                    <p className="">
                        <a href="Samarth Bahirgonde.pdf" download className=""><button className="w-[7rem] h-[2.5rem] border-2 border-white">Resume</button></a>
                    </p>
                </div>
            </header>


        </>
    )
}

export default Navbar
