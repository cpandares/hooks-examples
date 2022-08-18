import { useForm } from '../hooks/useForm';


const TodoAdd = ({ onNewTodo }) => {

    const { formState, onInputChange, title, onResetForm } = useForm({
        id: new Date().getTime(),
        title:'',
        done:false
    })

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(title.length <= 1) return
       onNewTodo(formState)

       onResetForm()
    }
    return (
        <form 
            onSubmit={ handleSubmit }
        >
            <input 
                type="text" 
                placeholder="New Todo"
                className="form-control"
                name="title"
                value={ title }
                onChange = { onInputChange } 
            />
         <button 
            className="btn btn-outline-primary mt-2"
            type="submit"
            >
            Add
         </button>
    </form>
    );
};

export default TodoAdd;