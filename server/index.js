const express = require('express');
//const morgan = require('morgan');
const path = require('path');
const app = express();
const port = process.env.PORT || 3012;
const axios = require('axios');
const axios3002 = axios.create({
  baseURL: 'http://localhost:3002'
});
//
//app.use(morgan('dev'));
app.use('/restaurants/:id', express.static(path.join(__dirname, '../public')));
//axios uses response.data to send back data

// app.get('/api/restaurants/:id/photos', (req, res) => {
//   axios3002.get(`/api/restaurants/${req.params.id}/photos`)
//   .then(response => res.send(response.data))
//   .catch(err => res.send(err))
// });



app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});