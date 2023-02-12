const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
// const path = require('path');

const app = express();
const PORT = 3000;
const routes = require('./routes');

app.use(cors());
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(express.static(__dirname));
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);

routes(app);

// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, 'index.html'));
// });

app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
  });

app.use((err, req, res, next) => {
    console.log(err.message);
    res.status(err.status).send(err.message);
}); 

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}.`)
});

module.exports = app;
