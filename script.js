document.addEventListener("DOMContentLoaded", async () => {
  let recipes = []; // Глобальний масив рецептів

  const PROXY = "https://api.allorigins.win/raw?url=";
  const API_URL = "https://dev-nespresso-test.pantheonsite.io/dynamic-api";

  async function fetchRecipes() {
      try {
          const response = await fetch(PROXY + encodeURIComponent(API_URL));
          if (!response.ok) throw new Error("Failed to fetch API");

          recipes = await response.json();
          console.log("Fetched Recipes:", recipes);
          renderRecipes(); // Початковий рендер
      } catch (error) {
          console.error("Error fetching recipes:", error);
      }
  }

  function extractImageSrc(html) {
      const match = html.match(/src="([^"]+)"/);
      return match ? "https://dev-nespresso-test.pantheonsite.io" + match[1] : "";
  }

  function renderRecipes() {
      console.log("Rendering recipes...");
      
      const grid = document.getElementById("recipeGrid");
      if (!grid) {
          console.error("Element #recipeGrid not found!");
          return;
      }

      grid.innerHTML = "";

      // Отримуємо вибрані значення фільтрів (тільки коли натиснута "Apply")
      const selectedLanguage = document.querySelector('input[name="language"]:checked').value;
      const selectedDifficulty = document.getElementById("difficultyFilter").value;
      const maxTime = parseInt(document.getElementById("timeFilter").value) || Infinity;

      // Фільтрація за мовою, складністю та часом приготування
      const filteredRecipes = recipes.filter(recipe => {
          return (
              recipe.langcode === selectedLanguage &&
              (selectedDifficulty === "all" || recipe.field_difficulty === selectedDifficulty) &&
              parseInt(recipe.field_cooking_time) <= maxTime
          );
      });

      console.log("Filtered Recipes:", filteredRecipes);
      if (filteredRecipes.length === 0) {
          console.warn("No recipes match the filters.");
      }

      filteredRecipes.forEach(recipe => {
          console.log("Rendering:", recipe.title);
          
          const card = document.createElement("div");
          card.className = "card";
          card.innerHTML = `
              <h3>${recipe.title}</h3>
              <p><strong>Difficulty:</strong> ${recipe.field_difficulty}</p>
              <p class="cooking-time"><strong>Cooking time:</strong> ${recipe.field_cooking_time}</p>
              <img src="${extractImageSrc(recipe.field_media_image)}" alt="${recipe.title}">
              <a href="https://dev-nespresso-test.pantheonsite.io${recipe.view_node}" target="_blank">VIEW RECIPE →</a>
          `;
          grid.appendChild(card);
      });
  }

  // ✅ Запускаємо рендер тільки коли натиснуто кнопку "Apply"
  document.getElementById("applyFilters").addEventListener("click", renderRecipes);

  fetchRecipes(); // Завантажуємо рецепти при старті
});
