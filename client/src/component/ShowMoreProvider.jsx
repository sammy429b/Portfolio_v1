import { createContext, useState } from "react"

const IncContext = createContext({
    counter : 6,
    updateCount: () =>{}
})
const ShowMoreProvider = ({childern}) => {

    const[counter, setCounter] = useState(6);
    const updateCount = () =>{
        setCounter(counter => counter + 3)
    }
  return (
    <IncContext.Provider value={{counter, updateCount}}>
      {childern}
    </IncContext.Provider>
  )
}

export default ShowMoreProvider
