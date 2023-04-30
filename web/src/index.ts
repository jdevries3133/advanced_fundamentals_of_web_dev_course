import express from 'express';

const app = express();

export function addOne(n: number) {
  return n + 1
}

app.get('/addOne/:number', (req, res) => {
  const n = parseInt(req.params.number);
  const sum = n + 1
  res.send(sum.toString());
});

app.listen(3000)
