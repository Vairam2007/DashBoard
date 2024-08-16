import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import DataBase from '../InnerComponents/DataBase'
import Favorite from '../InnerComponents/Favorite'
import InnerDashBoard from '../InnerComponents/InnerDashBoard'
import Clints from '../InnerComponents/Clints'
import Tasks from '../InnerComponents/Tasks'
import Visitors from '../InnerComponents/Visitors'
import Company from '../InnerComponents/Company'
import Sales from '../InnerComponents/Sales'


const Board = () => {
  return (
    <>
 
      <Routes>
        <Route path="/" element={<DataBase />} />
        <Route path="/DashBoard" element={<InnerDashBoard />} />
        <Route path="/Favorite" element={<Favorite />} />
        <Route path="/Clint" element={<Clints />} />
        <Route path="/Tasks" element={<Tasks />} />
        <Route path="/Visitors" element={<Visitors />} />
        <Route path="/Company" element={<Company />} />
        <Route path="/Sales" element={<Sales />} />
      </Routes>

    </>
  )
}

export default Board
