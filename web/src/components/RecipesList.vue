<template>
  <div class="box">
    <div class="recipe" v-for="recipe in recipes" :key="recipe.id" @click="goToRecipe(recipe.id)">
      <h1>{{ recipe.name }}</h1>
      <img :src="recipe.img" alt="image" />
      <div class="ingredients">
        <ul v-for="(ingredient, index) in recipe.ingredients" :key="index">
          <li>{{ ingredient }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const store = useStore();
    const router = useRouter();
    // const recipes = ref([]);
    const recipes = computed(() => store.getters.allRecipes);
    function getRecipes() {
      store.dispatch('getRecipes');
    }
    onMounted(() => {
      getRecipes();
    });

    function goToRecipe(recipeId) {
      router.push({ name: 'recipe', params: { id: recipeId } });
    }
    return { recipes, getRecipes, goToRecipe };
  },
};
</script>

<style lang="scss" scoped>
.box {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  .recipe {
    position: relative;
    border-radius: 1.5rem;
    background-color: white;
    display: flex;
    flex-direction: column;
    margin: 1% 0.5%;
    width: 19vw;
    cursor: pointer;
    overflow: hidden;

    img {
      border-radius: 1.5rem;
      padding: 2%;
      margin: 10% auto;
      max-width: 90%;
      height: auto;
    }
    h1 {
      min-height: 10%;
      text-align: center;
      font-weight: 600;
      font-size: 2.5rem;
      padding: 0.5rem;
    }
    .ingredients {
      position: absolute;
      top: -100%;
      border-radius: 1.5rem;
      background-color: #50a684;
      opacity: 0.95;
      width: 100%;
      height: 100%;
      transition: 0.3s;
      transition-delay: 0.3s;
      overflow: hidden;
      ul {
        // display: flex;
        // flex-direction: column;
        // justify-content: flex-start;
        // align-items: flex-start;
        // align-content: flex-start;

        flex-wrap: wrap;
        li {
          color: white;
          font-weight: 600;
          list-style-type: '- ';
          margin: 5%;
          font-size: 1rem;
        }
      }
    }
  }
  .recipe:hover > .ingredients {
    transform: translateY(100%);
  }
}
</style>
