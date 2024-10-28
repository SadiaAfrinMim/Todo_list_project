import { RiDeleteBin5Fill } from "react-icons/ri";

const Todo = (props) => {
    const { description, title } = props.todo;
    const { id } = props;
    
    const handleClicked = (id) => {
        props.onRemoveTodo(id);
    };

    return (
        <div className="bg-blue-400 rounded-xl flex justify-between p-4 shadow-xl m-4 items-center">
            <div>
                <h1 className="text-2xl font-bold text-white">{title}</h1>
                <p className="text-xl text-white">{description}</p>
            </div>
            <div>
                <button onClick={() => handleClicked(id)} className="text-2xl text-red-600 font bold">
                    <RiDeleteBin5Fill className="w-10 h-10 border-red-600 rounded-full border-2 p-1" />
                </button>
            </div>
        </div>
    );
};

export default Todo;
