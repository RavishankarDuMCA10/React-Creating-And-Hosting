import express from 'express';

const app = express();

app.use(express.json());

app.get('/hello', function (req, res) {
    res.send('Hello form a GET endpoint!');
});

app.get('/hello/:name', function (req, res) {
    res.send('Hello ' + req.params.name);
});

app.post('/hello', function (req, res) {
    res.send('Hello ' + req.body.name+' form a POST endpoint!');
});

app.listen(8000, function() {
    console.log('Server is listening on port 8000');
});