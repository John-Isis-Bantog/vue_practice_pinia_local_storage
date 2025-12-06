<script setup>
import { useRoute, useRouter } from 'vue-router'   // <--- correct import
import { useTaskStore } from '@/stores/taskStore'

const route = useRoute()                 // <--- useRoute, not useRouter
const store = useTaskStore()
const router = useRouter()   
const taskId = Number(route.params.id)

// Find the task in the store
const task = store.tasks.find(t => t.id === taskId)
const goBackToDashboard = () => {
  router.push(`/`)
}
</script>

<template>
  <button class="btn btn-info text-white" @click="goBackToDashboard">Back to Dashboard</button>
  <div v-if="task" class=" ">
    <h1 class="text-4xl text-center">Edit Task: {{ task.name }}</h1>
    <div class="flex justify-center flex-col items-center gap-5  mt-5 ">
      <input type="text" name="editTask" v-model="task.name " class=" input input-info"></input>
      <button type="submit" class="btn btn-error text-white">Edit Task</button>
    </div>
    
    <!-- form for editing -->
  </div>
  <div v-else>
    Task not found
  </div>
</template>
