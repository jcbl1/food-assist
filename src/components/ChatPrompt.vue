<script setup lang="ts">
const props = defineProps({
    msg: String
})
</script>
<template>
    <el-text type="info" tag="p" class="margin-right-2em" style="text-align: right;">我</el-text>
    <el-card
        class="bg-fff border-radius-1em pd-0 margin-left-2em margin-right-1em max-width-100 width-fit-content to-parent-end"
        body-style="padding: 1em">
        <slot name="content">
            <!-- {{ props.msg }} -->
        </slot>
    </el-card>
</template>
<style scoped>
.bg-fff {
    background-color: #fff;
}

.border-radius-1em {
    border-radius: 1em;
}

.pd-0 {
    padding: 0;
}

.margin-left-2em {
    margin-left: 2em;
}

.margin-right-1em {
    margin-right: 1em;
}

.margin-right-2em {
    margin-right: 2em;
}

.max-width-100 {
    max-width: 100%;
}

.width-fit-content {
    width: fit-content;
}

.to-parent-end {
    margin-left: auto;
}
</style>