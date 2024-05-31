var express = require('express');
const app = express();
require('dotenv').config();
var cors = require('cors');
app.use(express.json());
app.use(cors());
const port=process.env.PORT || 8081
const path = require('path')
// Serve the static files from the public folder
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use((err, req, res, next) => {
    const errorStatus = err.status || 500
    const errMessage = err.message || "something went wrong"
    res.status(`${errorStatus}`).send(`${errMessage}`)
    next();

})
app.listen(port, () => {
    console.log(`Server Runnig at port ${port}`)
})