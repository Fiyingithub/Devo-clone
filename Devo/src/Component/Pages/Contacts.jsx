import React from 'react'

const Contacts = () => {
  return (
    <div className='mt-[1300px] md:mt-10 bg-green-50 h-[500px] md:h-[400px] text-center pt-20 px-4'>
        <b className='text-4xl'>Subscribe to our newsletter</b>

        <p className='mt-6'>From time to time we organize personal development classes and various workshops and <br /> context on many subjects. Stay connected by subscribing to our newsletter</p><br /><br />

        <form action="">
           <div className=''>
             <input className='md:w-[400px] pl-10 h-[50px] border-2 border-gray-200 rounded-l-[50px]' type="email" placeholder='Email address' />
             
             <input className='md:w-[150px] w-[100px] h-[50px] border-2 border-gray-200 rounded-r-[50px] bg-green-300 font-[500]' type="submit" value="Sign Up" />
           </div>
        </form>
    </div>
  )
}

export default Contacts