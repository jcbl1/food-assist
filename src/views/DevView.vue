<script setup lang="ts">
import ListShowcaseItem from '@/components/ListShowcaseItem.vue'
import BottomNav from '@/components/BottomNav.vue'
import HomeHeader from '@/components/HomeHeader.vue'
</script>
<template>
  <HomeHeader class="toTop alwaysOnTop" />
  <el-container direction="vertical" class="paddingBottomMedium paddingTopMedium">
    <el-row v-for="n in 16" justify="space-around" align="middle">
      <el-col :xs="24" :sm="18" :md="14" :lg="10" :xl="6">
        <ListShowcaseItem />
      </el-col>
    </el-row>
  </el-container>

  <BottomNav class="toBottom" />
</template>
<style scoped>
.toBottom {
  position: fixed;
  bottom: 0;
  width: 100%;
}
.toTop {
  position: fixed;
  top: 0;
  width: 100%;
}
.paddingBottomMedium {
  padding-bottom: 2em;
}
.paddingTopMedium {
  padding-top: 2.6em;
}
.alwaysOnTop {
  z-index: 100;
}
</style>
