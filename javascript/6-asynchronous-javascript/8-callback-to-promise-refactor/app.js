const posts = [
    {title:"post one", body:"this is a post one"},
    {title:"post two", body:"this is a post two"}
];


function createPost(post){

    return new Promise(function(resolve, reject){
        setTimeout(function() {

            let error = false;

            if(!error){
                posts.push(post);
                resolve();
            }else {
                reject("Something went worng");
            }
            
        }, 2000)
    })
    
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

function showError(error){
    const h4 = document.createElement("h4");
    h4.innerHTML = `<strong>${error}</strong>`;
    document.getElementById("posts").appendChild(h4);
}

createPost({title:"post three", body:"this is a post three"})
.then(getPosts)
.catch(showError);
