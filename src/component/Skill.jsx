const Skill = () => {
    return (
        <>
            <div className="bg-[#F5F5F5] w-full h-[44.6rem] flex flex-col items-center justify-center gap-y-4 " id="skills">
                <h3 className="text-[1.5rem] pb-16">SOME TECHNOLOGIES I HAVE WORKED WITH</h3>
                <div className="flex items-center justify-center gap-x-28">
                    <img src="images/html.png" className="w-[6rem]" alt="" />
                    <img src="images/css.png" className="w-[5rem]" alt="" />
                    <img src="images/js.png" className="w-[5rem]" alt="" />
                    <img src="images/github.png" className="w-[7rem]" alt="" />
                </div>
                <div className="flex items-center justify-center gap-x-28">
                    <img src="images/tailwind.png" className="w-[12rem]" alt="" />
                    <img src="images/figma.png" className="w-[12rem]" alt="" />
                </div>
            </div>
        </>
    )
}

export default Skill
