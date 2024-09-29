import { FilterStateType } from '../../Todolists.tsx'
import { FilterBlock } from '../filterBlock/filterBlock.tsx'
import { TaskList } from '../taskList/taskList.tsx'
import { AddTask } from '../addTask/addTask.tsx'
import { ChangeTitle } from '../changeTitle/ChangeTitle.tsx'
import { DeleteTdl } from '../deleteTdl/deleteTdl.tsx'
import { useContext, useEffect, useState } from 'react'
import { TodolistContext } from '@/app/provaider'
import { useSelector } from 'react-redux'
import { RootState, useAppDispatch } from '@/app/rootStore'
import { getMyTask, TaskDTO } from '@/entity/task'

interface Props {
  title: string
  todolistid: string
}

export const Todolist = ({ title, todolistid }: Props) => {
  const { onSavetitleTdl } = useContext(TodolistContext)

  const { taskObj: tasksObj } = useSelector((state: RootState) => state.taskStore)
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getMyTask())
  }, [])

  const tasks = tasksObj[todolistid]

  const [filterState, setFilterState] = useState<FilterStateType>('all')
  let filterTask: TaskDTO[] = []
  if (filterState === 'all') {
    filterTask = tasks
  } else if (filterState === 'active') {
    filterTask = tasks.filter((task) => !task.isCompleted)
  } else if (filterState === 'closed') {
    filterTask = tasks.filter((task) => task.isCompleted)
  }
  console.log(tasks)
  console.log(filterTask)

  return (
    <div>
      {title}
      <ChangeTitle
        title={title}
        saveTitle={(value, callback) => onSavetitleTdl(todolistid, value, callback)}
      />
      <DeleteTdl todolistid={todolistid} />
      <AddTask todolistid={todolistid} />
      <TaskList filtredTask={filterTask} todolistid={todolistid} />
      <FilterBlock setFilterState={setFilterState} filterState={filterState} />
    </div>
  )
}
