<script setup lang="ts">
import type { Message } from '../types'

// Pure display: just receives the messages to render
defineProps<{
  messages: Message[]
}>()
</script>

<template>
  <el-main class="history">
    <div
      v-for="(m, i) in messages"
      :key="i"
      class="row"
      :class="m.role"
    >
      <el-avatar class="avatar">{{ m.role === 'user' ? 'Me' : 'AI' }}</el-avatar>
      <div class="bubble">{{ m.content }}</div>
    </div>
    <el-empty v-if="messages.length === 0" description="Start a new conversation" />
  </el-main>
</template>

<style scoped>
.history {
  flex: 1;
  overflow-y: auto;
  background: #fff;
  padding: 20px 15%;
}
.row {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
  align-items: flex-start;
}
.row.user {
  flex-direction: row-reverse;
}
.avatar {
  flex-shrink: 0;
  font-size: 13px;
}
.row.user .avatar {
  background: var(--el-color-primary);
}
.bubble {
  max-width: 70%;
  padding: 10px 14px;
  border-radius: 12px;
  line-height: 1.6;
  white-space: pre-wrap;
  word-break: break-word;
}
.row.assistant .bubble {
  background: #f1f2f4;
}
.row.user .bubble {
  background: var(--el-color-primary-light-9);
}
</style>
