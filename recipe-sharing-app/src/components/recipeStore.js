import { create } from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: '', // Current search term
  filteredRecipes: [], // Filtered results based on the search term
  setSearchTerm: (term) => set((state) => {
    state.searchTerm = term; 
    state.filteredRecipes = state.recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(term.toLowerCase())
    );
  }),
  addRecipe: (newRecipe) =>
    set((state) => ({
        recipes: [...state.recipes, newRecipe],
        filteredRecipes: [...state.recipes, newRecipe],
    })),
  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== id),
    })),
  updateRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      ),
    })),
}));

export { useRecipeStore };