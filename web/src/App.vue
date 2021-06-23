<template>
  <div class="container">
    <Navbar />
    <router-view :key="$route.fullPath"></router-view>
  </div>
</template>

<script>
import Navbar from './components/layouts/Navbar.vue';

export default {
  components: { Navbar },
};
</script>

<style>
body {
  background-color: #f8f8f8;
}
</style>
