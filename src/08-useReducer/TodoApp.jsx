
import useTodos from '../hooks/useTodos';
import TodoAdd from './TodoAdd';
import TodoList from './TodoList';




const TodoApp = () => {

    const { todos, todosCount, todosPendingCount, onNewTodo, handleDelete, handleToggleTodo } = useTodos();
    

    return (
        <>
            <h2>Todos { todosCount }, pendientes: { todosPendingCount }</h2>
            <hr />

            <div className="row">
                <div className="col-md-7">

                  <TodoList 
                    todos= { todos } 
                    onDelete = { handleDelete }
                    onToggleTodo = { handleToggleTodo }
                    
                    />

                </div>

                <div className="col-md-5 ">
                   <TodoAdd onNewTodo = { onNewTodo } />
                </div>
            </div>
        </>
    );
};

export default TodoApp;