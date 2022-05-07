import React, { useState } from 'react'
import './App.css'
import GraphContainer from './components/graphContainer'
import TodohukenCheckBoxContainer from './components/todohukenCheckBoxContainer'

function App() {
  const [checked, setChecked] = useState<number[]>([])

  const toggleCheck = (e: number) => {
    const newCheckedCreate = () => {
      if (checked.indexOf(e) !== -1) {
        checked.splice(checked.indexOf(e), 1)
        return [...checked]
      } else {
        return [...checked, e]
      }
    }

    const newChecked = newCheckedCreate()

    console.log(newChecked)
    setChecked(newChecked)
  }
  return (
    <>
      <TodohukenCheckBoxContainer
        checked={checked}
        onCheck={(e) => {
          toggleCheck(e)
        }}
        children={[]}
      ></TodohukenCheckBoxContainer>
      <GraphContainer checkedList={checked}></GraphContainer>
    </>
  )
}

export default App
