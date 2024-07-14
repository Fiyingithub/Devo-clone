import React from 'react'
import detail1 from '../../assets/details-1.png'
import detail2 from '../../assets/details-2.png'
import './Drops.css'

const details = () => {
  return (
    <div className='h-[2000px] lg:h-[1100px] mt-[1000px] md:mt-[250px] lg:mt-0 w-[100%] bg-green-50 pt-10'>
        <div className='flex flex-wrap gap-20 justify-center items-center'>
          <img className='size-[330px] md:size-[450px]' src={detail1} alt="" />

          <div className='px-6 md:px-0'>
            <h1 className='text-4xl font-[600]'>Keep a strong <br />mind in a healthy <br />body with Devo</h1><br />

            <div className='text-lg font-[500]'>
              <p>Schedule your appointments,meetins and periodical goals</p>
              <p>evaluations using the provide in-app calendar option. This </p>
              <p>is a core functionality you should <a className='underline' href="#">download the app</a></p>
            </div><br /><br />

            <button className='w-[150px] h-[40px] bg-green-400 rounded-[20px] font-[500]'>Lightbox</button>
          </div>
        </div><br /><br />

        <div className='flex flex-wrap gap-20 justify-center items-center'>
          <div className='px-6 md:px-0'>
            <h1 className='text-4xl font-[600]'>Built-in functions <br /> for great readings</h1><br />

            <div>
              <p className='text-lg'>Reading focus mode for long term articles,ebooks and</p>
              <p className='text-lg'>other materials which involve a lot of text is valuable</p><br />

              <ul className='text-lg'>
                <li className='flex flex-wrap items-center gap-1'><p className='size-[7px] bg-black rounded-lg'></p><b>Night reading mode</b> with reduced lightning and color</li>
                
                <li className='flex flex-wrap items-center gap-1'><p className='size-[7px] bg-black rounded-lg'></p><b>Monitor the number</b> of healthy steps that you take daily</li>
                <li className='flex flex-wrap items-center gap-1'><p className='size-[7px] bg-black rounded-lg'></p><b>Perform better</b> by following all the tips and tricks</li>
              </ul><br /><br />

              <button className='w-[150px] h-[40px] bg-green-400 rounded-[20px] font-[500]'>Download</button>
            </div>
          </div>

          <img className='size-[330px] md:size-[450px]' src={detail2} alt="" />
        </div>
    </div>
  )
}

export default details