<script setup lang="ts">
import ListShowcaseItem, { type FoodData } from './ListShowcaseItem.vue';
import { ref, onBeforeMount } from 'vue';
import axios from 'axios';

const queryFoodData = async (current: number) => {
    const queryUrl = 'https://furina.yelr.de/food/list?current='+current
    // console.log("queryUrl: %s", queryUrl)
    const response = await axios.get<FoodData[]>(queryUrl)
    // const response = await axios.get<FoodData[]>('http://localhost:10240/food/list')
    return response.data;
}

const log = (message: string) => {
    console.log(message)
    // LogPrint(message)
}

// export const useQueryFoodData = queryFoodData

const foodData = ref<FoodData[]>([]);
const count = ref(0);
const hasMore = ref(true);
const loading = ref(false)
const loadMoreItems = async () => {
    loading.value=true
    log("loading more items")
    let resCount = 0
    // const response = await queryFoodData(count.value/5+1)
    // const resCount=response.length
    // foodData.value=foodData.value.concat(response)
    // count.value+=resCount
    // if (resCount<5){
    //     hasMore.value=false
    // }
    await queryFoodData(count.value/5+1).then((response)=>{
        resCount = response.length
        // console.log("count: %d", count.value)
        // console.log("count/5+1: %d", count.value/5+1)
        // console.log("resCount: %d", resCount)
        // console.log(response)
        foodData.value=foodData.value.concat(response)
        // console.log(foodData.value)
        count.value += resCount
    }).catch((error)=>{
        if (axios.isAxiosError(error)){
            log("error: " + error.message)
            if (error.request){
                log("method: "+error.config?.method)
                log("url: "+error.config?.url)
                log("headers: "+error.config?.headers)
            }
        }else{
            log("error: " + error)
        }
    }).finally(()=>{
        if (resCount<5){
            hasMore.value = false
        }
    })
    loading.value=false
}
</script>

<template>
    <el-container v-infinite-scroll="loadMoreItems" :infinite-scroll-disabled="!hasMore || loading"
        :infinite-scroll-delay="200" :infinite-scroll-immediate="true" direction="vertical">
        <!-- <el-row v-for="n in 16" justify="space-around" align="middle"> -->
        <el-row v-for="i in count" :key="i" justify="space-around" align="middle">
            <el-col :xs="23" :sm="18" :md="14" :lg="10" :xl="6">
                <ListShowcaseItem>
                    <template #title>{{ foodData[i-1].title }}</template>
                    <template #rating>{{ foodData[i-1].rating }}分</template>
                    <template v-if="foodData[i-1].salesMonthly" #salesMonthly>{{ foodData[i-1].salesMonthly
                        }}人已点</template>
                </ListShowcaseItem>
            </el-col>
        </el-row>
    </el-container>
</template>

<style scoped>
.paddingBottomMedium {
    padding-bottom: 2em;
}

.paddingTopMedium {
    padding-top: 2.6em;
}
</style>