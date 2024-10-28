import Todo from "./Todo";


const Todos = (props) => {
    
   
    return (
        <div className="bg-blue-600 py-5">
            
            {
               props.todos.map(todo=><Todo key={todo.id} id={todo.id} todo={todo.todo} onRemoveTodo={props.onRemoveTodo}></Todo>)
            }
        </div>
    );
};

export default Todos;