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
    <span>
      <input type="checkbox" value={e.prefCode} id={name} onChange={() => onCheckTodohuken(e.prefCode)}></input>
      <label htmlFor={name}>{e.prefName}</label>
    </span>
  )
}

export default TodohukenCheckBox
