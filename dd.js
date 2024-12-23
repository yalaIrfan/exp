const express = require('express');
const bodyParser = require('body-parser');

// const oracle = require('./db');
// // const pg = require('./pgdb');
process.env.UV_THREADPOOL_SIZE = 10;

const app = express();
app.use(bodyParser.json());
app.use(express.json());
express.Router(/);
app.get('/posts', async (req, res) => {
    let connection;
    try {
        // connection = await oracle.getDbConnection();
        // const result = await connection.execute(`SELECT * FROM post`);
        // console.dir(result.rows, { depth: null });
        // const posts = result.rows.map(row => {
        //     return { id: row[0], title: row[1], content: row[2] };
        // });
        // // return posts;

        // res.send(posts);
        const result = await  pg.query('SELECT NOW()')
        res.sendStatus(200).send(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    } finally {
        if (connection) {
            try {
                await connection.close();
            } catch (err) {
                console.error('Error closing connection', err);
            }
        }
    }
});

app.post('/posts', async (req, res) => {
    const { title, content } = req.body;
    const bindValues = [1, 'John Doe', 'Engineering'];
    const connection = await oracle.getDbConnection();
    const sql = `INSERT INTO post (id, title, content)  VALUES (:1, :2, :3)`;
    connection.execute(sql, bindValues, (err, result) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('Row inserted:', result.rowsAffected);
        posts.push({ id: posts.length + 1, title, content });
        res.send(result);
    });
});

app.put('/posts/:id', async (req, res) => {
    const { id } = req.params;
    const { title, content } = req.body;
    const post = posts.find(p => p.id === parseInt(id));
    if (!post) {
        return res.status(404).send('Post not found');
    }
    post.title = title;
    post.content = content;
    res.send(post);

});


app.listen(3000, async () => {
    // oracle.runApp();
    // await getDbConnection();
    console.log('Server running on port 3000');
});