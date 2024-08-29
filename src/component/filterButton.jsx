
function FilterButtons({filter,setFilter}){
    return(
        <div className='flex justify-around '>
        <button onClick={()=> setFilter("All")} className={`${filter === 'All' ? 'bg-teal-600 text-white' : 'bg-teal-100'} p-2 px-4 rounded-sm`}>All</button>
        <button onClick={()=> setFilter("Completed")} className={`${filter === 'Completed' ? 'bg-teal-600 text-white' : 'bg-teal-100'} p-2 px-4 rounded-sm`}>Completed</button>  
        <button onClick={()=> setFilter("Uncompleted")} className={`${filter ==='Uncompleted' ? 'bg-teal-600 text-white' : 'bg-teal-100'} p-2 px-4 rounded-sm`}>Uncompleted</button>
      </div>
    )
}

export default FilterButtons