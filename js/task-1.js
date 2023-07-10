// const users = require("../db/users.json");

// Requirements
// -------------
// Get user information
// get the all post
// Get single Post

// ========================================
// USING CALLBACK FUNCTION FOR GETTING DATA
// ========================================

/**
function getUser(email, cb) {
  if (!email) {
    cb({ data: null, error: "Invalid Input Email", status: 401 });
    return;
  }

  setTimeout(() => {
    const findUser = users.find((user) => user.email === email);
    // const findUser = users.filter((user) => user.email === email);

    if (!findUser) {
      cb({ data: null, error: "Not Found User", status: 404 });
    } else {
      cb({ data: findUser, error: null, status: 200 });
    }
  });
}

function getPost(userId, cb) {
  if (!userId) {
    cb({ data: null, error: "Invalid UserID", status: 401 });
    return;
  }

  setTimeout(() => {
    const findPost = posts.filter((post) => post.userId === userId);

    if (!findPost) {
      cb({ data: null, error: "Not Found Post", status: 404 });
    } else {
      cb({ data: findPost, error: null, status: 200 });
    }
  });
}

function getPostComment(postId, cb) {
  if (!postId) {
    cb({ data: null, error: "Invalid postId", status: 401 });
    return;
  }

  setTimeout(() => {
    const findComment = comments.filter((comment) => comment.postId === postId);

    if (!findComment) {
      cb({ data: null, error: "Not Found Post", status: 404 });
    } else {
      cb({ data: findComment, error: null, status: 200 });
    }
  });
}

getUser("Shanna@melissa.tv", (res) => {
  console.log(`User is: ` + res.data.name);
  let userId = res.data.id;

  getPost(userId, (res) => {
    console.log(res.data);

    let postId = res.data[0].id;

    getPostComment(postId, (res) => {
      console.log(res.data);
    });
  });
});
 */

// ==============================
// USING PROMISE FOR GETTING DATA
// ==============================
/**
function getUser(email) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const findUser = users.find((user) => user.email === email);
      if (!findUser) {
        return reject({ data: null, error: "Not Found", status: 404 });
      } else {
        return resolve({ data: findUser, error: null, status: 200 });
      }
    }, 2000);
  });
}

getUser("Shanna@melissa.tv")
  .then((res) => console.log(res))
  .catch((error) => console.log(error.error));
 */

/**
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
 */

// ==============================
// USING ASYC AWAIT FOR GETTING DATA
// ==============================
/**
async function getUser(email) {
  if (!email) return await "Invalid Email";

  const findUser = users.find((user) => user.email === email);
  if (!findUser) return await "User Not Found";
  else return await findUser;
}
 */
