import { useState } from "react";
import Newtodo from "./Newtodo";
import Todos from "./Todos";
import {v4 as uuiv4} from "uuid"



const Home = () => {
  const todoList =  [
        {
            "id": 1,
            "title": "Buy groceries",
            "description": "Purchase vegetables, fruits, and dairy."
        },
        {
            "id": 2,
            "title": "Study for exams",
            "description": "Review chapters 3, 4, and 5 for CS exam."
        },
        {
            "id": 3,
            "title": "Finish project",
            "description": "Complete remaining tasks for Cricket Team Selector app."
        },
        {
            "id": 4,
            "title": "Exercise",
            "description": "Go for a 30-minute jog in the evening."
        },
        {
            "id": 5,
            "title": "Clean workspace",
            "description": "Organize desk and clean up files."
        },
        {
            "id": 6,
            "title": "Call mom",
            "description": "Check in and catch up on family updates."
        },
        {
            "id": 7,
            "title": "Book dentist",
            "description": "Schedule an appointment for next week."
        },
        {
            "id": 8,
            "title": "Read a book",
            "description": "Spend at least 30 minutes reading."
        },
        {
            "id": 9,
            "title": "Backup project",
            "description": "Push code changes to GitHub repository."
        },
        {
            "id": 10,
            "title": "Plan weekend",
            "description": "Decide on plans for Saturday and Sunday."
        }
    ]

    const [todos,setTodos] = useState([])
    const handleAddTodo = (todo) =>{
       setTodos((priviousTodo)=>{
        return[...priviousTodo,{id: uuiv4(),todo}]
       })
    }

    const onRemoveTodo = (id) =>{
       const filterTodo = todos.filter((todo)=> todo.id !== id)
       setTodos(filterTodo)

    }
    
    
    return (
        <div className="flex  justify-center bg-blue-100">    
        <div>
        
        <Newtodo onAddTodo = {handleAddTodo}></Newtodo>
        <Todos onRemoveTodo = {onRemoveTodo} todos={todos}></Todos>
        </div>
        </div>
    );
};

export default Home;