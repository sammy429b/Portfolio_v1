// import { useState } from "react";
// import { useEffect } from "react";
// import useSWR from 'swr'

import Work from "./Work"

const Project = () => {

  return (
    <>
      <div className="w-full h-auto text-[#8892B0] bg-black flex flex-col items-center justify-center" id="project">
        <h2 className="font-semibold text-[1.8rem] my-10">My Projects</h2>
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 sm:gap-4  gap-y-6 lg:gap-6">
          <Work/>
        </div>
      </div>
    </>
  )
}

export default Project
