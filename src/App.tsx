import React, { useState }  from 'react';
import './App.css';
import TodohukenCheckBox from './components/todohukenCheckBox';

function App() {
  const [checked, setChecked] = useState<number[]>([])
  return (
    <>
      <TodohukenCheckBox
        checked={checked}
      onCheck={
        (e) => {
          console.log(e)
          
        }
      }
      >

      </TodohukenCheckBox>
    </>
  )
}

export default App;
