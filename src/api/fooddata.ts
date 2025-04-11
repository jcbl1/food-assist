import { authorizedInstance } from './axios'

export interface FoodDataItem {
  id?: number
  name: string
  description: string
  price: number
  food_data_id: number
}
export interface FoodData {
  id?: number
  thumbnail_path: string
  title: string
  rating: number
  sales_monthly: number
  average_cost?: number
  delivery_time?: string
  featured_comment?: string
  items?: FoodDataItem[]
}

export const useQueryFoodData = async (current: number) => {
  const response = await authorizedInstance.get<FoodData[]>('/food/list?current=' + current)
  return response.data
}

export const useQueryFoodDataById = async (id: number) => {
  const response = await authorizedInstance.get<FoodData>('/food?id=' + id)
  return response.data
}
