import Highcharts from 'highcharts'
import { FetchPopulation, FetchTodohukenList } from './fetch'

type Todohuken = {
  prefCode: number
  prefName: string
}
// グラフデータ（options）作成　optionsを返す
export const makeGraphOptions = (checkedList: number[]) => {
  //都道府県別の人口データ取得
  const populations = [...Array(47)].map((_, i) => {
    const { data, error } = FetchPopulation(i + 1)
    if (data) return data.result
  })
  if (populations.length !== 47) return 0 //47都道府県全部Fetchが終わるまでは0

  //result:{data:{0:{label:"総人口".data:{0:{year,value}}}}}からyearとvalueだけ取り出す
  const populationDataList = populations.map((data) => {
    if (data) return data.data[0].data
  })

  //都道府県名取得
  const { data, error } = FetchTodohukenList()
  if (!data) return 0 //取得終わるまでは0
  const todohukenList: Todohuken[] = data.result

  // リターン用データ
  let categories: any[] = []
  let series: Highcharts.SeriesOptionsType[] = []

  //チェックされた都道府県のデータだけ設定
  checkedList.map((todohuken: number, i: number) => {
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
  //リターン用
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
  return options
}
