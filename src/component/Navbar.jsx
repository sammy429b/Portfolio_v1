import MaterialIcon from "material-icons-react";

const Navbar = () => {
    return (
        <>
            <header className="w-full h-[5rem] flex justify-between px-2 items-center md:bg-[#0A192F]">
                <div className="">
                    <img src="images/logo.png" alt="logo" className="w-[2.5rem] ml-4 md:pt-0"/>
                </div>
                <div className="hidden fixed md:static top-20 bottom-0 space-y-5 pl-[1rem] bg-red-600 text-white w-full md:w-3/6 md:flex md:space-y-0 justify-between items-center md:bg-[#0A192F]">
                    <p><a href="#about"   className="hover:text-[#8892B0] duration-300 text-[1.05rem] hover:border-[#8890B0] hover:border-b-4 px-2 pb-2">About </a></p>
                    <p><a href="#skills"  className="hover:text-[#8892B0] duration-300 text-[1.05rem] hover:border-[#8890B0] hover:border-b-4 px-2 pb-2">Skills </a></p>
                    <p><a href="#project" className="hover:text-[#8892B0] duration-300 text-[1.05rem] hover:border-[#8890B0] hover:border-b-4 px-2 pb-2">Project </a></p>
                    <p><a href="#contact" className="hover:text-[#8892B0] duration-300 text-[1.05rem] hover:border-[#8890B0] hover:border-b-4 px-2 pb-2">Contact </a></p>
                    <p className=" ">
                        <a href="Samarth Bahirgonde.pdf" download className=""><button className="w-[6rem] h-[2.5rem] border-2 rounded-sm border-[#8892B0] hover:bg-[#8892B0] duration-500 hover:text-black mr-2">Resume</button></a>
                    </p>
                </div>
                <div className="md:hidden w-[2rem] mr-4 ">
                <MaterialIcon icon="list" size="medium" />
                </div>

            </header>


        </>
    )
}

export default Navbar
