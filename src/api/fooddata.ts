import axios from "axios"

export interface FoodDataItem {
    id?: number;
    name: string;
    description: string;
    price: number;
    food_data_id: number;
}
export interface FoodData {
    id?: number;
    thumbnail_path: string;
    title: string;
    rating: number;
    sales_monthly: number;
    average_cost?: number;
    delivery_time?: string;
    featured_comment?: string;
    items?: FoodDataItem[];
}

export const useQueryFoodData = async (current: number) => {
    const queryUrl = 'https://furina.yelr.de/food/list?current=' + current
    // console.log("queryUrl: %s", queryUrl)
    const response = await axios.get<FoodData[]>(queryUrl)
    // const response = await axios.get<FoodData[]>('http://localhost:10240/food/list')
    return response.data;
}

export const useQueryFoodDataById = async (id: number) => {
    const queryUrl = 'https://furina.yelr.de/food?id=' + id
    console.log('queryUrl: %s', queryUrl)
    const response = await axios.get<FoodData>(queryUrl)
    return response.data
}