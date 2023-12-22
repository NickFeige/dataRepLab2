const express = require('express')
const app = express()
const port = 4000

const path = require('path');
app.use(express.static(path.join(__dirname, '../build')));
app.use('/static', express.static(path.join(__dirname, 'build//static')));

const cors = require('cors');
app.use(cors());
app.use(function(req, res, next) {
res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
res.header("Access-Control-Allow-Headers",
"Origin, X-Requested-With, Content-Type, Accept");
next();
});
const bodyParser= require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// getting-started.js
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://nick:NickFeige@cluster0.hcehyup.mongodb.net/?retryWrites=true&w=majority');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
const bookSchema= new mongoose.Schema({
 shopItem:String,
 url:String,
 price:String
});
//delete function
const bookModel= mongoose.model('book',bookSchema);
//deletes the requested id
app.delete('/api/book/:id',async(req,res)=>{
  console.log('delete'+req.params.id);
  //await will wait till send has a value
  let book= await bookModel.findByIdAndDelete(req.params.id);
  res.send(book);
})

app.put('/api/book/:id', async(req,res)=>{
  console.log("update"+req.params.id);
  let book = await bookModel.findByIdAndUpdate(req.params.id, req.body, {new:true});
  res.send(book);
})

app.post('/api/book',(req,res)=>{
  console.log(req.body);
  bookModel.create({
    shopItem:req.body.shopItem,    
    price:req.body.price
  })
  .then(()=>{res.send('data revived')})
  .catch(()=>{res.send('error')})
  
})

//using a request than responding 
app.get('/', (req, res) => {
  res.send('Hello World!')
  
})

//setting up a api for shopping
app.get('/api/book',async(req,res)=>{
   let book = await bookModel.find({});
   res.json(book);  
  })
  app.get('/api/book/:id',async(req,res)=>{
    console.log(req.params.id);
    let book = await bookModel.findById({_id:req.params.id})
    res.send(book);
  })
  app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/../build/index.html'));
    });
    
 
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


