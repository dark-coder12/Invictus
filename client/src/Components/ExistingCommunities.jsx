import SEcommunity from "../Assets/pictures/SEcommunity.jpg";
import AIcommunity from "../Assets/pictures/AIcommunity.jpg";
import java from "../Assets/pictures/java.jpg";
import jscommunity from "../Assets/pictures/jscommunity.jpg";

const ExistingCommunities = () => {

    const existCommunity = [
        {
          title: 'Software Engineering',
          image: SEcommunity,
          members: 13000,
          description: 'Discuss, ask and learn Stable Diffusion, DreamBooth, Programming, Software Engineering, C#, ASP.NET, MSSQL and more',
          bg: 'https://cdn.discordapp.com/discovery-splashes/772774097734074388/ffc973f2fe872898f3bb9af132b17c3b.jpg?size=2048'
        },
        {
          title: 'Artificialis Scout',
          image: AIcommunity,
          members: 14000,
          description: 'This server is all about finding a community full of data science, machine learning and technology enthusiasts',
          bg: 'https://cdn.discordapp.com/discovery-splashes/853221870244331521/50c1d1f745512a8b733fb9bd32485aa4.jpg?size=2048'
        },
        {
            title: 'Java Club',
            image: java,
            members: 4314,
            description: 'Our JAVA community is a space for enthusiasts, professionals, and learners to learn, collaborate, and grow together.',
            bg: 'https://cdn.discordapp.com/icons/665951159567253529/a_588e065359115eaf286c20252fbfb692.jpg?size=256'
          },
          {
            title: 'JavaScript Mastery',
            image: jscommunity,
            members: 20014,
            description: 'Join the official JavaScript Mastery Community, meet fellow developers and start coding today!',
            bg: 'https://cdn.discordapp.com/discovery-splashes/710138849350647871/3ed48c45f96a90d884a4b44196de31ba.jpg?size=2048'
          }
      ];

    return (
        <div className="bg-[#020202] h-full flex flex-col items-center rounded-r-md ">
          <div className="rounded-md  mt-10 h-[40%]">
            <div className="flex flex-row flex-wrap gap-8 p-5 items-center justify-center bg-gray-black rounded-md bgcheck  bg-opacity-20">
            <p>My Communities</p>
            <div className="text-lg flex flex-col gap-5 items-center justify-center pt-3 pl-3 pr-4 border border-white rounded-md">
            { existCommunity .map(community => (
                <div className="flex flex-row bg-black h-[7rem] w-[15rem] p-2 items-center justify-center">
                <img src={community.image} alt="pic" className="w-[60%] h-[60%] rounded-full"></img>
                <p className="font-[20] text-sm justify-center ml-5 pr-10">{community.title}</p>
                </div>
            ))}
            </div>
            </div>
         </div>
        </div>
    )
}

export default ExistingCommunities