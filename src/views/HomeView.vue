<script setup lang="ts">
import HomeHeader from '@/components/HomeHeader.vue'
import ListShowcase from '@/components/ListShowcase.vue'
import BottomNav from '@/components/BottomNav.vue'
import ButtonAskAI from '@/components/ButtonAskAI.vue'
import ChatBox from '@/components/chatbox/ChatBox.vue'
import { ref } from 'vue'

const chatBoxVisible = ref(false)
const toggleChatBox = () => {
  chatBoxVisible.value = !chatBoxVisible.value
}
</script>
<template>
  <div class="fillView">
    <Transition name="fade">
      <ChatBox v-show="chatBoxVisible" id="chatbox" @closeChatBox="() => toggleChatBox()" />
    </Transition>
    <el-container direction="vertical" style="height: 100%">
      <HomeHeader class="stickTop" />
      <el-scrollbar>
        <ListShowcase />
      </el-scrollbar>
      <BottomNav class="stickBottom" />
    </el-container>
  </div>

  <ButtonAskAI id="buttonAskAI" @click="toggleChatBox" />
  <div
    id="clickToHideChatBox"
    @click="chatBoxVisible = false"
    v-show="chatBoxVisible"
    class="fillView z-149"
  />
</template>

<style scoped>
.fillView {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
}

.stickTop {
  position: sticky;
  top: 0;
  z-index: 100;
}

.stickBottom {
  position: sticky;
  bottom: 0;
  z-index: 100;
}

#buttonAskAI {
  position: absolute;
  bottom: 4em;
  right: 1em;
  z-index: 200;
}

#chatbox {
  z-index: 150;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 95vw;
  /* max-height: 80vh; */
}

.bg-f00 {
  background-color: #f00;
}

.opacity-5 {
  opacity: 0.5;
}

.z-149 {
  z-index: 149;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
