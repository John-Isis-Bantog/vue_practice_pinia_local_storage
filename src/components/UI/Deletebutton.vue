<script setup>
import { useTaskStore } from '@/stores/taskStore'

const store = useTaskStore()

// Accept task ID as prop
const props = defineProps({
  id: {
    type: Number,
    required: true
  }
})

const handleDelete = () => {
  if (confirm("Are you sure you want to delete this task?")) {
    store.deleteTask(props.id)
  }
}
</script>

<template>
  <button class="btn btn-error text-white" @click="handleDelete">
    Delete
  </button>
</template>
