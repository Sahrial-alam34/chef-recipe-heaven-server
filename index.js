const express  = require('express');
const app  = express();
const cors = require('cors');

const port = process.env.PORT || 5000;
app.use(cors());
const chefDetails = require('./data/chefDetails.json');
app.get('/', (req, res)=>{
    res.send('Food  is running')
});

app.get('/chefDetails',(req, res)=>{
    res.send(chefDetails)
})

app.listen(port, ()=>{
    console.log(`Food API is running on port: ${port}`)
})