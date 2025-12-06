<script setup>
import { useRouter } from 'vue-router'   

const router = useRouter()

// Props
const props = defineProps({
  task: {
    type: Object,
    required: true
  }
})

const goToEdit = () => {
  router.push(`/edit/${props.task.id}`)
}
</script>

<template>
  <button class="btn btn-info text-white" @click="goToEdit">
    Edit
  </button>
</template>
