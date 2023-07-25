import Footer from "./Footer";
const Contact = () => {
  return (
    <div>
      <div className="bg-[#f0f0f0] w-full h-[40rem] flex flex-col items-center justify-center  text-center">
        <div
          className="flex flex-col items-center justify-center gap-y-3"
          id="contact"
        >
          <h3 className="text-[2rem] font-medium">GET IN TOUCH!</h3>
          <p className="w-[27rem] text-[1.1rem]">
            Whether you have an idea for a project or just want to chat, feel
            free to shoot me an email!
          </p>

          <div className="my-4 flex flex-col lg:flex-row gap-y-8 gap-x-4">
            <div className="relative">
              <input
                type="text"
                name="name"
                id="name"
                className="border-b-2 border-[#8892B0] placeholder-transparent bg-[#f0f0f0] py-1 w-[26rem] lg:w-[15rem] appearance-none outline-none block peer"
                autoComplete="off"
                required
                placeholder="Name"
              />
              <label
                htmlFor="name"
                className="absolute text-[1rem] left-0 -top-4  peer-placeholder-shown:top-1 peer-focus:-top-4 peer-focus:text-gra peer-focus:text-[0.85rem] duration-300 "
              >
                Name
              </label>
            </div>
            <div className="relative">
              <input
                type="email"
                name="email"
                id="email"
                className="border-b-2 border-[#8892B0] placeholder-transparent bg-[#f0f0f0] py-1 w-[26rem] lg:w-[15rem] appearance-none outline-none block peer"
                autoComplete="off"
                required
                placeholder="Email"
              />
              <label
                htmlFor="email"
                className="absolute text-[1rem] left-0 -top-4  peer-placeholder-shown:top-1 peer-focus:-top-4 peer-focus:text-gra peer-focus:text-[0.85rem] duration-300"
              >
                Email
              </label>
            </div>
          </div>

          <div className="relative my-4">
            <input
              type="text"
              name="message"
              id="message"
              className="border-b-2 border-[#8892B0] placeholder-transparent bg-[#f0f0f0] py-1 w-[26rem] lg:w-[31rem] appearance-none outline-none block peer"
              autoComplete="off"
              required
              placeholder="Message"
            />
            <label
              htmlFor="message"
              className="absolute text-[1rem] left-0 -top-4  peer-placeholder-shown:top-1 peer-focus:-top-4 peer-focus:text-gra peer-focus:text-[0.85rem] duration-300"
            >
              Message
            </label>
          </div>

          <a
            href="mailto:samarthnbahirgonde49@gmail.com"
            className="w-[10rem] h-[3rem] text-[1.2rem] text-[#6161BE] flex items-center justify-center border-2 border-[#111111] hover:bg-[#6161BE] hover:text-white hover:border-[#6161BE] hover:duration-[0.7s]"
          >
            Say Hello
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
