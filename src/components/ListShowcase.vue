<script setup lang="ts">
import ListShowcaseItem from './ListShowcaseItem.vue'
import { useQueryFoodData, type FoodData } from '@/api/fooddata'
import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

const router = useRouter()

const log = (message: string) => {
  console.log(message)
}

const foodData = ref<FoodData[]>([])
const count = ref(0)
const hasMore = ref(true)
const loading = ref(false)
const loadMoreItems = async () => {
  loading.value = true
  log('loading more items')
  let resCount = 0
  await useQueryFoodData(count.value / 5 + 1)
    .then((response) => {
      resCount = response.length
      foodData.value = foodData.value.concat(response)
      count.value += resCount
    })
    .finally(() => {
      if (resCount < 5) {
        hasMore.value = false
      }
    })
  loading.value = false
}

const imageUrlPrefix = ref('https://furina.yelr.de/files/')

const liClicked = (index: number | undefined) => {
  router.push('/item/' + index)
}
</script>

<template>
  <el-container
    v-infinite-scroll="loadMoreItems"
    :infinite-scroll-disabled="!hasMore || loading"
    :infinite-scroll-delay="200"
    :infinite-scroll-immediate="true"
    :infinite-scroll-distance="200"
    direction="vertical"
  >
    <!-- <el-row v-for="n in 16" justify="space-around" align="middle"> -->
    <el-row v-for="i in count" :key="i" justify="space-around" align="middle">
      <el-col :xs="23" :sm="18" :md="14" :lg="10" :xl="6">
        <ListShowcaseItem
          :imageUrl="imageUrlPrefix + foodData[i - 1].thumbnail_path"
          @click="liClicked(foodData[i - 1].id)"
        >
          <template #title>{{ foodData[i - 1].title }}</template>
          <template #rating>{{ foodData[i - 1].rating }}分</template>
          <template v-if="foodData[i - 1].sales_monthly" #salesMonthly
            >{{ foodData[i - 1].sales_monthly }}人已点</template
          >
        </ListShowcaseItem>
      </el-col>
    </el-row>
    <p v-if="!hasMore" style="text-align: center">
      <el-text>没有更多了...</el-text>
    </p>
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
