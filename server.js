const express = require('express');
const app = express();

const port = process.env.PORT||5000;

app.get('/api/profile', (req, res)=> {
  const contents = connect.query(
    'SELECT * FROM users',
    (error, results) => {
      console.log(results);
      return results;
    }
  );
  res.json(contents);
});

app.listen(port, () => {console.log(`Listening to the Server on port ${port}`)});