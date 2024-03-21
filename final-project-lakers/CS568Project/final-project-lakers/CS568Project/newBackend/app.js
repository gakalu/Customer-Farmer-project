const express = require('express');
const cors = require('cors');
const mongoConnect = require('./utils/database').mongoConnect;
const bookRouter = require('./routes/book');
const authRouter = require('./routes/auth');
//const cartRouter = require('./routes/cartRouter');
const cartRouter= require('./routes/cartRouter');

const app = express();

app.use(cors());
app.use(express.json());

// app.use(authRouter); //all urls access after authRouter needs JWT
app.use('/books', bookRouter);
app.use('/cart',cartRouter);

app.use((req, res, next) => {
    res.status(404).json({ error: req.url + ' API not supported!' });
});

app.use((err, req, res, next) => {
    if (err.message === 'NOT Found') {
        res.status(404).json({ error: err.message });
    } else {
        res.status(500).json({ error: 'Something is wrong! Try later' });
    }
});

mongoConnect(() => {
    app.listen(1234, () => console.log('listening to 1234...'));
});