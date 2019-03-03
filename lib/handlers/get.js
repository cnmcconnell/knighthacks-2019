import Axios from 'axios';

import { fda } from '../keys/index';

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

export default async ({ data, db }) => {
  const myData = data.data;

  let output;

  switch (myData.type) {
    case 'list':
      output = await ingredients(myData.query);
      break;

    case 'details':
      output = await nutrition(myData.query);
      break;

    default:
  }

  return output;
};
