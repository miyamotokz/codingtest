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
    setChecked(newChecked)
  }

  return (
    <>
      <TodohukenCheckBoxContainer
        onCheck={(e) => {
          toggleCheck(e)
        }}
      />
      <GraphContainer checkedList={checked} />
    </>
  )
}

export default App
