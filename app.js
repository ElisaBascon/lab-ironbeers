const express = require('express');

const hbs = require('hbs');
const path = require('path');
const PunkAPIWrapper = require('punkapi-javascript-wrapper');

const app = express();
const punkAPI = new PunkAPIWrapper();

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

// Register the location for handlebars partials here:

// ...

// Add the route handlers here:

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/beers', (req, res, next) => {
  punkAPI.getBeers()
  .then(beersFromApi => {
    console.log(`Cheers!`);
    res.render('Beers', {beersFromApi});
  })
  .catch(error => console.log(error));
})

app.get('/random-beer', (req, res, next) => {
  punkAPI.getRandom()
  .then(randomBeer => {
    console.log(`Your random beer`);
    res.render('randomBeer', {randomBeer});
  })
  .catch(error => console.log(error));
})

app.listen(3001, () => console.log('🏃‍ on port 3001'));
