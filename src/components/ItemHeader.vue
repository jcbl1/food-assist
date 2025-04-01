<script setup lang="ts">
import { useFoodDataStore } from '@/stores/fooddata';
import { useRouter } from 'vue-router';
const router = useRouter()
const foodData = useFoodDataStore()
</script>
<template>
  <el-row justify="space-between" align="middle" class="paddingSmall">
    <el-col :span="4">
      <el-button text circle @click="router.push('/')">
        <el-icon>
          <ArrowLeft />
        </el-icon>
      </el-button>
    </el-col>
    <el-col :span="16" class="textCenter">
      <el-text tag="b" style="font-size: 16px;">
        <slot name="itemName">{{ foodData.foodData?.title }}</slot>
      </el-text>
    </el-col>
    <el-col :span="4"></el-col>
  </el-row>
</template>
<style scoped>
.textCenter {
  text-align: center;
}

.paddingSmall {
  padding: 0.5em;
}
</style>