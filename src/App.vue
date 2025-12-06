<script setup>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Main from './components/Main.vue';
</script>

<template>
  <Header />
  
  <!-- Main content changes based on route -->
  <router-view />
  
  <Footer />
</template>
