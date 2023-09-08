// Imports
const express = require('express');
require('dotenv').config();
const jsxEngine = require('jsx-view-engine')
const methodOverride = require('method-override')
const connectDB = require('./utils/connectDB')

const app = express()
const port = 3000;
// *=============================================================
// App Config
app.set('view engine', 'jsx');
app.engine('jsx', jsxEngine())
// *=============================================================
// Middleware
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(methodOverride('_method'))
// *=============================================================
// Routes
// View Routes
/*
 *Root 
 */
app.get('/', (req, res) => {
    res.render('Main')
})
/*
 *Index
 */
app.get('/logs', (req, res) => {
    res.render('Issues')
})
/*
 *New
*/
app.get('/logs/new',(req,res)=>{
    res.render('New')
})
/*
 *Edit
 */
/*
 *Show
 */
// **=============================================================
// API Routes
/*
 *Create
 */
/*
 *Update
 */
/*
 *Delete/Destroy
 */
/*
 *Misc
 */

// *=============================================================
// Connect to DB
connectDB()
// *=============================================================
// Listener
app.listen(port, () => {
    console.log(`Server is listening on port: ${port}`)
})