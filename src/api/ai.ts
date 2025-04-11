import { authorizedInstance } from './axios'

export interface AiResponse {
  response: {
    output: {
      text: string
    }
  }
}

export const useAskAi = async (prompt: string) => {
  const response = await authorizedInstance.get<AiResponse>('/ai?message=' + prompt)
  return response.data.response.output.text
}
