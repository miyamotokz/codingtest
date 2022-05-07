import useSWR from 'swr'
import axios from 'axios';

const fetcher = (url: string) =>
    axios
    .get(url, {headers  : { "X-API-KEY": "5ey9gBAJ5RdrLMhg7uoUjlpn9A0pMevWph8CCkw7"} })
    .then((res) => res.data);

export const FetchTodohukenList = () => {
    return useSWR(`https://opendata.resas-portal.go.jp/api/v1/prefectures`, fetcher)
}

export const FetchPopulation = (codes:number[]) => {
    codes.map((code) => {
        const { data, error } = useSWR(`https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?prefCode=${code}&cityCode=-`, fetcher)
        console.log(data)
    })
}