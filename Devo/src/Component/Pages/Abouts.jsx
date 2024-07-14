import React from 'react'
import background from '../../assets/about-background.jpg'
import video from '../../assets/video.jpg'


const Abouts = () => {
  return (
    <div>
      <div className='drops-container md:mt-0 mt-[330px]'style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url(${background})`}}>
        <div className='flex flex-wrap justify-center items-center '>
          <img className='ml-10 rounded-[360px] w-[400px]' src={video} alt="" />

          <div className='size-[300px] bg-purple-400 rounded-[360px] italic text-center text-white pt-20'>
           <p>
           I love using devo for my personal <br /> development needs. it meets all my <br /> requirements and it actually helps <br />a lot with focusing skills. <br />
            </p><br />
            <b className=''>Sick Yellow- Designer</b><br /><br />

            <div className='flex justify-center gap-2 items-center'>
              <div className='size-2 bg-white rounded-[300px]'></div>
              <div className='size-2 bg-white rounded-[300px]'></div>
              <div className='size-2 bg-white rounded-[300px]'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Abouts