// external dependencies
import Express from 'express';

// internal dependencies
import * as endpoints from './endpoints/index';
import * as models from './models/index';
import * as handlers from './handlers/index';
import * as templates from './templates/index';

class Server {
  constructor() {
    this.config = new Express();

    this.db = {
      ingredients: templates.ingredients,
      recipes: templates.recipes,
      users: templates.users,
    };

    // iterate through endpoint imports and append to express config
    Object.keys(endpoints).forEach((endpoint) => {
      endpoints[endpoint]({
        app: this.config,
        callback: (data) => { this.onRequest(data); },
      });
    });

    this.instance = this.config.listen(8080);

    /* test data */
    this.plan = new models.Plan({ name: 'example plan' });

    let myRecipe;

    for (let j = 0; j < 4; j += 1) {
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

    handlers.get({
      data: {
        data: {
          type: 'list',
          query: 'apple raw',
        },
      },
    }).then((r) => {
      // console.log( r );

      return handlers.get({
        data: {
          data: {
            type: 'details',
            query: r[0].ndbno,
          },
        },
      });
    }).then((r) => {
      // console.log( r );
    });



    // console.log(this.plan);
    /* test data */
  }

  onRequest(data) {
    const { method, response } = data;

    handlers[method]({
      data,
      db: this.db,
    }).then((r) => {
      console.log('sending', r);
      response.send(r);
    });
  }
}

export default Server;
