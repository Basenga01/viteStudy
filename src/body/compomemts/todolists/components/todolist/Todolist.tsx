import { FilterStateType } from '../../Todolists.tsx'
import { FilterBlock } from '../filterBlock/filterBlock.tsx'
import { TaskList } from '../taskList/taskList.tsx'
import { AddTask } from '../addTask/addTask.tsx'
import { ChangeTitle } from '../changeTitle/ChangeTitle.tsx'
import { DeleteTdl } from '../deleteTdl/deleteTdl.tsx'
import { Task } from '@/types'
import { useContext, useState } from 'react'
import { TodolistContext } from '@/app/provaider'

interface Props {
  title: string
  todolistid: string
}

export const Todolist = ({ title, todolistid }: Props) => {

  const {tasksObj, onSavetitleTdl} = useContext(TodolistContext)
  const tasks = tasksObj[todolistid]



  const [filterState, setFilterState] = useState<FilterStateType>('all')
  let filterTask: Task[] = []
  if (filterState === 'all') {
    filterTask = tasks
  } else if (filterState === 'active') {
    filterTask = tasks.filter((task) => !task.isDone)
  } else if (filterState === 'closed') {
    filterTask = tasks.filter((task) => task.isDone)
  }

  return (
    <div>
      {title}
      <ChangeTitle title={title} saveTitle={(value, callback)=>onSavetitleTdl(todolistid, value, callback)} />
      <DeleteTdl todolistid={todolistid} />
      <AddTask todolistid={todolistid} />
      <TaskList tasks={tasks} filtredTask={filterTask} todolistid={todolistid} />
      <FilterBlock setFilterState={setFilterState} filterState={filterState} />

    </div>
  )
}
