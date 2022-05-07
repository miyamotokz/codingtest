import React, { useRef } from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { FetchPopulation, FetchTodohukenList } from '../lib/fetch'
type Todohuken = {
  prefCode: number
  prefName: string
}
type Props = {
  checkedList: number[]
}
const GraphContainer: React.FC<Props> = (props) => {
  const chartComponentRef = useRef<HighchartsReact.RefObject>(null)

  const populations = [...Array(47)].map((_, i) => {
    const { data, error } = FetchPopulation(i + 1)
    if (data) return data.result
  })
  if (populations.length !== 47) return <>Loading...</>
  const populationDataList = populations.map((data) => {
    if (data) return data.data[0].data
  })

  const { data, error } = FetchTodohukenList()
  if (!data) return <>Loading</>

  const todohukenList = data.result

  let categories: any[] = []
  let series: Highcharts.SeriesOptionsType[] = []

  props.checkedList.map((todohuken, i) => {
    todohuken--
    populationDataList[todohuken].map((area: any) => {
      categories.push(area.year)
    })
    const dataList = populationDataList[todohuken].map((area: any) => area.value)
    const name = todohukenList[todohuken].prefName

    series.push({
      type: 'line',
      name: name,
      data: dataList,
      marker: {
        enabled: true,
        symbol: 'circle',
        radius: 0,
      },
    })
  })

  Highcharts.setOptions({
    lang: {
      thousandsSep: '',
      numericSymbols: [],
    },
  })

  const options: Highcharts.Options = {
    title: {
      text: '人口統計',
    },
    caption: {
      text: '選択した各県の総人口のグラフ',
    },

    xAxis: {
      title: {
        text: '年度',
      },
      categories: categories,
    },
    yAxis: {
      title: {
        text: '人口数',
      },
    },
    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'middle',
    },
    series: series.length === 0 ? [{ type: 'line', name: '都道府県名', data: [] }] : series,
  }

  return (
    <>
      <HighchartsReact highcharts={Highcharts} options={options} ref={chartComponentRef} {...props} />
    </>
  )
}
export default GraphContainer
