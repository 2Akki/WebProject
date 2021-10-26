const express = require('express');
const app = express();
const port =process.env.PORT || 8000
const path = require('path')
const hbs = require('hbs')
const template_path= path.join(__dirname, '../templates/views')
const partialpath =path.join(__dirname, '../templates/partials')
//public static path
const Stactic_Path = path.join(__dirname, '../public')
app.set('view engine', 'hbs');
app.set("views",template_path)
hbs.registerPartials(partialpath)

app.use(express.static(Stactic_Path))
//routing

app.get("/",(req,res)=>{
    res.render("index")
})
app.get("/about",(req,res)=>{
    res.render("about")
})
app.get("/weather",(req,res)=>{
    res.render("weather")
})
app.get("*",(req,res)=>{
    res.render("404",{
        text:"Opps! Page not Found "
    })
    
})


app.listen(port,()=>{
    console.log(`listning at the port${port}`)
})