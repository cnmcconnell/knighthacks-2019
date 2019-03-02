import Express from 'express';

export default ({ app }) => {
  app.use('/app', Express.static('public'));
  app.use('/app-design', Express.static('design'));
};
