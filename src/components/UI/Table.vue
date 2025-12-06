<script setup>
import { useTaskStore } from '@/stores/taskStore';
import Editbutton from './Editbutton.vue';
import Deletebutton from './Deletebutton.vue';

const store = useTaskStore();
</script>

<template>
  <div>
    <table class="table w-1/2 mx-auto">
      <thead>
        <tr>
          <th>ID</th>
          <th>Task Name</th>
       
            <th>Status</th>
          <th>Action</th>
           
        </tr>
      </thead>

      <tbody>
        <tr 
          v-for="task in store.tasks" 
          :key="task.id"
        >
        <td>{{task.id}}</td>
          <td>{{ task.name }}</td>
        <td>Completed</td>
       

          <td class="flex gap-2">
            <Editbutton :task="task" />

            <Deletebutton :id="task.id" />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
