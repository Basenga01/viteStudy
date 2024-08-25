import { v4 as uuidv4 } from 'uuid'
import { TaskType, TodolistType } from '@/types'

const todolistid1 = uuidv4()
const todolistid2 = uuidv4()

export const initialTodolists: TodolistType[] = [
  { id: todolistid1, title: 'Тудулист1' },
  { id: todolistid2, title: 'Тудулист2' },
]

export const initialTask: TaskType = {
  [todolistid1]: [
    { id: uuidv4(), task: 'Бегать', isDone: true, todolistid: todolistid1 },
    { id: uuidv4(), task: 'Прыгать', isDone: true, todolistid: todolistid1 },
    { id: uuidv4(), task: 'Кушать', isDone: true, todolistid: todolistid1 },
  ],
  [todolistid2]: [
    { id: uuidv4(), task: 'учиться', isDone: false, todolistid: todolistid2 },
    { id: uuidv4(), task: 'Плакать', isDone: false, todolistid: todolistid2 },
    { id: uuidv4(), task: 'Жаловаться', isDone: false, todolistid: todolistid2 },
    { id: uuidv4(), task: 'злузду зихать', isDone: false, todolistid: todolistid2 },
  ],
}


