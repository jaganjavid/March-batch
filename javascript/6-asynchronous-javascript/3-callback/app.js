// function toggle(e){
//     console.log(e)
//     e.target.classList.toggle("danger");
// }

// document.querySelector(".btn").addEventListener("click", toggle)


const posts = [
    {title:"post one", body:"this is a post one"},
    {title:"post two", body:"this is a post two"}
];


function createPost(post, callback){
    setTimeout(function() {
        posts.push(post);
        callback();
    }, 2000)
}


function getPosts(){
    setTimeout(function(){
        posts.forEach(function(post){
            const div = document.createElement("div");
            div.innerHTML = `<strong>
               ${post.title} - ${post.body}
            </strong>`;

            document.querySelector("#posts").appendChild(div);
        })
    }, 1000)
}

createPost({title:"post three", body:"this is a post three"}, getPosts);

// getPosts();