import BodyParser from 'body-parser';

export default ({ app, callback }) => {
  app.get('/api', (req, res) => {
    callback({
      method: 'GET',
      data: req.query,
      response: res,
    });
  });

  app.post('/api', BodyParser.json(), (req, res) => {
    callback({
      method: 'POST',
      data: req.body,
      response: res,
    });
  });
};
