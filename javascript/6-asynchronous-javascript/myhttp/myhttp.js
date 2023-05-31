

class myHTTP{
    // Make an get request
    get(url){
        return new Promise(function(resolve, reject){
            fetch(url)
            .then(function(res){
                return res.json()
            }).then(function(data){
                resolve(data);
            }).catch(function(err){
                reject(err);
            })
        })
    }


    // Create a user

    post(url, data){
        return new Promise(function(resolve, reject){
            fetch(url, {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(data)
            })
            .then(function(res){
                return res.json()
            }).then(function(data){
                resolve(data)
            }).catch(function(err){
                reject(err);
            })
        })
    }

    // Update User
    put(url, data){
        return new Promise(function(resolve, reject){
            fetch(url, {
                method: "PUT",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(data)
            })
            .then(function(res){
                return res.json()
            }).then(function(data){
                resolve(data)
            }).catch(function(err){
                reject(err);
            })
        })
    }

    // Update User
    delete(url){
        return new Promise(function(resolve, reject){
            fetch(url, {
                method: "DELETE",
                headers: {
                    "Content-type": "application/json"
                }
            })
            .then(function(res){
                return res.json()
            }).then(function(data){
                resolve("Resource Deleted...")
            }).catch(function(err){
                reject(err);
            })
        })
    }
}