import React from 'react'
import '../App.css'
import { FetchTodohukenList } from '../lib/fetch'
import TdohukenCheckBox from './todohukenCheckBox'

type Todohuken = {
  prefCode: number
  prefName: string
}
type Props = {
  onCheck: (arg0: any) => void
}

const TodohukenCheckBoxContainer: React.FC<Props> = ({ onCheck }) => {
  const { data, error } = FetchTodohukenList()
  if (!data) return <>Loading</>
  const todohuken = data.result
  return (
    <section className="checkboxContanier">
      <h2 className="checkbox-title">都道府県</h2>
      <div className="checkbox-area">
        <form>
          {todohuken.map((e: Todohuken, i: number) => {
            return <TdohukenCheckBox onCheckTodohuken={onCheck} e={e} key={e.prefName} />
          })}
        </form>
      </div>
    </section>
  )
}

export default TodohukenCheckBoxContainer
