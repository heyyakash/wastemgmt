import { useSession } from 'next-auth/react';
import { collection, where, query, onSnapshot, orderBy } from 'firebase/firestore';
import { db } from '../firebase';
import { useEffect, useState } from 'react';
import Rewardbox from './Rewardbox';

function LeftSide() {
    var calcPoints = [];
    var calcQty = [];

    const [points, setPoints] = useState(null);
    const [qty, setQty] = useState(null);
    useEffect(() => {

        onSnapshot(
            query(collection(db, "contributions"), where("email", "==", session.user.email), orderBy("time", "desc")),
            (snapshot) => {
                snapshot.docs.map((doc) => {
                    calcPoints.push(doc.data().credit);
                    calcQty.push(Number(doc.data().qty));
                });
                let finalVal = calcPoints.reduce((a, b) => a + b, 0);
                let finalQty = calcQty.reduce((a, b) => a + b, 0);
                setPoints(finalVal);
                setQty(finalQty);
                calcPoints = [];
                calcQty = [];
            }
        )
    }, [db])
    const { data: session } = useSession();
    return (
        <div className="xl:bg-white/70 z-[100] xl:pt-[23px] backdrop-blur-md xl:h-full  items-center px-2 flex xl:flex-col flex-row xl:gap-4 xl:flex-[0.2] py-2">
            <div className="xl:border-2 xl:border-white p-[4px] drop-shadow-xl rounded-full ">
                <img className="rounded-full xl:h-[100px] xl:w-[100px] w-[80px]" src={session.user.image} alt="" />

            </div>
            <div className='w-full py-2 px-2 flex justify-center items-center'>
                <h1 className="text-white text-xl font-semibold hidden xl:block">Heyy {session.user.name.split(" ")[0]}!</h1>
            </div>


            <Rewardbox qty={qty} title="Items Donated" />
            <Rewardbox qty={points} title="Reward Points" />

        </div>
    )
}

export default LeftSide
