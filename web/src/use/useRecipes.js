import { computed, ref } from 'vue';
import { useStore } from 'vuex';

export const useRecipes = () => {
  const store = useStore();
  const listInput = ref('');
  const ingredients = ref([]);
  const recipes = computed(() => {
    const { allRecipes } = store.getters;
    console.log(allRecipes);
    const newList = allRecipes.filter(item =>
      item.ingredients.some(ingredient =>
        ingredients.value.length > 0 ? ingredients.value.includes(ingredient) : true,
      ),
    );
    return newList;
  });

  return { ingredients, listInput, recipes };
};
