<script setup lang="ts">
import type { Session } from '../types'

// Data comes down via props
defineProps<{
  sessions: Session[]
  currentId: number
}>()

// Actions go up via emits
const emit = defineEmits<{
  select: [id: number]
  create: []
}>()
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
        @click="emit('select', s.id)"
      >
        {{ s.title }}
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
  padding: 10px 12px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
  color: #333;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.session-item:hover {
  background: #ececec;
}
.session-item.active {
  background: var(--el-color-primary-light-9);
  color: var(--el-color-primary);
}
</style>
