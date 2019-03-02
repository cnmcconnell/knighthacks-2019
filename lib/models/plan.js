import { uuid } from '../utils/index';

class Plan {
  constructor({ name }) {
    this.id = uuid();
    this.name = name;
    this.author = null;
    this.cost = null;

    this.recipes = [];

    this.nutrition = {
      calories: 0,
      fat: 0,
      carbs: 0,
      protein: 0,
    };
  }

  update() {
    this.calcPrice();
    this.calcNutrition();
  }

  calcPrice() {
    this.cost = 0;

    this.recipes.forEach((recipe) => {
      this.cost += recipe.cost;
    });

    return this;
  }

  calcNutrition() {
    this.nutrition = {
      calories: 0,
      fat: 0,
      carbs: 0,
      protein: 0,
    };

    this.recipes.forEach((recipe) => {
      this.nutrition.calories += recipe.nutrition.calories;
      this.nutrition.fat += recipe.nutrition.fat;
      this.nutrition.carbs += recipe.nutrition.carbs;
      this.nutrition.protein += recipe.nutrition.protein;
    });

    return this;
  }

  add(type, item) {
    switch (type) {
      case 'recipe':
        if (!this.recipes.includes(item)) {
          this.recipes.push(item);
        }
        break;

      default:
    }

    this.update();

    return this;
  }

  remove(type, item) {
    switch (type) {
      case 'recipe':
        if (this.recipes.includes(item)) {
          this.recipes.splice(
            this.recipes.indexOf(item),
            1,
          );
        }
        break;

      default:
    }

    this.update();

    return this;
  }

  has(item) {
    return this.recipes.includes(item);
  }
}

export default Plan;
