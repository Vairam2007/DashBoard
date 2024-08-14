import React from 'react'
import { FaSearch } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa6";
import { MdDashboard } from "react-icons/md";
import { FaRegStar } from "react-icons/fa";
import { FaRegFile } from "react-icons/fa";
import { BsViewStacked } from "react-icons/bs";
import { FaRegBuilding } from "react-icons/fa6";
import { FaChartPie } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaTasks } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { FaPerson } from "react-icons/fa6";
const Sidebar = () => {
  return (
    <>
    <div className="lg:w-[20%] md:w-[30%] sm:block w-[40%] min-h-[100vh] hidden bg-gray-300">
        <div className="flex justify-center items-center w-[90%] h-[70px]">
            <button className='w-[30px] h-[30px] p-[5px] bg-gray-100' style={{borderRadius:" 15px 0 0 15px "}}><FaSearch /></button>
            <input type="text" className='bg-gray-100 w-[60%] h-[30px] border-none outline-none' style={{borderRadius:"0 15px 15px 0"}} />
        </div>

        <ul className='py-[20px] border-b-[1px] border-gray-400 flex flex-col gap-[10px]'>
            
            <li className=' flex justify-between items-center w-[90%]'>
                <div className="flex justify-start items-center px-[10px] gap-[10px]">
                    <FaDatabase className='w-[20px] h-[20px] text-gray-500 ' />
                    <div className="text-[20px] font-semibold">DataBase</div>
                </div>
                <FaPlus />
            </li>
            
            <li className='flex justify-start items-center px-[10px] gap-[10px]'>
                <MdDashboard className='w-[20px] h-[20px] text-gray-500 ' />
                <div className="text-[20px] font-semibold">DashBoard</div>
            </li>
            <li className='flex justify-start items-center px-[10px] gap-[10px]'>
                <FaRegStar className='w-[20px] h-[20px] text-gray-500 ' />
             <div className="text-[20px] font-semibold">Favorite</div>
            </li>

        </ul>

        <ul className='py-[20px] flex flex-col gap-[10px]'>
            <h1 className='text-[20px] p-[10px]'>Team Space</h1>
            <div className="flex justify-between items-center w-[90%]">
                <div className="flex items-center px-[10px] gap-[5px]">
                    <FaRegFile className='text-[20px]' />
                    <h1 className=''>Source</h1>
                </div>
                <FaPlus />
            </div>
            <li className=' flex justify-between items-center w-[90%]'>
                <div className="flex justify-start items-center px-[30px] gap-[10px]">
                <FaPerson className='w-[20px] h-[20px] text-gray-500 ' />
                <div className="text-[20px] font-semibold">Clints</div>
                </div>
                <BsThreeDotsVertical />
            </li>
            <li className=' flex justify-between items-center w-[90%]'>
                <div className="flex justify-start items-center px-[30px] gap-[10px]">
                <FaTasks className='w-[20px] h-[20px] text-gray-500 ' />
                <div className="text-[20px] font-semibold">Tasks</div>
                </div>
                <BsThreeDotsVertical />
            </li>
            <li className=' flex justify-between items-center w-[90%]'>
                <div className="flex justify-start items-center px-[30px] gap-[10px]">
                <FaRegEye className='w-[20px] h-[20px] text-gray-500 ' />
                <div className="text-[20px] font-semibold">Visitors</div>
                </div>
                <BsThreeDotsVertical />
            </li>
        </ul>

        <ul className='py-[20px] flex flex-col gap-[10px]'>

            <div className="flex items-center px-[10px] gap-[5px]">
                <BsViewStacked className='text-[20px]' />
                <h1 className=''>Views and Canvases</h1>
            </div>
            <li className=' flex justify-between items-center w-[90%]'>
                <div className="flex justify-start items-center px-[30px] gap-[10px]">
                <FaRegBuilding className='w-[20px] h-[20px] text-gray-500 ' />
                <div className="text-[20px] font-semibold">Company</div>
                </div>
                <BsThreeDotsVertical />
            </li>
            <li className=' flex justify-between items-center w-[90%]'>
                <div className="flex justify-start items-center px-[30px] gap-[10px]">
                <FaChartPie className='w-[20px] h-[20px] text-gray-500 ' />
                <div className="text-[20px] font-semibold">Sales Analysis</div>
                </div>
                <BsThreeDotsVertical />
            </li>
        </ul>
        
    </div>
    </>
  )
}

export default Sidebar
