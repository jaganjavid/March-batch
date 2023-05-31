// Callback hell is a phenomenon that happens 
// when multiple callbacks are nested on top of each other.


function getData(endpoint, cb){
    const xhr = new XMLHttpRequest;

    xhr.open("GET", endpoint, true);

    xhr.onload = function(){
        if(this.status === 200){
            const result = JSON.parse(this.responseText);
            // console.log(result);
            cb(result);
        }
    }

    setTimeout(() => {
        xhr.send()
    }, Math.floor(Math.random() * 3000) + 1000);
}   


getData("./alluser.json", function(data){
    console.log(data);
    getData("./men.json", function(data){
        console.log(data);
        getData("./women.json", function(data){
            console.log(data);
        });
    });
});




