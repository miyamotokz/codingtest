import axios from 'axios'
import useSWRImmutable from 'swr/immutable'

const fetcher = (url: string) => axios.get(url, { headers: { 'X-API-KEY': process.env.REACT_APP_RESAS_API_KEY || '' } }).then((res) => res.data)

export const FetchTodohukenList = () => {
  return useSWRImmutable(`https://opendata.resas-portal.go.jp/api/v1/prefectures`, fetcher)
}

export const FetchPopulation = (code: number) => {
  return useSWRImmutable(`https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?prefCode=${code}&cityCode=-`, fetcher)
}
