const express = require('express');
//const morgan = require('morgan');
const path = require('path');
const app = express();
const port = process.env.PORT || 3012;
const axios = require('axios');
const axios3002 = axios.create({
  baseURL: 'http://localhost:3002'
});
const axios3001 = axios.create({
  baseURL: 'http://localhost:3001'
});
const axios3003 = axios.create({
  baseURL: 'http://localhost:3003'
});
const axios3004 = axios.create({
  baseURL: 'http://localhost:3004'
});

//app.use(morgan('dev'));
app.use('/restaurants/:id', express.static(path.join(__dirname, '../public')));
//axios uses response.data to send back data

app.get('/api/restaurants/:id/photos', (req, res) => {
  axios3002.get(`/api/restaurants/${req.params.id}/photos`)
  .then(response => res.send(response.data))
  .catch(err => res.send(err))
});

app.get('/api/restaurants/:id/menus', (req, res) => {
  axios3004.get(`/api/restaurants/${req.params.id}/menus`)
  .then(response => res.send(response.data))
  .catch(err => res.send(err))
});

app.get('/api/restaurants/:id/menus/:menu', (req, res) => {
  axios3004.get(`/api/restaurants/${req.params.id}/menus/${req.params.menu}`)
  .then(response => res.send(response.data))
  .catch(err => res.send(err))
});

app.get('/api/restaurants/:id/info', (req, res) => {
  axios3003.get(`/api/restaurants/${req.params.id}/info`)
  .then(response => res.send(response.data))
  .catch(err => res.send(err))
});

app.get('/api/restaurants/:id/overview', (req, res) => {
  axios3003.get(`/api/restaurants/${req.params.id}/overview`)
  .then(response => res.send(response.data))
  .catch(err => res.send(err))
});

app.get('/api/restaurants/:id/reviews', (req, res) => {
  axios3001.get(`/api/restaurants/${req.params.id}/reviews`)
  .then(response => res.send(response.data))
  .catch(err => res.send(err))
});

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});