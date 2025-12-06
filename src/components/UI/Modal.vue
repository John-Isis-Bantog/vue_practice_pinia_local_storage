<script setup>
import { ref } from 'vue';
import { useTaskStore } from '@/stores/taskStore';

const taskName = ref("");
const store = useTaskStore();

const handleSubmit = () => {
  if (!taskName.value.trim()) return;

  store.addTask(taskName.value.trim());
  taskName.value = ""; // reset
  my_modal_2.close();  // optional: auto-close modal
};
</script>

<template>
    <div>
        <button class="btn" onclick="my_modal_2.showModal()">Add Task</button>

        <dialog id="my_modal_2" class="modal">
            <div class="modal-box">
                <div class="gap-4 flex flex-col">
                    <label for="task">Task Name</label>

                    <input
                        type="text"
                        v-model="taskName"
                        placeholder="Name"
                        class="input input-primary"
                    >

                    <div class="flex justify-center mt-4">
                        <button class="btn btn-info" @click="handleSubmit">
                            Submit
                        </button>

                    </div>

                </div>
            </div>
        </dialog>
    </div>
</template>
