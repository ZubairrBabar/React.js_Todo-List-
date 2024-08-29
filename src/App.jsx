
import { useCallback, useMemo, useState } from 'react'
import './App.css'
import TodoInput from './component/todoinput'
import TodoList from './component/todoList'
import FilterButtons from './component/filterButton';

function App() {
 const [todo , setTodo] = useState("");
 const[filter,setFilter] = useState("All");
  const [todos , setTodos] = useState([
    {
      todo : "Reading Book",
      id : Date.now(),
      compeleted : false,
    },
  ])

  const handleAddTodo = useCallback ( ()=>{
  
  const TodoArr =  [...todos , {
  todo,
  id : Date.now(),
  compeleted : false,
  },
];
  setTodos([...TodoArr])
  setTodo("") 

},[todo])

const handleOnDelete = useCallback((id) => {
console.log("id=>", id);
const filter = todos.filter((data)=> data.id !== id );
console.log(filter);

setTodos([...filter])
},[todos ]);




const handleOnToggleTodo = useCallback((id)=>{
  console.log("toggleTodo change",id);
  const TodoArr = [...todos]
  const todoInd = TodoArr.findIndex((data)=> data.id == id)
  TodoArr[todoInd].compeleted = !TodoArr[todoInd].compeleted 
  console.log(todoInd);
  console.log(TodoArr);
  setTodos ([...TodoArr])
  
})

const filteredTodos = todos.filter((data)=>{
  if(filter == "All"){
    return true;
  }
  if(filter == "Completed" && data.compeleted){
    return true
  }
  if(filter == "Uncompleted" && !data.compeleted){
    return true
  }
}) 


  return (
    <>
    <div className='w-3/4 mx-auto border-4'>
      <h1 className='font-bold text-3xl ml-10 text-center'>Todo App</h1>
     <TodoInput value = {todo } onChange= {(e)=> setTodo(e.target.value)}
     onClick={handleAddTodo }/>

    <FilterButtons filter={filter} setFilter={setFilter}/>
    <TodoList todos={filteredTodos} onDelete={handleOnDelete} toggleTodo={handleOnToggleTodo}/>

    </div>
  </> 
   
    
  ) 
}

export default App
