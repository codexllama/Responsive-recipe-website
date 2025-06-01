// Recipe Data with detailed information
const recipeData = {    "butter-chicken": {
        title: "Butter Chicken",
        image: "https://via.placeholder.com/400x300/ff7043/ffffff?text=Butter+Chicken",
        description: "Creamy and rich tomato-based curry with tender chicken pieces, perfect with basmati rice or naan bread.",
        prepTime: "30 minutes",
        cookTime: "45 minutes",
        servings: "4-6",
        difficulty: "Medium",
        ingredients: [
            "2 lbs boneless chicken thighs, cut into chunks",
            "1 cup plain Greek yogurt",
            "1 tbsp fresh lemon juice",
            "2 tsp minced fresh ginger",
            "4 garlic cloves, minced",
            "2 tsp garam masala",
            "1 tsp cumin",
            "1 tsp cayenne pepper",
            "1 tsp salt",
            "4 tbsp butter",
            "1 large onion, finely chopped",
            "3 tbsp tomato paste",
            "1 can (14 oz) crushed tomatoes",
            "1 cup heavy cream",
            "2 tbsp fresh cilantro, chopped"
        ],
        instructions: [
            "In a bowl, combine yogurt, lemon juice, 1 tsp ginger, 2 garlic cloves, 1 tsp garam masala, cumin, cayenne, and salt. Add chicken and marinate for at least 1 hour.",
            "Heat 2 tbsp butter in a large pan over medium-high heat. Cook marinated chicken until browned and cooked through, about 8 minutes. Remove and set aside.",
            "In the same pan, melt remaining butter. Add onion and cook until softened, about 5 minutes.",
            "Add remaining ginger and garlic, cook for 1 minute until fragrant.",
            "Stir in tomato paste and cook for 2 minutes. Add crushed tomatoes and remaining garam masala.",
            "Simmer for 10-15 minutes until sauce thickens. Return chicken to pan.",
            "Stir in cream and simmer for 5 minutes. Garnish with cilantro and serve hot."
        ],
        nutrition: {
            calories: "420",
            protein: "32g",
            carbs: "12g",
            fat: "28g",
            fiber: "3g",
            sodium: "680mg"
        },
        tips: "For best results, marinate the chicken overnight. You can substitute heavy cream with coconut milk for a dairy-free version. Adjust spice level by increasing or decreasing cayenne pepper."
    },
      "biryani": {
        title: "Chicken Biryani",
        image: "https://via.placeholder.com/400x300/ff7043/ffffff?text=Chicken+Biryani",
        description: "Aromatic basmati rice layered with spiced chicken, saffron, and fried onions - a royal feast in every bite.",
        prepTime: "45 minutes",
        cookTime: "1 hour 30 minutes",
        servings: "6-8",
        difficulty: "Hard",
        ingredients: [
            "3 cups basmati rice",
            "2 lbs chicken, cut into pieces",
            "1 cup plain yogurt",
            "2 large onions, thinly sliced",
            "1/2 cup ghee or oil",
            "1 tsp saffron soaked in 1/4 cup warm milk",
            "1 tbsp ginger-garlic paste",
            "2 tsp red chili powder",
            "1 tsp turmeric powder",
            "2 tsp biryani masala",
            "1 tsp garam masala",
            "4-5 green cardamom pods",
            "2 bay leaves",
            "1 cinnamon stick",
            "Salt to taste",
            "Fresh mint leaves",
            "Fresh cilantro leaves"
        ],
        instructions: [
            "Soak basmati rice for 30 minutes. Boil water with whole spices and salt, add rice and cook until 70% done. Drain and set aside.",
            "Marinate chicken with yogurt, ginger-garlic paste, red chili powder, turmeric, biryani masala, and salt for 30 minutes.",
            "Deep fry sliced onions until golden brown and crispy. Reserve half for garnish, crush the other half.",
            "In a heavy-bottomed pot, heat ghee and cook marinated chicken until 80% done. Add crushed fried onions.",
            "Layer the partially cooked rice over chicken. Sprinkle reserved fried onions, saffron milk, mint, and cilantro.",
            "Cover with aluminum foil, then place lid tightly. Cook on high heat for 3-4 minutes until steam forms.",
            "Reduce heat to lowest setting and cook for 45 minutes. Turn off heat and let it rest for 10 minutes before opening.",
            "Gently mix and serve hot with raita and boiled eggs."
        ],
        nutrition: {
            calories: "520",
            protein: "28g",
            carbs: "65g",
            fat: "18g",
            fiber: "2g",
            sodium: "890mg"
        },
        tips: "Use aged basmati rice for best results. Don't skip the dum cooking process - it's essential for authentic biryani. The bottom layer should be slightly crispy (called tahdig)."
    },

    "palak-paneer": {
        title: "Palak Paneer",
        image: "images/palak-paneer.jpg",
        description: "Creamy spinach curry with cubes of paneer cheese, packed with nutrients and bursting with flavor.",
        prepTime: "20 minutes",
        cookTime: "30 minutes",
        servings: "4",
        difficulty: "Easy",
        ingredients: [
            "1 lb fresh spinach leaves",
            "8 oz paneer, cubed",
            "1 large onion, chopped",
            "3 tomatoes, chopped",
            "1 tbsp ginger-garlic paste",
            "2 green chilies, chopped",
            "1 tsp cumin seeds",
            "1 tsp coriander powder",
            "1/2 tsp turmeric powder",
            "1 tsp garam masala",
            "1/2 cup heavy cream",
            "3 tbsp ghee or oil",
            "Salt to taste",
            "1 tsp kasoori methi (dried fenugreek leaves)"
        ],
        instructions: [
            "Blanch spinach in boiling water for 2 minutes, then immediately transfer to ice water. Drain and blend to a smooth puree.",
            "Heat 1 tbsp ghee in a pan and lightly fry paneer cubes until golden. Set aside.",
            "In the same pan, heat remaining ghee and add cumin seeds. When they splutter, add onions and sauté until golden.",
            "Add ginger-garlic paste and green chilies, cook for 1 minute.",
            "Add tomatoes and cook until they break down and form a thick paste.",
            "Add all spices and cook for 2 minutes. Add spinach puree and mix well.",
            "Simmer for 10 minutes, then add cream and fried paneer. Cook for 5 more minutes.",
            "Garnish with kasoori methi and serve hot with roti or rice."
        ],
        nutrition: {
            calories: "280",
            protein: "16g",
            carbs: "14g",
            fat: "20g",
            fiber: "5g",
            sodium: "420mg"
        },
        tips: "Don't overcook spinach to retain its vibrant green color. You can make paneer at home or use store-bought. For a vegan version, substitute paneer with tofu and cream with cashew cream."
    },

    "samosa": {
        title: "Samosa",
        image: "images/samosa.jpg",
        description: "Crispy triangular pastries filled with spiced potatoes and peas, perfect as appetizers or snacks.",
        prepTime: "45 minutes",
        cookTime: "30 minutes",
        servings: "6-8 (20 pieces)",
        difficulty: "Medium",
        ingredients: [
            "2 cups all-purpose flour",
            "4 tbsp ghee or oil",
            "1/2 tsp salt",
            "Water as needed",
            "Oil for deep frying",
            "For filling:",
            "4 large potatoes, boiled and cubed",
            "1 cup green peas",
            "1 tsp cumin seeds",
            "1 tsp coriander seeds, crushed",
            "1 inch ginger, minced",
            "2 green chilies, chopped",
            "1 tsp turmeric powder",
            "1 tsp red chili powder",
            "1 tsp garam masala",
            "2 tbsp oil",
            "Salt to taste",
            "Fresh cilantro, chopped"
        ],
        instructions: [
            "Make dough by mixing flour, ghee, and salt. Add water gradually to form a stiff dough. Rest for 30 minutes.",
            "For filling, heat oil and add cumin seeds. Add ginger and green chilies, sauté for 1 minute.",
            "Add peas and cook for 3-4 minutes. Add boiled potatoes and all spices.",
            "Mix well and cook for 5 minutes. Add cilantro and let the filling cool completely.",
            "Divide dough into small balls. Roll each into an oval, cut in half to form semi-circles.",
            "Form a cone with each semi-circle, fill with potato mixture, and seal edges with water.",
            "Heat oil to 350°F (175°C). Deep fry samosas in batches until golden brown and crispy.",
            "Serve hot with mint chutney and tamarind sauce."
        ],
        nutrition: {
            calories: "160",
            protein: "4g",
            carbs: "22g",
            fat: "7g",
            fiber: "2g",
            sodium: "280mg"
        },
        tips: "Make sure the oil is at the right temperature - too hot and samosas will brown quickly but remain uncooked inside. You can freeze shaped samosas and fry them directly from frozen."
    },

    "tandoori-chicken": {
        title: "Tandoori Chicken",
        image: "images/tandoori-chicken.jpg",
        description: "Succulent chicken marinated in yogurt and spices, traditionally cooked in a clay oven for that signature smoky flavor.",
        prepTime: "4 hours (including marination)",
        cookTime: "25 minutes",
        servings: "4-6",
        difficulty: "Medium",
        ingredients: [
            "1 whole chicken (3 lbs), cut into pieces",
            "1 cup plain Greek yogurt",
            "2 tbsp fresh lemon juice",
            "2 tbsp tandoori masala",
            "1 tbsp ginger-garlic paste",
            "1 tsp red chili powder",
            "1 tsp turmeric powder",
            "1 tsp cumin powder",
            "1 tsp coriander powder",
            "2 tsp salt",
            "2 tbsp mustard oil",
            "Red food coloring (optional)",
            "Sliced onions and lemon wedges for serving"
        ],
        instructions: [
            "Make deep cuts in the chicken pieces to help marinade penetrate.",
            "Mix yogurt, lemon juice, all spices, ginger-garlic paste, salt, and mustard oil in a large bowl.",
            "Add food coloring if using. Coat chicken pieces thoroughly with marinade.",
            "Cover and refrigerate for at least 4 hours or overnight for best results.",
            "Preheat oven to 450°F (230°C) or prepare a grill.",
            "Place chicken on a wire rack over a baking sheet. Cook for 20-25 minutes, turning once.",
            "For extra char, broil for 2-3 minutes at the end.",
            "Serve hot with sliced onions, lemon wedges, and mint chutney."
        ],
        nutrition: {
            calories: "310",
            protein: "35g",
            carbs: "6g",
            fat: "16g",
            fiber: "1g",
            sodium: "720mg"
        },
        tips: "Marinating overnight gives the best flavor. If you don't have a tandoor or grill, use your oven's highest setting and broil for the last few minutes to get that charred effect."
    },

    "dal-tadka": {
        title: "Dal Tadka",
        image: "images/dal-tadka.jpg",
        description: "Comfort food at its finest - yellow lentils cooked with aromatic spices and finished with a flavorful tempering.",
        prepTime: "15 minutes",
        cookTime: "30 minutes",
        servings: "4",
        difficulty: "Easy",
        ingredients: [
            "1 cup yellow lentils (toor dal)",
            "3 cups water",
            "1/2 tsp turmeric powder",
            "1 tsp salt",
            "For tadka:",
            "3 tbsp ghee",
            "1 tsp cumin seeds",
            "1 tsp mustard seeds",
            "2 dried red chilies",
            "1 inch ginger, julienned",
            "4 garlic cloves, sliced",
            "1 onion, finely chopped",
            "2 tomatoes, chopped",
            "1 green chili, slit",
            "1 tsp red chili powder",
            "1/2 tsp garam masala",
            "Fresh cilantro for garnish"
        ],
        instructions: [
            "Wash and soak lentils for 15 minutes. Drain and add to a pot with water, turmeric, and salt.",
            "Bring to a boil, then simmer for 20-25 minutes until lentils are soft and mushy. Mash lightly.",
            "For tadka, heat ghee in a pan. Add cumin seeds, mustard seeds, and red chilies.",
            "When seeds start to splutter, add ginger and garlic. Sauté until fragrant.",
            "Add onions and cook until golden brown. Add tomatoes and green chili.",
            "Cook until tomatoes break down, then add red chili powder and garam masala.",
            "Pour this tadka over the cooked dal and simmer for 5 minutes.",
            "Garnish with fresh cilantro and serve hot with rice or roti."
        ],
        nutrition: {
            calories: "220",
            protein: "12g",
            carbs: "32g",
            fat: "6g",
            fiber: "8g",
            sodium: "480mg"
        },
        tips: "The consistency should be like a thick soup. Add hot water if it becomes too thick. The tadka (tempering) is what gives this dal its distinctive flavor, so don't skip it!"
    },

    "naan": {
        title: "Garlic Naan",
        image: "images/naan.jpg",
        description: "Soft, pillowy Indian flatbread infused with garlic and herbs, perfect for scooping up curries and dal.",
        prepTime: "2 hours (including rising time)",
        cookTime: "20 minutes",
        servings: "6-8 pieces",
        difficulty: "Medium",
        ingredients: [
            "2 cups all-purpose flour",
            "1/2 cup plain yogurt",
            "1/4 cup warm milk",
            "1 tsp sugar",
            "1/2 tsp active dry yeast",
            "1 tsp salt",
            "2 tbsp ghee or oil",
            "4 garlic cloves, minced",
            "2 tbsp fresh cilantro, chopped",
            "Extra ghee for cooking",
            "Coarse salt for sprinkling"
        ],
        instructions: [
            "Dissolve sugar in warm milk, add yeast and let it foam for 5-10 minutes.",
            "In a large bowl, mix flour and salt. Add yogurt, yeast mixture, and ghee.",
            "Knead into a soft, smooth dough. Cover and let rise for 1-2 hours until doubled.",
            "Mix minced garlic with cilantro and a pinch of salt.",
            "Divide dough into 6-8 portions. Roll each into an oval shape.",
            "Spread garlic-cilantro mixture on one side and gently press it in.",
            "Heat a cast iron skillet or griddle over medium-high heat.",
            "Cook naan garlic-side up first, then flip and cook until puffed and spotted.",
            "Brush with ghee and sprinkle with coarse salt. Serve immediately."
        ],
        nutrition: {
            calories: "180",
            protein: "5g",
            carbs: "28g",
            fat: "6g",
            fiber: "1g",
            sodium: "320mg"
        },
        tips: "If you don't have a tandoor, a cast iron skillet works great. You can also finish under the broiler for 30 seconds for extra char. Store leftover naan wrapped in foil."
    },

    "rogan-josh": {
        title: "Rogan Josh",
        image: "images/rogan-josh.jpg",
        description: "Aromatic Kashmiri lamb curry with a rich, deep red sauce made from yogurt and traditional spices.",
        prepTime: "30 minutes",
        cookTime: "1 hour 30 minutes",
        servings: "6",
        difficulty: "Hard",
        ingredients: [
            "2 lbs lamb shoulder, cut into chunks",
            "1 cup plain yogurt",
            "2 large onions, sliced",
            "1/4 cup ghee",
            "2 bay leaves",
            "4 green cardamom pods",
            "1 cinnamon stick",
            "1 tbsp ginger-garlic paste",
            "2 tsp Kashmiri red chili powder",
            "1 tsp turmeric powder",
            "2 tsp coriander powder",
            "1 tsp cumin powder",
            "1 tsp fennel powder",
            "1/2 tsp asafoetida",
            "1 tsp garam masala",
            "Salt to taste",
            "Fresh cilantro for garnish"
        ],
        instructions: [
            "Marinate lamb pieces in half the yogurt for 30 minutes.",
            "Heat ghee in a heavy-bottomed pot. Fry onions until deep golden brown. Remove and set aside.",
            "In the same pot, add whole spices and let them sizzle.",
            "Add marinated lamb and cook on high heat until browned on all sides.",
            "Add ginger-garlic paste and cook for 2 minutes.",
            "Add all ground spices and cook for 1 minute, stirring constantly.",
            "Add remaining yogurt gradually, stirring continuously to prevent curdling.",
            "Add fried onions and enough water to cover the meat.",
            "Bring to a boil, then simmer covered for 1-1.5 hours until lamb is tender.",
            "Garnish with cilantro and serve with basmati rice."
        ],
        nutrition: {
            calories: "380",
            protein: "32g",
            carbs: "8g",
            fat: "24g",
            fiber: "2g",
            sodium: "620mg"
        },
        tips: "Use Kashmiri red chili powder for authentic color and mild heat. The dish is ready when the oil separates from the sauce. Slow cooking is key to tender meat."
    },

    "masala-dosa": {
        title: "Masala Dosa",
        image: "images/masala-dosa.jpg",
        description: "Crispy South Indian crepe made from fermented rice and lentil batter, filled with spiced potato curry.",
        prepTime: "12 hours (including fermentation)",
        cookTime: "45 minutes",
        servings: "6-8",
        difficulty: "Hard",
        ingredients: [
            "For batter:",
            "3 cups parboiled rice",
            "1 cup urad dal (split black gram)",
            "1/2 tsp fenugreek seeds",
            "Salt to taste",
            "Oil for cooking",
            "For potato filling:",
            "4 large potatoes, boiled and cubed",
            "1 large onion, sliced",
            "2 tbsp oil",
            "1 tsp mustard seeds",
            "1 tsp cumin seeds",
            "10-12 curry leaves",
            "2 green chilies, chopped",
            "1 inch ginger, minced",
            "1/2 tsp turmeric powder",
            "Salt to taste",
            "Fresh cilantro, chopped"
        ],
        instructions: [
            "Soak rice and urad dal with fenugreek seeds separately for 4-5 hours.",
            "Grind them separately to smooth pastes. Mix and ferment for 8-12 hours.",
            "For filling, heat oil and add mustard seeds, cumin seeds, and curry leaves.",
            "Add onions, green chilies, and ginger. Sauté until onions are translucent.",
            "Add turmeric and boiled potatoes. Season with salt and add cilantro.",
            "Heat a non-stick pan and spread batter thinly to form a large crepe.",
            "Drizzle oil around edges and cook until crispy and golden.",
            "Place potato filling on one side and fold the dosa in half.",
            "Serve hot with coconut chutney and sambar."
        ],
        nutrition: {
            calories: "240",
            protein: "6g",
            carbs: "48g",
            fat: "4g",
            fiber: "3g",
            sodium: "380mg"
        },
        tips: "The batter consistency should be like thick pancake batter. Fermentation is crucial for the tangy flavor and crispy texture. Practice makes perfect with dosa making!"
    },

    "gulab-jamun": {
        title: "Gulab Jamun",
        image: "images/gulab-jamun.jpg",
        description: "Soft, spongy milk dumplings soaked in fragrant rose and cardamom flavored sugar syrup - the king of Indian desserts.",
        prepTime: "30 minutes",
        cookTime: "45 minutes",
        servings: "6-8 (16 pieces)",
        difficulty: "Medium",
        ingredients: [
            "1 cup milk powder",
            "1/4 cup all-purpose flour",
            "2 tbsp ghee",
            "1/4 cup milk",
            "1/4 tsp baking soda",
            "Oil for deep frying",
            "For syrup:",
            "2 cups sugar",
            "2 cups water",
            "4-5 green cardamom pods",
            "1 tsp rose water",
            "Few saffron strands",
            "1 tbsp lemon juice"
        ],
        instructions: [
            "Make syrup by boiling sugar, water, and cardamom until slightly sticky. Add rose water and saffron. Keep warm.",
            "Mix milk powder, flour, baking soda, and ghee in a bowl.",
            "Gradually add milk to form a soft dough. Don't overmix.",
            "Divide into small portions and gently roll into smooth balls without cracks.",
            "Heat oil to 300°F (150°C) - this is crucial for even cooking.",
            "Fry the balls slowly, turning gently until deep golden brown.",
            "Immediately transfer hot gulab jamuns to warm syrup.",
            "Let them soak for at least 2 hours before serving.",
            "Serve warm or at room temperature, garnished with chopped pistachios."
        ],
        nutrition: {
            calories: "280",
            protein: "6g",
            carbs: "45g",
            fat: "9g",
            fiber: "0g",
            sodium: "120mg"
        },
        tips: "Temperature control is key - too hot oil will burn the outside while keeping inside raw. The balls should be smooth without cracks to prevent breaking during frying."
    }
};

