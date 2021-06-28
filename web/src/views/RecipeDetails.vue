<template>
  <div class="container">
    <div class="box">
      <div class="recipe-details">
        <h1>{{ recipeById.name }}</h1>
        <div class="info">
          <div class="wrapper">
            <h3>{{ recipeById.ingredients.length }}</h3>
            <p>Ingredients</p>
          </div>
          <div class="line"></div>
          <div class="wrapper">
            <h3>{{ recipeById.time }}</h3>
            <p>Minutes</p>
          </div>
          <div class="line"></div>
          <div class="wrapper">
            <h3>{{ recipeById.calories }}</h3>
            <p>Calories</p>
          </div>
        </div>
      </div>
      <img :src="recipeById.img" alt="recipe image" />
    </div>
    <div class="underline"></div>
    <div class="info-wrapper">
      <h2>Description</h2>
      <p class="desc">{{ recipeById.description === '' ? 'no information' : recipeById.description }}</p>
      <div class="ing-list">
        <h2>Ingredients</h2>
        <ul v-for="ingredient in ingredients" :key="ingredient">
          <li>{{ ingredient }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, defineComponent, ref } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';

export default defineComponent({
  setup() {
    const route = useRoute();
    const store = useStore();

    const recipeById = computed(() => {
      const { allRecipes } = store.getters;
      const recipeDetail = allRecipes.find(recipe => recipe.id === route.params.id);
      return recipeDetail;
    });
    const ingredients = ref(recipeById.value.ingredients);
    return { recipeById, ingredients };
  },
});
</script>

<style lang="scss" scoped>
.container {
  .box {
    width: 55vw;
    margin: 4% auto;
    display: flex;
    justify-content: flex-end;
    .recipe-details {
      height: 450px;
      width: 450px;
      border-radius: 13px;
      margin: 1% auto;

      h1 {
        font-size: 3.5rem;
        color: black;
        width: 65%;
        text-align: center;
      }
      .info {
        display: flex;
        justify-content: space-around;
        margin: 20% auto;

        .wrapper {
          h3 {
            text-align: center;
            font-size: 4rem;
            font-weight: normal;
          }
          p {
            font-size: 1.8rem;
          }
        }
      }
      .line {
        background-color: black;
        width: 0.2%;
        height: 8.5rem;
        opacity: 0.5;
      }
    }
    img {
      display: block;
      width: 45%;
      height: 42%;
      margin: 1% auto;
      border-radius: 13px;
      object-fit: cover;
    }
  }
  .underline {
    width: 50vw;
    height: 0.01rem;
    background-color: black;
    opacity: 0.6;
    margin: 0 auto;
  }
  .info-wrapper {
    margin: 3% 30%;
    h2 {
      font-weight: bold;
      font-size: 2.8rem;
    }
    .desc {
      margin-top: 2%;
      font-size: 2rem;
    }
    .ing-list {
      margin-top: 8%;
      h2 {
        margin-bottom: 2%;
      }
      ul {
        list-style: square inside;
      }
      li {
        font-size: 2rem;
        margin: 1% 0;
      }
    }
  }
}
</style>
