import { createStore } from 'vuex';
import axios from 'axios';
import { Recipe } from '@/types/Recipe';

const resourceUrl = 'http://localhost:3000/recipes';

export default createStore({
  state: { recipes: [], searchIngredientsQuery: [] },
  mutations: {
    SET_RECIPES(state, recipes) {
      state.recipes = recipes;
    },
    ADD_SEARCH_INGREDIENT(state, ingredient) {
      (state.searchIngredientsQuery as string[]).unshift(ingredient);
    },
    DELETE_INGREDIENT(state, id) {
      (state.searchIngredientsQuery as string[]).splice(id, 1);
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
      if (state.searchIngredientsQuery.length <= 0) return state.recipes;

      const filteredRecipes = state.recipes.filter((recipe: Recipe) =>
        recipe.ingredients.some(ingredient =>
          state.searchIngredientsQuery.length > 0
            ? (state.searchIngredientsQuery as string[]).includes(ingredient)
            : true,
        ),
      );
      return filteredRecipes;
    },

    getInput(state) {
      return state.searchIngredientsQuery;
    },
  },
});
