import React from 'react'
import img1 from "/Images/fav_img1.jfif"
import img2 from "/Images/fav_img2.jfif"
import img3 from "/Images/fav_img3.png"
const Favorite = () => {
  return (
    <div className='overflow-x-hidden min-h-[100vh] lg:w-[80%] sm:w-[70%] py-[20px] w-[90%] text-black flex justify-center items-center sm:gap-0 gap-[50px] flex-col bg-blue-300'>
      <h1 data-aos="fade-out" data-aos-delay="250" data-aos-duration="1000" className='text-[30px] font-bold' >Favorite</h1>
      <div className="flex md:flex-row flex-col sm:gap-[10px] gap-[50px] w-[80%] min-h-[50%]">
        <div data-aos="fade-right" data-aos-delay="250" data-aos-duration="1000" className="flex justify-center items-center flex-col">
          <img src={img1} alt='home_img1' className='lg:w-[250px] lg:h-[200px] md:w-[200px] md:h-[100px] w-[150px] h-[100px] rounded-[10px]' style={{boxShadow:"10px 10px 10px rgba(0,0,0,0.35)"}}/>
          <h1 className='text-[30px] font-semibold'>Home1</h1>
          <p >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque, asperiores.</p>
        </div>
        <div data-aos="fade-in" data-aos-delay="300" data-aos-duration="1000" className="flex justify-center items-center flex-col">
          <img src={img2} alt='home_img2' className='lg:w-[250px] lg:h-[200px] md:w-[200px] md:h-[100px] w-[150px] h-[100px] rounded-[10px]' style={{boxShadow:"10px 10px 10px rgba(0,0,0,0.35)"}}/>
          <h1 className='text-[30px] font-semibold'>Home2</h1>
          <p >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque, asperiores.</p>
        </div>
        <div data-aos="fade-left" data-aos-delay="250" data-aos-duration="1000" className="flex justify-center items-center flex-col">
          <img src={img3} alt='home_img3' className='lg:w-[250px] lg:h-[200px] md:w-[200px] md:h-[100px] w-[150px] h-[100px] rounded-[10px]' style={{boxShadow:"10px 10px 10px rgba(0,0,0,0.35)"}}/>
          <h1 className='text-[30px] font-semibold'>Home3</h1>
          <p >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque, asperiores.</p>
        </div>
      </div>

    </div>
  )
}

export default Favorite
