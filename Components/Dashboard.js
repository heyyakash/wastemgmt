import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import {useState} from "react";


function Dashboard() {
    const [credit, setCredit] =useState("");
    
    return (
        <div className="w-full min-h-[100vh] flex justify-center relative items-center">
            <img src="/baloon.svg" className="hidden xl:block absolute z-0 h-[200px] right-32 top-2" alt="" />   
            <img src="/enjoy.svg" className="hidden xl:block absolute rotate-[-45deg] z-0 h-[200px] left-40" alt="" />
            <img src="/tree.svg" className="hidden xl:block absolute  z-0 h-[200px] right-32 bottom-20" alt="" />
            <div className="w-full flex flex-col xl:flex-row max-w-[1000px] z-[100] xl:rounded-[10px] overflow-hidden h-[100vh] xl:h-[80vh]">
                <LeftSide  />
                <RightSide  />
                {/* <div className={`hidden bg-white ${successMsg} animateSuccessMsg flex xl:h-[300px] absolute rounded-md xl:w-[500px]`}>
                        <div className="bg-green-400 h-full px-4 flex justify-center items-center">
                            <img src="/trophy.png" className="h-40 w-40" alt="" />
                        </div>
                        <div className="flex-1 p-8">
                            <h1 className="font-lilita text-2xl text-green-400 font-light ">Yay!! You earned +3 Points</h1>
                            <p className="xl:mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero eum atque non cupiditate corporis, itaque provident nostrum dolorum labore voluptas?   </p>
                        </div>
                    </div>
                 */}
                
            </div>
        </div>
    )
}

export default Dashboard
