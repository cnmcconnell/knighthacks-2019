import { uuid } from '../utils/index';

class Ingredient {
  constructor({ name, cost, nutrition }) {
    this.id = uuid();
    this.name = name;
    this.cost = cost;
    this.nutrition = { ...nutrition };
  }
}

export default Ingredient;