// Current selected recipe
let currentRecipe = null;

// Dropdown functionality
function toggleDropdown() {
    const dropdown = document.getElementById('dropdown-content');
    const arrow = document.querySelector('.dropdown-arrow');
    
    dropdown.classList.toggle('show');
    arrow.style.transform = dropdown.classList.contains('show') ? 'rotate(180deg)' : 'rotate(0deg)';
}

// Close dropdown when clicking outside
window.onclick = function(event) {
    if (!event.target.matches('.dropdown-btn') && !event.target.matches('.dropdown-arrow') && !event.target.matches('#selected-recipe')) {
        const dropdown = document.getElementById('dropdown-content');
        const arrow = document.querySelector('.dropdown-arrow');
        if (dropdown.classList.contains('show')) {
            dropdown.classList.remove('show');
            arrow.style.transform = 'rotate(0deg)';
        }
    }
}

// Select recipe from dropdown
function selectRecipe(recipeId) {
    const recipe = recipeData[recipeId];
    if (!recipe) return;
    
    currentRecipe = recipeId;
    
    // Update dropdown button text
    document.getElementById('selected-recipe').textContent = recipe.title;
    
    // Close dropdown
    document.getElementById('dropdown-content').classList.remove('show');
    document.querySelector('.dropdown-arrow').style.transform = 'rotate(0deg)';
    
    // Show the recipe
    displayRecipe(recipe);
}

