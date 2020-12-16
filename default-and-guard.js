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