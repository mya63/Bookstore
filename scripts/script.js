function renderBook() {
  let bookRef = document.getElementById("book-section");
  bookRef.innerHTML = "";
  for (let i = 0; i < books.length; i++) {
    bookRef.innerHTML += bookTemplate(i);
    renderHearts(i);
    renderCommentSection(i);
  }
}

function renderCommentSection(i) {
  let commentRef = document.getElementsByClassName("comment-section")[i];
  for (let j = 0; j < books[i].comments.length; j++) {
    commentRef.innerHTML += commentTemplate(i, j);
  }
}

function renderHearts(i) {
  let liked = books[i].liked;
  document.getElementById(`liked${i}`).style.display = liked ? "inline" : "none";
  document.getElementById(`not-liked${i}`).style.display = liked ? "none" : "inline";
}

function toggleLiked(i) {
  books[i].liked = true;
  books[i].likes++;
  renderBook();
}

function toggleUnLiked(i) {
  books[i].liked = false;
  books[i].likes--;
  renderBook();
}

function addComment(i) {
  const inputRef = document.getElementById(`input${i}`);
  const value = inputRef.value.trim();
  if (value) {
    books[i].comments.push({ name: "Gast", comment: value });
    inputRef.value = "";
    renderBook();
  }
}
