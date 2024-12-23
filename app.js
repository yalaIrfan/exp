const express = require('express');
const {sequelizePg} = require('./oracle-db-connection');
const bodyParser = require('body-parser');
const postRoute = require('./controller/posts');
const commentRoute = require('./controller/comments');
// const Post = require('./Models/Post');
process.env.UV_THREADPOOL_SIZE = 10;

const app = express();

app.use(bodyParser.json());

app.use(express.json());
app.use('/posts', postRoute);
app.use('/posts/:postId', commentRoute);



app.get('/check', async (req, res)=> {
    const result = await sequelizePg.query(
        `SELECT UNIQUE CLIENT_DRIVER FROM V$SESSION_CONNECT_INFO WHERE
         SID = SYS_CONTEXT('USERENV', 'SID')`, {
            type: sequelizePg.QueryTypes.SELECT,
            raw: true
         })
    res.send(result);
});

app.listen(3000, async () => {
    console.log('Server running on port 3000');
});