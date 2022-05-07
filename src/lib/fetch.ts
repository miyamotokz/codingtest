import useSWR from 'swr'
import axios from 'axios';
import useSWRImmutable from 'swr/immutable'
const fetcher = (url: string) =>
    axios
    .get(url, {headers  : { "X-API-KEY": "5ey9gBAJ5RdrLMhg7uoUjlpn9A0pMevWph8CCkw7"} })
    .then((res) => res.data);

export const FetchTodohukenList = () => {
    const {data,error} =  useSWRImmutable(`https://opendata.resas-portal.go.jp/api/v1/prefectures`, fetcher)
    if(error) return error
    if(data) return data
}

export const FetchPopulation = (code:number) => {
    const {data,error} = useSWRImmutable(`https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?prefCode=${code}&cityCode=-`, fetcher)
    if(error) return error
    if(data) return data
}
export const FetchPopulationList = (list: number[]) => {
    if(list.length === 0)return []
    const dataList = list.map((code) => {
        const { data, error } = FetchPopulation(code)
    })
    console.log(dataList)
}