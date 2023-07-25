const Footer = () => {
  return (
    <>
      <footer className="  bg-[#222] h-[8rem] flex flex-col items-center justify-center gap-y-4">
        <div className='items-center justify-center w-[12rem] h-[4rem] text-[#8892B0] gap-x-4 flex text-[2rem] mt-2 '>
          <a href='https://github.com/sammy429b' target='_blank' rel='noreferrer' className='duration-200 mx-2 hover:mb-2'>
          <i className="fa-brands fa-github"></i>
          </a>
          <a href='https://instagram.com/_sam_429_b?igshid=NGExMmI2YTkyZg==' target='_blank' rel='noreferrer' className='duration-200 mx-2 hover:mb-2'>
          <i className="fa-brands fa-instagram"></i>
          </a>
          <a href='https://www.linkedin.com/in/samarth-bahirgonde/' target='_blank' rel='noreferrer' className="duration-200 mx-2 hover:mb-2">
          <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
        <p className="text-[#666666] text-[1.2rem]">Designed by Samarth Bahirgonde</p>
    </footer>
    </>
  )
}

export default Footer
