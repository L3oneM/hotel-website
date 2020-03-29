const express = require('express');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

app.get('/api/testData', (req, res) => {
  const test = [{ id: 1, name: 'Tom', last: 'Jack' }];

  res.json(test);
});

app.listen(PORT, () => {
  console.log(`Server is listening to port ${PORT}`);
});
