import React, { useState } from 'react'
import './App.css'
import GraphContainer from './components/graphContainer'
import TodohukenCheckBox from './components/todohukenCheckBox'

function App() {
  const [checked, setChecked] = useState<number[]>([])
  let checkedList = checked
  const onCheck = (e: number) => {
    const addOrRemove = () => {
      if (checked.indexOf(e) !== -1) {
        console.log('dadasdaf')
        checked.splice(checked.indexOf(e), 1)
        return [...checked]
      } else {
        return [...checked, e]
      }
    }
    checkedList = addOrRemove()

    console.log(checkedList)
    setChecked(checkedList)
  }
  console.log('ere', checkedList)
  return (
    <>
      <TodohukenCheckBox
        checked={checked}
        onCheck={(e) => {
          onCheck(e)
        }}
        children={[]}
      ></TodohukenCheckBox>
      <GraphContainer checkedList={checkedList}></GraphContainer>
    </>
  )
}

export default App
