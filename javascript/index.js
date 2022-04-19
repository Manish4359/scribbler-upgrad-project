/*const signInBtn = document.querySelector('.sign-in-btn');
const signUpBtn = document.querySelector('.sign-up-btn');

const closeBtn=document.querySelectorAll('.close-btn');


signInBtn.addEventListener('click', (e) => {
    
    document.querySelector('.signin-modal').style.display="block";
    
})

signUpBtn.addEventListener('click',()=>{
    document.querySelector('.signup-modal').style.display="block";
    
})

closeBtn.forEach((btn)=>btn.addEventListener('click',(e)=>{

    console.log(e.target.closest('.modal'))
    const modalType=e.target.closest('.modal');
    
    if(modalType.classList.contains('create-post-modal')){
        modalType.style.display="none";
    }
    if(modalType.classList.contains('signin-modal')){
        modalType.style.display="none";
    }
    if(modalType.classList.contains('signup-modal')){
        modalType.style.display="none";
    }
    
    
    
}))


document.querySelector('.signup-link').addEventListener('click',()=>{
    document.querySelector('.signin-modal').style.display="none";
    document.querySelector('.signup-modal').style.display="block";
})
*/
const createPost=document.querySelector('.create-post-btn');

createPost.addEventListener('click',()=>{
    
    document.querySelector('.create-post-modal').style.display='block';
})


