import axios from 'axios'
import useSWRImmutable from 'swr/immutable'

const fetcher = (url: string) => axios.get(url, { headers: { 'X-API-KEY': '5ey9gBAJ5RdrLMhg7uoUjlpn9A0pMevWph8CCkw7' } }).then((res) => res.data)

export const FetchTodohukenList = () => {
  return useSWRImmutable(`https://opendata.resas-portal.go.jp/api/v1/prefectures`, fetcher)
}

export const FetchPopulation = (code: number) => {
  return useSWRImmutable(`https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?prefCode=${code}&cityCode=-`, fetcher)
}
