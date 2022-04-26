const signInBtn = document.querySelector('.sign-in-btn');
const signUpBtn = document.querySelector('.sign-up-btn');

const closeBtn = document.querySelectorAll('.close-btn');


//A function used to render the following markup in the postlist.html

const postMarkup =({author,title,description},index)=> `
        <div class="post post-${index}">
            <div class="post-author">
                <p>${author}</p>

            </div>

            <div class="post-content">
                <div class="post-title">
                    <p>${title}</p>
                    <span class="post-delete-icon">

                        <i class="fa fa-trash-o" aria-hidden="true"></i>
                    </span>
                </div>
                <p class="post-description">${description}</p>
                <a href="./post.html" class="ellipsis">

                    <i class="fa fa-ellipsis-h" aria-hidden="true"></i>
                </a>
            </div>
        </div>

`

//this array stores all the posts
let posts = [
    {
        author: 'Srishti Gupta',
        title: '‘let’ me be a ‘const’(ant), not a ‘var’(iable)!',
        description: 'Since JavaScript does not have any type-checking, either of these keywords can be used to declare a variable of any type (datatype) in JavaScript. Though all the three keywords are used for the same purpose, they are different.'
    },
    {
        author: 'Colby Fayock',
        title: 'What is linting and how can it save you time?',
        description: 'One of the biggest challenges in software development is time. It’s something we can’t easily get more of, but linting can help us make the most out of the time we have.'
    },
    {
        author: 'Yazeed Bzadough',
        title: 'How to Get More Views on Your Tech Blog',
        description: "If you're a developer with a Twitter account, you've already seen everyone and their cat start a blog, YouTube channel, or Patreon. We all want to become stars, or at the very least, a recognizable name in the industry."
    },
    {
        author: 'Cedd Burge',
        title: 'How to write easily describable code',
        description: 'Since JavaScript does not have any type-checking, either of these keywords can be used to declare a variable of any type (datatype) in JavaScript. Though all the three keywords are used for the same purpose, they are different.'
    },

];



let postLists;

function renderPosts(){

    postLists=posts.map((post,index)=>postMarkup(post,index)).join(' ');
}



//this is the header code  

const headerMarkup = `<header>
<div class="heading">
    <h1 class="heading-title">ScriBBler</h1>
    <span class="subheading">Explore, Imagine,Create</span>
</div>
<div class="sign-in-sign-up">
    <button class="btn sign-up-btn">Sign Up</button>
    <button class="btn sign-in-btn">Sign In</button>

</div>
</header>`;

//Sign in markup

const signinMarkup = `<div class="modal signin-modal">
<div class="signin">
    <div class="form-title">
        <h2>Welcome Back!</h2>
        <div class="close-btn"><i class="fa fa-times" aria-hidden="true"></i></div>
    </div>
    <form>
        <label for="signin-username">Username</label>
        <input id='signin-username' type="text" placeholder="Enter your username" required>


        <label for="signin-pass">Password</label>
        <input id='signin-pass' type="password" placeholder="Enter your password" required>
        <button class="btn form-submit">signup</button>
    </form>
    <p>Not a member ?<button class="signup-link">signup</button></p>

</div>
</div>`;


const signupMarkup = `<div class="modal signup-modal">

<div class="signup">
    <div class="form-title">
        <h3>Get started</h3>
        <div class="close-btn"><i class="fa fa-times" aria-hidden="true"></i></div>
    </div>
    <form>
        <label for="signup-name">Name</label>
        <input id='signup-name' type="text" placeholder="Enter your name" required>

        <label for="signup-username">Username</label>
        <input id='signup-username' type="text" placeholder="Enter your username" required>

        <label for="signup-pass">Password</label>
        <input id='signup-pass' type="password" placeholder="Enter your password" required>

        <label for='signup-pass-confirm'>Confirm Password</label>
        <input id='signup-pass-confirm' type="password" placeholder="Re-enter your password" required>

        <button class="btn form-submit">signup</button>
    </form>
</div>
</div>`;


document.body.insertAdjacentHTML('afterBegin', headerMarkup)
document.body.innerHTML += signinMarkup;
document.body.innerHTML += signupMarkup


document.querySelector('.sign-in-btn').addEventListener('click', (e) => {

    document.querySelector('.signin-modal').style.display = "block";

})

document.querySelector('.sign-up-btn').addEventListener('click', () => {
    document.querySelector('.signup-modal').style.display = "block";

})




document.querySelectorAll('.close-btn').forEach((btn) => btn.addEventListener('click', (e) => {

    console.log(e.target.closest('.modal'))
    const modalType = e.target.closest('.modal');

    if (modalType.classList.contains('create-post-modal')) {
        modalType.style.display = "none";
    }
    if (modalType.classList.contains('signin-modal')) {
        modalType.style.display = "none";
    }
    if (modalType.classList.contains('signup-modal')) {
        modalType.style.display = "none";
    }


   
}))



document.querySelector('.signup-link')?.addEventListener('click', () => {
    document.querySelector('.signin-modal').style.display = "none";
    document.querySelector('.signup-modal').style.display = "block";
})

