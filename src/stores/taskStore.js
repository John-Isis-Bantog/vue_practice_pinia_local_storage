// stores/taskStore.js
import { defineStore } from 'pinia';

export const useTaskStore = defineStore('tasks', {
  state: () => ({
    tasks: JSON.parse(localStorage.getItem("tasks") || "[]"),
  }),
  actions: {
    addTask(name) {
      const validIds = this.tasks
        .map(t => t.id)
        .filter(id => typeof id === 'number');

      const nextId = validIds.length > 0
        ? Math.max(...validIds) + 1
        : 1;

      this.tasks.push({
        id: nextId,
        name,
        created_at: new Date()
      });

      this.save();
    },

    deleteTask(id) {
      // Remove the task with matching id
      this.tasks = this.tasks.filter(t => t.id !== id);
      this.save();
    },

    save() {
      localStorage.setItem("tasks", JSON.stringify(this.tasks));
    }
  }
});
