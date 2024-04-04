import express, { Request, Response } from 'express';
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static('public'));

app.get('/', (req: Request, res: Response) => {
  res.json({"Mensaje": "Hola"});
});

app.get('/otro', (req: Request, res: Response) => {
    res.json({"Mensaje": "Otro"});
  });

app.listen(PORT, () => {
    console.log('Servidor corriendo en puerto', PORT);
  });
