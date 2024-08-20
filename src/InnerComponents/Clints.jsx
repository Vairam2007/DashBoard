import React from 'react'
import img2 from "/Images/fav_img2.jfif"
import img3 from "/Images/fav_img3.png"

const Clints = () => {
  return (
    <div className='overflow-x-hidden min-h-[100vh] lg:w-[80%] sm:w-[70%] w-[90%]  text-[50px] text-black flex justify-center items-center bg-blue-300'>
      <div className='w-full py-[50px] min-h-[100vh] flex flex-col lg:flex-row overflow-hidden'>
      <div className="flex justify-center items-center flex-wrap w-full">
      <div className=" w-[80%] min-h-[60%]  flex flex-wrap justify-around items-center gap-5 flex-col ">
        <div data-aos="flip-left" data-aos-delay="250" data-aos-duration="1000" className=" sm:min-w-[400px] sm:min-h-[200px] min-w-[200px] min-h-[150px] flex justify-center md:justify-start">
        <div className=" flex items-center  md:items-end">
                <img style={{transform:"rotateZ(-10deg)",boxShadow:" 0 0 10px rgba(0,0,0)"}} className='sm:w-[300px] sm:h-[250px] w-[150px] h-[100px] rounded-[20px]' src={img2} alt="about-img 2" />
            </div>
        </div>
        <div data-aos="flip-right" data-aos-delay="500" data-aos-duration="1000" className="min-w-[200px] min-h-[150px]  flex justify-center md:justify-end">
            <div className="flex items-center  md:items-end">
                <img style={{transform:"rotateZ(10deg)",boxShadow:" 0 0 10px rgba(0,0,0)"}} className='sm:w-[300px] sm:h-[250px] w-[150px] h-[100px] rounded-[20px]' src={img3} alt="about-img 2" />
            </div>
        </div>
      </div>
      </div>
      <div data-aos="fade-left" data-aos-duration="1000" className='w-full min-h-[50%]  flex justify-center items-center ' >
        <div className="w-full h-[300px] gap-0 lg:gap-10 flex flex-col justify-start">
            <h1 className='text-[40px] font-bold px-[20px] '>Client Page</h1>
            <p className='text-[20px] p-[20px] lg:p-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero voluptatum enim, quibusdam rerum dignissimos nobis! Incidunt reprehenderit ea dolores! Odit porro libero at nemo nobis voluptas ea illum repellat aut.</p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Clints
