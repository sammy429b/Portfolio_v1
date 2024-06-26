import useSWR from 'swr'
const Work = ({visible}) => {


    const { data, error, isLoading } = useSWR("https://api.github.com/users/sammy429b/repos", async () => {
        const response = await fetch("https://api.github.com/users/sammy429b/repos");
        const data = await response.json();
        return data;
    })
    if (error) return <div className="text-white">failed to load</div>
    if (isLoading) return <div className="text-white">loading...</div>
    return (
        <>
            {
                data.slice(0,visible).map((repo) => {
                    return (
                        <div key={repo.id} className="bg-[#0A192F] rounded-lg shadow-md shadow-black text-white sm:w-[19rem] lg:w-[22rem] xl:w-[28rem] h-[rem] flex flex-col items-start p-4 lg:p-6 justify-center gap-y-8">
                            <div className=" w-[20rem]  sm:w-[19rem] lg:w-[20rem] xl:w-[26rem] h-[4rem] flex items-center justify-between p-4">
                                <img src="images/folder.png" alt="" className="w-[3.5rem]" />
                                <a href={repo.clone_url}>
                                    <img src="images/githubIcon.png" alt="" className="w-[3.5rem]" />
                                </a>
                            </div>
                            <div className='px-2'>
                                <h2 className="text-[#8892B0] text-lg font-semibold">{repo.name}</h2>
                            </div>
                            <div>

                            </div>
                        </div>);
                })
            }
            
        </>
    )
}

export default Work
