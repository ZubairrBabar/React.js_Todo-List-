import { useEffect } from "react";

function TodoInput({onChange , onClick, value}){
  
    return(
        
        <div className="text-center">
        <input onChange={onChange} className="border rounded-sm p-2" type="text" placeholder='Add todo'/>
        <button onClick={onClick} disabled={value===""} style={{backgroundColor : value  === "" && "gray"}}className="bg-teal-200 p-2 px-3 ml-2 rounded-sm" >Add</button>
      </div>
    ); 

}

export default TodoInput;