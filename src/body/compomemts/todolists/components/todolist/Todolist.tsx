import {FilterStateType, TaskType} from "../../Todolists.tsx";
import {FilterBlock} from "../filterBlock/filterBlock.tsx";
import {TaskList} from "../taskList/taskList.tsx";
import {AddTask} from "../addTask/addTask.tsx";
import {Dispatch, SetStateAction, useState} from "react";


interface Props {
    title: string
    tasks: Task[]
    setTask: Dispatch<SetStateAction<TaskType>>
    todolistid: string
}

export interface Task {
    id: string
    task: string
    isDone: boolean
    todolistid: string
}


export const Todolist = ({title, tasks, setTask, todolistid}: Props) => {

    const [filterState, setFilterState] = useState<FilterStateType>("all")
    let filterTask: Task[] = []
    if (filterState === "all") {
        filterTask = tasks
    } else if (filterState === "active") {
        filterTask = tasks.filter(task => !task.isDone)
    } else if (filterState === "closed") {
        filterTask = tasks.filter(task => task.isDone)
    }
    console.log(tasks)
    return <div>
        <div>{title}</div>
        <AddTask setTask={setTask} todolistid={todolistid}/>
        <TaskList tasks={tasks} filtredTask={filterTask} setTask={setTask} todolistid={todolistid}/>
        <FilterBlock setFilterState={setFilterState} filterState={filterState}/>
    </div>
}