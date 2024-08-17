import React from 'react'
import Sidebar from './Sidebar'
import Board from './Board'

const Dashboard = () => {
  return (
    <>
    <div className="flex">
    <Sidebar />
    <Board />
    </div>
    </>
  )
}

export default Dashboard
