import {FilterStateType, TaskType, TodolistType} from "../../Todolists.tsx";
import {FilterBlock} from "../filterBlock/filterBlock.tsx";
import {TaskList} from "../taskList/taskList.tsx";
import {AddTask} from "../addTask/addTask.tsx";
import {Dispatch, SetStateAction, useState} from "react";
import {ChangeTitle} from "../changeTitle/ChangeTitle.tsx";


interface Props {
    title: string
    tasks: Task[]
    setTask: Dispatch<SetStateAction<TaskType>>
    todolistid: string
    setTodolists: Dispatch<SetStateAction<TodolistType[]>>

}

export interface Task {
    id: string
    task: string
    isDone: boolean
    todolistid: string

}


export const Todolist = ({title, tasks, setTask, todolistid, setTodolists}: Props) => {

    const [filterState, setFilterState] = useState<FilterStateType>("all")
    let filterTask: Task[] = []
    if (filterState === "all") {
        filterTask = tasks
    } else if (filterState === "active") {
        filterTask = tasks.filter(task => !task.isDone)
    } else if (filterState === "closed") {
        filterTask = tasks.filter(task => task.isDone)
    }

    return <div>
        <ChangeTitle title={title}
                     setTodolists={setTodolists}
                     todolistid={todolistid}/>

        <AddTask setTask={setTask}
                 todolistid={todolistid}/>

        <TaskList tasks={tasks}
                  filtredTask={filterTask}
                  setTask={setTask}
                  todolistid={todolistid}/>

        <FilterBlock setFilterState={setFilterState}
                     filterState={filterState}/>
    </div>
}