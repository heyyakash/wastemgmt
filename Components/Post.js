function Post({commodity,qty,action,credit}) {
    return (
        <div className="w-[100%] text-md text-green-400 flex gap-2">
            <div className="subRow w-[60px] px-2 py-[2px]">{qty}</div>
            <div className="subRow w-[350px] px-2">{commodity}</div>
            <div className="subRow w-[100px] ">{action}</div>
            <div className="subRow px-2 w-[120px]">+{credit}</div>
        </div>
    )
}

export default Post
