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


app.get('/foodCategories',(req, res)=>{
    res.send(foodCategories)
})
app.get('/food',(req,res)=>{
    res.send(foodDetails);
})
app.get('/food/:id',(req, res)=>{
    const id = req.params.id;
    //console.log('food',id)
    const selectedFood = foodDetails.find(n=>n._id === id );
    res.send(selectedFood)
})

app.get('/foodCategories/:id',(req, res)=>{
    const id = parseInt(req.params.id);
    //console.log('category',id)
    if(id === 0 ){
        res.send(foodDetails)
    }
    const foodCategory = foodDetails.filter(n=>parseInt(n.category_id) === id);
    res.send(foodCategory)
})
app.get('/chefDetails',(req, res)=>{
    res.send(chefDetails)
})
// app.get('/chef',(req, res)=>{
//     res.send(chefInfo);
// })
app.get('/chefDetails/:id',(req, res)=>{
    const id = req.params.id;
     console.log('chef',id)
    const selectedChef = chefDetails?.find(n=>n.id === id);
    // console.log(selectedChef);
     res.send(selectedChef);
})

app.listen(port, ()=>{
    console.log(`Food API is running on port: ${port}`)
})