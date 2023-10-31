import { useState, useContext } from "react"
import { TaskContext } from "../context/TaskContext"

function TaskForm() {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const { createTask }= useContext(TaskContext)

  const handleChangeInput = (e) => {
    setTitle(e.target.value);
  };

  const handleChangeTextarea = (e) => {
    setDescription(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    createTask({
      title,
      description,
    });
    setTitle("");
    setDescription("");
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleFormSubmit} className="bg-slate-800 p-10 mb-4">
        <h1 className="text-2xl font-bold text-white mb-3">Crea tu tarea</h1>
        <input
          placeholder="Escribe tu tarea"
          onChange={handleChangeInput}
          value={title}
          autoFocus
          className="bg-slate-300 p-3 w-full mb-2"
        />
        <textarea
          placeholder="Escribe la descripción de la tarea"
          onChange={handleChangeTextarea}
          value={description}
          className="bg-slate-300 p-3 w-full mb-2"
        />
        <button className="bg-indigo-500 px-3 py-1 text-white">Guardar</button>
      </form>
    </div>
  );
}

export default TaskForm;
