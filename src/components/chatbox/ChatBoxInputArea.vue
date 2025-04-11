<script setup lang="ts">
import { ref } from 'vue'

const chatBoxInputValue = ref('')

const emit = defineEmits(['sendMessage'])

const sendClicked = () => {
  emit('sendMessage', chatBoxInputValue.value)
  chatBoxInputValue.value = ''
}
</script>

<template>
  <el-container>
    <el-input
      type="textarea"
      placeholder="Apple U, 今天想吃什么"
      resize="none"
      v-model="chatBoxInputValue"
      clearable
      :autosize="{ minRows: 1, maxRows: 3 }"
    ></el-input>
    <el-button type="primary" circle @click="sendClicked" :disabled="!chatBoxInputValue">
      <el-icon>
        <ArrowUpBold />
      </el-icon>
    </el-button>
  </el-container>
</template>

<style>
textarea {
  border: none !important;
  outline: none !important;
  box-shadow: none !important;
}
</style>
