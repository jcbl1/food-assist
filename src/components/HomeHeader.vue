<script setup lang="ts">
import { ref } from 'vue'
import { useNotifyDeveloping } from '@/components/notifyDeveloping.ts'

const searchInputText = ref('')
</script>
<template>
  <el-row justify="space-between" align="middle" class="solid paddingSmallVertical textCenter">
    <el-col :span="3">
      <el-avatar>logo</el-avatar>
    </el-col>
    <el-col :xs="16" :sm="14" :md="12" :lg="8" :xl="6">
      <el-container>
        <el-input
          placeholder="搜索"
          clearable
          v-model="searchInputText"
          prefix-icon="Search"
        ></el-input>
        <el-button type="primary" round style="margin-left: 3px" @click="useNotifyDeveloping">
          搜索
          <!-- <el-icon>
                        <Search />
                    </el-icon> -->
        </el-button>
      </el-container>
    </el-col>
    <el-col :span="3"></el-col>
  </el-row>
</template>
<style scoped>
.solid {
  background-color: #fff;
}
.paddingSmallVertical {
  padding: 0.4em 0;
}
.textCenter {
  text-align: center;
}
</style>
