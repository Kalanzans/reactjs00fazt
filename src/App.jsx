// import {useState, useEffect} from 'react'
// import {useContext} from 'react'
// import {TaskContext} from './context/TaskContext.jsx'

import TaskList from './components/TaskList.jsx'
import TaskForm from './components/TaskForm.jsx'

function App() {
  // const {} = useContext(TaskContext)


  return (
    <main className='bg-zinc-900 h-screen'>
    <div className='container mx-auto p-10'>
      <TaskForm/>
      <TaskList/>  
    </div>
    </main>
  )
}

export default App

