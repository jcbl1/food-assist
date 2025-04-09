<script setup lang="ts">
import ChatBoxInputArea from './ChatBoxInputArea.vue';
import ChatReply from '@/components/ChatReply.vue';
import ChatPrompt from '@/components/ChatPrompt.vue';
import { ref } from 'vue';
import { useAskAi } from '@/api/ai';

const emit = defineEmits(['closeChatBox']);

const componentList = ref([
    { id: 1, type: ChatReply, props: { msg: '你好，今天吃点什么？' } },
])

const scrollbarRef = ref()

const componentsCount = ref(1)
const addComponent = (type: any, props: any) => {
    componentList.value.splice(++componentsCount.value, 0, {
        id: Date.now(),
        type,
        props: {
            msg: props?.msg,
        }
    })
    setTimeout(() => {
        scrollbarRef.value?.scrollTo({ top: 99999, behavior: 'smooth' })
    }, 50)
    // scrollbarRef.value?.setScrollTop(scrollbarRef.value.scrollHeight)
}

const replying = ref(false)

const sendPrompt = async (msg: string) => {
    console.log(msg)
    addComponent(ChatPrompt, {
        msg
    })
    addComponent(ChatReply, {
        msg: ''
    })
    replying.value = true
    const responseMsg = await useAskAi(msg)
    componentList.value[componentList.value.length - 1].props.msg = responseMsg
    setTimeout(() => {
        scrollbarRef.value?.scrollTo({ top: 99999, behavior: 'smooth' })
    }, 150)
    replying.value = false
}
</script>

<template>
    <el-container direction="vertical" class="shadow width-100 bg-fff border-radius-1em pd-1em">
        <el-row justify="space-between" align="top">
            <el-col :span="20">
                <el-avatar @click="addComponent(ChatReply, null)">logo</el-avatar>
            </el-col>
            <el-col :span="4" class="textRight">
                <el-button circle text @click="emit('closeChatBox')">
                    <el-icon>
                        <ArrowDown />
                    </el-icon>
                </el-button>
            </el-col>
        </el-row>
        <el-main>
            <el-scrollbar max-height="60vh" ref="scrollbarRef">
                <!-- <ChatReply/> -->
                <component v-for="(item, index) in componentList" :key="item.id || index" :is="item.type"
                    :msg="item.props.msg">
                    <template #content>{{ item.props.msg }}</template>
                </component>
            </el-scrollbar>
        </el-main>
        <ChatBoxInputArea @sendMessage="(msg) => sendPrompt(msg)" />
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