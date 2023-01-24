import {useContext} from 'react'
import {TaskContext} from '../context/TaskContext.jsx'

function TaskCard({tarea}) {

	const {delTarea} = useContext(TaskContext)
	
	return (

			<div className='bg-gray-800 text-white p-4 rounded-md'>	
				<h1 className='text-xl font-bold capitalize'>{tarea.title}</h1>
				<p className='text-gray-500 text-sm'>{tarea.description}</p>	

				<button className='bg-red-500 px-2 py-1 rounded-md mt-4 hover:bg-red-400' 
				onClick={ ()=> delTarea(tarea.id) }>
					Eliminar Tarea
				</button>	

			</div>

	)
}

export default TaskCard