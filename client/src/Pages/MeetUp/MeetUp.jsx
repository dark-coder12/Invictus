import React from 'react';
import LeftNav from '../../Components/LeftNav';
import MeetUpCard from '../../Components/MeetUpCard';
import 'C:/Users/Mr  Rabbani/OneDrive - FAST National University/Semester-6/Web Engineering/Project/Invictus/client/src/index.css'

export default function MeetUp () {
    return (
        <div className="relative font-mono text-white text-opacity-70 font-[700] text-opacity-90 h-screen flex justify-center items-center bg-black ">
            <div className="w-[80%] h-[90%] flex flex-row z-10">
        
                <div className ='w-[20%]'>
                    <LeftNav/>
                </div>

                <div className='m-2 w-[80%]'>
                    <h1 className='text-4xl'>See what's happening around?</h1>
                    <div className='m-2'>
                        <MeetUpCard  date={'April, 15 2023 . 12:30 PK PKT'} description={'Jamming session where everyone can show case there skills'} imgSrc='fms.png' conductedBy={'Fast Music Society . FAST LHR'} eventName={'Jamming Session'} attending={12}/>
                    </div>
                     
                    <div className='m-2'>
                        <MeetUpCard  date={'April, 25 2023 . 4:30 PK PKT'} imgSrc='stacks.svg' description={'Meet up for the fundamentals of the blockchain'} conductedBy={'Stack FAST Chapter . Lahore PK'} eventName={'BlockChain Cohot 4.0'} attending={4}/>
                    </div>
                     
                    <div className='m-2'>
                        <MeetUpCard  date={'April, 25 2023 . 4:30 PK PKT'} imgSrc='stacks.svg' conductedBy={'Stack FAST Chapter . Lahore PK'} eventName={'BlockChain Cohot 4.0'} attending={4}/>
                    </div>
                     
                    <div className='m-2'>
                        <MeetUpCard  date={'April, 25 2023 . 4:30 PK PKT'} imgSrc='stacks.svg' conductedBy={'Stack FAST Chapter . Lahore PK'} eventName={'BlockChain Cohot 4.0'} attending={4}/>
                    </div>
                    
                    
                </div>

            </div>
        </div>
    );
}