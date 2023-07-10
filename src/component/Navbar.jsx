import MaterialIcon from "material-icons-react";

const Navbar = () => {
    return (
        <>
            <header className=" w-full h-[5rem] flex justify-between px-2 items-center md:bg-[#0A192F]">
                <div className="">
                    <img src="images/logo.png" alt="logo" className="w-[2.5rem] ml-4 md:pt-0"/>
                </div>
                <div className="hidden fixed md:static top-20 bottom-0 space-y-5 pl-[1rem] bg-red-600 text-white w-full md:w-3/6 md:flex md:space-y-0 justify-between items-center md:bg-[#0A192F]">
                    <p><a href="#about">About </a></p>
                    <p><a href="#skills">Skills </a></p>
                    <p><a href="#project">Project </a></p>
                    <p><a href="#contact">Contact </a></p>
                    <p className="">
                        <a href="Samarth Bahirgonde.pdf" download className=""><button className="w-[6rem] h-[2.5rem] border-2 border-[#8892B0]">Resume</button></a>
                    </p>
                </div>
                <div className="md:hidden w-[2rem] mr-4">
                <MaterialIcon icon="list" size="medium" />
                </div>

            </header>


        </>
    )
}

export default Navbar
