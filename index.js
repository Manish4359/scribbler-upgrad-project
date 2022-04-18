const signInBtn = document.querySelector('.sign-in-btn');
const signUpBtn = document.querySelector('.sign-up-btn');

const closeBtn=document.querySelectorAll('.close-btn');

signInBtn.addEventListener('click', (e) => {

    document.querySelector('.signin-modal').style.display="block";

})

signUpBtn.addEventListener('click',()=>{
    document.querySelector('.signup-modal').style.display="block";
    
})

closeBtn.forEach((btn)=>btn.addEventListener('click',()=>{
    document.querySelector('.signin-modal').style.display="none";
    document.querySelector('.signup-modal').style.display="none";

}))

document.querySelector('.signup-link').addEventListener('click',()=>{
    document.querySelector('.signin-modal').style.display="none";
    document.querySelector('.signup-modal').style.display="block";
})