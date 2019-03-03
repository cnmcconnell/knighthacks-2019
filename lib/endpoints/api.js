import BodyParser from 'body-parser';

export default ({ app, callback }) => {
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
