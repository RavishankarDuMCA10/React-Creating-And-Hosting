import express from 'express';

const articleInfo = [
    { name: 'learn-react', upvotes: 0 },
    { name: 'learn-node', upvotes: 0 },
    { name: 'mangodb', upvotes: 0 }
]

const app = express();

app.use(express.json());

app.post('/api/articles/:name/upvote', (req, res) => {
    const article = articleInfo.find(a => a.name === req.params.name)
    article.upvotes += 1;
    // res.status(200).send(`${article.upvotes}`);
    res.send('Hooray! The article ' + req.params.name + ' now has ' + article.upvotes + ' upvotes.');
});

// app.get('/hello', function (req, res) {
//     res.send('Hello form a GET endpoint!');
// });

// app.get('/hello/:name', function (req, res) {
//     res.send('Hello ' + req.params.name);
// });

// app.post('/hello', function (req, res) {
//     res.send('Hello ' + req.body.name+' form a POST endpoint!');
// });

app.listen(8000, function() {
    console.log('Server is listening on port 8000');
});