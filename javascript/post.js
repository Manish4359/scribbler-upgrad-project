const postEdit = document.querySelector('.edit-post');
const postSave = document.querySelector('.post-save');

const description = document.querySelector('.post-description');
const title = document.querySelector('.post-title');

postEdit.addEventListener('click', function () {

    this.classList.remove('active');
    postSave.classList.add('active');

    description.toggleAttribute('contenteditable')
    title.toggleAttribute('contenteditable')

    description.classList.add('edit')
    title.classList.add('edit')

   
});


postSave.addEventListener('click', function () {

    this.classList.remove('active');
    postEdit.classList.add('active');

    let titleText = title.textContent;

    if(titleText.split(':')[0]==='UPDATED'){
        title.textContent = titleText;

    }else{
        titleText = `UPDATED: ${titleText}`;
    }

    title.textContent=titleText;

    description.toggleAttribute('contenteditable')
    title.toggleAttribute('contenteditable')

    description.classList.remove('edit')
    title.classList.remove('edit')
   
});



const commentBtn = document.querySelector('.add-comment');
const commentContainer = document.querySelector('.comment-container');

commentBtn.addEventListener('click', (e) => {

    
    const commentText = document.querySelector('.user-comment').value;
    
    if(commentText===''){
        return;
    }
    document.querySelector('.comment-container').style.display='flex';

    const comment = `<p>${commentText}</p>`;

    commentContainer.insertAdjacentHTML('afterbegin', comment);

    document.querySelector('.user-comment').value = "";
})




const likeBtn = document.querySelector('.like-btn');
const text = document.querySelector('.like-count');


likeBtn.addEventListener('click', (e) => {

    console.log();
    const likeIcon = e.target.closest('.like-btn').firstChild;
    likeIcon.classList.remove('fa-thumbs-o-up')
    likeIcon.classList.add('fa-thumbs-up')

    likeBtn.textContent = `Liked!`;
    text.textContent = `1 person likes this!`;

   
})