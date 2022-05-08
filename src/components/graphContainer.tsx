import React, { useRef } from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import '../App.css'
import { makeGraphOptions } from '../lib/makeGraphOptions'

type Todohuken = {
  prefCode: number
  prefName: string
}
type Props = {
  checkedList: number[]
}

const GraphContainer: React.FC<Props> = (props) => {
  const chartComponentRef = useRef<HighchartsReact.RefObject>(null)

  Highcharts.setOptions({
    lang: {
      thousandsSep: '',
      numericSymbols: [],
    },
  })
  const options = makeGraphOptions(props.checkedList)
  if (!options) return <>Loading</> //データ整形前はLoadingを返す
  return <HighchartsReact highcharts={Highcharts} options={options} ref={chartComponentRef} {...props} />
}
export default GraphContainer
