require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/sp-node-article", { useNewUrlParser: true });
mongoose.Promise = global.Promise;
mongoose.connection
    .on('connected', () => {
        console.log(`Mongoose connection open on ${process.env.DATABASE}`);
    })
    .on('error', (err) => {
        console.log(`Connection error: ${err.message}`);
    });

    require('./models/registration');
    const app = require('./app');

    const server = app.listen(3000, () => {
        console.log(`Express is running on port ${server.address().port}`);
    });
    