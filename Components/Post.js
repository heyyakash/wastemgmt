function Post({commodity,qty,action,credit}) {
    return (
        <div className="w-[100%] text-md text-green-400 flex gap-2">
            <div className="subRow w-[60px] py-[2px] pl-2 pr-4">{qty}</div>
            <div className="subRow flex-1  w-[350px] px-2">{commodity}</div>
            <div className="subRow w-[100px] pl-2">{action}</div>
            <div className="subRow w-[120px]  pl-2 pr-4">+{credit}</div>
        </div>
    )
}

export default Post
