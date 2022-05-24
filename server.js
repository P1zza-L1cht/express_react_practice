const express = require('express');
const app = express();

const port = process.env.PORT||5000;

app.get('/api/profile', (req, res)=> {
  const contents = [
    {id: 1, express: "send data to the react",
     id: 2, react: "get data from express"}
  ];
  res.json(contents);
});

app.listen(port, () => {console.log(`Listning to the Server on port ${port}`)});