
const LeftConnectionproject = ({imgUrl , name , username , bio , email, isFollowed, handleFollow, handleUnfollow}) => {
    return (
        <div className="flex flex-col text-white p-4">
          <img src={imgUrl} alt='dp' className="rounded-full w-[15rem] h-[15rem]"></img>
          <h1 className="mt-4 ml-2 text-4xl text-center">{name}</h1>
          <h3 className="mt-6 text-xl text-center">{username}</h3>
          <p className="mt-6 ml-2 text-sm text-indent">{bio}</p>
          <h4 className="mt-6 ml-2 text-sm text-center">{email}</h4>

          {!isFollowed ? 
          <button onClick={handleFollow} className="mt-6 bg-[#3A0303] text-white rounded-md">Follow</button>
          
          :

          <button className="mt-6 bg-[#3A0303] text-white rounded-md" onClick={handleUnfollow}>Unfollow</button>
          }
        </div>
    )
}

export default LeftConnectionproject