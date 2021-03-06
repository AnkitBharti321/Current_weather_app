const express=require("express");
const app=express();
const path=require("path");
const hbs=require('hbs');
const port=process.env.PORT || 8000;

const staticPath=path.join(__dirname,"../public");
const template_path=path.join(__dirname,"../src/templates/views");
const partials_path=path.join(__dirname,"../src/templates/partials");
//const template_path=path.join(__dirname,"../src/templates/views");



app.set('view engine','hbs');
app.set('views',template_path);
hbs.registerPartials(partials_path);
app.use(express.static(staticPath));


//routing
app.get("",(req,res)=>{
  res.render("index.hbs");
});
app.get("/about",(req,res)=>{
  res.render("about.hbs");
});
app.get("/weather",(req,res)=>{
  res.render("weather");
});

app.get("*",(req,res)=>{
  res.render("error_404.hbs");
});
app.listen(port ,()=>{
  console.log(`listening to the port ${port}`);
});