// Display recipe details
function displayRecipe(recipe) {
    // Hide welcome message
    document.querySelector('.recipe-display').classList.add('hidden');
    
    // Show recipe content
    const recipeContent = document.getElementById('recipe-content');
    recipeContent.classList.remove('hidden');
    recipeContent.classList.add('fade-in');
    
    // Populate recipe data
    document.getElementById('recipe-image').src = recipe.image;
    document.getElementById('recipe-image').alt = recipe.title;
    document.getElementById('recipe-title').textContent = recipe.title;
    document.getElementById('recipe-description').textContent = recipe.description;
    document.getElementById('prep-time').textContent = recipe.prepTime;
    document.getElementById('cook-time').textContent = recipe.cookTime;
    document.getElementById('servings').textContent = recipe.servings;
    document.getElementById('difficulty').textContent = recipe.difficulty;
    
    // Populate ingredients
    const ingredientsList = document.getElementById('ingredients-list');
    ingredientsList.innerHTML = '';
    recipe.ingredients.forEach(ingredient => {
        const li = document.createElement('li');
        li.textContent = ingredient;
        ingredientsList.appendChild(li);
    });
    
    // Populate instructions
    const instructionsList = document.getElementById('instructions-list');
    instructionsList.innerHTML = '';
    recipe.instructions.forEach(instruction => {
        const li = document.createElement('li');
        li.textContent = instruction;
        instructionsList.appendChild(li);
    });
    
    // Populate nutrition
    document.getElementById('calories').textContent = recipe.nutrition.calories;
    document.getElementById('protein').textContent = recipe.nutrition.protein;
    document.getElementById('carbs').textContent = recipe.nutrition.carbs;
    document.getElementById('fat').textContent = recipe.nutrition.fat;
    document.getElementById('fiber').textContent = recipe.nutrition.fiber;
    document.getElementById('sodium').textContent = recipe.nutrition.sodium;
    
    // Populate tips
    document.getElementById('tips-content').textContent = recipe.tips;
    
    // Scroll to top of recipe content
    recipeContent.scrollIntoView({ behavior: 'smooth' });
}

