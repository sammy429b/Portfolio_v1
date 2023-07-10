const Contact = () => {
  return (
    <div>
      <div className="bg-[#f0f0f0] w-full h-[31rem] flex flex-col items-center justify-center  text-center">
            <div className="flex flex-col items-center justify-center gap-y-3" id="contact">
                <h3 className="text-[2rem] font-medium">GET IN TOUCH!</h3>
                <p className="w-[27rem] text-[1.1rem]">Whether you have an idea for a project or just want to chat, feel free to shoot me an email!</p>
                <a href="mailto:samarthnbahirgonde49@gmail.com" className="w-[10rem] h-[3rem] text-[1.2rem] text-[#6161BE] flex items-center justify-center border-2 border-[#111111] hover:bg-[#6161BE] hover:text-white hover:border-[#6161BE] hover:duration-[0.7s]">Say Hello</a>
            </div>

        </div>

        <footer className="bg-[#222] h-[14rem] flex flex-col items-center justify-center gap-y-4">
        <div className="flex items-center justify-center gap-x-8">
            <a href="https://www.linkedin.com/in/samarth-bahirgonde/" className=""><img src="images/linkedin.png" className="w-[4rem] bg-[#333] p-4 rounded"/></a>
            <a href="https://github.com/sammy429b" className=""><img src="images/github-sign.png" className="w-[4rem] bg-[#333] p-4 rounded"/></a>
            <a href="#" className=""><img src="images/instagram.png" className="w-[4rem] bg-[#333] p-4 rounded"/></a>
            <a href="#" className=""><img src="images/twitter.png" className="w-[4rem] bg-[#333] p-4 rounded"/></a>
        </div>
        <p className="text-[#666666] text-[1.2rem]">Samarth Bahirgonde ©2023</p>
    </footer>
    </div>
  )
}

export default Contact
