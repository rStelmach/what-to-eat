<template>
  <div>
    <div><IngredientsInput /></div>
    <div><Recipes /></div>
  </div>
</template>
<script>
import IngredientsInput from '../components/IngredientsInput.vue';
import Recipes from '../components/Recipes.vue';

export default {
  components: { IngredientsInput, Recipes },
};
</script>

<style lang="scss" scoped>
body {
  background-color: #f8f8f8;
}
</style>
