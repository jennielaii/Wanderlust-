const express = require('express');
const app = express();
const expressLayouts = require ('express-ejs-layouts');
const PORT = process.env.PORT || 3000
const rowdy = require('rowdy-logger');
const routesReport = rowdy.begin(app);
const methodOverride = require('method-override');
// const flash = require('connect-flash');
const userRoutes = require('./routes/userRoutes');
// const listItemRoutes = require('./routes/listitemRoutes')

app.use(express.json());

// Set default view engine
app.use(expressLayouts);
app.set('view engine', 'ejs');

// Mount middleware 
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

// // Connect Flash
// app.use(flash());

// // Global Variables
// app.use(function(req, res, next) {
//     res.locals.success_msg = req.flash('success_msg');
//     res.locals.error_msg = req.flash('error_msg');
//     res.locals.error = req.flash('error');
//     next();
//   });
//

// Routes
//
app.use('/user', userRoutes);

// Welcome Page
app.get('/', (req, res) => {
    console.log('hitting');
    res.render('welcome');
});

//Advice Page
app.get('/advice', (req, res) => {
    res.render('../views/advice.ejs',);
  });



app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
    routesReport.print()
 });