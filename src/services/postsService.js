const postModel = require('../models/postsModel');

async function addPost({ user_id, title, content }) {
  return postModel.createPost(user_id, title, content);
}

async function listPosts({ user_id, limit, offset }) {
  return postModel.getPosts({ user_id, limit, offset });
}

async function removePost(postId) {
  return postModel.deletePost(postId);
}

module.exports = { addPost, listPosts, removePost };
