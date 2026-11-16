<script setup lang="ts">
import { ref, onMounted, useTemplateRef } from 'vue'
import type { Message } from './types'
import ChatSidebar from './components/ChatSidebar.vue'
import MessageList from './components/MessageList.vue'
import ChatInput from './components/ChatInput.vue'
import api from './api/http'
import { getRecordById } from './api/record'

const sidebar = useTemplateRef('sidebar')

const messages = ref<Message[]>([
  { role: 'user', content: 'Hi, can you explain what a vector database is?' },
  {
    role: 'assistant',
    content:
      'A vector database stores "vectors" (lists of numbers). It turns text, images, and other content into vectors, then quickly finds the closest matches by similarity. It is commonly used for semantic search and Q&A systems.',
  },
  { role: 'user', content: 'How is it different from a regular database?' },
  {
    role: 'assistant',
    content:
      'A regular database looks things up by exact conditions (e.g. id = 5); a vector database looks them up by semantic closeness, so it can find relevant content even when the wording is different but the meaning is similar.',
  },
])

function selectSession(id: number) {
  // Owner of the current conversation: fetch the selected record's content
  getRecordById(id)
    .then((record) => {
      // Simplified for now: show the record's content as one message.
      // Later this becomes "load this session's full message list".
      messages.value = [{ role: 'user', content: record.content }]
    })
    .catch(() => {
      messages.value = []
    })
}

function clearChat() {
  messages.value = []
}

function handleSend(text: string) {
  // ChatInput already POSTed; here we just update the visible chat
  messages.value.push({ role: 'user', content: text })
  // refresh the sidebar history so the new record shows up
  sidebar.value?.loadHistory()
}

const backendStatus = ref('connecting to server')

onMounted(() => {
  api
    .get<{ message: string }>('/hello')
    .then((data) => {
      backendStatus.value = data.message
    })
    .catch(() => {
      backendStatus.value = 'backend not reachable'
    })
})
</script>

<template>
  <el-container class="app">
    <!-- Top bar (small enough to keep inline) -->
    <el-header class="topbar">
      <span class="logo">Local Knowledge Q&A</span>
      <span class="backend-status">backend: {{ backendStatus }}</span>
    </el-header>

    <el-container class="body">
      <ChatSidebar
        ref="sidebar"
        @select="selectSession"
        @create="clearChat"
      />

      <el-container class="chat">
        <MessageList :messages="messages" />
        <ChatInput @send="handleSend" />
      </el-container>
    </el-container>
  </el-container>
</template>

<style scoped>
.app {
  height: 100%;
}

/* Top bar */
.topbar {
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--el-border-color);
  background: #fff;
}
.logo {
  font-size: 18px;
  font-weight: 600;
}
.backend-status {
  margin-left: auto;
  font-size: 13px;
  color: var(--el-color-info);
}

.body {
  height: calc(100% - 60px); /* minus header height */
}

/* Right chat area */
.chat {
  display: flex;
  flex-direction: column;
}
</style>
