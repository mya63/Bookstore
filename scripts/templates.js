function bookTemplate(i) {
  return `
    <div class="book-section">
      <h2>${books[i].name}</h2>
      <div class="book-img">
        <img src="${books[i].image}" alt="${books[i].name}">
      </div>
      <div class="price-likes">
        <p>💰 ${books[i].price} €</p>
        <p>${books[i].likes} Likes 
          <span id="not-liked${i}" onclick="toggleLiked(${i})" style="cursor:pointer;">🤍</span>
          <span id="liked${i}" onclick="toggleUnLiked(${i})" style="cursor:pointer;">❤️</span>
        </p>
      </div>
      <p>Autor: ${books[i].author}</p>
      <p>Jahr: ${books[i].publishedYear}</p>
      <p>Genre: ${books[i].genre}</p>
      <h4>Kommentare</h4>
      <div class="comment-section"></div>
      <div class="input-line">
        <input type="text" id="input${i}" placeholder="Kommentar hinzufügen">
        <button onclick="addComment(${i})">Senden</button>
      </div>
    </div>
  `;
}

function commentTemplate(i, j) {
  return `<p><strong>${books[i].comments[j].name}:</strong> ${books[i].comments[j].comment}</p>`;
}
