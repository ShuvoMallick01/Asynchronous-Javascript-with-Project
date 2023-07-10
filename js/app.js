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

// getUser("Shanna@melissa.tv")
//   .then((user) => {
//     console.log(user);
//     return getCommentByPostId(user.id);
//   })
//   .then((posts) => {
//     console.log(posts);

//     return getCommentByPostId(posts[0].id);
//   })
//   .then((comments) => console.log(comments))
//   .catch((error) => console.log(error));

const formEl = document.getElementById("inputEmail");
const inputEmail = document.getElementById("email");
const userInfoE1 = document.getElementById("user-info");
const errorAlertEl = document.getElementById("error-alert");
const userAllPostsEl = document.getElementById("user-all-posts");

// Get Data
const fetchUserData = async (email) => {
  try {
    const user = await getUser(email);
    const markup = `
    <ul class="list-group pb-5">
       <li class="list-group-item">Name: ${user.name}</li>
       <li class="list-group-item">Username: ${user.username}</li>
       <li class="list-group-item">Email: ${user.email}</li>
       <li class="list-group-item">Phone: ${user.phone}</li>
       <li class="list-group-item">Address: ${user.address.street}, ${user.address.suite}, ${user.address.city}</li>
    </ul>`;
    userInfoE1.innerHTML = markup;

    // Posts
    const userPosts = await getPostByUserId(user.id);

    userPosts.forEach((post) => {
      const markup = ` <div class="col-lg-3 col-md-4">
            <div class="card">
              <div class="card-body user-post">
                <!-- Post Contents -->
                <div class="post-contents">
                  <h4 class="title">Post ${post.id}</h4>
                  <h5 class="card-title">${post.title}</h5>
                  <p class="card-text">
                    ${post.body}
                  </p>
                  <p class="text-end user-name">User: <span>${user.name}</span></p>
                </div>

                <!-- Comment -->
                <div class="post-comments" id="post-comments">
                  <h4 class="title">Comments</h4>
                  <!-- comment -->
                  <div class="comment">
                    <h4 class="comment-title">
                      quo vero reiciendis velit similique earum
                    </h4>
                    <p class="comment-email mb-2">Jayne_Kuhic@sydney.com</p>
                    <p>
                      est natus enim nihil est dolore omnis voluptatem
                      numquam\net omnis occaecati quod ullam at\nvoluptatem
                      error expedita pariatur\nnihil sint nostrum voluptatem
                      reiciendis et
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>`;

      userAllPostsEl.innerHTML += markup;
    });
  } catch (error) {
    const markup = `<div class="alert alert-warning" id="error-alert" role="alert">
              ${error}
            </div>`;
    userInfoE1.innerHTML = markup;
  }
};

// Main Function
formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  fetchUserData(inputEmail.value);
});
