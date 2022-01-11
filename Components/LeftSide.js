import { useSession } from 'next-auth/react';
import {collection ,where, query,onSnapshot, orderBy} from 'firebase/firestore';
import {db} from '../firebase';
import {useEffect, useState} from 'react';

function LeftSide() {
    var calcPoints = [];
    var calcQty = [];

    const [points,setPoints] = useState(null);
    const [qty,setQty] = useState(null);
    useEffect(() => {
            
        onSnapshot(
            query(collection(db,"contributions"),where("email","==",session.user.email),orderBy("time","desc")),
            (snapshot) => {
                snapshot.docs.map((doc)=>{
                    calcPoints.push(doc.data().credit);
                    calcQty.push(Number(doc.data().qty));
                });
                let finalVal = calcPoints.reduce((a,b)=>a+b,0);
                let finalQty = calcQty.reduce((a,b)=>a+b,0);
                setPoints(finalVal);
                setQty(finalQty);
                calcPoints = [];
                calcQty = [];
                }
        )
    }, [db])
    const  {data:session} = useSession();
    return (
        <div className="xl:bg-green-300/80 z-[100] xl:pt-[23px] bg-green-300 xl:backdrop-blur-md xl:h-full  items-center px-2 flex xl:flex-col flex-row gap-4 xl:flex-[0.2]  py-4">
            <div className="border-2 border-white p-[4px] drop-shadow-xl rounded-full">
                <img className="rounded-full xl:h-[100px] xl:w-[100px] h-[40px] w-[40px]" src={session.user.image} alt="" />
                
            </div>
            <h1 className="text-white text-xl font-semibold hidden xl:block">Heyy {session.user.name.split(" ")[0]}!</h1>

            <div className="xl:h-[100px] w-[120px] gap-3 drop-shadow-xl  ml-auto xl:ml-0 bg-green-500/50 hover:bg-opacity-[0.7] justify-center items-center transition duration-100 xl:mt-2 text-white flex flex-col  bg-opacity-[.9] cursor-pointer rounded-lg">
                <h1 className="text-2xl">{qty}</h1>
                <p className='text-sm font-semibold'>Items Donated</p>
            </div>

            <div className="xl:h-[100px] w-[120px] gap-3 drop-shadow-xl  ml-auto xl:ml-0 bg-green-500/50 hover:bg-opacity-[0.7] justify-center items-center transition duration-100 xl:mt-2 text-white flex flex-col  bg-opacity-[.9] cursor-pointer rounded-lg">
                <h1 className="text-2xl">{points}</h1>
                <p className='font-semibold text-sm'>Reward Points</p>
            </div>

        </div>
    )
}

export default LeftSide
