import { useState } from "react";

export default function ToDoList(){

    const[ list , setList] = useState([]);
    const[description, setDescription] = useState("");
    const[isEdited, setEdites] = useState(false);

    function handleInputChange(e){
        setDescription(e.target.value);
    }

    function addTask(e){

        e.preventDefault();

        const newTask = {
            id: Date.now(), //utilizamos fecha como id para que sea unica y evitar que se repita
            description: description
        }

        setList([...list, newTask]);

        setDescription("");
    }

    function editTask(){
        //Editamos la tarea
    }

    function deleteTask(id){
        //borramos la tarea

        setList(list.filter(task => task.id !== id));

    }

    return(
        <>

            <input type="text" placeholder="Añade una tarea" value={description} onChange={handleInputChange}/> <button onClick={addTask}>Añadir</button>
            
                {list && list.map(task => (
                    <p key={task.id}>{task.description} <button onClick={() => editTask}>✏️</button><button onClick={() => deleteTask(task.id)}>❌</button></p>
                ))}
        
        </>
    );
}