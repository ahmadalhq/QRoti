const express = require('express')
const app = express()
const port = process.env.PORT || 4000;
const session = require('express-session')


app.set('view engine','ejs')

app.use(express.urlencoded({extended : true}))
app.use(express.static(__dirname + '/public'))

app.use(session({
    path : '/',
    secret: 'ssshhhhh',  
    resave: false,
    saveUninitialized: false
}))
const router = require('./routers')

app.use(router)

// app.get('/',(req,res) => res.send('sleep'))

app.listen(port, () => console.log('localhost:3000 connected'))
