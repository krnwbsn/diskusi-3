import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';
import bodyParser from 'body-parser';

import { mahasiswaRouter } from './src/routers/mahasiswaRouter';

dotenv.config();

if (!process.env.PORT) {
  process.exit(1);
}

const app: Express = express();
const port = process.env.PORT;
const runningText = `⚡️[server]: Server is running at https://localhost:${port}`;

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response) => {
  res.send(runningText);
});

app.use('/api/mahasiswa', mahasiswaRouter);

app.listen(port, () => {
  console.log(runningText);
});
