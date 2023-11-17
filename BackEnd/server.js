const express = require('express')
const app = express()
const port = 4000

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
 title:String,
 url:String,
 author:String
});
const bookModel= mongoose.model('book',bookSchema);

app.post('/api/book',(req,res)=>{
  console.log(req.body);
  bookModel.create({
    title:req.body.title,
    url:req.body.url,
    author:req.body.author
  })
  .then(()=>{res.send('data revived')})
  .catch(()=>{res.send('error')})
  
})

//using a request than responding 
app.get('/', (req, res) => {
  res.send('Hello World!')
})

//setting up a api for books
app.get('/api/book',async(req,res)=>{
   let book = await bookModel.find({});
   res.json(book);  
  })
  app.get('/api/book/:id',async(req,res)=>{
    console.log(req.params.id);
    let book = await bookModel.findById({_id:req.params.id})
    res.send(book);
  })
 
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})