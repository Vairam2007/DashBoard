import React from 'react'
import { Bar,Line,Pie } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, PointElement,BarElement, CategoryScale, LinearScale, ArcElement } from 'chart.js';
ChartJS.register( BarElement, CategoryScale, LinearScale,LineElement, PointElement, ArcElement);

const InnerDashBoard = () => {

  const data1 = {
    labels: ['January', 'February', 'March'],
    datasets: [
      {
        label: 'Monthly Sales',
        data: [65, 59, 80],
        backgroundColor: 'rgba(75, 192, 192)',
        borderColor: 'rgba(75, 192, 192)',
      },
    ],
  };
  const data2 = {
    labels: ['April', 'May', 'June'],
    datasets: [
      {
        label: 'Monthly Sales',
        data: [48,84,63],
        backgroundColor: 'rgba(75, 192, 192)',
        borderColor: 'rgba(75, 192, 192)',
      },
    ],
  };
  const data3 = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'], // X-axis labels
    datasets: [
      {
        label: 'Revenue',
        data: [10,30,20,50,35,60],
        borderColor: 'rgba(75, 192, 192)',
      },
    ],
  };
  const data4 = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        data: [12, 19],
        backgroundColor: [
          'rgba(255, 99, 132)',
          'rgba(54, 162, 235)',
        ],
        borderColor:[
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
        ],
        borderWidth: 5,
      },
    ],
  };



  return (
    <>
    <div className='w-full min-h-[100vh] bg-blue-300 flex justify-center items-center flex-col gap-[20px] '>
      <h1 className='p-[10px] text-center font-bold text-[50px]'>DashBoard</h1>
      <div className="flex justify-evenly items-center p-[20px] flex-col md:flex-row gap-[20px]">
        <div style={{boxShadow:"0 0 10px rgba(0,0,0 ) "}} className=" rounded-[50px] bg-white lg:w-[500px] lg:h-[300px]  md:w-[300px] md:h-[200px] w-[400px] h-[200px] p-[10px] md:p-[50px]"><Bar data={data1} /></div>
        <div style={{boxShadow:"0 0 10px rgba(0,0,0 ) "}} className="rounded-[50px] bg-white lg:w-[500px] lg:h-[300px]  md:w-[300px] md:h-[200px] w-[400px] h-[200px] p-[10px] md:p-[50px]"><Bar data={data2} /></div>
      </div>
      <div className="flex justify-evenly items-center p-[20px] flex-col md:flex-row gap-[20px]">
        <div style={{boxShadow:"0 0 10px rgba(0,0,0 ) "}} className="rounded-[50px] bg-white lg:w-[500px] lg:h-[300px]  md:w-[300px] md:h-[200px] w-[400px] h-[200px] p-[10px] md:p-[50px] mb-[10px] "><Line data={data3} /></div>
        <div style={{boxShadow:"0 0 10px rgba(0,0,0 ) "}} className="rounded-[50px] bg-white lg:w-[300px] lg:h-[300px]  md:w-[200px] md:h-[200px] w-[200px] h-[200px] p-[10px] md:p-[50px] mb-[10px] "><Pie data={data4} /></div>
      </div>
    </div>
    </>
  )
}

export default InnerDashBoard
