import {v4 as uuidv4} from "uuid";
import {Dispatch, SetStateAction, useState} from "react";
import {TaskType, TodolistType} from "../../Todolists.tsx";


interface PropsType {
    setTodolists: Dispatch<SetStateAction<TodolistType[]>>
    setTasks: Dispatch<SetStateAction<TaskType>>
}

export const AddTodolist = ({setTodolists, setTasks}: PropsType) => {


    const [value, setValue] = useState<string>("")
    const onClickAddTodolist = () => {
        const todolistId = uuidv4()
        const newTodolist: TodolistType = {
            id: todolistId, title: value
        }
        const newTask = {
            [todolistId]: []
        }
        setTodolists(prevState => [newTodolist, ...prevState])
        setTasks(prevState => {
            return {...prevState, ...newTask}
        })
    }

    return <div>
        <input placeholder={"123"}
               onChange={(event) =>
                   setValue(event.target.value)}
               value={value}
        />
        <button onClick={onClickAddTodolist}>список задач. добавить</button>
    </div>
}