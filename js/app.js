// const users = require("../db/users.json");

// Requirements
// -------------
// Get user information
// get the all post
// Get single Post

// ==============================
// USING PROMISE FOR GETTING DATA
// ==============================

function getUser(email) {
  if (!email) return Promise.reject("Invalid Email");

  const findUser = users.find((user) => user.email === email);
  if (!findUser) return Promise.reject("User Not Found");
  else return Promise.resolve(findUser);
}

function getPostByUserId(userId) {
  if (!userId) return Promise.reject("Invalid User ID");

  const postList = posts.filter((post) => post.userId === userId);
  if (!postList.length === 0) return Promise.reject("Post Not Found");
  else return Promise.resolve(postList);
}

function getCommentByPostId(postId) {
  if (!postId) return Promise.reject("Invalid Post ID");

  const commentList = comments.filter((comment) => comment.postId === postId);
  if (commentList === 0) return Promise.reject("Comments Not Found");
  else return Promise.resolve(commentList);
}

getUser("Shanna@melissa.tv")
  .then((user) => {
    console.log(user);
    return getCommentByPostId(user.id);
  })
  .then((posts) => {
    console.log(posts);

    return getCommentByPostId(posts[0].id);
  })
  .then((comments) => console.log(comments))
  .catch((error) => console.log(error));
