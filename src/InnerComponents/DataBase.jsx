import React from 'react'
import { FaSearch } from "react-icons/fa";
const DataBase = () => {
  return (
    <div className='overflow-x-hidden min-h-[100vh] lg:w-[80%] sm:w-[70%] w-[90%] flex-col text-[50px] gap-[50px] text-black flex justify-center items-center bg-green-200'>
      <div className="flex ">
        <input type="text" style={{borderRadius:"50px 0 0 50px"}} className=' text-[20px] p-[20px] sm:w-[250px] w-[150px] h-[40px] border-none outline-none ' />
        <button className='bg-white px-[10px]' style={{borderRadius:"0px 50px 50px 0px"}}><FaSearch className='w-[30px] h-[30px]'/></button>
      </div>
      <div data-aos="zoom-in-up" data-aos-delay="250" data-aos-duration="1000" className="text-[20px] flex justify-center items-center">
        <table className='w-[80%] h-[50%] border-black border-[4px]  '>
          <tr>
            <th className='border-[4px] border-black w-[200px] h-[50px]'>S.No</th> <th className='border-[4px] border-black w-[200px] h-[50px]'>Name</th> <th className='border-[4px] border-black w-[200px] h-[50px]'>ID</th> <th className='border-[4px] border-black w-[200px] h-[50px]'>Check</th>
          </tr>
          <tr>
            <td className='border-black border-[2px] w-[200px] h-[50px]'>1.</td> <td className='border-black border-[2px] w-[200px] h-[50px]'>Ram1</td> <td className='border-black border-[2px] w-[200px] h-[50px]'>001</td> <td className='border-black border-[2px] w-[200px] h-[50px] text-center'><button className='max-w-[100px] h-[30px] bg-green-500 rounded-[20px] px-[10px]'>Click</button></td>
          </tr>
          <tr>
            <td className='border-black border-[2px] w-[200px] h-[50px]'>2.</td> <td className='border-black border-[2px] w-[200px] h-[50px]'>Ram2</td> <td className='border-black border-[2px] w-[200px] h-[50px]'>002</td> <td className='border-black border-[2px] w-[200px] h-[50px] text-center'><button className='max-w-[100px] h-[30px] bg-green-500 rounded-[20px] px-[10px]'>Click</button></td>
          </tr>
          <tr>
            <td className='border-black border-[2px] w-[200px] h-[50px]'>3.</td> <td className='border-black border-[2px] w-[200px] h-[50px]'>Ram3</td> <td className='border-black border-[2px] w-[200px] h-[50px]'>003</td> <td className='border-black border-[2px] w-[200px] h-[50px] text-center'><button className='max-w-[100px] h-[30px] bg-green-500 rounded-[20px] px-[10px]'>Click</button></td>
          </tr>
          <tr>
            <td className='border-black border-[2px] w-[200px] h-[50px]'>4.</td> <td className='border-black border-[2px] w-[200px] h-[50px]'>Ram4</td> <td className='border-black border-[2px] w-[200px] h-[50px]'>004</td> <td className='border-black border-[2px] w-[200px] h-[50px] text-center'><button className='max-w-[100px] h-[30px] bg-green-500 rounded-[20px] px-[10px]'>Click</button></td>
          </tr>
          <tr>
            <td className='border-black border-[2px] w-[200px] h-[50px]'>5.</td> <td className='border-black border-[2px] w-[200px] h-[50px]'>Ram5</td> <td className='border-black border-[2px] w-[200px] h-[50px]'>005</td> <td className='border-black border-[2px] w-[200px] h-[50px] text-center'><button className='max-w-[100px] h-[30px] bg-green-500 rounded-[20px] px-[10px]'>Click</button></td>
          </tr>
        </table>
      </div>
    </div>
  )
}

export default DataBase
