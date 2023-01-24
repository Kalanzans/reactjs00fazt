// import {useState, useContext} from 'react'
// import {TaskContext} from '../context/TaskContext.jsx'

import {TaskContext} from '../context/TaskContext.jsx'
import {useState, useContext} from 'react'

function TaskForm() {
	const [title, setTitle] = useState('')
	const [description, setDescription] = useState('')
	const {createTarea} = useContext(TaskContext)
	

	const handleSubmit = (e)=>{
		e.preventDefault()
		// console.log(title, descr)

		createTarea(
			{title,
			 description} )

		setTitle('')
		setDescription('')
		document.getElementById('btn1').focus()
		}

	return (
		<div className='max-w-md mx-auto'>
			<form onSubmit={handleSubmit} 
			className='bg-slate-800 p-10 mb-4' > 
			<h2 className='text-white text-2xl font-bold mb-3'>Crea tu tarea</h2>

				<input className='bg-slate-300 p-3 w-full mb-2' 
					id='btn1' placeholder='Escribe tu tarea'
					onChange={e => setTitle(e.target.value)	}
					value={title}	
					/>
				<br/><br/>	

				<textarea className='bg-slate-300 p-3 w-full mb-2'
					onChange={e => setDescription(e.target.value) }
					placeholder="Escribe la descripcion de la tarea"
					value={description}></textarea>
				<br/><br/>

				<button className='bg-indigo-500 px-3 py-1 text-white'>Guardar</button>
{/*				<button onClick={()=>{
					document.getElementById('btn1').value=''}}>Limpia</button>*/}

			</form>			
		</div>
		)

}

export default TaskForm

