class Github {
    constructor(){
        this.client_id = "8e29fa89e16863967221";
        this.client_secret = "8f81698de3a9bb5320fd52a403bfa4cef9c7509d"
    }

    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();


        return {
            profile
        }
    }
}
