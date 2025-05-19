document.addEventListener('DOMContentLoaded', function() {
    loadComments(); // Sayfa yüklenince yorumları getir

    const commentForm = document.getElementById('commentForm');
    if (commentForm) {
        commentForm.addEventListener('submit', function(e) {
            e.preventDefault();
            submitComment();
        });
    }
});

function submitComment() {
    const userName = document.getElementById('userName').value.trim();
    const userComment = document.getElementById('userComment').value.trim();
    const userRating = document.querySelector('input[name="userRating"]:checked');

    if (!userName || !userComment || !userRating) {
        alert("Lütfen tüm alanları doldurun!");
        return;
    }

    const comment = {
        name: userName,
        comment: userComment,
        rating: userRating.value,
        time: new Date().toLocaleString('tr-TR')
    };

    let comments = JSON.parse(localStorage.getItem('comments')) || [];
    comments.push(comment);
    localStorage.setItem('comments', JSON.stringify(comments));

    addCommentToUI(comment);

    // Formu sıfırla
    document.getElementById('commentForm').reset();
}

function loadComments() {
    const comments = JSON.parse(localStorage.getItem('comments')) || [];
    comments.forEach(comment => addCommentToUI(comment));
}

function addCommentToUI(comment) {
    const commentsContainer = document.getElementById('commentsContainer');

    const commentDiv = document.createElement('div');
    commentDiv.className = 'comment-box';
    commentDiv.innerHTML = `
        <div><strong>${comment.name}</strong> - <small>${comment.time}</small></div>
        <div>${'⭐'.repeat(comment.rating)}</div>
        <p>${comment.comment}</p>
        <hr>
    `;
    commentsContainer.prepend(commentDiv);
}
