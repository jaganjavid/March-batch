

class MyHTTP{


    // Make an HTTP GET Request

    async get(url){
        const response = await fetch(url);
        const resData = await response.json();

        return resData;
    }

    // Create User

    async post(url, data){
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-type": "apllication/json"
            },
            body: JSON.stringify(data)
        })

        const resData = await response.json();

        return resData;
    }

    // Upadte User

    async update(url, data){
        const response = await fetch(url, {
            method: "PUT",
            headers: {
                "Content-type": "apllication/json"
            },
            body: JSON.stringify(data)
        })

        const resData = await response.json();

        return resData;
    }
    
    // Upadte User

    async delete(url){
        const response = await fetch(url, {
            method: "DELETE",
            headers: {
                "Content-type": "apllication/json"
            }
        })

        const resData = await "Resource Deleted";

        return resData;
    }
}