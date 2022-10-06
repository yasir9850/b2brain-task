
import './App.css';
import React from 'react'
import Sidebar from './Component/Sidebar';
import Screen from './Component/Screen'

const App = () => {
  return (
   <div className='p-cont'>
   <div className='sidebarap'>
   <Sidebar/>
   </div>
   <div className='screen-wrap'>
   <Screen/>
   </div>
   </div>
  )
}

export default App


