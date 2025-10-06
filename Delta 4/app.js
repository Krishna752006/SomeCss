const a = require("express");
const app = a();

let port = 3000;

app.listen(port,() => {
    console.log("App Listening");
});

app.set("view engine","ejs");

app.get("/",(req,res)=>{
    res.render("home.ejs");
})

app.use(a.static("public"));

app.get("/ig/:un",(req,res)=>{
    let {un} = req.params;
    let instadata = require("./data.json");
    if(!instadata[un]) res.render("error.ejs");
    else res.render("insta.ejs",{data:instadata[un]});
})