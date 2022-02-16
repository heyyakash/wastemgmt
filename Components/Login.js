import { signIn } from 'next-auth/react';

function Login({ providers }) {
    return (
        <>
            <div className="relative xl:h-[100vh] flex justify-center items-center drop-shadow-xl  w-full">
                <div className="xl:w-full justify-center rounded-[5px] items-center overflow-hidden max-w-[1200px] flex flex-col xl:flex-row xl:h-[90vh] h-[100vh] xl:py-4 ">
                    <div className="h-full bg-white xl:justify-center xl:items-center flex flex-col xl:flex-[0.6] w-full gap-8 xl:gap-0">
                        <img src="/logo.jpg" className='xl:h-20 h-10 self-start xl:self-center ' alt="" />
                        <img src="/food2.jpg" alt="" className=" xl:h-[350px] xl:w-[350px] self-center h-[200px] w-[200px]" />
                    </div>

                    <div className="h-full flex-[0.4] px-8 flex justify-center flex-col items-start text-green-400 xl:text-white bg-white xl:bg-green-500/40 backdrop-blur-md">
                        <h1 className="font-lilita text-[45px]">Prevent Food Wastage</h1>
                        <p className="text-xl xl:text-white">Every Family, Restaurant, Food Outlet, Grocery store produces large amount of left overs, stale foods and other food waste on a daily basis which is hazardous if left unnoticed. These leftovers can be donated to the unprivileged whereas non edible wastes can be disposed to form compost. </p>
                        <p className='text-xl xl:text-white mt-4'><b>ReBin</b> enables people to safely donate their food waste which will go into a good cause of feeding people and also providing compost for agricultural sector</p>


                        {Object.values(providers).map(provider => (
                            <div key={provider.id}>
                                <button onClick={() => signIn(provider.id, { callbackUrl: "/" })} className="px-8 py-4 border-none outline-none rounded-[5px] font-bold mt-12 self-center transition relative duration-500 hover:-translate-y-2 xl:bg-white bg-[#71f094] xl:text-[#71f094] text-white text-xl">Login to Donate</button>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
            
        </>
    )
}

export default Login
