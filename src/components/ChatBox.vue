<script setup lang="ts">
import ChatBoxInputArea from './ChatBoxInputArea.vue';
import { defineEmits } from 'vue';

const emit = defineEmits(['closeChatBox']);

</script>

<template>
    <el-container direction="vertical" class="shadow width-100 bg-fff border-radius-1em pd-1em">
        <el-row justify="space-between" align="top">
            <el-col :span="20">
                <el-avatar>logo</el-avatar>
            </el-col>
            <el-col :span="4" class="textRight">
                <el-button circle text @click="emit('closeChatBox')">
                    <el-icon><ArrowDown /></el-icon>
                </el-button>
            </el-col>
        </el-row>
        <el-main>
            <el-skeleton />
        </el-main>
        <ChatBoxInputArea />
    </el-container>
</template>

<style scoped>
#chatboxContainer {
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 3em;
}
.shadow {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
.width-100 {
    width: 100%;
}
.bg-fff {
    background-color: #fff;
}
.border-radius-1em {
    border-radius: 1em;
}
.z-1499 {
    z-index: 1499;
}
.pd-1em {
    padding: 1em;
}
.textRight {
    text-align: right;
}
</style>