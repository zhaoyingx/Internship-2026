<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type { Session, Message } from './types'
import ChatSidebar from './components/ChatSidebar.vue'
import MessageList from './components/MessageList.vue'
import ChatInput from './components/ChatInput.vue'

// —— State lives here in the parent; children get it via props ——
// —— local mock data (for layout practice, no backend yet) ——
const sessions = ref<Session[]>([
  { id: 1, title: 'What is a vector database' },
  { id: 2, title: 'Writing an HTTP server in Go' },
  { id: 3, title: 'Summarize this note for me' },
])
const currentId = ref(1)

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
  currentId.value = id
}

function newSession() {
  const id = Date.now()
  sessions.value.unshift({ id, title: 'New chat' })
  currentId.value = id
  messages.value = []
}

// For now just push the message into the list; no backend yet
function handleSend(text: string) {
  messages.value.push({ role: 'user', content: text })
}

const backendStatus = ref('connecting to server')

onMounted(async () => {
  try {
    const res = await fetch('/api/hello')
    const data = await res.json()
    backendStatus.value = data.message
  } catch {
    backendStatus.value = 'backend not reachable'
  }
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
        :sessions="sessions"
        :current-id="currentId"
        @select="selectSession"
        @create="newSession"
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
