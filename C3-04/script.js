const likeButton = document.querySelector('.like-button-js');

likeButton.addEventListener('click', () => {
    if (likeButton.classList.contains('liked')) {
        likeButton.classList.remove('liked');
        likeButton.textContent = '👍 いいね！';
    } else {
        likeButton.classList.add('liked');
        likeButton.textContent = '👍 いいね済み';
    }
});