import React, { useState } from 'react'
import { Link} from 'react-router-dom';
import { FaSearch } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa6";
import { MdDashboard } from "react-icons/md";
import { FaRegStar } from "react-icons/fa";
import { FaRegFile } from "react-icons/fa";
import { BsViewStacked } from "react-icons/bs";
import { FaRegBuilding } from "react-icons/fa6";
import { FaChartPie } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaTasks } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { FaPerson } from "react-icons/fa6";
import { FaArrowCircleRight } from "react-icons/fa";
import { FaArrowAltCircleLeft } from "react-icons/fa";

const Sidebar = () => {
    var [open,setopen]=useState(" lg:w-[20%] w-[30%] sm:block hidden  min-h-[100vh] bg-blue-200 z-10 ");
    var [small,setsmall]=useState(" w-[10%] h-[100vh] sm:hidden bg-blue-200 flex flex-col justify-evenly items-center")

    const change1 = () =>{
        setopen(" lg:w-[20%] md:w-[20%] sm:block w-[20%] min-h-[100vh] bg-blue-200 z-10 sm:block hidden")
        setsmall(" w-[10%] h-[100vh] sm:hidden bg-blue-200 flex flex-col justify-evenly items-center")
    }
    const change2 = () =>{
        setopen(" lg:w-[20%] w-[50%] sm:block min-h-[100vh] bg-blue-200 z-10 ")
        setsmall("hidden")
    }
  return (
    <>
    <div className={open}>
        <div className="flex justify-center items-center">
            <div className="flex justify-center items-center w-[90%] h-[70px]">
            <button className='w-[20px] h-[30px] p-[5px] bg-gray-100' style={{borderRadius:" 15px 0 0 15px "}}><FaSearch /></button>
            <input type="text" className='bg-gray-100 px-[10px] w-[70%] h-[30px] border-none outline-none' style={{borderRadius:"0 15px 15px 0"}} />
            </div>
            <FaArrowAltCircleLeft onClick={change1} className='w-[20px] sm:hidden h-[30px] mx-[10px]'/>
        </div>

        <div className='py-[20px] border-b-[1px] border-gray-400 flex flex-col gap-[10px] items-center'>
            

            <Link to="" className='flex justify-start items-center w-[90%] gap-[10px]  hover:bg-blue-400 px-[20px] rounded-[20px] cursor-pointer'>
                    <FaDatabase className='w-[20px] h-[20px] text-gray-500 ' />
                    <div className="text-[20px] font-semibold">DataBase</div>
            </Link>

            
            <Link to="/DashBoard" className='flex justify-start items-center w-[90%] gap-[10px]  hover:bg-blue-400 px-[20px] rounded-[20px] cursor-pointer'>
                <MdDashboard className='w-[20px] h-[20px] text-gray-500 ' />
                <div className="text-[15px] sm:text-[20px] font-semibold ">DashBoard</div>
            </Link>


            <Link to="/Favorite" className='flex justify-start items-center w-[90%] px-[20px] gap-[10px]  hover:bg-blue-400 rounded-[20px] cursor-pointer'>
                <FaRegStar className='w-[20px] h-[20px] text-gray-500 ' />
             <div className="text-[20px] font-semibold">Favorite</div>
            </Link>


        </div>

        <div className='py-[20px] flex flex-col'>
            <h1 className='text-[20px] p-[5px]'>Team Space</h1>
                <div className="flex items-center  px-[15px] gap-[5px]">
                    <FaRegFile className='text-[20px]' />
                    <h1 className=''>Source</h1>

            </div>
            <div className='py-[10px] flex flex-col justify-center items-center gap-[10px]' >
            <Link to="/Clint" className=' flex justify-between items-center w-[90%] hover:bg-blue-400 px-[20px] rounded-[20px] cursor-pointer'>
                <div className="flex justify-start items-center gap-[10px]">
                <FaPerson className='w-[20px] h-[20px] text-gray-500 ' />
                <div className="text-[20px] font-semibold">Clints</div>
                </div>
                <BsThreeDotsVertical />
            </Link>
            <Link to='/Tasks' className='flex justify-between items-center w-[90%] hover:bg-blue-400 px-[20px] rounded-[20px] cursor-pointer'>
                <div className="flex justify-start items-center gap-[10px]">
                <FaTasks className='w-[20px] h-[20px] text-gray-500 ' />
                <div className="text-[20px] font-semibold">Tasks</div>
                </div>
                <BsThreeDotsVertical />
            </Link>
            <Link to="/Visitors" className="flex justify-between items-center w-[90%] hover:bg-blue-400 px-[20px] rounded-[20px] cursor-pointer">
                <div className="flex justify-start items-center gap-[10px]">
                <FaRegEye className='w-[20px] h-[20px] text-gray-500 ' />
                <div className="text-[20px] font-semibold">Visitors</div>
                </div>
                <BsThreeDotsVertical />
            </Link>
            </div>
        </div>

        <div className='py-[10px] flex flex-col gap-[10px]'>

            <div className="flex items-center px-[10px] gap-[5px]">
                <BsViewStacked className='text-[20px]' />
                <h1 className=''>Views and Canvases</h1>
            </div>
            <div className='py-[10px] flex flex-col justify-center items-center gap-[10px]'>
            <Link to="/Company" className='flex justify-between items-center w-[90%] hover:bg-blue-400 px-[20px] rounded-[20px] cursor-pointer'>
                <div className="flex justify-start items-center gap-[10px]">
                <FaRegBuilding className='w-[20px] h-[20px] text-gray-500 ' />
                <div className="text-[20px] font-semibold">Company</div>
                </div>
                <BsThreeDotsVertical />
            </Link>
            <Link to="/Sales" className=' flex justify-between items-center w-[90%] hover:bg-blue-400 px-[20px] rounded-[20px] cursor-pointer'>
                <div className="flex justify-start items-center gap-[10px]">
                <FaChartPie className='w-[20px] h-[20px] text-gray-500 ' />
                <div className="text-[15px] font-semibold">Sales Analysis</div>
                </div>
                <BsThreeDotsVertical />
            </Link>
            </div>
        </div>
        
    </div>
    <div className={small}>
        <div className=" w-[40px] h-[40px] rounded-[50%] bg-green-500 cursor-pointer flex justify-center items-center" onClick={change2}><FaArrowCircleRight className='w-[25px] h-[25px]' /></div>

        <Link to="/" className=" w-[40px] h-[40px] rounded-[50%] hover:bg-blue-500 cursor-pointer flex justify-center items-center"><FaDatabase className='w-[25px] h-[25px]' /></Link>
        <Link to="/DashBoard" className=" w-[40px] h-[40px] rounded-[50%] hover:bg-blue-500 cursor-pointer flex justify-center items-center"><MdDashboard className='w-[25px] h-[25px]' /></Link>
        <Link to="/Favorite" className=" w-[40px] h-[40px] rounded-[50%] hover:bg-blue-500 cursor-pointer flex justify-center items-center"><FaRegStar className='w-[25px] h-[25px]' /></Link>
        <Link to="/Clint" className=" w-[40px] h-[40px] rounded-[50%] hover:bg-blue-500 cursor-pointer flex justify-center items-center"><FaPerson className='w-[25px] h-[25px]' /></Link>
        <Link to="/Tasks" className=" w-[40px] h-[40px] rounded-[50%] hover:bg-blue-500 cursor-pointer flex justify-center items-center"><FaTasks className='w-[25px] h-[25px]' /></Link>
        <Link to="/Visitors" className=" w-[40px] h-[40px] rounded-[50%] hover:bg-blue-500 cursor-pointer flex justify-center items-center"><FaRegEye className='w-[25px] h-[25px]' /></Link>
        <Link to="/Company" className=" w-[40px] h-[40px] rounded-[50%] hover:bg-blue-500 cursor-pointer flex justify-center items-center"><FaRegBuilding  className='w-[25px] h-[25px]' /></Link>
        <Link to="/Sales" className=" w-[40px] h-[40px] rounded-[50%] hover:bg-blue-500 cursor-pointer flex justify-center items-center"><FaChartPie className='w-[25px] h-[25px]' /></Link>
    </div>
    </>
  )
}

export default Sidebar
