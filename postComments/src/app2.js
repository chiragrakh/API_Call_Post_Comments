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
        let filter = comments.reduce(
            function (acc, curr) {
                //         // if (!acc.includes(curr.postId)) {
                //         //     acc.push(curr.postId)
                //         // }
                //         // return acc;

                //         if (!acc.includes(curr.postId)) {
                //             // let totalComments = {
                //             //     postId: curr.postId,
                //             //     comments: 1,
                //             // };

                // console.log(acc[curr.postId]);
                // if (acc[curr.postId] === 'undefined'){
                //     acc[curr.postId] = 0;
                // }
                // else{
                //     acc[curr.postId]++;
                // }
                acc[curr.postId] = (acc[curr.postId] || 0) + 1;
                return acc;
                //         }
            },
            {}
        );

        // dispaly each post
        posts.map((item) => {
            let displayCount = 2;
            let mainContainer = document.getElementById("mainContainer");

            let post = document.createElement("div");
            post.classList.add(
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
            postTitle.innerHTML = item.title;

            let postBody = document.createElement("p");
            postBody.classList.add("text-sm");
            postBody.innerHTML = item.body;

            let commentSection = document.createElement("div");
            commentSection.classList.add("border-t-2", "pt-2", "flex", "flex-col", "gap-3");
            

            let commentSectionHeader = document.createElement("p");
            commentSectionHeader.classList.add("text-slate-500");
            // console.log(filter[item.id]);
            commentSectionHeader.innerText = `Comments ● ${filter[item.id]}`;

            let commentGroup = document.createElement("div");
            commentGroup.classList.add("pt-2", "flex", "flex-col", "gap-3");
            commentGroup.id = `post-${item.id}-comments`;

            commentSection.appendChild(commentSectionHeader);
            commentSection.appendChild(commentGroup);

            post.appendChild(postTitle);
            post.appendChild(postBody);
            post.appendChild(commentSection);
            
            mainContainer.appendChild(post);

            let showMoreComments = document.createElement("button");
            showMoreComments.innerHTML = `Show ${filter[item.id] - displayCount} more comments`;
            showMoreComments.onclick = () => loadComments(filter[item.id], item.id);

            post.appendChild(showMoreComments);

            function loadComments(externalCount, postId) {
                // Load comments
                count = 0
                document.getElementById(`post-${item.id}-comments`).innerHTML = "";
                comments.forEach(comment => {
                    // console.log(comment.postId, item.id);

                    if (comment.postId === item.id && count < externalCount) {
                        console.log("Hi there");
                        console.log(comment);
                        count++;
                        let commentSection = document.getElementById(`post-${comment.postId}-comments`);

                        let commentContainer = document.createElement("div");
                        commentContainer.classList.add(
                            "p-4",
                            "text-xs",
                            "border",
                            "bg-slate-50",
                            "rounded"
                        )

                        let commentContent = document.createElement("p");
                        commentContent.innerHTML = comment.body;

                        let commentUser = document.createElement("p");
                        commentUser.innerHTML = comment.email;
                        commentUser.classList.add(
                            "font-bold",
                            "mt-3"
                        )

                        commentContainer.appendChild(commentContent);
                        commentContainer.appendChild(commentUser);
                        commentSection.appendChild(commentContainer);
                    }
                    // console.log("Total: ", count)
                    //     
                });
            }
            loadComments(displayCount);

        });
    });