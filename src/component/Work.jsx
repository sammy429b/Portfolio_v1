import { useState } from 'react';
import useSWR from 'swr'
const Work = () => {
    const[visible, setVisible] = useState(6)
    const showMoreList = () =>{
        setVisible(preValue => preValue + 3)
    }
    const { data, error, isLoading } = useSWR("https://api.github.com/users/sammy429b/repos", async () => {
        const response = await fetch("https://api.github.com/users/sammy429b/repos");
        const data = await response.json();
        console.log(data);
        return data;
    })
    if (error) return <div className="text-white">failed to load</div>
    if (isLoading) return <div className="text-white">loading...</div>
    return (
        <>
            {
                data.slice(0,visible).map((repo) => {
                    return (
                        <div key={repo.id} className="bg-[#0A192F] rounded-lg shadow-md shadow-black text-white p-4 w-[30rem] sm:w-[19rem] lg:w-[22rem] xl:w-[28rem] h-[rem] flex flex-col items-start px-8 justify-center gap-y-8">
                            <div className=" w-[26rem] sm:w-[16rem] lg:w-[20rem] xl:w-[24rem] h-[4rem] flex items-center justify-between px-4">
                                <img src="images/folder.png" alt="" className="w-[3.5rem]" />
                                <a href={repo.clone_url}>
                                    <img src="images/githubIcon.png" alt="" className="w-[3.5rem]" />
                                </a>
                            </div>
                            <div>
                                <h2 className="text-[#8892B0] text-lg font-semibold">{repo.name}</h2>
                            </div>
                            <div>

                            </div>
                        </div>);
                })
            }
            
            <button className="w-[6rem] h-[2.5rem] border-2 border-[#8892B0]" onClick={showMoreList}>Show more</button>
        </>
    )
}

export default Work
