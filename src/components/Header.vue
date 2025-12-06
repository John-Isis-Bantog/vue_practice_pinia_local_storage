<script setup>
  import {ref} from 'vue';
  const title = ref('Todo Application');
</script>

<template>
    <header>
        <h1 class="text-center text-6xl mb-6">{{ title }}</h1>
    </header>
</template>