import '../App.css'
import { FetchTodohukenList } from '../lib/fetch'

type Props = {
  children: never[]
  checked: number[]
  onCheck: (arg0: any) => void
}

type Todohuken = {
  prefCode: number
  prefName: string
}

const TodohukenCheckBoxContainer = (props: Props) => {
  const data = FetchTodohukenList()

  return (
    <section className="checkboxContanier">
      <h2 className="checkboxArea">都道府県</h2>
      <div>
        <form>
          {data?.result.map((e: Todohuken, i: number) => {
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
