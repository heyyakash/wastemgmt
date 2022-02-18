import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import { useState } from "react";
import { BiMedal } from "react-icons/bi";


function Dashboard() {
    const [reward, setReward] = useState("");
    const [success, setSuccess] = useState("top-[-1000%]")

    return (
        <>
            <div className="w-full drop-shadow-2xl min-h-[100vh] flex justify-center relative items-center">
                <div className="w-full flex relative flex-col xl:flex-row max-w-[1000px] z-[100] h-[100vh] xl:h-[80vh]">
                    <LeftSide />
                    <RightSide setSuccess={setSuccess} setReward={setReward} />
                    <img src="/baloon.svg" className="hidden xl:block absolute z-0 h-[200px] -right-32 top-2" alt="" />
                    <img src="/enjoy.svg" className="hidden xl:block absolute rotate-[-45deg] z-0 h-[200px] -left-28 top-40" alt="" />
                    <img src="/tree.svg" className="hidden xl:block absolute  z-0 h-[200px] -right-32 -bottom-10" alt="" />
                </div>


            </div>

            <div className={`absolute hidden text-[lightseagreen] xl:flex flex-col xl:flex-row gap-4 bg-white/50 h-[170px] w-[500px] z-10 ${success} rounded-xl p-4 left-0 right-0 backdrop-blur-md mx-auto transition-all duration-1000`}>
                <div className="h-full">
                    <h1 className="text-[lightseagreen] text-2xl">Thank You</h1>
                    <p className="mt-4">We appreciate your help in this noble cause. Thank you so much for this. You have earnerd +{reward} points</p>
                </div>
                <div className="flex-[.5] h-full px-4 flex flex-col justify-center items-center">
                    <p className="text-[6rem]">+{reward}</p>
                </div>
            </div>
        </>
    )
}

export default Dashboard
