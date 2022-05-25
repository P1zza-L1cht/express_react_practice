const express = require('express');
const app = express();

const port = process.env.PORT||5000;

app.get('/api/profile', (req, res)=> {
  const skills = [
    {id: 1, name: 'HTML'},
    {id: 2, name: 'javascript'}
  ];
  res.json(skills);
});

app.listen(port, () => {console.log(`Listening to the Server on port ${port}`)});