const postEdit = document.querySelector('.edit-post');
const postSave = document.querySelector('.post-save');

postEdit.addEventListener('click', function () {

    this.classList.remove('active');
    postSave.classList.add('active');

    const description = document.querySelector('.description');
    const descriptionEdit = document.getElementById('description-edit');
    const text = description.textContent;
    description.style.display = 'none';
    console.log(text);

    descriptionEdit.style.display = 'block';
    descriptionEdit.textContent = text;

    const title = document.querySelector('.post-title');
    const titleEdit = document.getElementById('post-title-edit');

    const titleText = title.textContent;
    title.style.display = 'none';
    console.log(titleText);

    titleEdit.style.display = 'block';
    titleEdit.value = titleText;
});


postSave.addEventListener('click', function () {

    this.classList.remove('active');
    postEdit.classList.add('active');

    const description = document.querySelector('.description');
    const descriptionEdit = document.getElementById('description-edit');
    const text = descriptionEdit.value;
    descriptionEdit.style.display = 'none';
    console.log(text);

    description.style.display = 'block';
    description.textContent = text;

    const title = document.querySelector('.post-title');
    const titleEdit = document.getElementById('post-title-edit');

    const titleText = titleEdit.value;
    titleEdit.style.display = 'none';
    console.log(titleText);

    title.style.display = 'block';
    title.textContent = titleText;
});



const commentBtn=document.querySelector('.add-comment');
const commentContainer=document.querySelector('.comment-container');

commentBtn.addEventListener('click',(e)=>{
    
    const commentText=document.querySelector('.user-comment').value;
    
    const comment=`<p>${commentText}</p>`;
    
    commentContainer.insertAdjacentHTML('afterbegin',comment);
    
    document.querySelector('.user-comment').value="";
})


/*-----------like-------------*/


const likeBtn=document.querySelector('.like-btn');
const text=document.querySelector('.like-count');

//let count=0;

likeBtn.addEventListener('click',(e)=>{

    console.log();
    const likeIcon=e.target.closest('.like-btn').firstChild;
    likeIcon.classList.remove('fa-thumbs-o-up')
    //console.log(likeIcon);
    likeIcon.classList.add('fa-thumbs-up')
    //console.log(likeIcon);
    
    //console.log(likeBtn.innerHTML)
    likeBtn.textContent=`Liked!`;
    //likeBtn.insertAdjacentHTML('afterbegin','<h1>65</h1>')
    text.textContent=`1 person likes this!`;
    
   /* count++;
    if(count==1){
    }
    else{
        text.textContent=`${count} people have liked this!`;
    }
    */
})