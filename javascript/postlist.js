const postsContainer = document.querySelector('.posts-container');

renderPosts();

postsContainer.innerHTML = postLists;

const postDelete = document.querySelectorAll('.post-delete-icon');

postDelete.forEach((post) => {

    post.addEventListener('click', (e) => {

        const deleteModal = document.querySelector('.delete-modal');
        deleteModal.style.display = 'block';

        document.querySelector('.option-yes').onclick = (e) => {
            console.log(e);
            deleteModal.style.display = '';
            post.closest('.post').remove();

        }

        document.querySelector('.option-no').onclick = (e) => {
            console.log(e);
            deleteModal.style.display = '';

        }

    })
})

