import {createContext, useState} from 'react'
import {tasks} from '../data/tasks.js'

//retorna um obj (NOME do contexto): armazena os dados
export const TaskContext = createContext()  

//contenedor/etiqueta componente que engloba o resto dos commponentes
export function TaskContextProvider(props) {
	const [tareas, setTareas] = useState(tasks)

		function createTarea(tarea){
		  setTareas([...tareas, {
		    title: tarea.title,
		    id: tareas.length,
		    description: tarea.description
		  }
		  ])
		}

		function delTarea(tareaID){
		  // console.log(tareas, tareaID)
		  setTareas(tareas.filter(t => t.id !== tareaID))
		}


	return (
		<TaskContext.Provider value={{
				tareas,
				createTarea,
				delTarea
				}}>

			{props.children}
		</TaskContext.Provider>
	)
}

