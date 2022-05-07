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

const TodohukenCheckBox = (props: Props) => {
  const data = FetchTodohukenList()

  return (
    <>
      <div id="checkboxtitle">都道府県</div>
      <div>
        <form>
          {' '}
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
    </>
  )
}

export default TodohukenCheckBox
