// Imports
const express = require('express');
require('dotenv').config();
const jsxEngine = require('jsx-view-engine')
const methodOverride = require('method-override')

const connectDB = require('./utils/connectDB')
const Log = require('./models/logs')
const manyLogs = require('./models/manyLogs')

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
app.get('/logs', async (req, res) => {
    try {
        const logs = await Log.find({})
        res.render('Issues', { logs })
    } catch (e) {
        console.log(e)
    }
})
/*
 *New
*/
app.get('/logs/new', (req, res) => {
    console.log(req.body)
    res.render('New')
})
/*
 *Edit
 */
app.get('/logs/:id/edit', async (req, res) => {
    const { id } = req.params;
    try {
        const log = await Log.findById(id)
        res.render('Edit', { log })
    } catch (e) {
        console.log(e)
    }
})
/*
 *Show
 */
app.get('/logs/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const log = await Log.findById(id)
        res.render('Show', { log })
    } catch (e) {
        console.log(e)
    }
})
// **=============================================================
// API Routes
/*
 *Create
 */
app.post('/api/logs', async (req, res) => {
    if (req.body.shipIsBroken === 'on') {
        req.body.shipIsBroken = true
    } else {
        req.body.shipIsBroken = false
    }
    res.redirect('/logs')

})
/*
 *Update
 */
app.put('/api/logs/:id', async (req, res) => {
    const { id } = req.params
    console.log(req.body)
    if (req.body.shipIsBroken === 'on') {
        req.body.shipIsBroken = true
    } else {
        req.body.shipIsBroken = false
    }
    try{
        const updatedLog = await Log.findByIdAndUpdate(id, req.body, {new: true})
        res.redirect('/logs')
    }catch(e){
        console.log(e)
    }
})
/*
 *Delete/Destroy
 */
app.delete('/api/logs/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const deletedLog = await Log.findByIdAndDelete(id);
        res.redirect('/logs')
    } catch (e) {
        console.log(e)
    }
})
/*
 *Seed Route
 */
app.get('/api/logs/seed', async (req, res) => {
    const createdLogs = await Log.insertMany(manyLogs)
    res.send(createdLogs)
})
// *=============================================================
// Connect to DB
connectDB()
// *=============================================================
// Listener
app.listen(port, () => {
    console.log(`Server is listening on port: ${port}`)
})