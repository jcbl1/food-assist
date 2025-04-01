import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { useQueryFoodDataById, type FoodData } from "@/api/fooddata";

const queryFoodDataById = useQueryFoodDataById

export const useFoodDataStore = defineStore('fooddata', () => {
    const foodData = ref<FoodData>()
    const refresh = async (id: number) => {
        if (id == -1) {
            throw SyntaxError('id is not set yet')
        }
        queryFoodDataById(id).then((response) => {
            if (response) {
                foodData.value = response
            }
        }).catch((err) => {
            throw err
        })
    }

    return { foodData, refresh }
})