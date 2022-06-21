const express = require('express');
const cors =require("cors");
const app = express()
const port = 4000;

app.use(cors());

app.get('/', (req, res) => {
    return res.json({ client: 'commandbar', type: 'get' });
});

app.post('/', (req, res) => {
    return res.json({ client: 'commandbar', type: 'post' });
});

app.put('/', (req, res) => {
    return res.json({ client: 'commandbar', type: 'put' });
});

app.patch('/', (req, res) => {
    return res.json({ client: 'commandbar', type: 'patch' });
});

app.delete('/', (req, res) => {
    return res.json({ client: 'commandbar', type: 'delete' });
});

app.head('/', (req, res) => {
    return res.json({ client: 'commandbar', type: 'head' });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});