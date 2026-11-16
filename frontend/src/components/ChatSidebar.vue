<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { getRecords, deleteRecord } from '../api/record'
import type { Session } from '../types'

// The sidebar owns the history request: it loads the session list itself.
const sessions = ref<Session[]>([])
const currentId = ref<number | null>(null)

const emit = defineEmits<{
  select: [id: number]
  create: []
}>()

function loadHistory() {
  getRecords()
    .then((records) => {
      sessions.value = records.map((r) => ({ id: r.id, title: r.content }))
    })
    .catch(() => {
      sessions.value = []
    })
}
onMounted(loadHistory)

function select(id: number) {
  currentId.value = id
  emit('select', id)
}

function remove(id: number) {
  deleteRecord(id)
    .then(() => {})
    .catch(() => {
      // backend endpoint not ready yet; ignore for now
    })
    .finally(() => {
      loadHistory() // refresh the list after deleting
    })
}

// Parent can call this to refresh the list after a new message is posted
defineExpose({ loadHistory })
</script>

<template>
  <el-aside width="260px" class="sidebar">
    <el-button class="new-btn" type="primary" plain @click="emit('create')">
      + New chat
    </el-button>
    <el-scrollbar class="session-list">
      <div
        v-for="s in sessions"
        :key="s.id"
        class="session-item"
        :class="{ active: s.id === currentId }"
        @click="select(s.id)"
      >
        <span class="title">{{ s.title }}</span>
        <span class="del" title="Delete" @click.stop="remove(s.id)">✕</span>
      </div>
    </el-scrollbar>
  </el-aside>
</template>

<style scoped>
.sidebar {
  display: flex;
  flex-direction: column;
  border-right: 1px solid var(--el-border-color);
  background: #f7f8fa;
  padding: 12px;
}
.new-btn {
  width: 100%;
  margin-bottom: 12px;
}
.session-list {
  flex: 1;
}
.session-item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 12px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
  color: #333;
}
.session-item .title {
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.session-item .del {
  flex-shrink: 0;
  visibility: hidden;
  color: var(--el-color-info);
  font-size: 12px;
}
.session-item:hover {
  background: #ececec;
}
.session-item:hover .del {
  visibility: visible;
}
.session-item .del:hover {
  color: var(--el-color-danger);
}
.session-item.active {
  background: var(--el-color-primary-light-9);
  color: var(--el-color-primary);
}
</style>
