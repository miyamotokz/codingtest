import React from 'react'
import '../App.css'

type Todohuken = {
  prefCode: number
  prefName: string
}
type Props = {
  e: Todohuken
  onCheckTodohuken: (arg0: any) => void
}
const TodohukenCheckBox: React.FC<Props> = ({ e, onCheckTodohuken }) => {
  const name: string = 'todohuken' + e.prefCode
  return (
    <div className="checkbox-part">
      <input type="checkbox" value={e.prefCode} id={name} onChange={() => onCheckTodohuken(e.prefCode)} className="todohuken-checkbox"></input>
      <label htmlFor={name} className="todohuken-checkbox-label">
        {e.prefName}
      </label>
    </div>
  )
}

export default TodohukenCheckBox
