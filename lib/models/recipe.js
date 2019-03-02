import { uuid } from '../utils/index';

class Recipe {
  constructor({ name }) {
    this.id = uuid();
    this.name = name;
    this.author = null;
    this.cost = null;

    this.ingredients = [];
    this.savers = [];
    this.meals = [];
    this.tags = [];

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

    this.ingredients.forEach((ingredients) => {
      this.cost += ingredients.cost;
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

    this.ingredients.forEach((ingredient) => {
      this.nutrition.calories += ingredient.nutrition.calories;
      this.nutrition.fat += ingredient.nutrition.fat;
      this.nutrition.carbs += ingredient.nutrition.carbs;
      this.nutrition.protein += ingredient.nutrition.protein;
    });

    return this;
  }

  add(type, item) {
    switch (type) {
      case 'ingredient':
        if (!this.ingredients.includes(item)) {
          this.ingredients.push(item);
        }
        break;

      case 'saver':
        if (!this.savers.includes(item)) {
          this.savers.push(item);
        }
        break;

      case 'meal':
        if (!this.meals.includes(item)) {
          this.meals.push(item);
        }
        break;

      case 'tag':
        if (!this.tags.includes(item)) {
          this.tags.push(item);
        }
        break;

      default:
    }

    this.update();

    return this;
  }

  remove(type, item) {
    switch (type) {
      case 'ingredient':
        if (this.ingredients.includes(item)) {
          this.ingredients.splice(
            this.ingredients.indexOf(item),
            1,
          );
        }
        break;

      case 'saver':
        if (this.savers.includes(item)) {
          this.savers.splice(
            this.savers.indexOf(item),
            1,
          );
        }
        break;

      case 'meal':
        if (this.meals.includes(item)) {
          this.meals.splice(
            this.meals.indexOf(item),
            1,
          );
        }
        break;

      case 'tag':
        if (this.tags.includes(item)) {
          this.tags.splice(
            this.tags.indexOf(item),
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
    return this.ingredients.includes(item)
    || this.savers.includes(item)
    || this.meals.includes(item)
    || this.tags.includes(item);
  }
}

export default Recipe;
