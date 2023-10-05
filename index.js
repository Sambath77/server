import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send({ hi: 'there' });
});

app.listen(5000, function () {
  console.log('App is listening on port 5000');
});
