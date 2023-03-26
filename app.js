const express = require('express')
const PORT = 4000
const quotes = require('./quote.json')


//create a server
const app = express();

//adding route to our server
app.get("/",(req,res)=>{
    res.send("<h1>welcome to the jungle</h2>")
})
app.get("/download",(req,res)=>{
    res.download("./package.json")
})


const getRandomIndex=()=>{
    return Math.floor(Math.random()*(quotes.length))
}

app.get("/quotes",(req,res)=>{
    res.send(`<h1>the author is ${quotes[getRandomIndex()].author}</h1><p>"${quotes[getRandomIndex()].text}"</p>`)
})



app.get("/json",(req,res)=>{
    const laptopData = {
        name :"Lenovo",
        size : 13,
        ram: 12,
        price: 40000,
        ssd: 256
    }
})


//start a server
app.listen(PORT,()=>{
    console.log(`server has started at port ${PORT}`);
})
