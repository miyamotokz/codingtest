import React from 'react'
import '../App.css'
import { FetchTodohukenList } from '../lib/fetch'

type Todohuken = {
  prefCode: number
  prefName: string
}
type Props = {
  checked: number[]
  onCheck: (arg0: any) => void
}

const TodohukenCheckBoxContainer: React.FC<Props> = (props) => {
  const { data, error } = FetchTodohukenList()
  if (!data) return <>Loading</>
  const todohuken = data.result
  return (
    <section className="checkboxContanier">
      <h2 className="checkboxArea">都道府県</h2>
      <div>
        <form>
          {todohuken.map((e: Todohuken, i: number) => {
            const name: string = 'todohuken' + e.prefCode
            return (
              <span key={i}>
                <input type="checkbox" value={e.prefCode} id={name} onChange={() => props.onCheck(e.prefCode)}></input>
                <label htmlFor={name}>{e.prefName}</label>
              </span>
            )
          })}
        </form>
      </div>
    </section>
  )
}

export default TodohukenCheckBoxContainer
