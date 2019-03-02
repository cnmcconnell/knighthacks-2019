// external dependencies
import Express from 'express';

// internal dependencies
import * as endpoints from './endpoints/index';
import * as models from './models/index';

class Server {
  constructor() {
    this.config = new Express();

    // iterate through endpoint imports and append to express config
    Object.keys(endpoints).forEach((endpoint) => {
      endpoints[endpoint]({
        app: this.config,
        callback: (data) => { this.onRequest(data); },
      });
    });

    this.instance = this.config.listen(8080);

    this.plan = new models.Plan({ name: 'example plan' });

    let myRecipe;

    for (let j = 0; j < 7; j += 1) {
      myRecipe = new models.Recipe({ name: `example recipe ${j}` });

      for (let i = 0; i < 4; i += 1) {
        myRecipe.add('ingredient', new models.Ingredient({
          name: `example ingredient ${i}`,
          cost: Math.random() * 10,
          nutrition: {
            calories: Math.random() * 30,
            fat: Math.random() * 10,
            carbs: Math.random() * 10,
            protein: Math.random() * 10,
          },
        }));
      }

      this.plan.add('recipe', myRecipe);
    }

    console.log( this.plan );
  }

  onRequest(data) {
    console.log(data.data);

    data.response.sendStatus(200);
  }
}

export default Server;
