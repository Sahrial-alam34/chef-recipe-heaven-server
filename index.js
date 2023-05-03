const express  = require('express');
const app  = express();
const cors = require('cors');

const port = process.env.PORT || 5000;
app.use(cors());
const chefDetails = require('./data/chefDetails.json');
const foodCategories = require('./data/foodCategories.json')
const foodDetails = require('./data/foodDetails.json');
app.get('/', (req, res)=>{
    res.send('Food  is running')
});

app.get('/chefDetails',(req, res)=>{
    res.send(chefDetails)
})
app.get('/foodCategories',(req, res)=>{
    res.send(foodCategories)
})
app.get('/food',(req,res)=>{
    res.send(foodDetails);
})

app.listen(port, ()=>{
    console.log(`Food API is running on port: ${port}`)
})