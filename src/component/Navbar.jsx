import MaterialIcon from "material-icons-react";

const Navbar = () => {
    return (
        <>
            <header className="w-full h-[5rem] flex justify-between px-2 items-center bg-[#F0F0F0]">
                <div className="">
                    {/* <img src="images/logo.png" alt="logo" className="w-[2.5rem] ml-4 md:pt-0"/> */}
                </div>
                <div className="hidden fixed md:static top-20 bottom-0 space-y-5 pl-[1rem] bg-red-600 text-black w-full md:w-3/6 md:flex md:space-y-0 justify-between items-center md:bg-[#F0F0F0]">
                    <p><a href="#about"  id="" className="hover:text-blue-600 duration-300 text-[1.1rem] font-medium hover:border-blue-600 hover:border-b-4 px-2 pb-2">About </a></p>
                    <p><a href="#skills" id="" className="hover:text-blue-600 duration-300 text-[1.1rem] font-medium hover:border-blue-600 hover:border-b-4 px-2 pb-2">Skills </a></p>
                    <p><a href="#project"id="" className="hover:text-blue-600 duration-300 text-[1.1rem] font-medium hover:border-blue-600 hover:border-b-4 px-2 pb-2">Project </a></p>
                    <p><a href="#contact"id="" className="hover:text-blue-600 duration-300 text-[1.1rem] font-medium hover:border-blue-600 hover:border-b-4 px-2 pb-2">Contact </a></p>
                    <p className=" ">
                        <a href="Samarth Bahirgonde.pdf" download className=""><button className="w-[7rem] h-[2.6rem] border-2 text-white text-[1.05rem] rounded-md bg-blue-600 hover:bg-blue-500 duration-500 hover:text-white mr-2">Resume</button></a>
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
