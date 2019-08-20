import { Router } from 'express';

const routes = new Router();

routes.get('/', (req, res) =>
  res.json({
    message: 'w22orld',
  })
);

export default routes;
