const fetchPosts = fetch("https://jsonplaceholder.typicode.com/posts");
const fetchPostComments = fetch(
  "https://jsonplaceholder.typicode.com/comments"
);
Promise.all([fetchPosts, fetchPostComments])
  .then((values) => {
    return Promise.all(values.map((r) => r.json()));
  })
  .then(([posts, comments]) => {
    // console.log("posts: ", posts, "coments: ", comments);

    // Count the total comments for each posts
    let filter = comments.reduce(function (acc, curr) {
      acc[curr.postId] = (acc[curr.postId] || 0) + 1;
      return acc;
    }, {});

    // dispaly each post
    posts.map((item) => {
      showPosts(item, filter, comments);
    });
  });

function showPosts(post, filter, comments) {
  let displayCount = 2;
  let mainContainer = document.getElementById("mainContainer");

  let postContainer = document.createElement("div");
  postContainer.classList.add(
    "flex",
    "flex-col",
    "gap-3",
    "border",
    "rounded-lg",
    "p-4",
    "sm:p-6"
  );
  // post.id = `post-${item.id}`;

  let postTitle = document.createElement("strong");
  postTitle.innerHTML = post.title;

  let postBody = document.createElement("p");
  postBody.classList.add("text-sm");
  postBody.innerHTML = post.body;

  let commentSection = document.createElement("div");
  commentSection.classList.add(
    "border-t-2",
    "pt-2",
    "flex",
    "flex-col",
    "gap-3"
  );

  let commentSectionHeader = document.createElement("p");
  commentSectionHeader.classList.add("text-slate-500");
  // console.log(filter[post.id]);
  commentSectionHeader.innerText = `Comments ● ${filter[post.id]}`;

  let commentGroup = document.createElement("div");
  commentGroup.classList.add("pt-2", "flex", "flex-col", "gap-3");
  commentGroup.id = `post-${post.id}-comments`;

  commentSection.appendChild(commentSectionHeader);
  commentSection.appendChild(commentGroup);

  postContainer.appendChild(postTitle);
  postContainer.appendChild(postBody);
  postContainer.appendChild(commentSection);

  mainContainer.appendChild(postContainer);

  let showMoreComments = document.createElement("button");
  showMoreComments.id = `showMoreComments-post-${post.id}`;
  showMoreComments.innerHTML = `Show ${
    filter[post.id] - displayCount
  } more comments`;
  showMoreComments.onclick = () => loadComments(filter[post.id], post, comments, filter);

  postContainer.appendChild(showMoreComments);

  loadComments(displayCount, post, comments, filter);
}

function loadComments(externalCount, post, comments, filter) {
  // Load comments
  count = 0;

  // Empty the previous 2 comments being displayed
  document.getElementById(`post-${post.id}-comments`).innerHTML = "";

  // get the show more buttons
  showMoreComments = document.getElementById(
    `showMoreComments-post-${post.id}`
  );

  // iterate through each comment to dispaly it
  comments.forEach((comment) => {
    // console.log(comment.postId, post.id);

    if (comment.postId === post.id && count < externalCount) {
      // console.log("Hi there");
      // console.log(comment);
      count++;

      displayComments(comment.postId, comment.body, comment.email);

      // hide the show more comments button after being clicked
      console.log(externalCount);
      if (externalCount >= filter[post.id]) {
        showMoreComments.style.display = "none";
      }
    }
    // console.log("Total: ", count)
    //
  });
}

function displayComments(commentPostId, commentBody, commentEmail) {
  let commentSection = document.getElementById(
    `post-${commentPostId}-comments`
  );

  let commentContainer = document.createElement("div");
  commentContainer.classList.add(
    "p-4",
    "text-xs",
    "border",
    "bg-slate-50",
    "rounded"
  );

  let commentContent = document.createElement("p");
  commentContent.innerHTML = commentBody;

  let commentUser = document.createElement("p");
  commentUser.innerHTML = commentEmail;
  commentUser.classList.add("font-bold", "mt-3");

  commentContainer.appendChild(commentContent);
  commentContainer.appendChild(commentUser);
  commentSection.appendChild(commentContainer);
}
