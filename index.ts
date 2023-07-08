import express from 'express';
const app = express();

app.get('/', (req, res) => {
  console.log('request came ' + new Date());
  return res.status(200).json({ status: 200 });
})

app.listen(3000, () => {
  console.log('listening on port 3000');
});
