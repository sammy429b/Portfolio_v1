import Footer from "./Footer"
const Contact = () => {
  return (
    <div>
      <div className="bg-[#f0f0f0] w-full h-[34rem] flex flex-col items-center justify-center  text-center">
            <div className="flex flex-col items-center justify-center gap-y-3" id="contact">
                <h3 className="text-[2rem] font-medium">GET IN TOUCH!</h3>
                <p className="w-[27rem] text-[1.1rem]">Whether you have an idea for a project or just want to chat, feel free to shoot me an email!</p>
                <div>
                  <input type="text" name="name" id="name" className="border-b-2 border-[#8892B0] outline-none bg-[#f0f0f0] py-1 w-[26rem]" placeholder="Name"/>
                </div>
                <a href="mailto:samarthnbahirgonde49@gmail.com" className="w-[10rem] h-[3rem] text-[1.2rem] text-[#6161BE] flex items-center justify-center border-2 border-[#111111] hover:bg-[#6161BE] hover:text-white hover:border-[#6161BE] hover:duration-[0.7s]">Say Hello</a>
            </div>

        </div>

        <Footer/>
    </div>
  )
}

export default Contact
