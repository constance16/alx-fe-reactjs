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
    setRecipes: (recipes) => set({ recipes }),
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
  
  addFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.includes(recipeId)
        ? state.favorites
        : [...state.favorites, recipeId],
    })),
    
  removeFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    })),
    
  generateRecommendations: () =>
    set((state) => {
      const recommended = state.recipes.filter((recipe) =>
        state.favorites.some((favId) => favId !== recipe.id && Math.random() > 0.5)
      );
      return { recommendations: recommended };
    }),

}));

export { useRecipeStore };

