import CommunityCard from "./CommunityCard";

import SECourse from "../Assets/pictures/SECourse.jpg";
import Artificialis from "../Assets/pictures/Artificialis.jpg";
import java from "../Assets/pictures/java.jpg";
import javascript from "../Assets/pictures/javascript.jpg";

const NewCommunitiesList = () => {

  const communities = [
    {
      title: 'Software Engineering',
      image: SECourse,
      members: 13000,
      description: 'Discuss, ask and learn Stable Diffusion, DreamBooth, Programming, Software Engineering, C#, ASP.NET, MSSQL and more',
      bg: 'https://cdn.discordapp.com/discovery-splashes/772774097734074388/ffc973f2fe872898f3bb9af132b17c3b.jpg?size=2048'
    },
    {
      title: 'Artificialis Scout',
      image: Artificialis,
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
      image: javascript,
      members: 20014,
      description: 'Join the official JavaScript Mastery Community, meet fellow developers and start coding today!',
      bg: 'https://cdn.discordapp.com/discovery-splashes/710138849350647871/3ed48c45f96a90d884a4b44196de31ba.jpg?size=2048'
    }
  ];
  

  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2  gap-14 w-[80%] h-[60%]">
        {communities.map(community => (
          <CommunityCard
            title={community.title} 
            image = {community.image}
            members={community.members}
            description={community.description}
            bg = {community.bg}
          />
        ))}
      </div>
    </div>
  );
}

export default NewCommunitiesList;

