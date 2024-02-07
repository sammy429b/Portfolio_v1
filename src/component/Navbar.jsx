import { useState } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(true);
    const changeToggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <header className="w-full  h-[5rem] flex justify-between px-2 items-center bg-[#F0F0F0]">
                <div className="">
                    <img src="images/logo.png" alt="logo" className="w-[2.5rem] ml-4 md:pt-0" />
                </div>
                <div className={`z-10 fixed md:static top-20 bottom-0 pt-6 pl-8 space-y-10 bg-[#0A192F] lg:text-black md:text-black sm:text-white text-white w-[100%] left-0 md:w-3/6 md:flex md:space-y-0 justify-between items-center md:bg-[#F0F0F0] transition-all delay-400 ${isOpen ? 'hidden' : 'top-20'}`}>
                    <p onClick={changeToggle}><a href="#about" id="" className="hover:text-blue-600 duration-300 text-[1.1rem] font-medium hover:border-blue-600 hover:border-b-4 px-2 pb-2">About </a></p>
                    <p onClick={changeToggle}><a href="#skills" id="" className="hover:text-blue-600 duration-300 text-[1.1rem] font-medium hover:border-blue-600 hover:border-b-4 px-2 pb-2">Skills </a></p>
                    <p onClick={changeToggle}><a href="#project" id="" className="hover:text-blue-600 duration-300 text-[1.1rem] font-medium hover:border-blue-600 hover:border-b-4 px-2 pb-2">Project </a></p>
                    <p onClick={changeToggle}><a href="#contact" id="" className="hover:text-blue-600 duration-300 text-[1.1rem] font-medium hover:border-blue-600 hover:border-b-4 px-2 pb-2">Contact </a></p>
                    <p onClick={changeToggle} className=" ">
                        <a href="https://drive.google.com/file/d/1GIdcAN5PElSs_hjqrY2RdV89lh_yW-JW/view?usp=drive_link" className=""><button className="w-[7rem] h-[2.6rem] border-2 text-white text-[1.05rem] rounded-md bg-blue-600 hover:bg-blue-500 duration-500 hover:text-white mr-2">Resume</button></a>
                    </p>
                </div>
                <button className="md:hidden w-[2rem] h-auto mr-4" onClick={changeToggle}>
                    {isOpen ? <i className="fa fa-bars text-xl"></i> :
                        <i className="fa fa-close text-xl"></i>}
                </button>
            </header>
        </>
    )
}
export default Navbar
