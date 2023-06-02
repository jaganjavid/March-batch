const github = new Github();

const ui = new UI();


// Get Input value

const input = document.querySelector("#searchUser");

const form = document.querySelector("#gitForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const user = input.value;

  if(user !== ""){
    github.getUser(user).then(data => {
        if(data.profile.message === "Not Found"){
            alert("There is no user with this username")
        } else {
            ui.showProfile(data.profile);
        }
    });
  }


})

