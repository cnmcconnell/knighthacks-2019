'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var Express = _interopDefault(require('express'));
var BodyParser = _interopDefault(require('body-parser'));
var Axios = _interopDefault(require('axios'));

var app = ({ app }) => {
  app.use('/app', Express.static('public'));
  app.use('/app-design', Express.static('design'));
};

var api = ({ app, callback }) => {
  app.get('/api', (req, res) => {
    callback({
      method: 'get',
      data: req.query,
      response: res,
    });
  });

  app.post('/api', BodyParser.json(), (req, res) => {
    callback({
      method: 'create',
      data: req.body,
      response: res,
    });
  });

  app.put('/api', BodyParser.json(), (req, res) => {
    callback({
      method: 'update',
      data: req.body,
      response: res,
    });
  });

  app.delete('/api', BodyParser.json(), (req, res) => {
    callback({
      method: 'remove',
      data: req.body,
      response: res,
    });
  });
};



var endpoints = /*#__PURE__*/Object.freeze({
	app: app,
	api: api
});

let arr = [ ];

for ( let i = 0; i < 256; i++ )
{ arr[i] = ( i < 16 ? '0' : '' ) + ( i ).toString( 16 ); }

let uuid = ( ) =>
{
  let a = Math.random( ) * 0xffffffff | 0;
  let b = Math.random( ) * 0xffffffff | 0;
  let c = Math.random( ) * 0xffffffff | 0;
  let d = Math.random( ) * 0xffffffff | 0;

  let o =
    arr[ a & 0xff ] + arr[ a >> .8 & 0xff ] + arr[ a >> 16 & 0xff ] + arr[ a >> 24 & 0xff ] + '-' +
    arr[ b & 0xff ] + arr[ b >> 8 & 0xff ] + '-' + arr[ b >> 16 & 0x0f | 0x40 ] + arr[ b >> 24 & 0xff ] + '-' +
    arr[ c & 0x3f | 0x80 ] + arr[ c >> 8 & 0xff ] + '-' + arr[ c >> 16 & 0xff ] + arr[ c >> 24 & 0xff ] +
    arr[ d & 0xff ] + arr[ d >> 8 & 0xff ] + arr[ d >> 16 & 0xff ] + arr[ d >> 24 & 0xff ];

  return o.toUpperCase( );
};

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

class Recipe {
  constructor({ name }) {
    this.id = uuid();
    this.name = name;
    this.author = null;
    this.cost = null;

    this.ingredients = [];
    this.steps = [];
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

      case 'step':
        this.steps.push(item);
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

      case 'step':
        if (this.steps[item - 1]) {
          this.tags.splice(item - 1, 1);
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

class Ingredient {
  constructor({ name, cost, nutrition }) {
    this.id = uuid();
    this.name = name;
    this.cost = cost;
    this.nutrition = { ...nutrition };
  }
}

var fda = 'bR2NVQX1FT0DJfkBujxB08KvqwZGN09MVDfGbt3K';

function ingredients(query) {
  return new Promise((resolve, reject) => {
    const params = {
      api_key: fda,
      q: query,
      max: 25,
      ds: 'Standard Reference',
    };

    Axios.get('https://api.nal.usda.gov/ndb/search', { params })
      .then((r) => {
        resolve(r.data.list.item);
      })
      .catch((e) => {
        reject(e);
      });
  });
}

function nutrition(query) {
  return new Promise((resolve, reject) => {
    const params = {
      api_key: fda,
      ndbno: query,
    };

    let output;

    Axios.get('https://api.nal.usda.gov/ndb/V2/reports', { params })
      .then((r) => {
        output = {
          calories: r.data.foods[0].food.nutrients.find(nut => nut.name === 'Energy').value,
          fat: r.data.foods[0].food.nutrients.find(nut => nut.name === 'Total lipid (fat)').value,
          carbs: r.data.foods[0].food.nutrients.find(nut => nut.name === 'Carbohydrate, by difference').value,
          protein: r.data.foods[0].food.nutrients.find(nut => nut.name === 'Protein').value,
        };

        resolve(output);
      })
      .catch((e) => {
        reject(e);
      });
  });
}

function recipe(db) {
  return new Promise((resolve, reject) => {
    return db.recipes.map(recipe => ({
      name: recipe.name,
      description: recipe.description,
      price: recipe.price,
    }));
  });
}

var get = async ({ data, db }) => {
  const myData = data.data;

  let output;

  switch (myData.type) {
    case 'list':
      output = await ingredients(myData.query);
      break;

    case 'details':
      output = await nutrition(myData.query);
      break;

    case 'recipes':
      output = await recipe(db);
      break;

    default:
  }

  return output;
};

var create = ({ data, db }) => {

};

var update = ({ data, db }) => {

};

var remove = ({ data, db }) => {

};



var handlers = /*#__PURE__*/Object.freeze({
	get: get,
	create: create,
	update: update,
	remove: remove
});

var index = {};
// export { default as ingredients } from './ingredients';
// export { default as recipes } from './recipes';
// export { default as users } from './users';

var templates = /*#__PURE__*/Object.freeze({
	default: index
});

// external dependencies

class Server {
  constructor() {
    this.config = new Express();

    this.db = {
      ingredients: undefined,
      recipes: undefined,
      users: undefined,
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
    this.plan = new Plan({ name: 'example plan' });

    let myRecipe;

    for (let j = 0; j < 4; j += 1) {
      myRecipe = new Recipe({ name: `example recipe ${j}` });

      for (let i = 0; i < 4; i += 1) {
        myRecipe.add('ingredient', new Ingredient({
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

    get({
      data: {
        data: {
          type: 'list',
          query: 'apple raw',
        },
      },
    }).then((r) => {
      // console.log( r );

      return get({
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

module.exports = Server;
