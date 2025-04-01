<script setup lang="ts">
import { watch } from 'vue'
import ItemHeader from '@/components/ItemHeader.vue';
import { useRoute } from 'vue-router';
import ItemMainView from '@/components/ItemMainView.vue';
import { useFoodDataStore } from '@/stores/fooddata';

const route = useRoute()

const foodData = useFoodDataStore()
foodData.refresh(parseInt(route.params.id))

watch(() => route.params.id, () => {
    foodData.refresh(parseInt(route.params.id))
})

</script>
<template>
    <div class="fillView">
        <el-row justify="space-around">
            <el-col :xs="24" :sm="20" :md="16" :lg="12" :xl="8">
                <el-container direction="vertical" style="height: 100%;">
                    <ItemHeader />
                    <ItemMainView />
                </el-container>
            </el-col>
        </el-row>
    </div>
</template>
<style scoped>
.fillView {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
}
</style>