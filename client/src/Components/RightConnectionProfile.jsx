import cap from "../Assets/pictures/cap.jpg";
import PieChartClass from "./PieChartClass";

const RightConnectionProfile = ({phdDegree , phdInstitute , mastersDegree , mastersInstitute , bachelorsDegree , bachelorsInstitute , skills}) => {

    return(
        
        <div className="p-8">
        <h1 className="mb-5 bg-[#3A0303] text-center">Education</h1>

        
                 <div className="flex flex-row m-3 mb-5">
                 <img className="w-[2.5rem] h-[2.5rem]" src={cap} alt="edu"></img>
                 <div className="flex flex-col">
                 <h1 className="ml-1">{phdDegree}</h1>
                 <h2 className="ml-1 text-[#7f7e7e]">{phdInstitute}</h2>
                 </div>
                 </div>

                 <div className="flex flex-row m-3 mb-5">
                 <img className="w-[2.5rem] h-[2.5rem]" src={cap} alt="edu"></img>
                 <div className="flex flex-col">
                 <h1 className="ml-1">{mastersDegree}</h1>
                 <h2 className="ml-1 text-[#7f7e7e]">{mastersInstitute}</h2>
                 </div>
                 </div>

                 <div className="flex flex-row m-3 mb-5">
                 <img className="w-[2.5rem] h-[2.5rem]" src={cap} alt="edu"></img>
                 <div className="flex flex-col">
                 <h1 className="ml-1">{bachelorsDegree}</h1>
                 <h2 className="ml-1 text-[#7f7e7e]">{bachelorsInstitute}</h2>
                 </div>
                 </div>

        <h1 className="m-3 mb-5 bg-[#3A0303] text-center">Technical Skills</h1>
        <div className="grid grid-cols-2 grid-row-2 gap-7">

        { skills.map((s,i) => (
                <div className="text-white bg-[#3A0303] mt-2 text-center align-center w-[10rem] h-[1.5rem] rounded-md">
                {skills[i]}
                </div>
            ))
        }
                
        </div>
        </div>
        
    )
}

export default RightConnectionProfile