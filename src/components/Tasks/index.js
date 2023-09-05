import './index.css'

const Tasks = props => {
  const {taskInfo} = props

  return (
    <li className="task-bg">
      <p>{taskInfo.taskName}</p>
      <button type="button" className="tag-check-btn">
        {taskInfo.tagName}
      </button>
    </li>
  )
}

export default Tasks
