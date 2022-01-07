function Post({commodity,qty,action,credit}) {
    return (
        <div className="w-[100%] text-md text-green-400 flex gap-2">
            <div className="bg-green-100  w-[60px] py-[2px] flex justify-start items-center pl-2 pr-4">{qty}</div>
            <div className="bg-green-100 flex-1  w-[350px] flex justify-start items-center px-2">{commodity}</div>
            <div className="bg-green-100 flex justify-start w-[100px] items-center pl-2">{action}</div>
            <div className="bg-green-100 w-[120px] flex justify-start items-center pl-2 pr-4">+{credit}</div>
        </div>
    )
}

export default Post
