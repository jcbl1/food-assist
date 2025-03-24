<script setup lang="ts">
import ListShowcaseItem from './ListShowcaseItem.vue';
import { ref } from 'vue';
const count = ref(1);
const loadMoreItems = () => {
    console.log('loading more items');
    count.value += 5;
};
</script>

<template>
    <el-container v-infinite-scroll="loadMoreItems" direction="vertical">
        <!-- <el-row v-for="n in 16" justify="space-around" align="middle"> -->
        <el-row v-for="i in count" :key="i" justify="space-around" align="middle">
            <el-col :xs="23" :sm="18" :md="14" :lg="10" :xl="6">
                <ListShowcaseItem />
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