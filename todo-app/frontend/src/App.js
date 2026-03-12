import {useEffect,useState} from "react"
import axios from "axios"

function App(){

const [todos,setTodos] = useState([])
const [task,setTask] = useState("")

const API = process.env.REACT_APP_API_URL

const getTodos = async()=>{
const res = await axios.get(API+"/todos")
setTodos(res.data)
}

useEffect(()=>{
getTodos()
},[])

const addTodo = async()=>{
await axios.post(API+"/todos",{task})
setTask("")
getTodos()
}

const deleteTodo = async(id)=>{
await axios.delete(API+"/todos/"+id)
getTodos()
}

return(
<div style={{padding:"40px"}}>

<h1>Todo App</h1>

<input
value={task}
onChange={(e)=>setTask(e.target.value)}
/>

<button onClick={addTodo}>Add</button>

<ul>
{todos.map((t,i)=>(
<li key={i}>
{t.task}
<button onClick={()=>deleteTodo(i)}>Delete</button>
</li>
))}
</ul>

</div>
)
}

export default App