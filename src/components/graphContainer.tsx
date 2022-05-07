import '../App.css';
import React, { useRef } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

import { FetchPopulation, FetchTodohukenList } from '../lib/fetch';

type Props = {
    checkedList:number[]
}
const GraphContainer = (props:Props) => {
    const chartComponentRef = useRef<HighchartsReact.RefObject>(null);
    console.log("con", props.checkedList)
    

    const populations = [...Array(47)].map((_, i) => {
        const data = FetchPopulation(i+1)
        if(data)return data
    })

    const populationDataList = populations.map((data) => {
        return data?.result.data[0].data
    })
    const  data = FetchTodohukenList()
    const todohukenList = data?.result;
    let categories:any[] = [];

    let series: Highcharts.SeriesOptionsType[] = [];
    props.checkedList.map((todohuken, i) => {
        todohuken--;
        populationDataList[todohuken].map((area: any) => {
            categories.push(area.year)
        })
        const dataList  = populationDataList[todohuken].map((area: any) => area.value )
 
        series.push({
            type: "line",
            name: todohukenList[todohuken].prefName,
            data: dataList,
            marker: {
                enabled: true,
                symbol: "circle",
                radius: 0
            }
        })
    })
    const options: Highcharts.Options = {
    title: {
      text: "",
    },
    xAxis: {
      title: {
        text: "年度",
      },
      categories: categories,
    },
    yAxis: {
      title: {
        text: "人口数",
      },
    },
    series:
      series.length === 0
        ? [{ type: "line", name: "都道府県名", data: [] }]
        : series,
    
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle'
        },
  };
    return (
    <HighchartsReact
      highcharts={Highcharts}
      options={options}
      ref={chartComponentRef}
      {...props}
    />
  );
}
export default GraphContainer;