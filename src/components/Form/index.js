import './index.css'
import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import Tags from '../Tags'
import Tasks from '../Tasks'

const tagsList = [
  {
    optionId: 'HEALTH',
    displayText: 'Health',
  },
  {
    optionId: 'EDUCATION',
    displayText: 'Education',
  },
  {
    optionId: 'ENTERTAINMENT',
    displayText: 'Entertainment',
  },
  {
    optionId: 'SPORTS',
    displayText: 'Sports',
  },
  {
    optionId: 'TRAVEL',
    displayText: 'Travel',
  },
  {
    optionId: 'OTHERS',
    displayText: 'Others',
  },
]

class Form extends Component {
  state = {
    tagName: tagsList[0].optionId,
    taskName: '',
    isActiveTag: tagsList[0].optionId,
    taskList: [],
  }

  onText = event => {
    this.setState({taskName: event.target.value})
  }

  onTag = event => {
    this.setState({tagName: event.target.value})
  }

  onSubmitForm = () => {
    const {taskName, tagName} = this.state
    if (taskName !== undefined && tagName !== undefined) {
      const newTask = {
        id: uuidv4(),
        taskName,
        tagName,
      }
      this.setState(prevState => ({taskList: [...prevState.taskList, newTask]}))
    }
  }

  onActiveTag = id => {
    this.setState({
      isActiveTag: id,
    })
  }

  render() {
    const {taskName, isActiveTag, taskList} = this.state

    return (
      <div className="bg">
        <div className="form">
          <form onSubmit={this.onSubmitForm}>
            <h1>Create a task!</h1>
            <div className="labels-card">
              <label htmlFor="task">Task</label>
              <input
                value={taskName}
                id="task"
                placeholder="Enter the task here"
                type="text"
                onChange={this.onText}
              />
            </div>
            <div className="select-bg">
              <label htmlFor="tag">Tags</label>
              <select>
                {tagsList.map(eachTag => (
                  <option
                    value={eachTag.optionId}
                    id="tag"
                    placeholder="Tag"
                    onChange={this.onTag}
                    type="text"
                  >
                    {eachTag.displayText}
                  </option>
                ))}
              </select>
            </div>
          </form>
          <button type="submit" className="add-task">
            Add Task
          </button>
        </div>
        <div>
          <h3>Tags</h3>
          <ul className="tags-bg">
            {tagsList.map(eachTag => (
              <Tags
                tagInfo={eachTag}
                key={eachTag.optionId}
                onActiveTag={this.onActiveTag}
                activeTag={eachTag.optionId === isActiveTag}
              />
            ))}
          </ul>
          <h3>Tasks</h3>
          {taskList.length === 0 ? (
            <h3>No Tasks Added Yet</h3>
          ) : (
            <ul>
              {taskList.map(eachTask => (
                <Tasks taskInfo={eachTask} key={eachTask.id} />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default Form
