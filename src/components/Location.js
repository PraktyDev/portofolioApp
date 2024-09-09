import { BsArrowUpRightCircleFill } from "react-icons/bs";

const FetchApi = async () =>{
    const response = await fetch(`https://ipinfo.io?token=${process.env.API_SECRET}`)
    const data = await response.json()
    return data
}


const Location = async () => {
    const api = await FetchApi()

  return (
    <div className="bg-slate-950 rounded-md text-white flex flex-col gap-2 p-2 h-1/2">
        <div className="flex flex-row justify-center laptop:justify-between items-center px-2">
            <div className="flex flex-col items-center laptop:items-start">
                <h2>Your Location</h2>
                <p className="text-sm text-blue-500">Auto Detect location</p>                        
            </div>
            <BsArrowUpRightCircleFill size={20} color="blue" className="hidden laptop:block"/>
        </div>

        <div className="mx-auto flex flex-col justify-center items-center ">
            <div className="flex items-center py-3 gap-2">
                <div className="flex gap-6">
                    <p className="text-slate-400 text-xs">City</p>
                    <h1 className="text-lg text-slate-100 text-nowrap">{api.city}</h1>    
                </div>
                
                <div className="bg-blue-500 rounded-lg w-0.5 h-8" />

                <div className="flex gap-6">
                    <h1 className="text-lg text-slate-100 text-nowrap">{api.country}</h1>
                    <p className="text-slate-400 text-xs">Country</p> 
                </div>  
            </div>

            <div className="flex flex-col justify-center items-center">
                <p className="text-xs text-slate-500">Your Timezone:</p>
                <p className="text-slate-100 text-md">{api.timezone}</p>  
            </div>
            
            <div className="flex flex-col justify-center mt-4 items-center">
                <p className="text-xs text-slate-500">Your Network Provider:</p>
                <p className="text-slate-100 text-md">{api.org}</p>  
            </div>
        </div>   
    </div>
  )
}

export default Location