import axios, { AxiosRequestConfig } from 'axios'

export type Method = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'

export const request = async <T>({
  url,
  method,
  body,
  query,
}: {
  url: string
  method: Method
  body?: object | string
  query?: Record<string, string>
}): Promise<{ ok: boolean; response?: T }> => {
  try {
    const config: AxiosRequestConfig = {
      url,
      method,
      data: body,
      params: query,
    }

    const response = await axios.request<T>(config)
    return {
      ok: true,
      response: response.data,
    }
  } catch (error) {
    console.error('Error in request:', error)
    return { ok: false }
  }
}
