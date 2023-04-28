const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const rootDir = require('./utils/path');
const adminRoutes = require('./routes/admin');
const homeRoutes = require('./routes/home');
const app =express();

//setting template engine or integrating ejs with project
app.set('view engine','ejs');
app.set('views','views');

//Static Files Serving
app.use(express.static(path.join(rootDir,'public')))
app.use('/css',express.static(path.join(rootDir,'node_modules','bootstrap','dist','css')));
app.use(bodyParser.urlencoded({extended : false}));

//Routes
app.use('/products',adminRoutes);
app.use(homeRoutes);
app.use((req,res,next) => {
    const viewsData = {
        pageTitle : 'Page Not Find '
    }
    res.status(404).render('404',viewsData); //directly checks for 404.ejs in views
})

//Starting Server
app.listen(7000 , () => {
    console.log("Server Started");
})