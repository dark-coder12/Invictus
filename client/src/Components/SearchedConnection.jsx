import React from 'react';

const SearchedConnection = ({imgUrl, firstName, lastName, handleConnectionVisit}) => {
  return(
    <div onClick={handleConnectionVisit} className='flex flex-row rounded-md bg-[#000000] border border-white mb-5 h-[5rem] w-[45rem] justify-between'>
       <div className='flex flex-row'> 
       <img src = {imgUrl} alt="dp" className='rounded-full p-2'></img>
       <h3 className='ml-3 mt-6'>{firstName} {lastName}</h3>
       </div>

      <div className='m-4'>
        <button class="text-xs px-2 py-1 text-white bg-[#3a0303] hover:bg-[#2B0202] rounded-lg focus:outline-none">
          View User
        </button>
      </div>
      
    </div>
  )
}

export default SearchedConnection