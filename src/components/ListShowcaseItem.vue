<script setup lang="ts">
export interface FoodDataItem {
    id?: number;
    name: string;
    description: string;
    price: number;
    foodDataId: number;
}
export interface FoodData {
    id?: number;
    thumbnailPath: string;
    title: string;
    rating: number;
    salesMonthly: number;
    averageCost?: number;
    deliveryTime?: string;
    featuredComment?: string;
    items?: FoodDataItem[];
}
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
            <slot></slot>
            <h3 class="itemTitle">
                <slot name="title">默认标题</slot>
            </h3>
            <el-row justify="space-between" align="middle">
                <el-col :span="12">
                    <el-text tag="b" type="warning" class="marginRightSmall">
                        <slot name="rating">0.0分</slot>
                    </el-text>
                    <el-text>
                        <slot name="salesMonthly">还没得人点</slot>
                    </el-text>
                </el-col>
                <el-col :span="12" class="textRight">
                    <el-text class="marginRightSmall">39分钟</el-text>
                    <el-text>2.0km</el-text>
                </el-col>
            </el-row>
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

.itemTitle {
    margin: 0;
    margin-bottom: 0.2em;
}

.marginRightSmall {
    margin-right: 0.4em;
}

.textRight {
    text-align: right;
}
</style>