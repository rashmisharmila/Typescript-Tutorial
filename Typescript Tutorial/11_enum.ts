//===================================
//ENUM

enum Roles{
    ADMIN,
    USER,
    MANAGER,
    SELLER
}

let myRole:Roles=Roles.ADMIN;

function sendMessage(role:Roles){
    switch (role){
        case Roles.ADMIN:
            console.log("Hello Admin");
            break;
        case  Roles.MANAGER:
            console.log("Hello Manage");
            break;
        case Roles.SELLER:
            console.log("Hello Seller");
            break;
    }
}
sendMessage(Roles.SELLER);
