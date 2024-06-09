import Footer from "./Footer";
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import {useForm} from 'react-hook-form'
import { useState } from "react";
import axios from 'axios'


const Contact = () => {
 
  const [loading, setLoading] = useState(false)
  const{register, handleSubmit} = useForm()

  const handleSendEmail = async(values) =>{

    console.log(values)
    try {
        const response = await axios.post('http://localhost:4000/contact', values)
        const data = await response.data;
        console.log(response)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <ToastContainer position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light" />
      <div className="bg-[#f0f0f0] w-full min-h-screen flex flex-col items-center justify-center  text-center">
        <div
          className="flex flex-col items-center justify-center gap-y-3"
          id="contact"
        >
          <h3 className="text-[2rem] font-medium">GET IN TOUCH!</h3>
          <p className="w-[20rem] sm:w-[27rem] text-[1.1rem]">
            Whether you have an idea for a project or just want to chat, feel
            free to shoot me a message!
          </p>

          <form onSubmit={handleSubmit(handleSendEmail)} className="flex flex-col gap-4">

            <div className="my-4 flex flex-col lg:flex-row gap-y-6 lg:gap-x-4 ">
              <div className="relative mx-0">
                <input
                 {...register('name', {required:true})}
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
              <div className="relative mx-0">
                <input
                  {...register('email', {required: true})}
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

            <div className="relative my-2 mx-0">
              <input
                {...register('message',{required:true}) }      
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
              <input type="submit" className="w-[8.5rem] h-[2.8rem] rounded-md text-[1.1rem] text-white flex items-center justify-center border-2 bg-blue-600 hover:bg-blue-500 hover:text-white hover:border-blue-500 hover:duration-[0.7s]" />
            </div>

          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
