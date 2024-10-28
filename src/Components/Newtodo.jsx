import { useState } from "react";


const Newtodo = ({onAddTodo}) => {
    const [todo,setTodo] =useState({
        title: "",
        description: "",
    })
    const {title,description} = todo;


    const handleChange = (event) =>{
        const name = event.target.name;
        setTodo((oldTodo)=>{
            return{...oldTodo, [name]:event.target.value}
        })

    }
   
    const handleSubmit =(event) =>{
        event.preventDefault()
       
        onAddTodo(todo);
        setTodo({title: "", description: ""})

    }

  
    return (
        <form action="" onSubmit={handleSubmit} className='space-y-5 bg-blue-900 rounded-xl rounded-b-none p-5'>
            <h1 className="text-4xl font-bold text-white text-center">ToDo App</h1>
            <div className='flex items-center gap-4'>
                <label className='text-2xl font-bold text-white' htmlFor="">Title: </label>
                <input className='rounded-xl p-4 w-full' type="text" placeholder='title'name="title" onChange={handleChange} value={title}/>
            </div>
            <div className='flex items-center gap-4'>
                <label className='text-2xl font-bold text-white'  htmlFor="">Description:  </label>
                <input name="description" className='rounded-xl p-4 w-full'  type="text" placeholder='description' onChange={handleChange} value={description}/>
            </div>
            <button className='w-full bg-red-500 text-white p-4 text-xl font-bold rounded-xl'>Add Todo</button>
        </form>
    );
};

export default Newtodo;