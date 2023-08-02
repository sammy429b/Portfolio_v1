import Footer from "./Footer";
import { useRef } from "react";
import emailjs from '@emailjs/browser'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_lbxxd9h', 'template_otgk3yd', form.current, 'rA05W-pTSuyJz3qtq')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div>
      <div className="bg-[#f0f0f0] w-full h-[40rem] flex flex-col items-center justify-center  text-center">
        <div
          className="flex flex-col items-center justify-center gap-y-3"
          id="contact"
        >
          <h3 className="text-[2rem] font-medium">GET IN TOUCH!</h3>
          <p className="w-[20rem] sm:w-[27rem] text-[1.1rem]">
            Whether you have an idea for a project or just want to chat, feel
            free to shoot me an email!
          </p>

          <form ref={form} onSubmit={sendEmail} method="POST" className="flex flex-col gap-4 ">

          <div className="my-4 flex flex-col lg:flex-row gap-y-6 lg:gap-x-4 ">
            <div className="relative mx-2">
              <input
                type="text"
                name="name"
                id="name"
                className="border-b-2 border-[#8892B0] placeholder-transparent bg-[#f0f0f0] py-1 w-[23rem] sm:w-[26rem] lg:w-[15rem] appearance-none outline-none block peer"
                autoComplete="off"
                required
                placeholder="Name"
              />
              <label
                htmlFor="name"
                className="absolute text-[.9rem] left-0 -top-4  peer-placeholder-shown:top-1 peer-focus:-top-4 peer-focus:text-gra peer-focus:text-[0.8rem] duration-300 transition-all"
                >
                Name
              </label>
            </div>
            <div className="relative mx-2">
              <input
                type="email"
                name="email"
                id="email"
                className="border-b-2 border-[#8892B0] placeholder-transparent bg-[#f0f0f0] py-1 w-[23rem] sm:w-[26rem] lg:w-[15rem] appearance-none outline-none block peer"
                autoComplete="off"
                required
                placeholder="Email"
                />
              <label
                htmlFor="email"
                className="absolute text-[.9rem] left-0 -top-4  peer-placeholder-shown:top-1 peer-focus:-top-4 peer-focus:text-gra peer-focus:text-[0.8rem] duration-300 transition-all"
              >
                Email
              </label>
            </div>
          </div>

          <div className="relative my-2 mx-2">
            <input
              type="text"
              name="message"
              id="message"
              className="border-b-2 border-[#8892B0] placeholder-transparent bg-[#f0f0f0] py-1 w-[23rem] sm:w-[26rem] lg:w-[31rem] appearance-none outline-none block peer"
              autoComplete="off"
              required
              placeholder="Message"
            />
            <label
              htmlFor="message"
              className="absolute text-[.9rem] left-0 -top-4  peer-placeholder-shown:top-1 peer-focus:-top-4 peer-focus:text-gra peer-focus:text-[0.8rem] duration-300 transition-all"
            >
              Message
            </label>
          </div>
          <div className="mx-2 w-full flex items-center justify-center">
            <input type="submit"  className="w-[8rem] h-[2.5rem] text-[1.1rem] text-[#6161BE] flex items-center justify-center border-2 border-[#6161BE] hover:bg-[#6161BE] hover:text-white hover:border-[#6161BE] hover:duration-[0.7s]" />
          </div>
            
      </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
