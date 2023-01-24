import {useContext} from 'react'
import TaskCard from './TaskCard.jsx'
import {TaskContext} from '../context/TaskContext.jsx'

function TaskList() {
	const {tareas} = useContext(TaskContext)
	
	if(tareas.length === 0){
		return <h1 className='text-white text-4xl font-bold text-center'>No hay tareas aun</h1>
	}
	// console.log('>'+tareas)

	return (
		<div className='grid grid-cols-4 gap-2' >
			{	
				tareas.map( (t) => ( 
					<TaskCard key={t.id} tarea={t}/>					
					) )	
			}
		</div>)
	}  //end of TaskList()

export default TaskList
