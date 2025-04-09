
import express from 'express';
import ViteExpress from 'vite-express';
import { routes } from './routes';

const app = express();
app.use(express.json());
app.use('/api', routes);

const port = 5000;
ViteExpress.listen(app, port, () => {
  console.log(`Server running at http://0.0.0.0:${port}`);
});
