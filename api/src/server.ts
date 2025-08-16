// src/server.ts
import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();
const port = 3000;

const corsOptions = {
  origin: ['*'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
};

app.use(cors(corsOptions));

app.use(express.json());

app.get('/health', (req: Request, res: Response) => {
  res.send('OK');
});

app.get('/', (req: Request, res: Response) => {
  res.send('Servidor rodando');
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});