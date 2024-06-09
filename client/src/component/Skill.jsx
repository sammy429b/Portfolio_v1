


const Skill = () => {
    return (
        <>
            <div className="bg-[#F7F7F7] w-full min-h-screen flex flex-col items-center justify-center gap-y-0 " id="skills">
                <h3 className="text-[1.6rem] pb-16 text-center">SOME TECHNOLOGIES AND TOOLS I HAVE WORKED WITH</h3>

                <div className="w-[24rem] sm:w-[30rem] lg:w-[50rem] flex flex-wrap gap-x-10 lg:gap-x-14  items-center justify-center">
                    <div id="skill_1" className="flex flex-col items-center jusstify-center">
                        <p className="text-[4rem] hover:text-[#E44D26] duration-300">
                            <i className="devicon-html5-plain" ></i>
                        </p>
                        <p className="text-[1.1rem] font-medium ">HTML</p>
                    </div>

                    <div id="skill_2" className="flex flex-col items-center jusstify-center">
                        <p className="text-[4rem] hover:text-[#1572B6] duration-300">
                            <i className="devicon-css3-plain" ></i>
                        </p>
                        <p className="text-[1.1rem] font-medium ">CSS</p>
                    </div>

                    <div id="skill_3" className="flex flex-col items-center jusstify-center">
                        <p className="text-[4rem] hover:text-[#2298bd] duration-300">
                            <i className="devicon-tailwindcss-plain" ></i>
                        </p>
                        <p className="text-[1.1rem] font-medium ">Tailwindcss</p>
                    </div>

                    <div id="skill_4" className="flex flex-col items-center jusstify-center">
                        <p className="text-[4rem] hover:text-[#F0DB4F] duration-300">
                            <i className="devicon-javascript-plain" ></i>
                        </p>
                        <p className="text-[1.1rem] font-medium ">Javascript</p>
                    </div>

                    <div id="skill_5" className="flex flex-col items-center jusstify-center">
                        <p className="text-[4rem] hover:text-[#61DAFB] duration-300">
                            <i className="devicon-react-plain" ></i>
                        </p>
                        <p className="text-[1.1rem] font-medium ">React.js</p>
                    </div>

                    <div id="skill_6" className="flex flex-col items-center jusstify-center">
                        <p className="text-[4rem] hover:text-[#0074BD] duration-300">
                            <i className="devicon-java-plain" ></i>
                        </p>
                        <p className="text-[1.1rem] font-medium ">Java</p>
                    </div>

                    <div id="skill_7" className="flex flex-col items-center jusstify-center">
                        <p className="text-[4rem] hover:text-[#0acf83] duration-300">
                            <i className="devicon-figma-plain" ></i>
                        </p>
                        <p className="text-[1.1rem] font-medium ">Figma</p>
                    </div>

                    <div id="skill_8" className="flex flex-col items-center jusstify-center">
                        <p className="text-[4rem] hover:text-[#F34F29] duration-300 ">
                            <i className="devicon-git-plain" ></i>
                        </p>
                        <p className="text-[1.1rem] font-medium ">Git</p>
                    </div>

                    <div id="skill_9" className="flex flex-col items-center jusstify-center">
                        <p className="text-[4rem] hover:text-[#8892B0] duration-300">
                            <i className="devicon-github-original" ></i>
                        </p>
                        <p className="text-[1.1rem] font-medium ">Github</p>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Skill
