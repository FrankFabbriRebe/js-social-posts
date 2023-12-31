const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];

// selezione elementi html
const container = document.getElementById("container");

// creazione post in base al numero oggetti contenuti nell'array posts
posts.forEach((obj) => {
   
    container.innerHTML += 

    `<div class="post">
        <div class="post__header">
            <div class="post-meta">                    
                <div class="post-meta__icon">
                    <img class="profile-pic" src="${obj.author.image}" alt="Phil Mangione">                    
                </div>
                <div class="post-meta__data">
                    <div class="post-meta__author">${obj.author.name}</div>
                    <div class="post-meta__time">${obj.created}</div>
                </div>                    
            </div>
        </div>
        <div class="post__text">${obj.content}</div>
        <div class="post__image">
            <img src="${obj.media}" alt="">
        </div>
        <div class="post__footer">
            <div class="likes js-likes">
                <div class="likes__cta">
                    <a class="like-button  js-like-button" href="#" data-postid="${obj.id}">
                        <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                        <span class="like-button__label">Mi Piace</span>
                    </a>
                </div>
                <div class="likes__counter">
                    Piace a <b id="like-counter-${obj.id}" class="js-likes-counter">${obj.likes}</b> persone
                </div>
            </div> 
        </div>            
    </div>`

});

// selezione like button
const arrayLikeButton = document.getElementsByClassName("js-like-button");

for (const likeButton of arrayLikeButton) {
    likeButton.addEventListener("click", function() {
        // previene il refresh della pagina d ogni click
        event.preventDefault(); 
        // Aggiungi il colore al testo del bottone
        likeButton.classList.add("color");

        // Implementa la logica per incrementare il contatore dei likes
        const postId = likeButton.getAttribute("data-postid");
        // console.log(postId);
        const likeCounter = document.getElementById(`like-counter-${postId}`);
        // console.log(likeCounter);
        const currentLikes = parseInt(likeCounter.innerText);
        likeCounter.innerText = currentLikes + 1;
        console.log(likeCounter);

        const likedPostIds = [];
        if (!likedPostIds.includes(postId)) {
            likedPostIds.push(postId);
        }

        // Stampa il secondo array (puoi rimuovere questo passaggio una volta che hai verificato che funziona)
        console.log("Liked Post IDs:", likedPostIds);
               
    });
}