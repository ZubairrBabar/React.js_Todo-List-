import { useEffect } from "react"

function TodoList({todos , onDelete , toggleTodo}){
  useEffect (() => {
  console.log("Delete change hogya ");
  
  },[onDelete])

    return(
    <>
    {
      
        todos.map((todo,index)=>{
          return(
            <div className='flex m-5 border-4 bg-slate-200' key={todo.id}>
            <h3 style={{textDecoration : todo.compeleted && "line-through"}} className='cursor-pointer font-bold p-2 text-left flex-1 pl-2  ' onClick={()=> toggleTodo(todo.id)} >{todo.todo}  </h3>
            <button onClick={()=> onDelete(todo.id)} className=' font-bold text-white bg-red-500 p-2'>delete</button>
            </div>
          )
        })
       }
       </>
)
}

export default TodoList