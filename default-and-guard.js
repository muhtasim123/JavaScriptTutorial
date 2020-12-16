let currentUser = {

};

function checkAdmin(){

    let userRole = currentUser && currentUser.role;
    if(userRole == "admin"){
        console.log("yay");
    } else {
        console.log("big sad");
    }
}

checkAdmin();

let userInput = {
    url:"this is user defined not default"

}

let url = userInput.url || "database_url";

let username = userInput.username || "postgres";

let password = userInput.password || "password";

console.log(url, username, password);