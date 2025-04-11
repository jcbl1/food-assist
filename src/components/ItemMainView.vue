<script setup lang="ts">
import { useFoodDataStore } from '@/stores/fooddata'

const foodData = useFoodDataStore()
</script>
<template>
  <el-container direction="vertical">
    <div class="imageCover">
      <el-image
        style="width: 100%; height: 100%"
        fit="cover"
        :src="'https://furina.yelr.de/files/' + foodData.foodData?.thumbnail_path"
      />
    </div>
    <div v-for="i in foodData.foodData?.items?.length" class="itemWrap">
      <h3>{{ foodData.foodData?.items?.[i - 1].name }}</h3>
      <el-row>
        <el-col :span="24">
          <el-text>{{ foodData.foodData?.items?.[i - 1].description }}</el-text>
        </el-col>
      </el-row>
      <div class="gapSmallVertical"></div>
      <el-text tag="b" type="danger">{{ foodData.foodData?.items?.[i - 1].price }}元</el-text>
    </div>
  </el-container>
</template>
<style scoped>
.imageCover {
  height: 260px;
  width: 100%;
}

.itemWrap {
  width: 100%;
  height: fit-content;
  padding: 0.5em;
  box-sizing: border-box;
}

.gapSmallVertical {
  width: 100%;
  height: 0.8em;
}
</style>
