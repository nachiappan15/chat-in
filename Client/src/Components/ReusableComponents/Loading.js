import React from 'react'
import LoadingImg from  "../../images/loading.svg"


const Loading = () => {
  return (
      <>
       <div className='h-full w-full absolute  '>
           <div className='h-full w-full absolute bg-black opacity-50'>
           </div>
           <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col gap-3 items-center'> 
           <img src ={LoadingImg} className='h-24 w-24 rounded-full  rotate '/>
           
           <p className='text-lg font-bold text-yellow-300'> Loading</p>
           </div>
          

    </div>
      </>
   
  )
}

export default Loading