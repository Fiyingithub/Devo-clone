import React from 'react'
import headerBackground from '../assets/header-background.jpg'
import headerSmartPhone from '../assets/header-smartphone.png'
import Button from './Button'

const Headerbar = () => {
  const togglebtn = ()=>{
        if(hidebtn.style.display == 'flex'){
          hidebtn.style.display = 'none'
        }    
        else{
          hidebtn.style.display = 'flex'
        }      
  }
  return (
    <div className='bg-cover bg-center h-screen flex  pt-10 items-center justify-center'style={{ backgroundImage: `url(${headerBackground})` }}>
        <div className='flex flex-wrap lg:gap-20 mt-[400px] md:mt-[250px] lg:mt-0 justify-between'>
            <div className='mx-[auto]  px-4 md:px-0 lg:mx-0 lg:mt-16'>
              <h1 className='text-4xl md:text-6xl font-[600]'>Mobile app site </h1>
              <p className='text-4xl md:text-6xl font-[600] '>for <span className='text-[#6daa6d]'>developers</span></p>

              <p className='mt-6 text-lg md:text-xl text-gray-400 font-[500]'>For everyone interested in personal development. Devo <p className=''>is the perfect mobile application to get real results.</p></p><br /><br />

              <div className=''>
                <Button togglebtn={togglebtn}/>  
              </div>

            </div>
            <img className='mx-[auto] w-[320px] h-[430px] md:w-[450px] md:h-[630px] lg:mx-0 mt-10 lg:mt-0' src={headerSmartPhone} alt="" />
        </div>
    </div>
  )
}

export default Headerbar