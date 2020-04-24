const express = require('express')
const path = require('path')
const app = express()
const port = process.env.PORT || 4000;
// const port = 3000;
const session = require('express-session')


app.set('view engine','ejs')

app.set('views', path.join(__dirname , 'Views'));


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

app.listen(port, () => console.log(`localhost:${port} connected`))
