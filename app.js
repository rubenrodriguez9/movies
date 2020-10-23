const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use('/ejs', require('./routes/ejsRoutes'));
app.use(express.static(path.join(__dirname, 'public')));


const port = 3000;

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})