import {Todolist} from "./components";

import {v4 as uuidv4} from "uuid"
import {Task} from "./components/todolist/Todolist.tsx";
import {useState} from "react";

interface TodolistType {
    id: string,
    title: string
}

export interface TaskType {
    [key: string]: Task[]

}

const todolistid1 = uuidv4()
const todolistid2 = uuidv4()

const initialTodolists: TodolistType[] = [
    {id: todolistid1, title: "123"},
    {id: todolistid2, title: "321"}
]

const initialTask: TaskType = {
    [todolistid1]: [
        {id: uuidv4(), task: "Бегать", isDone: true, todolistid: todolistid1},
        {id: uuidv4(), task: "Прыгать", isDone: true, todolistid: todolistid1},
        {id: uuidv4(), task: "Кушать", isDone: true, todolistid: todolistid1},
    ],
    [todolistid2]: [
        {id: uuidv4(), task: "учиться", isDone: false, todolistid: todolistid2},
        {id: uuidv4(), task: "Плакать", isDone: false, todolistid: todolistid2},
        {id: uuidv4(), task: "Жаловаться", isDone: false, todolistid: todolistid2},
        {id: uuidv4(), task: "злузду зихать", isDone: false, todolistid: todolistid2},
    ]
}

export type FilterStateType = "all" | "active" | "closed"
export const Todolists = () => {
    const [todolists, setTodolists] = useState<TodolistType[]>(initialTodolists)
    const [tasks, setTasks] = useState<TaskType>(initialTask)

    return <div>
        {todolists.map((todolist) => {
            return (
                <Todolist key={todolist.id} todolistid={todolist.id}
                          title={todolist.title}
                          tasks={tasks[todolist.id]}
                          setTask={setTasks}
                />
            )
        })}
    </div>
}