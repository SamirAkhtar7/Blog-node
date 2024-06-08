const express = require('express');
const app = express();
app.set('view engine', 'ejs');
const blogroutes = require('./routes/blogroutes');

app.use(express.static('pubilc'));
app.use(express.urlencoded({extended:true}));


app.use("/", blogroutes);
app.use('/blog', blogroutes);

app.listen(5000, () => {
    console.log("server is running");

})
 