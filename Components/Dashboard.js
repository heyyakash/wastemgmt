import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import {useState} from "react";


function Dashboard() {
    const [reward, setReward] =useState("");
    const [success , setSuccess] = useState("hidden")
    
    return (
        <div className="w-full drop-shadow-2xl min-h-[100vh] flex justify-center relative items-center">
            <div className="w-full flex relative flex-col xl:flex-row max-w-[1000px] z-[100] h-[100vh] xl:h-[80vh]">
                <LeftSide  />
                <RightSide setSuccess = {setSuccess} setReward = {setReward} /> 
                <img src="/baloon.svg" className="hidden xl:block absolute z-0 h-[200px] -right-32 top-2" alt="" />   
                <img src="/enjoy.svg" className="hidden xl:block absolute rotate-[-45deg] z-0 h-[200px] -left-28 top-40" alt="" />
                <img src="/tree.svg" className="hidden xl:block absolute  z-0 h-[200px] -right-32 -bottom-10" alt="" />     
            </div>

            {/* ================ Success Message ================ */}
            <div className={`absolute ${success} z-[1000] animateSuccess h-[150px] drop-shadow-xl top-2  w-[500px] flex flex-wrap`}> 
                <div className="bg-green-400 flex-[.4] flex justify-center items-center">
                    <div className="h-20 w-20 border-4  p-2 border-white rounded-full justify-center items-center">
                        <img src="/smily.png" className="h-full w-full" alt="" />
                    </div>    
                </div>
                <div className="flex-1 border-4 border-green-400 pl-4 pt-4 bg-white">
                    <h1 className="text-2xl font-lilita text-green-400 font-light">Thank you for Donating</h1>
                    <p className="text-green-400">Your Donation means a lot. Thank you for helping us and congratulations,</p>
                    <p>{`You Earned +${reward} Points`}</p>
                </div>
            </div>

        </div>
    )
}

export default Dashboard
