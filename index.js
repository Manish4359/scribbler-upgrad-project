const signInBtn = document.querySelector('.sign-in-btn');
const signUpBtn = document.querySelector('.sign-up-btn');

const closeBtn=document.querySelector('.close-btn');

const signInMarkup = `<div class="mask">
<div class="signup">
<div class="title">
<span>Get started</span>
<div class="close-btn"><i class="fa fa-times" aria-hidden="true"></i></div>
</div>
<form>
<label for="signin-username">Username</label>
<input id='signin-username' type="text" placeholder="username" required>


<label for="signin-pass">Password</label>
<input id='signin-pass' type="password" placeholder="password" required>
<button>signup</button>
</form>
<span>Not a member signup</span>

</div></div>`;

const signUpMarkup=` <div class="mask">

<div class="signup">
<div class="title">
<span>Get started</span>
<div class="close-btn"><i class="fa fa-times" aria-hidden="true"></i></div>
</div>
<form>
    <label for="signup-name">Name</label>
    <input id='signup-name' type="text" placeholder="name" required>
    
    <label for="signup-username">Username</label>
    <input id='signup-username' type="text" placeholder="username" required>
    
    <label for="signup-pass">Password</label>
    <input id='signup-pass' type="password" placeholder="password" required>
    
    <label for='signup-pass-confirm'>Confirm Passord</label>
    <input id='signup-pass-confirm' type="password" placeholder="confirm password" required>
    
    <button>signup</button>
    </form>
</div>
</div>`;

signInBtn.addEventListener('click', (e) => {

    document.body.innerHTML += signInMarkup;

})

signUpBtn.addEventListener('click',()=>{
    document.body.innerHTML +=signUpMarkup;
})

closeBtn.addEventListener('click',(e)=>{
    const formmm =document.querySelector('.mask');
console.log(formmm)
    //document.body.remove(form);
}) 