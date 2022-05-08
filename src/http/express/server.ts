import dotenv from 'dotenv'
import express from 'express';
import cors from 'cors';

dotenv.config()

import environment from '../../config/environment';
import { routes } from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(environment.app.PORT, () => {
  console.log(`💥 Server started on port ${environment.app.PORT}`);
});