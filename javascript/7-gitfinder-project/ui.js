class UI{
    constructor(){
        this.profile = document.getElementById("profile");
    }

    // Display profile in UI

    showProfile(user){
       this.profile.innerHTML = `
       <div class="card card-body mb-3">
            <div class="row">
                <div class="col-md-3">
                    <img class="img-fluid mb-2" src="${user.avatar_url}" alt="">
                    <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block">View Profile</a>
                </div>
                <div class="col-md-9">
                    <span class="badge bg-success">Public Repos : ${user.public_repos}</span>
                    <span class="badge bg-secondary">Public Gists : ${user.public_gists}</span>
                    <span class="badge bg-info">Followers : ${user.followers}</span>
                    <span class="badge bg-warning">Following : ${user.following}</span>
                    <div class="mb-3"></div>
                    <ul class="list-group">
                        <li class="list-group-item">Company : ${user.company}</li>
                        <li class="list-group-item">Location : ${user.location}</li>
                        <li class="list-group-item">Email : ${user.email}</li>
                        <li class="list-group-item">type : ${user.type}</li>
                    </ul>
                </div>
            </div>
        </div>
       `
    }
}