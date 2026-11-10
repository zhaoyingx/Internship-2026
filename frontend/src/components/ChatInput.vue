<script setup lang="ts">
import { ref } from 'vue'

// Owns its own draft text; tells the parent when the user sends
const emit = defineEmits<{
  send: [text: string]
}>()

const text = ref('')

function submit() {
  const t = text.value.trim()
  if (!t) return
  emit('send', t)
  text.value = ''
}
</script>

<template>
  <el-footer class="composer">
    <el-input
      v-model="text"
      type="textarea"
      :autosize="{ minRows: 1, maxRows: 5 }"
      resize="none"
      placeholder="Type a message, press Enter to send…"
      @keyup.enter.exact.prevent="submit"
    />
    <el-button type="primary" :disabled="!text.trim()" @click="submit">
      Send
    </el-button>
  </el-footer>
</template>

<style scoped>
.composer {
  display: flex;
  gap: 10px;
  align-items: flex-end;
  height: auto;
  padding: 12px 15%;
  border-top: 1px solid var(--el-border-color);
  background: #fff;
}
.composer .el-button {
  flex-shrink: 0;
}
</style>
