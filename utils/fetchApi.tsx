import axios from 'axios'

export const baseUrl = 'localhost:4000/'

export const fetchApi = async (url: string) => {
  // console.log(url)
  const { data } = await axios.get(url, {
    headers: {
      
    },
  })

  return data
}

export const fetchApiWithHeader = async (url: string, api_token: any) => {
  const { data } = await axios.get(url, { headers: { Appversion: '1', Authorization: `Bearer ${api_token}` } })
  return data
}
