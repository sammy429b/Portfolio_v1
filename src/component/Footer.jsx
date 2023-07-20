const Footer = () => {
  return (
    <>
      <footer className="bg-[#222] h-[14rem] flex flex-col items-center justify-center gap-y-4">
        <div className="flex items-center justify-center gap-x-8">
        <p className="text-[3rem] text-[#333]">
        <i class="fa-brands fa-instagram"></i>
        </p>
            <a href="https://www.linkedin.com/in/samarth-bahirgonde/" className=""><img src="images/linkedin.png" className="w-[4rem] bg-[#333] p-4 rounded"/></a>
            <a href="https://github.com/sammy429b" className=""><img src="images/github-sign.png" className="w-[4rem] bg-[#333] p-4 rounded"/></a>
            <a href="#" className=""><img src="images/instagram.png" className="w-[4rem] bg-[#333] p-4 rounded"/></a>
            <a href="#" className=""><img src="images/twitter.png" className="w-[4rem] bg-[#333] p-4 rounded"/></a>
        </div>
        <p className="text-[#666666] text-[1.2rem]">Designed by Samarth Bahirgonde</p>
    </footer>
    </>
  )
}

export default Footer
