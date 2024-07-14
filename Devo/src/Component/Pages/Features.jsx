import React from 'react'
import featureSmartPhone from '../../assets/features-smartphone-1.png'
import book from '../../assets/book.jpeg'
import box from '../../assets/box.jpeg'
import code from '../../assets/code.jpeg'
import calendar from '../../assets/calendar.jpeg'
import diamond from '../../assets/diamond.jpeg'
import compass from '../../assets/compass.jpeg'



const Features = () => {
  return (
    <div>
        <div className='md:mt-[100px] md:h-[100vh] h-[1000px] mt-[400px]'>
            <div className=''>
                <h1 className='md:text-4xl text-2xl font-[500] text-center'>
                    Special features designed to <br className='hidden md:block' />
                    improve your life and work
                </h1><br /><br />
                <div className='flex justify-center gap-2 md:gap-12 items-center'>
                    <div className='flex items-center text-purple-600 md:text-2xl font-[600]'>
                        <ion-icon className='size-8 mt-' name="settings-outline"></ion-icon>
                        <p className='md:text-lg '>CONFIGURING</p>
                    </div>

                    <div className='flex items-center text-purple-600 gap-1 md:text-2xl font-[600]'>
                        <ion-icon className='size-8 mt-' name="telescope-outline"></ion-icon>
                        <p className='md:text-lg '>TRACKING</p>
                    </div>

                    <div className='flex items-center text-purple-600 md:text-2xl gap-1 font-[600]'>
                        <ion-icon className='size-8 mt-' name="search-outline"></ion-icon>
                        <p className='md:text-lg '>MONITORING</p>
                    </div>
                </div>
                <div className='w-[90vw] md:w-[530px] h-[4px] mx-[auto] bg-gray-300'>
                    <div className='w-[30vw] md:w-[180px] h-[4px] bg-purple-500'></div>
                </div>
            </div><br /><br />

            <div className='flex flex-wrap justify-center items-center gap-10'>
                <div>
                    <div className='flex gap-8'>
                        <div className='float-right'>
                            <b className='float-right'>Goal Setting</b><br />
                            <p>Like any self improving process,<br />everything starts with setting your <br />goal and committing to them</p>
                        </div>
                        <img className='size-14' src={compass} alt="compass" />

                    </div><br /><br />

                    <div className='flex gap-12'>
                        <div className='float-right'>
                            <b className='float-right'>Visual Editor</b><br />
                            <p>Devo provides a well designed<br />and ergonomic visual editor for<br />you to edit your quick notes</p>
                        </div>
                        <img className='size-14' src={code} alt="code" />

                    </div><br /><br />

                    <div className='flex gap-10'>
                        <div className='float-right'>
                            <b className='float-right'>Refined Options</b><br />
                            <p>Each option package in he app's<br />emenus is provided in order to<br />improve you personally</p>
                        </div>
                        <img className='size-14' src={diamond} alt="diamond" />
                    </div>
                </div>

                <div>
                    <img className='w-[83vw] md:w-[250px] md:h-[500px]' src={featureSmartPhone} alt="" />
                </div>

                <div>
                    <div className='flex gap-10'>
                        <img className='size-14' src={calendar} alt="calendar" />


                        <div className='float-left'>
                            <b className=''>Calendar input</b><br />
                            <p>Schsdule your appointments,<br />meetings and periodical<br />evaluation using the tools</p>
                        </div>
                        
                    </div><br /><br />

                    <div className='flex gap-10'>
                        <img className='size-14' src={book} alt="book" />
                        <div className='float-left'>
                            <b className=''>Easy Recording</b><br />
                            <p>Reading focus made for long form,<br />articles, ebooks and others<br />material with big text</p>
                        </div>
                        
                    </div><br /><br />

                    <div className='flex gap-10'>
                        <img className='size-14' src={box} alt="box" />

                        <div className='float-left'>
                            <b className=''>Good Foundation</b><br />
                            <p>Get a solid foundation for yourself<br />development efforts. Try Devo<br />mobile app for devices</p>
                        </div>
                        
                    </div><br />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Features