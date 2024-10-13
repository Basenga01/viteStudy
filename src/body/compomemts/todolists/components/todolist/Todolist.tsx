import { FilterStateType } from '../../Todolists.tsx'
import { FilterBlock } from '../filterBlock/filterBlock.tsx'
import { TaskList } from '../taskList/taskList.tsx'
import { AddTask } from '../addTask/addTask.tsx'
import { ChangeTitle } from '../changeTitle/ChangeTitle.tsx'
import { DeleteTdl } from '../deleteTdl/deleteTdl.tsx'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState, useAppDispatch } from '@/app/rootStore'
import { getMyTask, TaskDTO } from '@/entity/task'
import { changeTdl } from '@/entity/todolist/api/changeTdl.ts'

interface Props {
  title: string
  todolistid: string
}

export const Todolist = ({ title, todolistid }: Props) => {
  
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

  return (
    <div>
      {title}
      <ChangeTitle
        title={title}
        saveTitle={(value, callback) => dispatch(changeTdl({todolistId: todolistid, title: value, successesCallback: callback})) }
      />
      <DeleteTdl todolistid={todolistid} />
      <AddTask todolistid={todolistid} />
      <TaskList filtredTask={filterTask} todolistid={todolistid} />
      <FilterBlock setFilterState={setFilterState} filterState={filterState} />
    </div>
  )
}
