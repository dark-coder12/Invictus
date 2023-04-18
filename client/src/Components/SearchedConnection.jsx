import React from 'react';

const SearchedConnection = ({icon,name}) => {
  return(
    <div className='flex flex-row rounded-md bg-[#000000] border border-white mb-5 h-[5rem] w-[45rem] justify-between'>
       <div className='flex flex-row'> 
       <img src = {icon} alt="dp" className='rounded-full p-2'></img>
       <h3 className='ml-3 mt-6'>{name}</h3>
       </div>

       <div className='mt-4'>
       <button class="text-xs ml-2 px-2 mt-3 py-1 text-white bg-[#3a0303] hover:bg-[#2B0202] rounded-lg focus:outline-none">
        View Profile
       </button>
       <button className="text-xs ml-2 mr-3 px-2 mt-3 py-1 text-white bg-[#3a0303] hover:bg-[#2B0202] rounded-lg focus:outline-none" type="submit">
        Add Connection
       </button>
       </div>
    </div>
  )
}

export default SearchedConnection