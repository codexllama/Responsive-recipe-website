const title = document.getElementById('title');
const nameField = document.getElementById('nameField');
const signinBtn = document.getElementById('signinBtn');
const signupBtn = document.getElementById('signupBtn');

signupBtn.onclick = function(){
    title.innerHTML = "Sign Up";
    nameField.style.display = "block";
}
signinBtn.onclick = function(){
    title.innerHTML = "Login";
    nameField.style.display = "none";
}
document.addEventListener("DOMContentLoaded", () => {
  fetch("recipes.json")
    .then(response => response.json())
    .then(data => {
      const container = document.createElement("div");
      container.className = "recipe-container";

      data.forEach(recipe => {
        const card = document.createElement("div");
        card.className = "recipe-card";
        card.innerHTML = `
          <img src="${recipe.image}" alt="${recipe.name}">
          <h2>${recipe.name}</h2>
          <p>${recipe.description}</p>
        `;
        container.appendChild(card);
      });

      document.body.appendChild(container);
    })
    .catch(error => console.error("Error loading JSON:", error));
});
let allRecipes = [];

document.addEventListener("DOMContentLoaded", () => {
  fetch("recipes.json")
    .then(response => response.json())
    .then(data => {
      allRecipes = data;
      displayRecipes(allRecipes);
    })
    .catch(error => console.error("Error loading JSON:", error));
});

function displayRecipes(recipes) {
  const container = document.getElementById("recipeContainer");
  container.innerHTML = "";

  if (recipes.length === 0) {
    container.innerHTML = "<p>No matching recipes found.</p>";
    return;
  }

  recipes.forEach(recipe => {
    const card = document.createElement("div");
    card.className = "recipe-card";
    card.innerHTML = `
      <img src="${recipe.image}" alt="${recipe.name}">
      <h2>${recipe.name}</h2>
      <p>${recipe.description}</p>
    `;
    container.appendChild(card);
  });
}

function searchRecipe() {
  const query = document.getElementById("searchInput").value.toLowerCase().trim();
  const filtered = allRecipes.filter(recipe =>
    recipe.name.toLowerCase().includes(query)
  );
  displayRecipes(filtered);
}
