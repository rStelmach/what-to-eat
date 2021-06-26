import { createStore } from 'vuex';
import axios from 'axios';

const resourceUrl = 'http://localhost:3000/recipes';
// const resourceUrl = 'https://my-tasty-api.herokuapp.com/recipes';

export default createStore({
  state: { recipes: [], ingredients: [] },
  mutations: {
    SET_RECIPES(state, recipes) {
      state.recipes = recipes;
    },
    SET_INGREDIENTS(state, ingredients) {
      state.ingredients = ingredients;
    },
  },
  actions: {
    async getRecipes(context) {
      const response = await axios.get(resourceUrl, {});
      context.commit('SET_RECIPES', response.data);
      context.commit('SET_INGREDIENTS', response.data.ingredients);
    },
  },
  modules: {},
  getters: {
    allRecipes(state) {
      return state.recipes;
    },
    allIngredients(state) {
      return state.ingredients;
    },
    // getRecipeById(state, id) {
    //   return state.recipes.find(recipe => (recipe as any).id === id);
    // },
  },
});
