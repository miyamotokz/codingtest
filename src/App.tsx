import React, { useState }  from 'react';
import './App.css';
import GraphContainer from './components/graphContainer';
import TodohukenCheckBox from './components/todohukenCheckBox';
import { FetchPopulation, FetchPopulationList } from './lib/fetch';

function App() {
    const [checked, setChecked] = useState<number[]>([])

    return (
    <>
    <TodohukenCheckBox
      checked={checked}
      onCheck={
      (e) => {
      setChecked([...checked,e])
    }
    }
    >

    </TodohukenCheckBox>
    <GraphContainer
    checkedList={checked}
    ></GraphContainer>
    </>
    )
    }

export default App;
