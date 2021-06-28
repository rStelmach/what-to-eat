<template>
  <div class="container" id="Recipes">
    <header>List of recipes:</header>
    <RecipesList />
  </div>
</template>

<script>
import RecipesList from './RecipesList.vue';

export default {
  components: { RecipesList },
};
</script>

<style lang="scss" scoped>
.container {
  header {
    color: black;
    font-size: 3.5rem;
    font-weight: bold;
    text-align: center;
    padding: 1% 0;
  }
  width: 90%;
  min-height: 80vh;
  margin: 5% auto;
  border-radius: 18px;
}
</style>
