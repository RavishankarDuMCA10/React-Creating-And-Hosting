import express from 'express';
import { MongoClient, ServerApiVersion } from 'mongodb';

const articleInfo = [
    { name: 'learn-react', upvotes: 0, comments: [] },
    { name: 'learn-node', upvotes: 0, comments: [] },
    { name: 'mangodb', upvotes: 0, comments: [] }
]

const app = express();
let db;

app.use(express.json());

async function connectToDb() {
const uri = 'mongodb://127.0.0.1:27017';

    const client = new MongoClient(uri, { serverApi: { version: ServerApiVersion.v1, strict: true, deprecationErrors: true, }});

    await client.connect();
    db = client.db('full-stack-react-db');
}

app.get('/api/articles/:name', async (req, res) => {
    const { name } = req.params;
    const article = await db.collection('articles').findOne({ name });
    res.json(article);
});

app.post('/api/articles/:name/upvote', async (req, res) => {
    const { name } = req.params;
    const updatedArticle = await db.collection('articles').findOneAndUpdate({ name }, {
        $inc: { upvotes: 1 } }, {
            returnDocument: "after",
     });

     res.json(updatedArticle);
});

app.post('/api/articles/:name/comments', async (req, res) => {
    const name = req.params.name;
    const { postedBy, text } = req.body;
    const newComment = { postedBy, text };
    const updatedArticle = await db.collection('articles').findOneAndUpdate({ name }, {
        $push: { comments: newComment }
    }, {
            returnDocument: "after",
    });

    res.json(updatedArticle);
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

async function start() {

    await connectToDb();
    app.listen(8000, function() {
    console.log('Server is listening on port 8000');
});
}

start();