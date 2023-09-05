import './index.css'

const Tags = props => {
  const {tagInfo, activeTag, onActiveTag} = props
  const {optionId, displayText} = tagInfo

  const onTagBtn = () => {
    onActiveTag(optionId)
  }

  const activeTagBtn = activeTag ? 'active-tag-btn' : 'tag-btn'

  return (
    <li>
      <button onClick={onTagBtn} type="button" className={activeTagBtn}>
        {displayText}
      </button>
    </li>
  )
}

export default Tags
