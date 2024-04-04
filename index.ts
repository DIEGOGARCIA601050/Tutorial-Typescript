import express, { Request, Response } from 'express';
const app = express();

app.use(express.json());
app.use(express.static('public'));

app.get('/', (req: Request, res: Response) => {
  res.json({"Mensaje": "Hola"});
});
