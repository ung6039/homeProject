const express= require('express')
const app = express();

app.all('/*',function (req,res,next) {
    res.header("Access-Control-Allow-Origin","*")
    res.header("Access-Control-Allow-Headers","X-Requested-With");
    next();
});

app.listen(2233,()=>{
    console.log("Server Start","http://localhost:2233")
})
const request= require("request")
const xml2js = require("xml2js")
const path =require('path')
// public 디렉터리의 내용을 자동으로 응답합니다. --- (※3)


const Client = require("mongodb").MongoClient
app.get('/gs25',(req,res)=>{
    // var page=req.query.page;// request.getParameter("page")
    // var rowSize=9;
    // var skip=(page*rowSize)-rowSize;
    var url="mongodb://localhost:27017";
    // 연결
    Client.connect(url,(err,client)=>{
        // Database (mydb)
        var db=client.db("mydb")
        // Table => Collection => recipe
        db.collection('store').find({store:"GS25"}).toArray((err,docs)=>{
                res.json(docs)
                client.close()
            })
    })
})
app.get('/emart24',(req,res)=>{
    // var page=req.query.page;// request.getParameter("page")
    // var rowSize=9;
    // var skip=(page*rowSize)-rowSize;
    var url="mongodb://localhost:27017";
    // 연결
    Client.connect(url,(err,client)=>{
        // Database (mydb)
        var db=client.db("mydb")
        // Table => Collection => recipe
        db.collection('store').find({store:"이마트24"}).toArray((err,docs)=>{
            res.json(docs)
            client.close()
        })
    })
})
app.get('/cu',(req,res)=>{
    // var page=req.query.page;// request.getParameter("page")
    // var rowSize=9;
    // var skip=(page*rowSize)-rowSize;
    var url="mongodb://localhost:27017";
    // 연결
    Client.connect(url,(err,client)=>{
        // Database (mydb)
        var db=client.db("mydb")
        // Table => Collection => recipe
        db.collection('store').find({store:"CU"}).toArray((err,docs)=>{
            res.json(docs)
            client.close()
        })
    })
})
app.get('/news',(req,res)=>{
    // var page=req.query.page;// request.getParameter("page")
    // var rowSize=9;
    // var skip=(page*rowSize)-rowSize;
    var url="mongodb://localhost:27017";
    // 연결
    Client.connect(url,(err,client)=>{
        // Database (mydb)
        var db=client.db("mydb")
        // Table => Collection => recipe
        db.collection('store').find({store:"CU"}).toArray((err,docs)=>{
            res.json(docs)
            client.close()
        })
    })
})