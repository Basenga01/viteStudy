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
  const { setTodolists, tasksObj } = useContext(TodolistContext)
  const tasks = tasksObj[todolistid]

  function onSavetitleTdl(value: string, onSuccsesCallback: () => void) {
    setTodolists((prevState) => {
      const newArr = prevState.map((element) =>
        element.id === todolistid ? { ...element, title: value } : element
      )

      return newArr
    })
    onSuccsesCallback()
  }

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
      <ChangeTitle title={title} saveTitle={onSavetitleTdl} />
      <DeleteTdl todolistid={todolistid} />
      <AddTask todolistid={todolistid} />
      <TaskList tasks={tasks} filtredTask={filterTask} todolistid={todolistid} />
      <FilterBlock setFilterState={setFilterState} filterState={filterState} />
    </div>
  )
}
