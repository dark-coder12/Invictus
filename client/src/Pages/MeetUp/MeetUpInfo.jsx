import React from "react";
import LeftNav from "../../Components/LeftNav";

export default function MeetUpInfo({}){
    return(
        <div className="relative font-mono text-white text-opacity-70 font-[700] text-opacity-90 h-screen flex justify-center items-center bg-black ">
            <div className="w-[80%] h-[90%] flex flex-row z-10">
        
                <div className ='w-[20%]'>
                    <LeftNav/>
                </div>

                <div className='m-6 w-[80%] border-y-2 p-2'>
                    <div style={{borderBottom:"1px solid white"}}>
                        <h1 className="text-3xl">Blockchain Cohort 4.0</h1>
                        <div className='mt-2 mb-2'>
                            {/* for now the host */}
                            <img src='stacks.svg'></img>
                        </div>
                        <div>
                            <h1>Hosted By</h1>
                            <h1>Stacks Pakistan FAST Chapter</h1>
                        </div>
                    </div>

                    <div>
                        <img src='stacksevent.jpg' className='w-[100%] h-[40%]'></img>
                    </div>
                </div>
            </div>
        </div>
            
            
        
    );
}