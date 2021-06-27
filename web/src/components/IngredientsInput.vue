<template>
  <div class="container">
    <div class="list">
      <label for="ingredients">Write down your ingredients:</label>
      <input type="text" id="ingredients" v-model="listInput" @keyup.enter="addToIngredients" />
      <div class="ingredient" v-for="(ingredient, index) in ingredients" :key="index">
        <li>{{ ingredient }}</li>
      </div>
    </div>
    <div class="temp">{{ recipes }}</div>
  </div>
</template>

<script>
import { useRecipes } from '../use/useRecipes';

export default {
  setup() {
    const { ingredients, listInput, recipes } = useRecipes();

    function addToIngredients() {
      ingredients.value.push(listInput.value);
      listInput.value = '';
    }
    return { ingredients, listInput, recipes, addToIngredients };
  },
};
</script>

<style lang="scss" scoped>
.container {
  height: 70vh;
  .list {
    color: white;
    min-height: 30vh;
    width: 25%;
    background-color: #50a684;
    margin: 8% auto 10% auto;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    //   align-items: center;
    label {
      text-align: center;
      margin-top: 2%;
      font-size: 2rem;
      font-weight: 700;
      margin-bottom: 0.3rem;
    }
    input {
      font-weight: 600;
      height: 3vh;
      display: block;
      margin: 2% auto;
      border-radius: 5px;
      border: none;
      padding-left: 1%;
      font-size: 1.5rem;
      width: 92%;
    }
    *:focus {
      outline: none;
    }
    li {
      list-style-type: '★ ';
      margin-left: 3.5%;
      font-size: 1.5rem;
      font-weight: 600;
    }
  }
  .temp {
    min-width: 300px;
    min-height: 300px;
    background-color: red;
    color: white;
  }
}
</style>
