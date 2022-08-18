

const TodoItem = ({todo, onDelete, onToggleTodo}) => {
    return (
        <li 
            className="list-group-item d-flex justify-content-between"
            >
                <span 
                    className={`align-self-center ${ (todo.done) ? 'text-decoration-line-through': ''} `}
                    onClick={ ()=>onToggleTodo(todo.id) }
                    >
                    { todo.title }
                </span>
                <button 
                    className="btn btn-outline-danger"
                    onClick = { ()=>onDelete(todo.id) }
                    >
                    X
                </button>
        </li>
    );
};

export default TodoItem;