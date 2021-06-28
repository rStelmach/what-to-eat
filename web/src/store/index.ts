import { createStore } from 'vuex';
import axios from 'axios';
import { Recipe } from '@/types/Recipe';

const resourceUrl = 'http://localhost:3000/recipes';

export default createStore({
  state: { recipes: [], searchIngredients: [] },
  mutations: {
    SET_RECIPES(state, recipes) {
      state.recipes = recipes;
    },
    ADD_SEARCH_INGREDIENT(state, ingredient) {
      (state.searchIngredients as string[]).push(ingredient);
    },
  },
  actions: {
    async getRecipes(context) {
      const response = await axios.get(resourceUrl, {});
      context.commit('SET_RECIPES', response.data);
    },
  },
  modules: {},
  getters: {
    allRecipes(state) {
      if (state.searchIngredients.length <= 0) return state.recipes;

      const filteredRecipes = state.recipes.filter((recipe: Recipe) =>
        recipe.ingredients.some(ingredient =>
          state.searchIngredients.length > 0 ? (state.searchIngredients as string[]).includes(ingredient) : true,
        ),
      );
      return filteredRecipes;
    },

    getInput(state) {
      return state.searchIngredients;
    },
  },
});
