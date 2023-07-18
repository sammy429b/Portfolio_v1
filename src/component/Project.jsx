import { useState } from "react";
// import { useEffect } from "react";
// import useSWR from 'swr'
// import { useContext } from "react"
import Work from "./Work"
// import IncContext from "./ShowMoreProvider"
const Project = () => {
// const showmore = useContext(IncContext)
// const{counter, updateCount} = showmore

const[visible, setVisible] = useState(6)
const showMoreList = () =>{
  setVisible(preValue => preValue + 3)
}
  return (
    <>
      <div className="w-full h-auto text-[#8892B0] bg-black flex flex-col items-center justify-center" id="project">
        <h2 className="font-semibold text-[1.8rem] my-10">My Projects</h2>
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 sm:gap-4  gap-y-6 lg:gap-6">
          <Work visible={visible}/>
        </div>

        <button className="w-[8rem] h-[3rem] border-2 border-[#8892B0] my-6 text-[1.1rem] hover:bg-[#8892B0] hover:text-[black] hover:duration-300"  onClick={showMoreList}>Show more</button>
      </div>
    </>
  )
}

export default Project
