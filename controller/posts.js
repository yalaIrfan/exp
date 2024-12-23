const express = require('express');
const router = express.Router();
const Post = require('../Models/Post');


router
.get('/', async (req, res) => {
    const posts = await Post.findAll();
    res.send(posts);
})
.get('/:id', async (req, res) => {
    // const post = req.body;
    // const post = Post.build({title: 'Post 1', content: 'Content 1'});
    let post = {};
    post = await Post.findByPk(req.params.id);
    res.send(post || {});
    // res.send('Ok');
}).post('/', async (req, res) => {
    // const post = req.body;
    const post = Post.build(req.body);
    let newPost = await post.save();
    res.send(newPost);
}).put('/:id', async (req, res) => {
    const body = req.body;
    // let post = await Post.findByPk(req.params.id);
    // post.title = body.title;
    // post.content = body.content;
    const post = await Post.update(body, {
        where: {
            id: req.params.id
        }
    });
    res.send(post);
}).delete('/:id', async (req, res) => {
    let post = await Post.findByPk(req.params.id);
    await post.destroy();
    res.send('Deleted');
});

module.exports = router;