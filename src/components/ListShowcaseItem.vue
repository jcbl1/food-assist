<script setup lang="ts">
</script>
<template>
    <el-container class="marginSmall">
        <el-aside width="120px">
            <el-skeleton>
                <template #template>
                    <el-skeleton-item variant="image" style="width: 120px; height: 120px;"></el-skeleton-item>
                </template>
            </el-skeleton>
        </el-aside>
        <el-main class="pd-5">
            <el-skeleton :rows="2"/>
        </el-main>
    </el-container>
</template>
<style scoped>
.pd-5 {
    padding: 10px;
}
.marginSmall {
    margin: 0.2em;
}
</style>