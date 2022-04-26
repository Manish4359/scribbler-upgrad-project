
const createPost = document.querySelector('.create-post-btn');

createPost.addEventListener('click', () => {

    document.querySelector('.create-post-modal').style.display = 'block';
})

const submitPostBtn = document.querySelector('.submit-post-btn');

submitPostBtn.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(e);

    const postTitle = document.getElementById('content-title');
    const postDesc = document.getElementById('content-desc');

    console.log(postDesc.value, postTitle.value);

    let post = {}

    post.author = 'user';
    post.description = postDesc.value;
    post.title = postTitle.value;

    posts.push(post);

    document.querySelector('.create-post-modal').style.display = '';


})



document.querySelector('.post-btn').addEventListener('click', (e) => {

    e.preventDefault();

    window.location.href = "./html/postslist.html";
})

