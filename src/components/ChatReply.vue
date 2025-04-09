<script setup lang="ts">
import { marked } from 'marked';
import { computed } from 'vue';

const props = defineProps({
    msg: String
})

const compiledMsg = computed(() => {
    marked.setOptions({
        breaks: true,
    })

    const dirtyHtml = marked(props.msg || '')

    return dirtyHtml
})
</script>
<template>
    <el-text type="info" class="margin-left-1em">AI</el-text>
    <el-card class="bg-fff border-radius-1em pd-0 margin-right-3em max-width-100 width-fit-content"
        v-loading="!props.msg" body-style="padding: 0 1em;">
        <!-- <el-text size="default"> -->
        <div v-html="compiledMsg"></div>
        <!-- </el-text> -->
    </el-card>
</template>
<style scoped>
.pd-0 {
    padding: 0;
}

.bg-fff {
    background-color: #fff;
}

.border-radius-1em {
    border-radius: 1em;
}

.margin-left-1em {
    margin-left: 1em;
}

.margin-right-3em {
    margin-right: 3em;
}

.max-width-100 {
    max-width: 100%;
}

.width-fit-content {
    width: fit-content;
}
</style>