import bis from "../Assets/pictures/bis.jpg";

const LeftConnectionproject = ({icon , name , username , bio , followers , communities}) => {
    return (
        <div className="flex flex-col text-white p-4">
          <img src={icon} alt='dp' className="rounded-full w-[15rem] h-[15rem]"></img>
          <h1 className="mt-4 ml-2 text-4xl text-center">{name}</h1>
          <h3 className="mt-6 text-xl text-center">{username}</h3>
          <p className="mt-6 ml-2 text-sm text-indent">{bio}</p>
          <h4 className="mt-6 ml-2 text-sm text-center">{followers} | {communities}</h4>
          <button className="mt-6 bg-[#3A0303] text-white rounded-md">Add Connection</button>
          <button className="mt-6 bg-[#3A0303] text-white rounded-md">Remove Connection</button>
        </div>
    )
}

export default LeftConnectionproject