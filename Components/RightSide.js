import { signOut } from 'next-auth/react';
import { useState, useEffect} from 'react';
import {collection , addDoc, doc , serverTimestamp,where, query,onSnapshot, orderBy} from 'firebase/firestore';
import {db} from '../firebase';
import {useSession} from 'next-auth/react';
import Post from './Post';

function RightSide({setSuccess ,setReward}) {
    const {data:session} = useSession();
    const [qty, setQty] = useState("");
    const [select,setSelect]  = useState("");
    const [action,setAction] = useState("");
    const [credit,setCredit] = useState(0);
    const [loading , setLoading] = useState(false);
    const [post,setPost] = useState([]);
    const handleSelect = (e) => {
        let selectedVal = e.target.value;
        if (selectedVal === `Stale Food (less than a day old)`){
            setAction("Donation")
            setCredit(3);
        }
        else if (selectedVal === `Stale Food (More than a day old)`){
            setAction("Composting");
            setCredit(2);
        }
        else if (selectedVal === "Plastic Bottle"){
            setAction("Recycle");
            setCredit(1);
        }
        else{
            setAction("");
        }
        setSelect(selectedVal);
    }
    const handleSubmit =async (e) => {
        e.preventDefault();
        setLoading(true);
        try{
            const docRef = await addDoc(collection(db,"contributions"),{
                email: session.user.email,
                time :serverTimestamp(),
                qty:qty,
                commodity:select,
                action:action,
                credit:credit

            });
            setReward(credit);
            setSuccess("top-[20px]");
            setTimeout(() => {
                setSuccess("-top-[1000%]")
            }, 4000);
            setQty(0);
            setAction("");
            setSelect("");
        }
        catch(error) {
            console.log(error);
        }
        setLoading(false);

    }

    useEffect(() => {
        onSnapshot(
            query(collection(db,"contributions"),where("email","==",session.user.email),orderBy("time","desc")),
            (snapshot) => {
                setPost(snapshot.docs);
            }
        )
    }, [db])
    return (
        <div className="xl:flex-[0.8] z-[100] flex-1 flex flex-col p-8 h-full backdrop-blur-md bg-white/80 ">
            <div className="flex items-end w-full xl:w-[90%]"><h1 className="text-3xl text-green-400 ">Your Contributions</h1>
                <p onClick={()=>signOut()} className="text-green-400 cursor-pointer ml-auto">SignOut</p>
            </div>
            <div className="my-8 w-full xl:w-[90%] p-[2px] gap-2 flex flex-wrap">
                <input type="number" min = "1" max = "3" value = {qty} onChange={(e)=>setQty(e.target.value)} placeholder="Qty" className="w-[80px] border-2 outline-none rounded-md border-green-300 p-2" />
                <select onChange={handleSelect} value="Commodity" className="outline-none border-2 border-green-300 pl-2 xl:w-[300px] rounded-md text-gray-400" >
                    <option value="Commodity" disabled >Commodity</option>
                    <option value={`Stale Food (less than a day old)`}>{`Stale Food (less than a day old)`}</option>
                    <option value={`Stale Food (More than a day old)`}>{`Stale Food (More than a day old)`}</option>
                    <option value="Plastic Bottle">Plastic Bottle</option>
                </select>
                <input type="text" placeholder="Action" onChange={()=>console.log("Hello") } value = {action} className="w-[120px] border-2 outline-none rounded-md border-green-300 p-2" />
                <button onClick={handleSubmit} disabled = {loading?true:false || qty ? false:true } className="py-2 px-4 shadow-xl shadow-green-200 disabled:opacity-[0.5] rounded-md bg-green-500 text-white ml-0 xl:ml-auto">Donate</button>
            </div>
            <div className="w-full xl:w-[90%] h-[700px] overflow-auto flex flex-col">
                <div className="w-[100%] text-md mb-2 text-white flex gap-2">
                    <div className="bg-green-500 w-[60px] border-green-300 border-l-2 py-[2px] flex justify-start items-center pl-2 pr-4">Qty</div>
                    <div className="bg-green-500 flex-1 border-green-300 border-l-2  w-[350px] flex justify-start items-center px-2">Comodity</div>
                    <div className="bg-green-500 border-green-300 border-l-2 flex justify-start w-[100px] items-center pl-2">Action</div>
                    <div className="bg-green-500  border-green-300 border-l-2 flex justify-start w-[120px] items-center pl-2 ">Points Earned</div>
                </div>

              {post.map((posts)=>{
                  return(
                  <Post id ={posts.id} key = {posts.id} qty = {posts.data().qty} commodity = {posts.data().commodity} credit = {posts.data().credit} action = {posts.data().action} />
              )})}
            </div>
        </div>
    )
}

export default RightSide
