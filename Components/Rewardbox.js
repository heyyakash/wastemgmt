import { FaMedal } from 'react-icons/fa'

function Rewardbox({qty,title}) {
    return (
        <div className="xl:h-[100px] w-[250px] gap-2 sm:items-center relative h-[50px] py-4 ml-2 overflow-hidden xl:w-[120px] flex xl:flex-col justify-center items-center xl:gap-2 bg-green-400 xl:rounded-lg text-white xl:drop-shadow-lg cursor-pointer hover:black">
            <h1 className="text-2xl relative z-10">{qty}</h1>
            <p className='text-[8px] xl:text-sm font-semibold xl:block z-10'>{title}</p>
        </div>
    )
}

export default Rewardbox