// Search from dropdown selection
function searchFromDropdown() {
    if (currentRecipe) {
        displayRecipe(recipeData[currentRecipe]);
    } else {
        alert('Please select a recipe from the dropdown menu first.');
    }
}

// Search functionality for text input
function searchRecipe() {
    const searchInput = document.getElementById('searchInput');
    const searchTerm = searchInput.value.toLowerCase().trim();
    
    if (!searchTerm) {
        alert('Please enter a recipe name to search.');
        return;
    }
    
    // Find matching recipe
    const matchedRecipe = Object.entries(recipeData).find(([key, recipe]) => 
        recipe.title.toLowerCase().includes(searchTerm) ||
        key.toLowerCase().includes(searchTerm)
    );
    
    if (matchedRecipe) {
        const [recipeId, recipe] = matchedRecipe;
        currentRecipe = recipeId;
        document.getElementById('selected-recipe').textContent = recipe.title;
        displayRecipe(recipe);
        searchInput.value = '';
    } else {
        alert(`No recipe found for "${searchTerm}". Please try a different search term.`);
    }
}

// Show welcome screen
function showWelcome() {
    document.querySelector('.recipe-display').classList.remove('hidden');
    document.getElementById('recipe-content').classList.add('hidden');
    document.getElementById('selected-recipe').textContent = 'Select a Recipe';
    currentRecipe = null;
}

// Keyboard support for search
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    
    searchInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            searchRecipe();
        }
    });
    
    // Add search suggestions
    const recipes = Object.values(recipeData).map(recipe => recipe.title);
    
    searchInput.addEventListener('input', function() {
        const value = this.value.toLowerCase();
        if (value) {
            const suggestions = recipes.filter(recipe => 
                recipe.toLowerCase().includes(value)
            );
            
            // You can implement autocomplete dropdown here if needed
        }
    });
    
    console.log('Indian Recipe Website loaded successfully!');
    console.log('Available recipes:', Object.keys(recipeData));
});
