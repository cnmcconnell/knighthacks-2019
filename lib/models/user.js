import { uuid } from '../utils/index';

class User {
  constructor({ name }) {
    this.id = uuid();
    this.name = name;

    this.followers = [];
    this.following = [];
    this.recipes = [];
    this.savedRecipes = [];
  }

  add(type, item) {
    switch (type) {
      case 'recipe':
        if (!this.recipes.includes(item)) {
          this.recipes.push(item);
        }
        break;

      case 'followedRecipe':
        if (!this.savedRecipes.includes(item)) {
          this.savedRecipes.push(item);
        }
        break;

      case 'follower':
        if (!this.followers.includes(item)) {
          this.followers.push(item);
        }
        break;

      case 'follow':
        if (!this.following.includes(item)) {
          this.following.push(item);
        }
        break;

      default:
    }

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

      case 'followedRecipe':
        if (this.savedRecipes.includes(item)) {
          this.savedRecipes.splice(
            this.savedRecipes.indexOf(item),
            1,
          );
        }
        break;

      case 'follower':
        if (this.followers.includes(item)) {
          this.followers.splice(
            this.followers.indexOf(item),
            1,
          );
        }
        break;

      case 'follow':
        if (this.following.includes(item)) {
          this.following.splice(
            this.following.indexOf(item),
            1,
          );
        }
        break;

      default:
    }

    return this;
  }

  has(item) {
    return this.recipes.includes(item)
    || this.followers.includes(item)
    || this.following.includes(item);
  }
}

export default User;
